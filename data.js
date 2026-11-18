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

  // Medidas de línea que el cliente promociona (ancho x alto x profundidad, en cm)
  // PENDIENTE CLIENTE: confirmar medidas y precios (el banner de Instagram tiene precios cortados)
  medidasLinea: [
    { nombre: "Placard grande", medidas: "220 × 225 × 55 cm", detalle: "Corredizo con baulera, cajones y barral", precio: null },
    { nombre: "Placard mediano", medidas: "180 × 180 × 55 cm", detalle: "Dos puertas corredizas, cajones y estantes", precio: null },
  ],
  // precio: número en pesos (ej. 460000) para mostrarlo; null = "Consultá precio"

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
      id: "placard-interior-completo",
      categoria: "Placares",
      nombre: "Placard con barral, cajones y estantes",
      descripcion: "Interior bien resuelto: dos barrales, estantes, cajoneras y baulera.",
      foto: "img/placard-interior-completo.webp",
      w: 900, h: 1197,
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
      id: "placard-una-puerta",
      categoria: "Placares",
      nombre: "Placard de 1 puerta corrediza",
      descripcion: "Compacto, para ambientes chicos. Estantes y cajones con puerta corrediza.",
      foto: "img/placard-una-puerta.webp",
      w: 900, h: 1200,
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
      id: "mesa-de-luz",
      categoria: "Living y dormitorio",
      nombre: "Mesa de luz con cajón",
      descripcion: "Un estante abierto y un cajón amplio. Se hace en el color y tamaño que necesites.",
      foto: "img/mesa-de-luz.webp",
      w: 900, h: 996,
    },
  ],

  pasos: [
    { titulo: "Contanos qué necesitás", texto: "Mandanos las medidas del lugar y, si tenés, una foto o idea de lo que querés." },
    { titulo: "Te pasamos el presupuesto", texto: "Te respondemos por WhatsApp con el precio y los tiempos de fabricación." },
    { titulo: "Lo fabricamos y lo recibís", texto: "Lo hacemos en nuestra fábrica, en melamina de 18 mm, y coordinamos la entrega." },
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
