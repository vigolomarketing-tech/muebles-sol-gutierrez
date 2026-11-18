// CONFIG — Muebles Sol Gutiérrez
// Todo lo que cambia de un comercio a otro vive acá.
// Lo marcado "PENDIENTE CLIENTE" hay que confirmarlo con el dueño.

const CONFIG = {
  negocio: {
    nombre: "Muebles Sol Gutiérrez",
    rubro: "Fábrica de muebles",
    localidad: "Quilmes Oeste",
    eslogan: "Diseñamos tu espacio, creamos tu hogar.",
    descripcion: "Placares, racks de TV y mesas de luz en melamina de 18 mm, fabricados a medida. Somos fabricantes: sin intermediarios.",
  },

  contacto: {
    whatsapp: "5491139369433",
    mensajeWhatsapp: "¡Hola! Vi su web y quería consultar por un mueble...",
    telefono: "+54 9 11 3936-9433",
    email: "zamudioeluney@gmail.com",
    instagram: "", // PENDIENTE CLIENTE (usuario de Instagram)
    direccion: "La Rioja 5015, Quilmes Oeste, Buenos Aires",
    mapsEmbed: "https://www.google.com/maps?q=La+Rioja+5015,+Quilmes+Oeste,+Buenos+Aires&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=La+Rioja+5015,+Quilmes+Oeste,+Buenos+Aires",
  },

  // 0 = domingo ... 6 = sábado
  horarios: {
    0: [],
    1: [["08:00", "18:00"]],
    2: [["08:00", "18:00"]],
    3: [["08:00", "18:00"]],
    4: [["08:00", "18:00"]],
    5: [["08:00", "18:00"]],
    6: [["08:00", "18:00"]],
  },

  // Promo de placares (precios en pesos). Confirmados por el cliente por WhatsApp el 18/11/2026.
  medidasLinea: [
    { nombre: "Placard chico", medidas: "120 × 180 × 55 cm", detalle: "Interior crudo, exterior blanco", precio: 210000 },
    { nombre: "Placard mediano", medidas: "180 × 180 × 55 cm", detalle: "Interior crudo, exterior blanco", precio: 270000 },
    { nombre: "Placard grande", medidas: "220 × 225 × 55 cm", detalle: "Interior crudo, exterior blanco", precio: 460000 },
  ],
  condicionesPromo: ["Envío aparte (consultá tu zona)", "Abonás al recibir"], // PENDIENTE CLIENTE: confirmar vigencia de la promo

  categorias: ["Placares", "Living y dormitorio"],

  productos: [
    {
      id: "placard-dos-puertas",
      categoria: "Placares",
      nombre: "Placard de 2 puertas corredizas",
      descripcion: "Frente liso blanco con manijas redondas. Clásico, prolijo y con mucho lugar.",
      foto: "img/placard-dos-puertas.webp",
      w: 900, h: 1600,
    },
    {
      id: "rack-tv-flotante",
      categoria: "Living y dormitorio",
      nombre: "Rack de TV flotante",
      descripcion: "Panel con estantes, cajones con manija y espacio para el equipo. Sin cables a la vista.",
      foto: "img/rack-tv-flotante.webp",
      w: 900, h: 1209,
    },
    {
      id: "placard-con-baulera",
      categoria: "Placares",
      nombre: "Placard con baulera corrediza",
      descripcion: "Puertas corredizas abajo y arriba para aprovechar hasta el último centímetro.",
      foto: "img/placard-con-baulera.webp",
      w: 900, h: 1062,
    },
    {
      id: "placard-corredizo-abierto",
      categoria: "Placares",
      nombre: "Placard corredizo con cajones",
      descripcion: "Estantes de distintos tamaños, barral y dos cajones. Ideal para ropa y calzado.",
      foto: "img/placard-corredizo-abierto.webp",
      w: 900, h: 1200,
    },
    {
      id: "mesa-de-luz",
      categoria: "Living y dormitorio",
      nombre: "Mesa de luz con cajón",
      descripcion: "Un estante abierto y un cajón amplio. Se hace en el color y tamaño que necesites.",
      foto: "img/mesa-de-luz.webp",
      w: 900, h: 996,
    },
    {
      id: "placard-interior-completo",
      categoria: "Placares",
      nombre: "Placard con barral, cajones y estantes",
      descripcion: "Interior bien resuelto: dos barrales, estantes, cajoneras y baulera.",
      foto: "img/placard-interior-completo.webp",
      w: 900, h: 1197,
    },
    {
      id: "placard-una-puerta",
      categoria: "Placares",
      nombre: "Placard de 1 puerta corrediza",
      descripcion: "Compacto, para ambientes chicos. Estantes y cajones con puerta corrediza.",
      foto: "img/placard-una-puerta.webp",
      w: 900, h: 1200,
    },
  ],

  // Datos destacados bajo el hero
  datos: [
    ["18 mm", "Melamina de espesor"],
    ["A medida", "Cada mueble, único"],
    ["Directo", "De fábrica, sin intermediarios"],
    ["Lun a Sáb", "8 a 18 hs"],
  ],

  pilares: [
    { titulo: "Fabricación propia", texto: "Somos fabricantes. Diseñamos y producimos cada mueble en nuestra fábrica de Quilmes Oeste, sin intermediarios." },
    { titulo: "Hecho a tu medida", texto: "Adaptamos alturas, anchos y distribución interior a tu espacio y a cómo vivís: barrales, cajones, estantes y baulera." },
    { titulo: "Melamina de 18 mm", texto: "Placas firmes y de terminación prolija, con puertas corredizas y herrajes que acompañan el uso diario." },
  ],

  // PENDIENTE CLIENTE: confirmar que hacen visita de medición, plazos y entrega/instalación
  proceso: [
    { titulo: "Consulta", texto: "Nos contás qué necesitás y nos pasás fotos o medidas del lugar por WhatsApp." },
    { titulo: "Diseño y presupuesto", texto: "Definimos distribución, terminaciones y te enviamos el presupuesto sin cargo." },
    { titulo: "Fabricación", texto: "Producimos tu mueble en melamina de 18 mm en nuestra fábrica." },
    { titulo: "Entrega", texto: "Coordinamos la entrega para que lo recibas listo para usar." },
  ],

  resenas: [
    // { autor: "Nombre A.", texto: "Excelente trabajo.", estrellas: 5 }, // PENDIENTE CLIENTE
  ],

  seo: {
    titulo: "Muebles a medida en Quilmes Oeste | Sol Gutiérrez",
    descripcion: "Fábrica de placares, racks de TV y mesas de luz en melamina de 18 mm en Quilmes Oeste. Pedí tu presupuesto sin cargo por WhatsApp.",
    url: "", // PENDIENTE CLIENTE (dominio final)
  },
};
