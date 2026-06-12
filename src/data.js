// Contenido del sitio — Amelia (Facturador electrónico · Begroup EC)
// Datos derivados de la información pública del producto.

export const NAV = [
  { label: 'Producto', href: '#producto' },
  { label: 'Documentos', href: '#documentos' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Planes', href: '#planes' },
  { label: 'Distribuidores', href: '#distribuidores' },
]

export const CONTACT = {
  whatsapp: '593990000000',
  whatsappLabel: '+593 99 000 0000',
  email: 'ventas@amelia.ec',
  site: 'amelia.ec',
  company: 'Begroup EC',
}

export const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/begroupec' },
  { label: 'Instagram', href: 'https://www.instagram.com/begroupec' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@begroupecu' },
  { label: 'YouTube', href: 'https://www.youtube.com/@BeGroupSAS' },
]

export const STATS = [
  { value: '+5', label: 'años emitiendo en Ecuador' },
  { value: 'SRI', label: 'autorización en línea' },
  { value: '4', label: 'plataformas: web, iOS, Android, Mac' },
  { value: '24/7', label: 'comprobantes disponibles' },
]

export const DOCUMENTOS = [
  { name: 'Facturas', desc: 'Emite y autoriza facturas electrónicas en segundos.', icon: 'FileText' },
  { name: 'Notas de crédito', desc: 'Devoluciones y descuentos con respaldo válido.', icon: 'FileMinus' },
  { name: 'Notas de débito', desc: 'Recargos e intereses sobre comprobantes ya emitidos.', icon: 'FilePlus' },
  { name: 'Comprobantes de retención', desc: 'Genera retenciones de IVA y renta sin errores.', icon: 'ReceiptText' },
  { name: 'Liquidaciones de compra', desc: 'Para adquisiciones a no obligados a facturar.', icon: 'ShoppingBag' },
  { name: 'Guías de remisión', desc: 'Sustenta el traslado de mercadería ante el SRI.', icon: 'Truck' },
]

export const BENEFICIOS = [
  {
    title: 'Emite en segundos',
    desc: 'Crea, autoriza y transmite comprobantes al SRI en un mismo flujo, sin saltar entre sistemas.',
    icon: 'Zap',
  },
  {
    title: 'Envía por WhatsApp y correo',
    desc: 'Tu cliente recibe el comprobante al instante desde cualquier dispositivo.',
    icon: 'Send',
  },
  {
    title: 'Multidispositivo real',
    desc: 'La misma cuenta en web, iPhone, Android y Mac. Empieza en la oficina, termina en la calle.',
    icon: 'Smartphone',
  },
  {
    title: 'Autorización SRI en línea',
    desc: 'Validación automática y estado de cada comprobante visible en todo momento.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Reportes claros',
    desc: 'Consulta ventas, retenciones y descargas masivas listas para tu contador.',
    icon: 'BarChart3',
  },
  {
    title: 'Soporte que responde',
    desc: 'Capacitación y acompañamiento personalizado incluidos, sin costos ocultos.',
    icon: 'Headset',
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
    title: 'Configura tu negocio',
    desc: 'Establecimiento, punto de emisión y tus productos o servicios frecuentes.',
  },
  {
    step: '03',
    title: 'Emite el comprobante',
    desc: 'Llena los datos, Amelia calcula IVA y retenciones y lo autoriza ante el SRI.',
  },
  {
    step: '04',
    title: 'Envía y archiva',
    desc: 'Comparte por WhatsApp o correo. Todo queda respaldado y descargable.',
  },
]

export const PLANES = [
  {
    name: 'Emprende',
    tagline: 'Para quien empieza a facturar',
    highlight: false,
    features: [
      'Facturas y notas de crédito',
      'Envío por correo y WhatsApp',
      'App web + móvil',
      'Soporte por chat',
    ],
    cta: 'Solicitar plan',
  },
  {
    name: 'Negocio',
    tagline: 'Para PYMES con volumen',
    highlight: true,
    features: [
      'Todos los comprobantes electrónicos',
      'Retenciones y guías de remisión',
      'Reportes y descargas masivas',
      'Múltiples usuarios y establecimientos',
      'Soporte y capacitación personalizada',
    ],
    cta: 'Solicitar plan',
  },
  {
    name: 'Contador',
    tagline: 'White-label para profesionales',
    highlight: false,
    features: [
      'Gestiona la cartera de tus clientes',
      'Precios preferenciales sin pago anticipado',
      'Tu marca sobre la plataforma',
      'Incentivos por crecimiento',
    ],
    cta: 'Ser distribuidor',
  },
]

export const FAQ = [
  {
    q: '¿Los comprobantes son válidos ante el SRI?',
    a: 'Sí. Amelia genera, firma y transmite cada comprobante al SRI y conserva su número de autorización. Tienes el estado de cada documento en tiempo real.',
  },
  {
    q: '¿Necesito firma electrónica?',
    a: 'Sí, la firma electrónica es un requisito del SRI para emitir. En Begroup también puedes obtenerla con vigencia de 1 a 5 años y la cargas directamente en Amelia.',
  },
  {
    q: '¿Funciona desde el celular?',
    a: 'Completamente. Amelia está en web, iOS, Android y Mac con la misma cuenta. Puedes emitir y enviar comprobantes desde donde estés.',
  },
  {
    q: '¿Tengo que pagar por adelantado?',
    a: 'No. Trabajamos sin pago anticipado y con planes pensados para tu volumen real de emisión, además de acompañamiento y capacitación.',
  },
  {
    q: '¿Sirve para contadores con varios clientes?',
    a: 'Sí. El plan Contador es white-label: administras la cartera de tus clientes, con precios preferenciales e incentivos por crecimiento.',
  },
  {
    q: '¿Puedo enviar la factura por WhatsApp?',
    a: 'Sí. Una vez autorizado, compartes el comprobante por WhatsApp o correo en un toque, con su PDF y XML.',
  },
]

export const TESTIMONIOS = [
  {
    quote: 'Pasé de pelear con un sistema lento a emitir facturas desde el celular en la entrega. Mis clientes reciben todo por WhatsApp al instante.',
    name: 'María José Andrade',
    role: 'Emprendedora · Ambato',
  },
  {
    quote: 'Como contadora manejo varios RUC. El modo white-label me dejó ofrecer facturación con mi propia marca y sumar ingresos.',
    name: 'Daniela Vásquez',
    role: 'Contadora · Quito',
  },
  {
    quote: 'Las retenciones que antes me tomaban la tarde ahora salen en minutos y sin rebotes del SRI. El soporte responde de verdad.',
    name: 'Luis Carrión',
    role: 'Ferretería · Cuenca',
  },
]
