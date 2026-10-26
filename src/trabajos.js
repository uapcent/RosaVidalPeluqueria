// ---------------------------------------------------------------
// Fotos de trabajos (la galería de la portada).
//
// Para añadir una foto nueva:
//   1. Guarda la foto en public/trabajos/ (por ejemplo boda-marta.jpg).
//      Mejor en vertical y de unos 1200 px de ancho.
//   2. Añade una línea AL PRINCIPIO de la lista de abajo:
//        { src: foto('boda-marta.jpg'), type: 'novias', caption: 'Recogido bajo con flores' },
//   3. Si quieres que salga en la portada grande, añade  featured: true
//      (se ven las cuatro primeras marcadas; en la galería salen al final).
//
// type tiene que ser uno de los de `categories`.
// Las fotos de ahora son de ejemplo (Pexels) hasta que tengamos las del salón.
// ---------------------------------------------------------------
import { pexels } from './lib/site.js';

const foto = (file) => `${import.meta.env.BASE_URL}trabajos/${file}`;

export const categories = [
  { id: 'novias', label: 'Novias' },
  { id: 'invitadas', label: 'Madrinas e invitadas' },
  { id: 'comuniones', label: 'Comuniones' },
  { id: 'diario', label: 'Del día a día' },
];

const ejemplo = (id) => pexels(id, 900);

export const trabajos = [
  { src: ejemplo(38573121), type: 'novias', caption: 'Recogido de novia con velo', featured: true },
  { src: ejemplo(31065905), type: 'invitadas', caption: 'Trenza recogida con horquillas', featured: true },
  { src: ejemplo(14030630), type: 'comuniones', caption: 'Trenza de comunión con flores', featured: true },
  { src: ejemplo(29718696), type: 'invitadas', caption: 'Melena con rizos marcados' },
  { src: ejemplo(15507425), type: 'novias', caption: 'Moño bajo pulido', featured: true },
  { src: ejemplo(10483489), type: 'diario', caption: 'Corte corto con mechas' },
  { src: ejemplo(9941096), type: 'novias', caption: 'Recogido con tocado' },
  { src: ejemplo(7440131), type: 'invitadas', caption: 'Ondas rubias sueltas' },
  { src: ejemplo(11693652), type: 'comuniones', caption: 'Trenzas con flores de primavera' },
  { src: ejemplo(31255040), type: 'novias', caption: 'Recogido con perlas' },
  { src: ejemplo(27604284), type: 'diario', caption: 'Melena larga con ondas' },
  { src: ejemplo(17022640), type: 'invitadas', caption: 'Trenza de raíz' },
  { src: ejemplo(16976882), type: 'novias', caption: 'Moño trenzado' },
  { src: ejemplo(4671331), type: 'comuniones', caption: 'Trenzado infantil' },
  { src: ejemplo(8030666), type: 'diario', caption: 'Melena lisa con reflejos' },
  { src: ejemplo(355063), type: 'novias', caption: 'Semirrecogido con flores blancas' },
  { src: ejemplo(3065208), type: 'invitadas', caption: 'Rizos recogidos' },
  { src: ejemplo(20781288), type: 'diario', caption: 'Rubio ceniza con ondas' },
];
