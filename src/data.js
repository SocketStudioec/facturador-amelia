// Contenido del sitio — Amelia · Plataforma Contable (un producto de Begroup)
// Información derivada del código real (frontend Angular + backend Node/Express) y de begroupec.com.

// type: 'page' = página propia (relativa al BASE_URL); 'anchor' = sección de la landing
export const NAV = [
  { label: 'Contadores', href: 'contadores/', type: 'page' },
  { label: 'Emprendedores', href: 'emprendedores/', type: 'page' },
  { label: 'Empresas', href: 'b2b/', type: 'page' },
  { label: 'Combo Promo', href: '#combo', type: 'anchor' },
  { label: 'Módulos', href: '#modulos', type: 'anchor' },
  { label: 'Partners', href: '#partners', type: 'anchor' },
]

// Video promocional de la landing (como en begroupec.com/partners).
// Pon el ID de YouTube del video oficial cuando esté listo; mientras tanto la
// portada de marca enlaza al canal de Begroup.
export const VIDEO = {
  eyebrow: 'Conoce Amelia',
  title: 'Mira el Combo Promo en acción',
  desc: 'En un par de minutos entiende cómo Amelia factura, firma y organiza tu negocio — y qué combo te conviene según tu perfil.',
  youtubeId: '',
  channel: 'https://www.youtube.com/@BeGroupSAS',
}

