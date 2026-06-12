// Contenido del sitio — Amelia · Plataforma Contable (un producto de Begroup)
// Información derivada del código real (frontend Angular + backend Node/Express) y de begroupec.com.

export const NAV = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Facturación', href: '#facturacion' },
  { label: 'Planes', href: '#planes' },
  { label: 'Partners', href: '#partners' },
]

export const CONTACT = {
  whatsapp: '593990000000',
  whatsappLabel: '+593 99 000 0000',
  email: 'ventas@amelia.ec',
  site: 'amelia.ec',
  company: 'Begroup · Grupo Empresarial',
}

export const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/begroupec' },
  { label: 'Instagram', href: 'https://www.instagram.com/begroupec' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@begroupecu' },
  { label: 'YouTube', href: 'https://www.youtube.com/@BeGroupSAS' },
]

export const STATS = [
  { value: 'Todo‑en‑uno', label: 'factura, contabiliza y controla en un sistema' },
  { value: 'SRI', label: 'autorización de comprobantes en línea' },
  { value: 'Multiempresa', label: 'administra varias empresas y sucursales' },
  { value: 'Web · iOS · Android', label: 'la misma cuenta en todos tus dispositivos' },
]

// Módulos reales de la plataforma (derivados del código de la app)
export const MODULOS = [
  { name: 'Facturación electrónica', desc: 'Emite y autoriza comprobantes ante el SRI en segundos.', icon: 'FileText' },
  { name: 'Contabilidad', desc: 'Asientos, mayores y estados financieros siempre al día.', icon: 'BookOpen' },
  { name: 'Inventario', desc: 'Controla stock, kardex y costos por producto.', icon: 'Boxes' },
  { name: 'Cartera y cuentas por cobrar', desc: 'Gestiona deudas, abonos y conciliación de clientes.', icon: 'Wallet' },
  { name: 'Compras y ventas', desc: 'Importa tus comprobantes de compra y venta del SRI.', icon: 'ShoppingCart' },
  { name: 'Nómina', desc: 'Roles de pago y beneficios de tu equipo sin hojas de cálculo.', icon: 'Users' },
  { name: 'Conciliación bancaria', desc: 'Cruza tus movimientos de banco con tu contabilidad.', icon: 'Landmark' },
  { name: 'Facturación recurrente', desc: 'Cobros automáticos para suscripciones y servicios.', icon: 'Repeat' },
  { name: 'Reportes y dashboard', desc: 'Indicadores de tu negocio en gráficos en tiempo real.', icon: 'BarChart3' },
]

export const DOCUMENTOS = [
  { name: 'Facturas', desc: 'Emite y autoriza facturas electrónicas en segundos.', icon: 'FileText' },
  { name: 'Notas de crédito', desc: 'Devoluciones y descuentos con respaldo válido.', icon: 'FileMinus' },
  { name: 'Notas de débito', desc: 'Recargos e intereses sobre comprobantes ya emitidos.', icon: 'FilePlus' },
  { name: 'Comprobantes de retención', desc: 'Genera retenciones de IVA y renta sin errores.', icon: 'ReceiptText' },
  { name: 'Liquidaciones de compra', desc: 'Para adquisiciones a no obligados a facturar.', icon: 'ShoppingBag' },
  { name: 'Guías de remisión', desc: 'Sustenta el traslado de mercadería ante el SRI.', icon: 'Truck' },
]

// Beneficios anclados en funciones reales del backend
export const BENEFICIOS = [
  {
    title: 'Datos del cliente al instante',
    desc: 'Escribe el RUC y Amelia completa razón social y dirección consultando el padrón. Menos tipeo, cero errores.',
    icon: 'Search',
  },
  {
    title: 'Firma electrónica integrada',
    desc: 'Carga tu firma una sola vez. Amelia valida su vigencia y firma cada comprobante por ti.',
    icon: 'PenTool',
  },
  {
    title: 'RIDE + XML automáticos',
    desc: 'Cada comprobante genera su PDF y su XML listos para descargar o archivar.',
    icon: 'FileCode2',
  },
  {
    title: 'Envía por WhatsApp y correo',
    desc: 'Tu cliente recibe el comprobante al instante desde cualquier dispositivo.',
    icon: 'Send',
  },
  {
    title: 'Importa tus compras y ventas',
    desc: 'Trae tus comprobantes directo del SRI y concílialos con tu contabilidad.',
    icon: 'Download',
  },
  {
    title: 'Autorización SRI en línea',
    desc: 'Validación automática y estado de cada documento visible en todo momento.',
    icon: 'BadgeCheck',
  },
]

export const PASOS = [
  {
    step: '01',
    title: 'Crea tu cuenta',
    desc: 'Regístrate con tu RUC y carga tu firma electrónica. Sin pago anticipado.',
  },
  {
    step: '02',
    title: 'Configura tu empresa',
    desc: 'Establecimiento, punto de emisión, productos e impuestos quedan listos una sola vez.',
  },
  {
    step: '03',
    title: 'Opera tu negocio',
    desc: 'Factura, registra compras, controla inventario y lleva tu contabilidad en un mismo lugar.',
  },
  {
    step: '04',
    title: 'Mide y decide',
    desc: 'Consulta reportes y dashboards en tiempo real para tomar mejores decisiones.',
  },
]

