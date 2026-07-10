#!/usr/bin/env python3
"""
orel_ai.py — Asistente de pruebas para OrelExpress usando la API de Claude.

Corre POR FUERA de Claude Code (esta terminal) para no gastar tokens de esa
interfaz. Usa tu propia API key de Anthropic (una llamada = un cobro directo a
tu cuenta de la API, mucho mas barato que iterar dentro de Claude Code).

Uso rapido:
    python orel_ai.py ask "por que fallaria el RIDE de una nota de debito?"
    python orel_ai.py xml ruta/al/comprobante.xml
    python orel_ai.py xml ruta/al/comprobante.xml "revisa los impuestos"
    python orel_ai.py explain error.log
    echo "stacktrace..." | python orel_ai.py explain -
    python orel_ai.py gen "corrige X / agrega modulo Y / crea pruebas" Archivo.java
    python orel_ai.py review Archivo1.java Archivo2.java   # revision de codigo
    python orel_ai.py doc Archivo.java > docs/Archivo.md   # documenta cada funcion
    python orel_ai.py chat        # modo conversacion interactiva

Flujo de trabajo (reduce tokens de Claude Code):
    1. `gen` genera/edita archivos en disco (tu API de Claude).
    2. Tu (o Claude Code) revisas el diff y corres las pruebas.
    3. Si las pruebas pasan, se commitea y sube a git.

Configuracion (tools/claude-helper/.env):
    ANTHROPIC_API_KEY=sk-ant-...          (obligatorio)
    OREL_AI_MODEL=claude-opus-4-8         (opcional; ver README para modelos)
    OREL_AI_MAX_TOKENS=8000               (opcional; respuestas de texto)
    OREL_AI_GEN_MAX_TOKENS=32000          (opcional; generacion de codigo)
"""
from __future__ import annotations

import os
import re
import sys
from pathlib import Path

# La consola de Windows suele ser cp1252 y no puede imprimir algunos caracteres
# Unicode que emite el modelo (flechas, guiones largos, etc.). Forzamos UTF-8
# con reemplazo para no crashear al hacer streaming.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="replace")  # type: ignore[attr-defined]
    except (AttributeError, ValueError):
        pass

# ---------------------------------------------------------------------------
# Carga de .env (sin dependencias extra: parser minimo)
# ---------------------------------------------------------------------------
def _load_dotenv() -> None:
    env_path = Path(__file__).with_name(".env")
    if not env_path.exists():
        return
    for raw in env_path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, val = line.partition("=")
        key = key.strip()
        val = val.strip().strip('"').strip("'")
        # No sobreescribir variables ya presentes en el entorno del sistema.
        os.environ.setdefault(key, val)


_load_dotenv()

try:
    from anthropic import Anthropic
except ImportError:
    sys.exit(
        "Falta el paquete 'anthropic'. Instalalo con:\n"
        "    python -m pip install -r tools/claude-helper/requirements.txt"
    )

# ---------------------------------------------------------------------------
# Configuracion
# ---------------------------------------------------------------------------
MODEL = os.environ.get("OREL_AI_MODEL", "claude-opus-4-8")
MAX_TOKENS = int(os.environ.get("OREL_AI_MAX_TOKENS", "8000"))
# La generacion de codigo produce archivos completos: necesita mas espacio.
GEN_MAX_TOKENS = int(os.environ.get("OREL_AI_GEN_MAX_TOKENS", "32000"))

# Raiz del repo: este script vive en <raiz>/tools/claude-helper/amelia_ai.py
REPO_ROOT = Path(__file__).resolve().parents[2]

# Formato con el que el modelo entrega archivos para escribir en disco.
_FILE_RE = re.compile(r"<<<FILE\s+(.+?)>>>\r?\n(.*?)\r?\n<<<END>>>", re.DOTALL)

