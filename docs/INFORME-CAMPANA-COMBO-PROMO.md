# Informe — Rediseño Campaña Combo Promo Amelia
**Fecha:** 2026-07-10 · **Sitio:** https://socket-studio.com/demo-aplicaciones/facturador-amelia/

## 1. Qué se hizo

**Problema:** la web no comunicaba qué se vende ni separaba audiencias.
**Solución:** campaña *Combo Promo Amelia* con 3 giros de negocio, cada uno con página propia,
productos, beneficios y CTA independientes (estructura inspirada en la claridad de
begroupec.com/partners, sin copiar su diseño).

| Página | URL | Enfoque |
|---|---|---|
| Landing | `/` | Selector de perfil en el Hero, video promocional, soluciones por perfil, Combo Promo, 9 módulos, 6 funciones destacadas |
| Contadores | `/contadores/` | Panel multiempresa, Declaraciones, Firmador PDF, Archivador Digital, Estados de cuenta vs facturación, Bancarización |
| Emprendedores | `/emprendedores/` | Facturador, Firma Electrónica, Página Web, Catálogo, Bloc Digital, Dashboard RIMPE/Negocio Popular |
| Empresas B2B | `/b2b/` | Facturación recurrente, Factura reembolso, Inventarios, Compras, usuarios y sucursales |

Módulos de campaña **sin Contabilidad** (decisión comercial). Nombres verificados contra el
código fuente real de AmeliaApp (RECURRENTE, Firmador, Reembolso, RIMPE, Bancarización,
Deducibles, Negocio Popular, Catálogo…).

## 2. Lighthouse (producción, después de optimizar)

| Página | Perf. móvil | Perf. desktop | Accesibilidad | Best Practices | SEO |
|---|---|---|---|---|---|
| Landing | **86** | ~93 | **100** | **100** | **100** |
| /contadores/ | — | **92** | **100** | **100** | **100** |

**Evolución performance móvil: 61 → 86** con estas correcciones aplicadas:
1. **gzip habilitado en nginx** del VPS (antes servía 294 kB de JS sin comprimir; ahora 94 kB). `/etc/nginx/conf.d/gzip.conf`.
2. **HTTP/2 habilitado** en todos los server blocks (backup en `/etc/nginx/nginx.conf.bak-http2`).
3. **Google Fonts sin bloqueo de render** (preload + `media="print"` swap) en las 4 páginas.
4. **Code-splitting**: las 16 secciones bajo el fold de la landing se cargan en un chunk diferido único (`BelowFold`), TBT 320 ms → 0 ms.
5. **Accesibilidad 97 → 100**: token `ink-muted` oscurecido a `#5A6190` (contraste ≥ 4.5:1) y aria-label del logo corregido.

**Para llegar a 95+ en móvil** (recomendación futura): pre-renderizar el HTML (SSG) — el sitio es
React CSR y el primer pintado espera al JS (~94 kB gzip). Opciones: `vite-plugin-ssr`/prerender
en build, o migrar la landing a Astro/islas. También: `Cache-Control` largo para `/assets/`
(requiere location block en nginx).

## 3. SEO

- Title/description/OG/Twitter **propios por página**, canonical por URL, `og:locale es_EC`.
- `sitemap.xml` y `robots.txt` publicados; JSON-LD `SoftwareApplication` en la landing.
- Keywords de campaña orientadas a búsqueda transaccional: *facturador SRI, firma electrónica,
  facturación recurrente, factura reembolso, bancarización SRI, declaraciones, RIMPE, negocio popular*.
- 4 URLs reales (no hash-routing) → indexables por segmento; navegación cruzada landing ↔ páginas.
- Pendiente: cuando el sitio viva en `amelia.ec`, verificar Search Console y enviar el sitemap.

## 4. Accesibilidad (WCAG 2.1 AA)

- Tabs de Soluciones con patrón WAI-ARIA completo (roles, `aria-selected`, flechas, Home/End, foco visible).
- `aria-current="page"` en la navegación de subpáginas; skip-link; `prefers-reduced-motion` respetado.
- Contraste corregido a AA en textos secundarios; Lighthouse Accessibility **100** en todas las páginas.

## 5. Neuroventa (estimado 73 → ~80/100)

**Ganancias:**
- **Relevancia por segmento** (autoselección "Soy contador/emprendedor/empresa" en el Hero): reduce carga cognitiva, el usuario ve solo lo suyo — principio de claridad > persuasión.
- **Anclaje de paquete**: los combos agrupan productos ("paga menos que por separado") sin exponer precio → cierre por WhatsApp con menos fricción.
- **Urgencia**: badge "Campaña por tiempo limitado" + barra de anuncio del Combo Promo.
- **Prueba social** por segmento: testimonio del perfil correspondiente en cada página.
- **Beneficio fiscal como gancho** (dashboard de impuesto RIMPE, deducibles): dolor real del segmento.

**Brechas pendientes:**
- Falta el **video real** (`VIDEO.youtubeId` en `src/data.js`) — el video promocional es el mayor multiplicador de conversión previsto.
- Número de WhatsApp placeholder (`593990000000` en `data.js → CONTACT`) — **cambiar antes de campaña**.
- Testimonios sin foto ni resultado medible; combos sin precio ancla visible (A/B recomendado).
- Sin contador regresivo con fecha real (la referencia de partners lo usa).

## 6. Operación

- Repo: https://github.com/SocketStudioec/facturador-amelia (main).
- Deploy: `Agencia-web/deploy_amelia.py` (SFTP, sube `dist/` completo; las 4 páginas incluidas).
- Gran parte del JSX se generó con `OrelExpress/tools/claude-helper/amelia_ai.py` (API propia,
  modelo sonnet-5, ~US$0.60 del presupuesto de US$3) y se revisó manualmente.