export const PLANES = [
  {
    name: 'Emprende',
    tagline: 'Para quien empieza a facturar',
    highlight: false,
    features: [
      'Facturas y notas de crédito',
      'Firma electrónica integrada',
      'Envío por correo y WhatsApp',
      'App web + móvil',
    ],
    cta: 'Solicitar plan',
  },
  {
    name: 'Negocio',
    tagline: 'La plataforma contable completa',
    highlight: true,
    features: [
      'Todos los comprobantes electrónicos',
      'Contabilidad, inventario y cartera',
      'Compras, ventas y conciliación bancaria',
      'Reportes y dashboard en tiempo real',
      'Múltiples usuarios y establecimientos',
    ],
    cta: 'Solicitar plan',
  },
  {
    name: 'Contador',
    tagline: 'White‑label para profesionales',
    highlight: false,
    features: [
      'Administra la cartera de tus clientes',
      'Multiempresa desde un solo panel',
      'Precios preferenciales sin pago anticipado',
      'Soporte y capacitación dedicados',
    ],
    cta: 'Quiero ser partner',
  },
]

// Programa de Partners — datos reales de begroupec.com/partners
export const PARTNERS = {
  pitch: 'Vende firmas electrónicas y Amelia con el respaldo de Begroup. Define tu propio margen y crece sin invertir en inventario.',
  ventajas: [
    { icon: 'Tag', title: 'Define tu margen', desc: 'Precios preferenciales para distribuidores; tú fijas tu precio de venta.' },
    { icon: 'ShieldOff', title: 'Sin precompra ni cuotas', desc: 'Sin cuota mensual, sin costo de activación y sin compra obligatoria.' },
    { icon: 'GraduationCap', title: 'Capacitación incluida', desc: 'Aprende requisitos, vigencias y manejo comercial para vender mejor.' },
    { icon: 'Headset', title: 'Soporte y acompañamiento', desc: 'Te acompañamos para gestionar solicitudes y resolver dudas.' },
    { icon: 'Gift', title: 'Premios y campañas', desc: 'Participa en promociones, obsequios y campañas especiales.' },
    { icon: 'Globe', title: '100% digital', desc: 'Vende y atiende a tus clientes en línea, en todo el Ecuador.' },
  ],
  pasos: [
    'Regístrate con tus datos básicos',
    'Recibe la asesoría de un asesor del programa',
    'Capacítate en precios y proceso de venta',
    'Empieza a vender a tus clientes y contactos',
  ],
  requisitos: ['Ser mayor de edad', 'Cédula vigente', 'Correo electrónico', 'Número de WhatsApp'],
  incentivo: 'Distribuidores activos que venden 20–50 firmas al mes generan entre $250 y $650 de margen adicional mensual.',
}

export const FAQ = [
  {
    q: '¿Amelia es solo un facturador?',
    a: 'No. Amelia es una plataforma contable: además de la facturación electrónica incluye contabilidad, inventario, cartera, compras, ventas, nómina y conciliación bancaria en un mismo sistema.',
  },
  {
    q: '¿Los comprobantes son válidos ante el SRI?',
    a: 'Sí. Amelia genera, firma y transmite cada comprobante al SRI y conserva su número de autorización, con el estado de cada documento en tiempo real.',
  },
  {
    q: '¿Necesito firma electrónica?',
    a: 'Sí, es un requisito del SRI. La cargas una sola vez en Amelia y la plataforma valida su vigencia y firma por ti. En Begroup también puedes obtenerla con vigencia de 1 a 5 años.',
  },
  {
    q: '¿Funciona desde el celular?',
    a: 'Completamente. Amelia está en web, iOS y Android con la misma cuenta. Puedes emitir y consultar desde donde estés.',
  },
  {
    q: '¿Sirve para llevar la contabilidad de varias empresas?',
    a: 'Sí. Amelia es multiempresa: ideal para contadores que administran la cartera de varios clientes desde un solo panel, con opción white‑label.',
  },
  {
    q: '¿Tengo que pagar por adelantado?',
    a: 'No. Trabajamos sin pago anticipado y con planes pensados para tu volumen real, además de acompañamiento y capacitación.',
  },
]

export const TESTIMONIOS = [
  {
    quote: 'Antes saltaba entre el facturador, el Excel del inventario y otro sistema contable. Con Amelia todo está en un solo lugar y mi contadora lo agradece.',
    name: 'María José Andrade',
    role: 'Emprendedora · Ambato',
  },
  {
    quote: 'Manejo varias empresas y el modo multiempresa me cambió la vida. Emito, concilio bancos y saco reportes sin salir de la plataforma.',
    name: 'Daniela Vásquez',
    role: 'Contadora · Quito',
  },
  {
    quote: 'Las retenciones que antes me tomaban la tarde ahora salen en minutos y sin rebotes del SRI. El soporte de Begroup responde de verdad.',
    name: 'Luis Carrión',
    role: 'Ferretería · Cuenca',
  },
]