SYSTEM = (
    "Eres un ingeniero frontend senior del sitio de marketing de Amelia "
    "(facturador/plataforma del SRI de Ecuador, producto de Begroup). "
    "Stack: React 18 + Vite + Tailwind 3 (tokens custom: teal=azul #4154F1, navy, "
    "coral=cian, ink, surface; clases utilitarias .container-xl, .eyebrow, "
    ".btn-primary, .btn-ghost) + Framer Motion 11 + lucide-react. "
    "Estilo de la casa: secciones <section id> con py-24 lg:py-28, encabezado con "
    "eyebrow + h2 font-display extrabold text-navy + parrafo text-ink-soft, "
    "tarjetas rounded-3xl border-surface-line shadow-soft, animaciones con el "
    "componente Reveal/Stagger/StaggerItem existente, easing [0.16,1,0.3,1]. "
    "Reglas duras: HTML semantico y accesible (WCAG 2.1 AA, aria en tabs, focus "
    "visible), sin emojis, sin imagenes stock/IA, sin gradient-text ni glassmorphism, "
    "copy en espanol de Ecuador, codigo completo sin placeholders ni '...'. "
    "Responde solo con codigo en el formato pedido."
)


def _client() -> Anthropic:
    if not os.environ.get("ANTHROPIC_API_KEY"):
        sys.exit(
            "No hay ANTHROPIC_API_KEY. Ponla en tools/claude-helper/.env\n"
            "(copia .env.example a .env y pega tu key)."
        )
    return Anthropic()


def _stream_message(user_content: str, echo, max_tokens: int = MAX_TOKENS) -> str:
    """Envía la consulta y devuelve el texto completo. `echo` (stdout/stderr o
    None) recibe el streaming en vivo. Los tokens usados van siempre a stderr."""
    client = _client()
    partes: list[str] = []
    try:
        with client.messages.stream(
            model=MODEL,
            max_tokens=max_tokens,
            system=SYSTEM,
            thinking={"type": "adaptive"},
            messages=[{"role": "user", "content": user_content}],
        ) as stream:
            for text in stream.text_stream:
                partes.append(text)
                if echo is not None:
                    echo.write(text)
                    echo.flush()
            final = stream.get_final_message()
        if echo is not None:
            echo.write("\n")
        u = final.usage
        sys.stderr.write(
            f"\n[modelo={final.model} in={u.input_tokens} out={u.output_tokens}]\n"
        )
    except Exception as exc:  # noqa: BLE001 - CLI: mostrar el error tal cual
        sys.exit(f"\nError llamando a la API: {exc}")
    return "".join(partes)


def _run(user_content: str) -> None:
    """Consulta simple: streaming de la respuesta a stdout."""
    _stream_message(user_content, echo=sys.stdout)


def _write_generated(texto: str) -> list[tuple[str, int]]:
    """Escribe en disco los bloques <<<FILE ...>>>...<<<END>>>. Devuelve
    (ruta, lineas) por archivo. Bloquea rutas fuera del repo y sensibles."""
    escritos: list[tuple[str, int]] = []
    raiz = REPO_ROOT.resolve()
    for m in _FILE_RE.finditer(texto):
        rel = m.group(1).strip().replace("\\", "/")
        contenido = m.group(2)
        destino = (raiz / rel).resolve()
        if not str(destino).startswith(str(raiz)):
            sys.stderr.write(f"  OMITIDO (fuera del repo): {rel}\n")
            continue
        partes_bajas = rel.lower().split("/")
        if ".git" in partes_bajas or rel.lower().endswith(".env"):
            sys.stderr.write(f"  OMITIDO (ruta sensible): {rel}\n")
            continue
        destino.parent.mkdir(parents=True, exist_ok=True)
        # El modelo emite \n; en Windows Git normaliza a CRLF en el commit.
        destino.write_text(contenido, encoding="utf-8", newline="\n")
        escritos.append((rel, contenido.count("\n") + 1))
    return escritos


