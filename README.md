# Amelia · Facturador electrónico — Sitio corporativo

Sitio web corporativo de **Amelia**, el facturador electrónico de **Begroup EC** para Ecuador.
Emite, autoriza y envía comprobantes electrónicos (facturas, retenciones, notas de crédito/débito,
liquidaciones de compra y guías de remisión) autorizados por el SRI, desde web, iOS, Android y Mac.

> Demo desarrollado por [Socket Studio](https://socket-studio.com) — landing premium orientada a conversión.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (design tokens propios: paleta teal + navy)
- **Framer Motion 11** (micro-interacciones y reveal en scroll)
- **lucide-react** (iconografía)
- Tipografías: *Plus Jakarta Sans* (display) + *Inter* (texto)

## Características

- 100% responsive (mobile-first) y accesible (WCAG 2.1 AA: foco visible, skip-link, `prefers-reduced-motion`, etiquetas ARIA).
- SEO técnico: meta tags, Open Graph, Twitter Card y JSON-LD (`SoftwareApplication`).
- Mockup de producto construido en código — sin imágenes de stock ni generadas por IA.
- Secciones: Hero, cifras, documentos SRI, beneficios, cómo funciona, multiplataforma,
  planes, programa de distribuidores (white-label), testimonios, FAQ, CTA y contacto.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción → dist/
npm run preview  # previsualiza el build
```

## Despliegue

Build estático servido bajo la ruta `base` `/demo-aplicaciones/facturador-amelia/`
(ver `vite.config.js`). Producción:
**https://socket-studio.com/demo-aplicaciones/facturador-amelia/**

## Estructura

```
src/
├─ components/   Header, Hero, InvoiceMock, TrustBar, Documentos, Beneficios,
│                ComoFunciona, Plataformas, Precios, Distribuidores, Testimonios,
│                FAQ, CTA, Contacto, Footer, Logo, Reveal
├─ data.js       Contenido editorial (navegación, documentos, planes, FAQ, etc.)
├─ App.jsx       Composición de secciones
├─ main.jsx
└─ index.css     Tokens + utilidades Tailwind
```