// ── Campaña Combo Promo Amelia ─────────────────────────────────────────────
// 3 audiencias, cada una con productos, beneficios y CTA propios.
export const SEGMENTOS = [
  {
    id: 'contadores',
    label: 'Soy contador',
    title: 'Contadores',
    headline: 'Todos tus clientes en un solo panel',
    desc: 'Administra la facturación y las obligaciones de toda tu cartera desde una cuenta multiempresa, con precios preferenciales y opción white-label.',
    icon: 'Briefcase',
    productos: [
      { name: 'Panel multiempresa', desc: 'Cambia de cliente en un clic; cada empresa con sus establecimientos y puntos de emisión.', icon: 'LayoutPanelLeft' },
      { name: 'Declaraciones', desc: 'Prepara las declaraciones del SRI con la información que ya está registrada en el sistema.', icon: 'CalendarCheck' },
      { name: 'Firmador PDF', desc: 'Firma electrónicamente contratos, oficios y anexos de tus clientes sin salir de Amelia.', icon: 'PenTool' },
      { name: 'Archivador Digital', desc: 'XML, RIDE y respaldos de cada cliente organizados y siempre disponibles.', icon: 'Archive' },
      { name: 'Estados de cuenta vs facturación', desc: 'Cruza los movimientos bancarios de tu cliente contra lo que facturó y detecta diferencias.', icon: 'Scale' },
      { name: 'Bancarización SRI', desc: 'Controla que los pagos estén sustentados por el sistema financiero como exige la norma.', icon: 'Landmark' },
    ],
    beneficios: [
      'Precios preferenciales por volumen, sin pago anticipado',
      'White-label: atiende con tu propia marca',
      'Soporte y capacitación dedicados para tu equipo',
    ],
    cta: 'Quiero mi panel de contador',
    waText: 'Hola, soy contador y quiero el panel multiempresa de Amelia para mis clientes.',
    slug: 'contadores',
    sustantivo: 'un contador',
    pageTitle: 'Amelia para Contadores · Panel multiempresa, declaraciones y firmador PDF',
    pageDesc: 'Administra toda tu cartera de clientes con Amelia: panel multiempresa, declaraciones SRI, firmador PDF, archivador digital, bancarización y estados de cuenta vs facturación. Precios preferenciales white-label.',
    heroNote: 'Programa para profesionales contables · precios preferenciales de partner',
    modulosNombres: ['Firmador PDF', 'Declaraciones', 'Archivador Digital', 'Estados de cuenta vs facturación', 'Bancarización', 'Compras'],
    destacadosNombres: ['Gastos personales y deducibles', 'Archivador Digital', 'Bancarización SRI'],
    comboId: 'combo-contador',
    testimonioIndex: 1,
  },
  {
    id: 'emprendedores',
    label: 'Soy emprendedor',
    title: 'Emprendedores',
    headline: 'Factura y vende desde el primer día',
    desc: 'Todo lo que un negocio que empieza necesita: facturador autorizado por el SRI, firma electrónica y presencia digital, sin conocimientos contables.',
    icon: 'Rocket',
    productos: [
      { name: 'Facturador', desc: 'Emite facturas autorizadas por el SRI desde el celular y envíalas por WhatsApp.', icon: 'FileText' },
      { name: 'Firma Electrónica', desc: 'Obtén tu firma con vigencia de 1 a 5 años y déjala lista en Amelia el mismo día.', icon: 'Fingerprint' },
      { name: 'Página Web', desc: 'Tu negocio en internet con dominio propio, lista para compartir y recibir pedidos.', icon: 'Globe' },
      { name: 'Catálogo Digital', desc: 'Publica tus productos con fotos y precios; tus clientes piden por WhatsApp.', icon: 'BookOpen' },
      { name: 'Bloc Digital', desc: 'Apunta las ventas del día y conviértelas en comprobantes cuando lo necesites.', icon: 'NotebookPen' },
      { name: 'Dashboard de impuestos', desc: 'Si eres RIMPE o Negocio Popular, ve cuánto impuesto llevas generado en el año.', icon: 'Gauge' },
    ],
    beneficios: [
      'Sin pago anticipado y sin permanencia',
      'Registra gastos personales y deducibles para pagar menos renta',
      'Funciona en web, iPhone y Android con la misma cuenta',
    ],
    cta: 'Empieza a facturar hoy',
    waText: 'Hola, soy emprendedor y quiero empezar a facturar con Amelia.',
    slug: 'emprendedores',
    sustantivo: 'un emprendedor',
    pageTitle: 'Amelia para Emprendedores · Facturador SRI, firma electrónica y página web',
    pageDesc: 'Empieza a facturar y vender hoy: facturador autorizado por el SRI, firma electrónica, página web con catálogo, Bloc Digital y dashboard de impuestos para RIMPE y Negocio Popular. Sin pago anticipado.',
    heroNote: 'Sin conocimientos contables · sin pago anticipado ni permanencia',
    modulosNombres: ['Facturador', 'Bloc Digital', 'Archivador Digital', 'Compras', 'Inventarios', 'Declaraciones'],
    destacadosNombres: ['Dashboard con impuesto generado', 'Gastos personales y deducibles', 'Facturación recurrente'],
    comboId: 'combo-emprendedor',
    testimonioIndex: 0,
  },
  {
    id: 'b2b',
    label: 'Soy empresa',
    title: 'Empresas · B2B',
    headline: 'Operación completa para tu empresa',
    desc: 'Facturación de alto volumen, cobros recurrentes, inventarios y control financiero para empresas con equipos, sucursales y procesos.',
    icon: 'Building2',
    productos: [
      { name: 'Facturación recurrente', desc: 'Programa cobros automáticos de suscripciones, arriendos y servicios mensuales.', icon: 'Repeat' },
      { name: 'Factura reembolso', desc: 'Emite facturas por reembolso de gastos con el detalle que exige el SRI.', icon: 'ReceiptText' },
      { name: 'Inventarios', desc: 'Stock, kardex y costos por bodega, conectados a tus compras y ventas.', icon: 'Boxes' },
      { name: 'Compras', desc: 'Importa tus comprobantes de compra directo del SRI y mantén todo al día.', icon: 'ShoppingCart' },
      { name: 'Estados de cuenta vs facturación', desc: 'Concilia lo que entra al banco contra lo que factura tu empresa.', icon: 'Scale' },
      { name: 'Usuarios y sucursales', desc: 'Múltiples usuarios, establecimientos y puntos de emisión bajo control.', icon: 'Users' },
    ],
    beneficios: [
      'Bancarización SRI: pagos sustentados y auditables',
      'Archivador Digital con los respaldos de toda la operación',
      'Acompañamiento en la implementación y soporte prioritario',
    ],
    cta: 'Agenda una demo',
    waText: 'Hola, quiero una demo de Amelia para mi empresa.',
    slug: 'b2b',
    sustantivo: 'tu empresa',
    pageTitle: 'Amelia para Empresas · Facturación recurrente, reembolsos e inventarios',
    pageDesc: 'Soluciones B2B de Amelia: facturación de alto volumen, cobros recurrentes, factura reembolso, inventarios, compras, bancarización SRI y usuarios por sucursal. Implementación acompañada y soporte prioritario.',
    heroNote: 'Implementación acompañada · soporte prioritario para tu equipo',
    modulosNombres: ['Facturador', 'Inventarios', 'Compras', 'Estados de cuenta vs facturación', 'Bancarización', 'Archivador Digital'],
    destacadosNombres: ['Facturación recurrente', 'Factura reembolso', 'Bancarización SRI'],
    comboId: 'combo-empresa',
    testimonioIndex: 2,
  },
]