def _read_arg_or_stdin(value: str) -> str:
    """'-' lee de stdin; una ruta existente lee el archivo; si no, es texto literal."""
    if value == "-":
        return sys.stdin.read()
    p = Path(value)
    if p.exists() and p.is_file():
        return p.read_text(encoding="utf-8", errors="replace")
    return value


# ---------------------------------------------------------------------------
# Comandos
# ---------------------------------------------------------------------------
def cmd_ask(args: list[str]) -> None:
    if not args:
        sys.exit('Uso: python orel_ai.py ask "tu pregunta"')
    _run(" ".join(args))


def cmd_xml(args: list[str]) -> None:
    if not args:
        sys.exit("Uso: python orel_ai.py xml <archivo.xml> [instruccion opcional]")
    xml_text = _read_arg_or_stdin(args[0])
    extra = " ".join(args[1:]) or (
        "Analiza este XML del SRI: identifica tipo y version de comprobante, "
        "valida campos obligatorios, y senala cualquier cosa que pueda romper la "
        "generacion del RIDE o la importacion en OrelExpress."
    )
    _run(f"{extra}\n\n<xml>\n{xml_text}\n</xml>")


def cmd_explain(args: list[str]) -> None:
    if not args:
        sys.exit("Uso: python orel_ai.py explain <archivo.log | - | texto>")
    log_text = _read_arg_or_stdin(args[0])
    _run(
        "Explica esta salida/error de OrelExpress y propone como reproducirlo y "
        "corregirlo:\n\n"
        f"<log>\n{log_text}\n</log>"
    )


def cmd_gen(args: list[str]) -> None:
    """Genera/edita archivos del proyecto a partir de una instrucción.
    El modelo devuelve archivos completos y el helper los ESCRIBE en disco;
    luego tú (o Claude Code) revisas el diff, corres las pruebas y commiteas."""
    if not args:
        sys.exit(
            'Uso: python orel_ai.py gen "<instruccion>" [archivo_contexto ...]\n'
            "El primer argumento es la instruccion; los siguientes son archivos "
            "que se pasan como contexto (codigo actual a modificar o de referencia)."
        )
    instruccion = args[0]
    contexto = []
    for ruta in args[1:]:
        contexto.append(f"### {ruta}\n<codigo>\n{_read_arg_or_stdin(ruta)}\n</codigo>")

    protocolo = (
        "Implementa el cambio solicitado en el sitio web de Amelia (React+Vite+Tailwind+"
        "Framer Motion). Devuelve ÚNICAMENTE los archivos que haya que "
        "crear o reemplazar, cada uno EXACTAMENTE en este formato:\n"
        "<<<FILE ruta/relativa/desde/la/raiz/del/repo>>>\n"
        "<contenido COMPLETO del archivo>\n"
        "<<<END>>>\n\n"
        "Reglas estrictas:\n"
        "- Rutas relativas a la raíz del repo (p.ej. src/main/java/com/socket/...).\n"
        "- Contenido completo del archivo, nunca fragmentos ni '...'.\n"
        "- Mantén el estilo, imports y convenciones del código existente.\n"
        "- No escribas nada fuera de los bloques, salvo, al final, una sección que "
        "empiece con 'NOTAS:' con supuestos, pasos manuales (SQL, wiring) o pruebas "
        "recomendadas."
    )
    user = f"{protocolo}\n\nINSTRUCCIÓN:\n{instruccion}"
    if contexto:
        user += "\n\nCONTEXTO (archivos actuales / de referencia):\n" + "\n\n".join(contexto)

    sys.stderr.write("Generando (streaming a stderr)...\n")
    texto = _stream_message(user, echo=sys.stderr, max_tokens=GEN_MAX_TOKENS)
    escritos = _write_generated(texto)
    if not escritos:
        sys.exit(
            "\nEl modelo no devolvió archivos en el formato <<<FILE ...>>>. "
            "Revisa la salida de arriba; puedes reintentar afinando la instrucción."
        )
    print("\n=== Archivos escritos ===")
    for rel, n in escritos:
        print(f"  {rel}  ({n} líneas)")
    notas = texto.split("NOTAS:", 1)
    if len(notas) > 1:
        print("\n=== NOTAS del modelo ===\n" + notas[1].strip())
    print("\nRevisa el diff (git diff), compila/pruébalo y commitea si está OK.")


