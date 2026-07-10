# Amelia · Combo Promo — Sitio multipágina por giro de negocio

Sitio web de **Amelia**, la plataforma de facturación electrónica de **Begroup EC** para Ecuador.
Campaña **Combo Promo Amelia**: la landing separa 3 audiencias (Contadores, Emprendedores y
Empresas/B2B) y cada giro de negocio tiene **su propia página** con los productos, módulos,
beneficios y CTA que le convienen.

> Demo desarrollado por [Socket Studio](https://socket-studio.com) — orientado a conversión,
> con estructura inspirada en la claridad de `begroupec.com/partners` (sin copiar su diseño).

## Páginas

| Ruta | Audiencia | Enfoque |
|---|---|---|
| `/` | Todas | Hero con selector de perfil, video promocional, soluciones por perfil (tabs), Combo Promo, módulos y funciones destacadas |
| `/contadores/` | Contadores | Panel multiempresa, Declaraciones, Firmador PDF, Archivador Digital, Estados de cuenta vs facturación, Bancarización |
| `/emprendedores/` | Emprendedores | Facturador, Firma Electrónica, Página Web, Catálogo Digital, Bloc Digital, Dashboard de impuestos (RIMPE / Negocio Popular) |
| `/b2b/` | Empresas | Facturación recurrente, Factura reembolso, Inventarios, Compras, usuarios y sucursales |

Implementado como **Vite MPA** (4 entradas HTML con SEO propio por página) — funciona en
hosting estático sin rewrites. `public/sitemap.xml` y `public/robots.txt` incluidos.

## Stack

- **React 18** + **Vite 5** (multi-página: `build.rollupOptions.input`)
- **Tailwind CSS 3** (tokens de marca: azul Amelia `#4154F1`, navy, cian Begroup)
- **Framer Motion 11** (tabs animados, reveal en scroll, `prefers-reduced-motion`)
- **lucide-react** (iconografía)
- Tipografías: *Poppins* (display) + *Inter* (texto)

## Decisiones de diseño

- **Segmentación primero**: el Hero pide elegir perfil; los chips disparan el evento
  `amelia:segment` que sincroniza los tabs de la sección Soluciones.
- **Módulos de campaña** (sin Contabilidad, por decisión comercial): Facturador, Bloc Digital,
  Compras, Archivador Digital, Firmador PDF, Declaraciones, Estados de cuenta vs facturación,
  Bancarización, Inventarios.
- **Funciones destacadas**: Facturación recurrente, Factura reembolso, Gastos personales y
  deducibles, Archivador Digital, Bancarización SRI, Dashboard con impuesto generado (RIMPE
  y Negocio Popular).
- **Video promocional** (`VideoPromo`): marco 16:9 de marca con carga diferida de YouTube.
  Configura el ID en `src/data.js → VIDEO.youtubeId`; sin ID, la portada enlaza al canal de Begroup.
- **Combos sin precio público**: el precio se cierra por WhatsApp (menor fricción, CTA directo).
- Mockups construidos en código — sin imágenes de stock ni generadas por IA.
- Accesibilidad WCAG 2.1 AA: tablist con navegación por teclado, `aria-current` en la página
  activa, foco visible, skip-link.

## Desarrollo

```bash
npm install
npm run dev      # servidor local (landing + /contadores/ + /emprendedores/ + /b2b/)
npm run build    # build de producción → dist/ (4 páginas)
npm run preview  # previsualiza el build
```

## Despliegue

Build estático servido bajo la ruta `base` `/demo-aplicaciones/facturador-amelia/`
(ver `vite.config.js`). Producción:
**https://socket-studio.com/demo-aplicaciones/facturador-amelia/**

## Estructura

```
├─ index.html                 Landing (SEO campaña Combo Promo)
├─ contadores/index.html      Página Contadores (SEO propio)
├─ emprendedores/index.html   Página Emprendedores (SEO propio)
├─ b2b/index.html             Página Empresas (SEO propio)
└─ src/
   ├─ components/   Header (multipágina), Hero (selector de perfil), Soluciones (tabs),
   │                ComboPromo, Modulos, Destacados, VideoPromo, ProductGrid, Beneficios,
   │                Documentos, ComoFunciona, Calculadora, Plataformas, Precios, Partners,
   │                Testimonios, FAQ, BegroupStrip, CTA, Contacto, Footer, Logo, Reveal
   ├─ pages/        SegmentPage (página por giro, parametrizada por slug)
   ├─ data.js       Contenido editorial: SEGMENTOS, COMBOS, MODULOS, DESTACADOS, VIDEO…
   ├─ main.jsx / main-contadores.jsx / main-emprendedores.jsx / main-b2b.jsx
   └─ index.css     Tokens + utilidades Tailwind
```
