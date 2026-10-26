// ---------------------------------------------------------------
// Rosa Vidal Peluquería – todos los textos y datos de la web.
// Colores y tipografías: styles.css · Fotos de trabajos: trabajos.js
//
// ⚠ Lo marcado con "PENDIENTE" son datos de ejemplo que hay que
//   confirmar con Rosa antes de publicar (horario, precios, historia, NIF…).
// ---------------------------------------------------------------
import { pexels } from './lib/site.js';

export const company = {
  name: 'Rosa Vidal',
  tagline: 'Peluquería',
  legalName: 'Rosa Vidal', // PENDIENTE: nombre fiscal (autónoma o sociedad)
  nif: '00000000X', // PENDIENTE
  street: 'C/ Jaime Chicharro, 59',
  town: 'Alquerías del Niño Perdido',
  townShort: 'Alquerías N.P.',
  postcode: '12539',
  province: 'Castellón',
  address: 'C/ Jaime Chicharro, 59, 12539 Alquerías del Niño Perdido, Castellón',
  phone: '964 59 24 03',
  mobile: '686 741 872',
  whatsapp: '+34 686 741 872',
  email: 'hola@rosavidal.example', // PENDIENTE
};

// Mensajes que aparecen ya escritos al abrir WhatsApp.
export const whatsappText = {
  general: 'Hola Rosa, me gustaría pedir cita.',
  event: 'Hola Rosa, tengo un evento y me gustaría reservar el peinado. La fecha es: ',
  photo: (caption) => `Hola Rosa, he visto en la web el trabajo "${caption}" y me gustaría algo parecido.`,
};

// Horario semanal. 0 = domingo. [] = cerrado.  PENDIENTE: confirmar.
export const hours = {
  0: [],
  1: [],
  2: [['09:00', '13:30'], ['16:00', '20:00']],
  3: [['09:00', '13:30'], ['16:00', '20:00']],
  4: [['09:00', '13:30'], ['16:00', '20:00']],
  5: [['09:00', '20:00']],
  6: [['08:30', '14:00']],
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
  title: 'Una peluquería de pueblo, de las de siempre',
  paragraphs: [
    'Rosa Vidal es una peluquería pequeña en Alquerías del Niño Perdido. Aquí nos conocemos casi todos: muchas clientas vienen desde hace años, y ahora traen a sus hijas.',
    'Con el tiempo, los peinados de evento se han convertido en lo que más nos gusta hacer. Bodas, comuniones y fiestas del pueblo: cada uno lo preparamos con la misma atención, como si fuera el nuestro.',
  ],
  future: {
    title: 'Lo que viene',
    text: 'Seguimos formándonos en nuevas técnicas de recogidos y color para traerlas al pueblo, sin perder el trato de siempre.',
  },
};

export const images = {
  story: { src: pexels(10318040, 1000), alt: 'Rosa rizando una melena castaña con la tenacilla' },
  storySmall: { src: pexels(3065096, 700), alt: 'Recogido sujeto con horquillas decoradas' },
};

// Texto de la política de privacidad: para qué se usan los datos.
export const privacyPurpose =
  'Atender las peticiones de cita y consultas que nos haga por teléfono o WhatsApp. Esta web no tiene formularios ni guarda datos de quien la visita.';

export const site = {
  title: `${company.name} · ${company.tagline} en ${company.town}`,
  base: '',
  home: '/',
};
