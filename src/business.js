// ---------------------------------------------------------------
// Datos del negocio: los usa la web (vía config.js) y también el
// build (vite.config.js) para generar los datos de Google
// (JSON-LD), sitemap.xml, robots.txt y CNAME.
// Este archivo no puede usar import.meta.env: se ejecuta en Node.
// ---------------------------------------------------------------

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
  region: 'Comunidad Valenciana',
  country: 'ES',
  address: 'C/ Jaime Chicharro, 59, 12539 Alquerías del Niño Perdido, Castellón',
  phone: '686 741 872', // móvil: llamadas y WhatsApp
  whatsapp: '+34 686 741 872',
  email: 'hola@rosavidal.example', // PENDIENTE
};

// Horario semanal. 0 = domingo. [] = cerrado.  PENDIENTE: confirmar.
// Google lo muestra en la ficha: tiene que coincidir con el de Google Business Profile.
export const hours = {
  0: [],
  1: [],
  2: [['09:00', '13:30'], ['16:00', '20:00']],
  3: [['09:00', '13:30'], ['16:00', '20:00']],
  4: [['09:00', '13:30'], ['16:00', '20:00']],
  5: [['09:00', '20:00']],
  6: [['08:30', '14:00']],
};

// Dominio propio y ficha de Google.
export const seo = {
  // PENDIENTE: dominio comprado, sin https:// ni barra, p. ej. 'rosavidalpeluqueria.es'.
  // Vacío = la web sigue en uapcent.github.io/RosaVidalPeluqueria/.
  // Al ponerlo, la web pasa a servirse en la raíz del dominio y se genera el archivo CNAME.
  domain: '',
  // PENDIENTE: enlace a la ficha de Google Maps (botón "Compartir" en Maps → copiar enlace).
  // Sirve para que Google relacione la web con la ficha.
  mapsUrl: '',
  // Otros perfiles oficiales (Instagram, Facebook…), también ayudan a Google a relacionarlos.
  profiles: [],
  // Coordenadas del local (opcional; en Maps, clic derecho sobre el local → copiar coordenadas).
  geo: null, // p. ej. { lat: 39.0, lng: -0.0 }
  // Foto para Google y para cuando se comparte el enlace por WhatsApp (ruta dentro de public/).
  image: 'trabajos/fallera-peineta-lateral.jpg',
  priceRange: '€',
  // Páginas que se envían a Google en sitemap.xml ('' = portada). Las legales no hace falta.
  pages: [''],
};