def cmd_doc(args: list[str]) -> None:
    """Documenta cada funcion/metodo de un archivo. Redirige la salida a un .md."""
    if not args:
        sys.exit("Uso: python orel_ai.py doc <archivo> [instruccion]  (redirige a .md)")
    ruta = args[0]
    codigo = _read_arg_or_stdin(ruta)
    extra = " ".join(args[1:])
    _run(
        "Genera documentacion tecnica en Markdown para el siguiente archivo de "
        "OrelExpress. Empieza con un encabezado `# <nombre>` y una descripcion "
        "breve de la clase y su responsabilidad. Luego, para CADA funcion/metodo "
        "(incluye constructores y metodos privados) documenta: firma, proposito, "
        "parametros, valor de retorno, efectos secundarios (BD, red, archivos) y "
        "logica no obvia. No repitas el codigo completo; solo documentalo. "
        "Se preciso y conciso." + (f" {extra}" if extra else "") + "\n\n"
        f"Archivo: {ruta}\n\n<codigo>\n{codigo}\n</codigo>"
    )


def cmd_review(args: list[str]) -> None:
    """Revision de codigo de uno o varios archivos (bugs, riesgos, mejoras)."""
    if not args:
        sys.exit("Uso: python orel_ai.py review <archivo1> [archivo2 ...]")
    bloques = []
    for ruta in args:
        contenido = _read_arg_or_stdin(ruta)
        bloques.append(f"### {ruta}\n<codigo>\n{contenido}\n</codigo>")
    _run(
        "Haz una revision de codigo de estos archivos de OrelExpress. Enfocate en: "
        "correctitud (bugs, casos borde), seguridad, y mejoras concretas. Ordena "
        "los hallazgos por severidad e indica archivo y funcion en cada uno. "
        "Se breve y accionable.\n\n" + "\n\n".join(bloques)
    )


def cmd_chat(_args: list[str]) -> None:
    """Conversacion interactiva multiturno (mantiene contexto)."""
    client = _client()
    history: list[dict] = []
    print("Modo chat de OrelExpress. Escribe 'salir' para terminar.\n")
    while True:
        try:
            user = input("> ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            break
        if user.lower() in {"salir", "exit", "quit"}:
            break
        if not user:
            continue
        history.append({"role": "user", "content": user})
        try:
            with client.messages.stream(
                model=MODEL,
                max_tokens=MAX_TOKENS,
                system=SYSTEM,
                thinking={"type": "adaptive"},
                messages=history,
            ) as stream:
                for text in stream.text_stream:
                    print(text, end="", flush=True)
                final = stream.get_final_message()
            print("\n")
            # Guardar la respuesta completa (incluye bloques de thinking) para
            # mantener el hilo valido en el siguiente turno.
            history.append({"role": "assistant", "content": final.content})
        except Exception as exc:  # noqa: BLE001
            print(f"\nError: {exc}\n")
            history.pop()  # descartar el turno fallido


COMMANDS = {
    "ask": cmd_ask,
    "xml": cmd_xml,
    "explain": cmd_explain,
    "gen": cmd_gen,
    "doc": cmd_doc,
    "review": cmd_review,
    "chat": cmd_chat,
}


def main() -> None:
    if len(sys.argv) < 2 or sys.argv[1] in {"-h", "--help", "help"}:
        print(__doc__)
        return
    cmd = sys.argv[1]
    handler = COMMANDS.get(cmd)
    if not handler:
        sys.exit(f"Comando desconocido: {cmd}\n{__doc__}")
    handler(sys.argv[2:])


if __name__ == "__main__":
    main()
