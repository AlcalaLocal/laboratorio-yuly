// Datos centrales del negocio. Editar aquí para actualizar todo el sitio.
export const site = {
  name: "Laboratorio Clínico Dra. Yuly Osorio",
  shortName: "Lab. Dra. Yuly Osorio",
  slogan: "Cuida tu salud, porque es el mayor regalo para ti y los tuyos",
  description:
    "Laboratorio clínico en Alcalá, Valle del Cauca. Exámenes de sangre, perfil lipídico, pruebas de tiroides, antidoping, sueroterapia y toma de muestras a domicilio. Resultados confiables y atención cercana.",
  url: "https://laboratorioyulyosorio.com",
  phoneDisplay: "318 007 2098",
  phoneRaw: "+573180072098",
  whatsapp: "573180072098",
  email: "laboratorioyulyosorio@gmail.com",
  address: {
    street: "Calle 5 # 8-19",
    city: "Alcalá",
    region: "Valle del Cauca",
    country: "Colombia",
    full: "Calle 5 # 8-19, Alcalá, Valle del Cauca",
  },
  geo: { lat: 4.6736, lng: -75.7806 }, // aprox. Alcalá (VC) — confirmar con pin de Google
  hours: {
    morning: "7:00 a.m. – 12:00 m.",
    afternoon: "5:15 p.m. – 6:30 p.m.",
    note: "Urgencias 24 horas · Servicio a domicilio",
  },
  social: {
    facebook: "https://www.facebook.com/laboratorio.clinico.yuly.osorio",
  },
};

export const whatsappLink = (msg) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    msg || "Hola, quisiera agendar un examen de laboratorio."
  )}`;

// Catálogo de servicios (tomado del contenido real del laboratorio)
export const services = [
  {
    id: "hematologia",
    icon: "blood",
    title: "Hematología",
    blurb: "Cuadro hemático completo para evaluar tu salud general.",
    items: [
      "Hemograma completo",
      "Hemoglobina y hematocrito",
      "Recuento de plaquetas",
      "VSG (sedimentación)",
      "Extendido de sangre periférica",
      "Hemoclasificación",
      "Gota gruesa",
    ],
  },
  {
    id: "quimica",
    icon: "flask",
    title: "Química sanguínea",
    blurb: "Glucosa, colesterol, función renal y hepática.",
    items: [
      "Glicemia y curvas de glucosa",
      "Perfil lipídico (colesterol y triglicéridos)",
      "Pruebas renales (creatinina, BUN)",
      "Ácido úrico",
      "Bilirrubinas",
    ],
  },
  {
    id: "coagulacion",
    icon: "drop",
    title: "Coagulación",
    blurb: "Control de tiempos para cirugías y tratamientos.",
    items: [
      "Tiempo de protrombina (TP)",
      "Tiempo de tromboplastina (TTP)",
      "Tiempo de coagulación",
      "Tiempo de trombina",
    ],
  },
  {
    id: "toxicologia",
    icon: "shield",
    title: "Toxicología / Antidoping",
    blurb: "Pruebas de sustancias para empresas y requisitos laborales.",
    items: [
      "Marihuana (THC)",
      "Cocaína",
      "Anfetaminas",
      "Opiáceos",
      "Benzodiacepinas",
      "Barbitúricos",
    ],
  },
  {
    id: "serologia",
    icon: "microscope",
    title: "Serología y pruebas generales",
    blurb: "Detección de infecciones y pruebas de rutina.",
    items: [
      "VIH, sífilis y hepatitis B",
      "Dengue y PCR",
      "Factor reumatoide",
      "Prueba de embarazo",
      "Parcial de orina y coprológico",
    ],
  },
  {
    id: "especializados",
    icon: "dna",
    title: "Exámenes especializados",
    blurb: "Pruebas hormonales y cultivos de mediana complejidad.",
    items: [
      "Perfil tiroideo (TSH, T3, T4)",
      "Antígeno prostático (PSA)",
      "Urocultivo",
      "Cultivo de micobacterias",
    ],
  },
  {
    id: "sueroterapia",
    icon: "iv",
    title: "Sueroterapia e hidratación",
    blurb: "Cócteles de vitaminas, minerales y oligoelementos.",
    items: [
      "Hidratación con vitaminas",
      "Oligoelementos",
      "Desintoxicación por fases",
      "Energía y bienestar",
    ],
  },
  {
    id: "domicilio",
    icon: "home",
    title: "Toma de muestras a domicilio",
    blurb: "Vamos hasta tu casa u oficina en la región.",
    items: [
      "Comodidad y seguridad en casa",
      "Ideal para adultos mayores",
      "Agenda por WhatsApp",
      "Cobertura regional",
    ],
  },
];

export const cities = [
  { name: "Alcalá", note: "Nuestra sede", home: true },
  { name: "Cartago", note: "Toma a domicilio" },
  { name: "Quimbaya", note: "Toma a domicilio" },
  { name: "Montenegro", note: "Toma a domicilio" },
  { name: "Armenia", note: "Toma a domicilio" },
  { name: "Pereira", note: "Toma a domicilio" },
];

export const faqs = [
  {
    q: "¿Necesito cita para hacerme un examen?",
    a: "No es obligatoria, pero te recomendamos escribirnos por WhatsApp para confirmar el horario y las indicaciones de preparación (por ejemplo, el ayuno).",
  },
  {
    q: "¿Debo ir en ayunas?",
    a: "Depende del examen. Pruebas como la glicemia o el perfil lipídico suelen requerir ayuno de 8 a 12 horas. Escríbenos y te indicamos cómo prepararte.",
  },
  {
    q: "¿Hacen toma de muestras a domicilio?",
    a: "Sí. Vamos hasta tu casa u oficina en Alcalá y la región (Cartago, Quimbaya, Montenegro, Armenia y Pereira). Agenda por WhatsApp.",
  },
  {
    q: "¿Realizan pruebas antidoping para empresas?",
    a: "Sí. Hacemos pruebas toxicológicas (marihuana, cocaína, anfetaminas y más) para requisitos laborales y de ingreso, con resultados oportunos.",
  },
  {
    q: "¿En cuánto tiempo entregan los resultados?",
    a: "La mayoría de exámenes de rutina se entregan el mismo día o al día siguiente. Para pruebas especializadas o cultivos te indicamos el tiempo al momento de la toma.",
  },
  {
    q: "¿Atienden urgencias?",
    a: "Sí, contamos con atención de urgencias las 24 horas. Comunícate al 318 007 2098.",
  },
  {
    q: "¿Qué es la sueroterapia?",
    a: "Es la aplicación de sueros con vitaminas, minerales y oligoelementos para hidratación, energía y bienestar, realizada por personal de la salud.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "En la Calle 5 # 8-19, Alcalá, Valle del Cauca. También puedes ubicarnos en Google Maps y escribirnos por WhatsApp o Facebook.",
  },
];