// Combos de la campaña — sin precio público: el precio se cierra por WhatsApp.
export const COMBOS = {
  eyebrow: 'Campaña por tiempo limitado',
  title: 'Combo Promo Amelia',
  desc: 'Arma tu combo según tu perfil y paga menos que contratando cada producto por separado. Sin pago anticipado y con capacitación incluida.',
  items: [
    {
      id: 'combo-emprendedor',
      name: 'Combo Emprendedor',
      para: 'Para quien empieza a vender',
      incluye: ['Facturador Amelia', 'Firma electrónica', 'Página web con catálogo', 'Bloc Digital'],
      beneficio: 'Arranca a facturar y vender en línea el mismo día, con todo configurado por nosotros.',
      cta: 'Quiero este combo',
      waText: 'Hola, me interesa el Combo Emprendedor de Amelia (facturador + firma + página web).',
      highlight: true,
    },
    {
      id: 'combo-contador',
      name: 'Combo Contador',
      para: 'Para profesionales con cartera de clientes',
      incluye: ['Panel multiempresa', 'Declaraciones', 'Firmador PDF', 'Archivador Digital'],
      beneficio: 'Atiende a más clientes en menos tiempo y gana con precios preferenciales de partner.',
      cta: 'Quiero este combo',
      waText: 'Hola, soy contador y me interesa el Combo Contador de Amelia.',
      highlight: false,
    },
    {
      id: 'combo-empresa',
      name: 'Combo Empresa',
      para: 'Para operaciones con volumen',
      incluye: ['Facturación de alto volumen', 'Facturación recurrente', 'Inventarios y compras', 'Bancarización SRI'],
      beneficio: 'Centraliza facturación, cobros e inventario con soporte prioritario para tu equipo.',
      cta: 'Hablar con un asesor',
      waText: 'Hola, me interesa el Combo Empresa de Amelia para mi negocio.',
      highlight: false,
    },
  ],
}

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
  { value: 'Todo‑en‑uno', label: 'factura, firma, cobra y controla en un sistema' },
  { value: 'SRI', label: 'autorización de comprobantes en línea' },
  { value: 'Multiempresa', label: 'administra varias empresas y sucursales' },
  { value: 'Web · iOS · Android', label: 'la misma cuenta en todos tus dispositivos' },
]

// Módulos de la plataforma — campaña Combo Promo (sin Contabilidad, por decisión comercial)
export const MODULOS = [
  { name: 'Facturador', desc: 'Emite y autoriza comprobantes ante el SRI en segundos, desde cualquier dispositivo.', icon: 'FileText' },
  { name: 'Bloc Digital', desc: 'Apunta las ventas y pendientes del día y conviértelos en comprobantes cuando quieras.', icon: 'NotebookPen' },
  { name: 'Compras', desc: 'Importa tus comprobantes de compra directo del SRI, sin digitar nada.', icon: 'ShoppingCart' },
  { name: 'Archivador Digital', desc: 'XML, RIDE y documentos del negocio organizados, respaldados y buscables.', icon: 'Archive' },
  { name: 'Firmador PDF', desc: 'Firma electrónicamente contratos y documentos PDF con validez legal.', icon: 'PenTool' },
  { name: 'Declaraciones', desc: 'Prepara tus declaraciones del SRI con la información que ya registraste.', icon: 'CalendarCheck' },
  { name: 'Estados de cuenta vs facturación', desc: 'Cruza tus movimientos bancarios contra lo facturado y detecta diferencias.', icon: 'Scale' },
  { name: 'Bancarización', desc: 'Sustenta tus pagos por el sistema financiero como exige el SRI.', icon: 'Landmark' },
  { name: 'Inventarios', desc: 'Stock, kardex y costos por producto y bodega, siempre al día.', icon: 'Boxes' },
]

// Funciones destacadas de la campaña
export const DESTACADOS = [
  { name: 'Facturación recurrente', desc: 'Programa una vez y Amelia emite y envía el comprobante cada mes: arriendos, suscripciones, servicios.', icon: 'Repeat' },
  { name: 'Factura reembolso', desc: 'Emite facturas por reembolso de gastos con el detalle y los anexos que exige el SRI.', icon: 'ReceiptText' },
  { name: 'Gastos personales y deducibles', desc: 'Registra tus gastos personales y proyecta tus deducibles para pagar menos impuesto a la renta.', icon: 'Wallet' },
  { name: 'Archivador Digital', desc: 'Cada comprobante guarda su XML y RIDE automáticamente; encuentra cualquier documento en segundos.', icon: 'Archive' },
  { name: 'Bancarización SRI', desc: 'Verifica que tus pagos estén sustentados por bancos cuando la norma lo exige y evita glosas.', icon: 'Landmark' },
  { name: 'Dashboard con impuesto generado', desc: 'Si eres RIMPE o Negocio Popular, mira en tiempo real cuánto impuesto llevas generado en el año.', icon: 'Gauge' },
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
      'Inventarios, compras y archivador digital',
      'Recurrente, reembolso y bancarización',
      'Dashboard con impuesto generado (RIMPE)',
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
    a: 'No. Además de la facturación electrónica, Amelia incluye Bloc Digital, compras, inventarios, archivador digital, firmador PDF, declaraciones, bancarización y estados de cuenta vs facturación en un mismo sistema.',
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
    q: '¿Sirve para manejar varias empresas?',
    a: 'Sí. Amelia es multiempresa: ideal para contadores que administran la cartera de varios clientes desde un solo panel, con opción white‑label y precios preferenciales.',
  },
  {
    q: '¿Tengo que pagar por adelantado?',
    a: 'No. Trabajamos sin pago anticipado y con planes pensados para tu volumen real, además de acompañamiento y capacitación.',
  },
]

// Prueba social — números reales de la comunidad Begroup (redes oficiales)
export const COMUNIDAD = [
  { value: '+5', label: 'años en el mercado ecuatoriano' },
  { value: '7.7K', label: 'comunidad en TikTok' },
  { value: '3.4K', label: 'seguidores en Facebook' },
  { value: '2.2K', label: 'suscriptores en YouTube' },
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
