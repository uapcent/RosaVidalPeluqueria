// ---------------------------------------------------------------
// Rosa Vidal Peluquería – todos los textos y datos de la web.
// Colores y tipografías: styles.css · Fotos de trabajos: trabajos.js
//
// ⚠ Lo marcado con "PENDIENTE" son datos de ejemplo que hay que
//   confirmar con Rosa antes de publicar (horario, precios, historia, NIF…).
// ---------------------------------------------------------------
import { pexels } from './lib/site.js';
import { company } from './business.js';

// Datos del negocio, horario, dominio y ficha de Google: business.js
export { company, hours, seo } from './business.js';

// Mensajes que aparecen ya escritos al abrir WhatsApp.
export const whatsappText = {
  general: 'Hola Rosa, me gustaría pedir cita.',
  event: 'Hola Rosa, tengo un evento y me gustaría reservar el peinado. La fecha es: ',
  photo: (caption) => `Hola Rosa, he visto en la web el trabajo "${caption}" y me gustaría algo parecido.`,
};

export const hoursNote = 'Para bodas y comuniones abrimos también fuera de horario: pregúntanos.'; // PENDIENTE: confirmar

// Servicios con precio "desde", porque varía según el largo y el trabajo.  PENDIENTE: precios reales.
export const services = [
  {
    category: 'Peinados para eventos',
    note: 'Incluye prueba previa para novias.',
    items: [
      { name: 'Peinado de novia', detail: 'Con prueba previa', from: 90 },
      { name: 'Madrina e invitadas', detail: 'Recogidos, semirrecogidos y ondas', from: 35 },
      { name: 'Comunión', detail: 'Trenzas, coronas y flores', from: 20 },
      { name: 'Peinado de fiesta', detail: 'Cenas, graduaciones, Nochevieja', from: 25 },
    ],
  },
  {
    category: 'Corte y peinado',
    items: [
      { name: 'Corte señora', detail: 'Lavar, cortar y peinar', from: 22 },
      { name: 'Lavar y peinar', from: 14 },
      { name: 'Corte caballero', from: 12 },
      { name: 'Corte infantil', detail: 'Hasta 12 años', from: 10 },
    ],
  },
  {
    category: 'Color y tratamientos',
    items: [
      { name: 'Tinte', detail: 'Incluye lavado y peinado', from: 32 },
      { name: 'Mechas', detail: 'Incluye lavado y peinado', from: 50 },
      { name: 'Tratamiento hidratante', from: 15 },
    ],
  },
];

// Cómo funciona un peinado de evento (sección "Para tu día").  PENDIENTE: confirmar con Rosa.
export const eventSteps = [
  { title: 'Escríbenos con la fecha', text: 'Las fechas de bodas y comuniones se llenan pronto. Mándanos un WhatsApp y te la guardamos.' },
  { title: 'Hacemos una prueba', text: 'Trae fotos de lo que te gusta y del vestido. Probamos el peinado con calma, sin compromiso.' },
  { title: 'Y llega el día', text: 'Te peinamos con tiempo, para que llegues tranquila. Si hace falta, abrimos antes.' },
];

// Historia y proyección del salón.  PENDIENTE: completar con datos reales (año de apertura, etc.).
export const story = {
  title: 'Nuestra historia: Tradición desde 1966 y pasión por las nuevas tendencias',

  paragraphs: [
    'Bienvenidos a nuestro salón, donde el cuidado del cabello combina historia, experiencia y pasión por las nuevas tendencias.',

    'Mi historia entre tijeras, peines y secadores comenzó en 1966, cuando mi madre abrió esta peluquería con un sueño: ofrecer un trato cercano y un trabajo impecable. Crecí viendo su dedicación y aprendiendo que escuchar a cada cliente es tan importante como conseguir un buen corte o peinado.',

    'Hoy, como peluquera de segunda generación, me enorgullece mantener vivo ese legado familiar. Conservo la esencia de la peluquería tradicional, basada en el mimo, la atención personalizada y la confianza, incorporando mi propia visión y formación continua.',

    'Me he especializado en las últimas técnicas de corte, coloración y cuidado capilar. Me apasiona seguir aprendiendo para ofrecerte las nuevas tendencias, siempre adaptadas a tu estilo, tus facciones y la salud de tu cabello.',

    'Tanto si buscas un corte clásico como si quieres atreverte con un cambio de look, aquí encontrarás la experiencia de toda una vida combinada con la frescura de hoy.',
  ],

  future: {
    title: 'Te espero en el salón',
    text: 'Para seguir escribiendo juntos esta historia.',
  },
};

export const images = {
  story: { src: pexels(10318040, 1000), alt: 'Rizando una melena castaña con la tenacilla' },
  // story sigue siendo de ejemplo (Pexels) hasta tener una foto de Rosa trabajando.
  storySmall: { src: `${import.meta.env.BASE_URL}trabajos/fallera-aderezo-lateral.jpg`, alt: 'Recogido de fallera con aderezo dorado' },
};

// Texto de la política de privacidad: para qué se usan los datos.
export const privacyPurpose =
  'Atender las peticiones de cita y consultas que nos haga por teléfono o WhatsApp. Esta web no tiene formularios ni guarda datos de quien la visita.';

export const site = {
  title: `${company.name} · ${company.tagline} en ${company.town}`,
  base: '',
  home: '/',
};
