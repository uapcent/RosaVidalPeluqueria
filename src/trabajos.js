// ---------------------------------------------------------------
// Fotos de trabajos (la galería de la portada).
//
// Para añadir una foto nueva:
//   1. Guarda la foto en public/trabajos/ (por ejemplo boda-marta.jpg).
//      Mejor en vertical y de unos 1200 px de ancho.
//   2. Añade una línea AL PRINCIPIO de la lista de abajo:
//        { src: foto('boda-marta.jpg'), type: 'recogidos', caption: 'Recogido bajo con flores' },
//   3. Si quieres que salga en la portada grande, añade  featured: true
//      (se ven las cuatro primeras marcadas; en la galería salen al final).
//
// type tiene que ser uno de los de `categories`.
// Las copias pequeñas para móviles se crean solas al publicar (image-plugin.js).
// Los textos (caption) se han puesto mirando las fotos: corrígelos si alguno no es exacto.
// Las fotos originales, sin reducir, están en fotos-originales/ (no se publican).
// ---------------------------------------------------------------
const foto = (file) => `${import.meta.env.BASE_URL}trabajos/${file}`;

export const categories = [
  { id: 'recogidos', label: 'Recogidos' },
  { id: 'coletas', label: 'Coletas y trenzas' },
  { id: 'ondas', label: 'Ondas y semirrecogidos' },
  { id: 'color', label: 'Color y cortes' },
];

export const trabajos = [
  { src: foto('fallera-peinetas-oro.jpg'), type: 'recogidos', caption: 'Recogido de fallera con agujas doradas', featured: true },
  // { src: foto('rizos-pamela.jpg'), type: 'ondas', caption: 'Rizos cortos con pamela de invitada', featured: true },
  { src: foto('recogido-romantico-perlas.jpg'), type: 'recogidos', caption: 'Recogido romántico con horquilla de perlas', featured: true },
  { src: foto('color-turquesa.jpg'), type: 'color', caption: 'Color turquesa en media melena', featured: true },
  { src: foto('coleta-alta-ondas.jpg'), type: 'coletas', caption: 'Coleta alta con ondas' },
  { src: foto('ondas-vintage.jpg'), type: 'ondas', caption: 'Ondas vintage en rubio' },
  { src: foto('mechon-platino.jpg'), type: 'color', caption: 'Mechón platino delantero' },
  { src: foto('mono-trenzado-perlas.jpg'), type: 'recogidos', caption: 'Moño trenzado con perlas'},
  { src: foto('trenza-espiga.jpg'), type: 'coletas', caption: 'Trenza de espiga deshecha' },
  { src: foto('semirrecogido-hoja-dorada.jpg'), type: 'ondas', caption: 'Semirrecogido con hoja dorada', featured: true },
  { src: foto('mantilla-negra.jpg'), type: 'recogidos', caption: 'Mantilla de encaje negro' },
  { src: foto('color-magenta.jpg'), type: 'color', caption: 'Color magenta en melena larga' },
  { src: foto('recogido-deshecho.jpg'), type: 'recogidos', caption: 'Recogido bajo deshecho' },
  { src: foto('coleta-boho-trenzada.jpg'), type: 'coletas', caption: 'Coleta boho con trenzado' },
  { src: foto('ondas-al-agua-corto.jpg'), type: 'ondas', caption: 'Ondas al agua en pelo corto' },
  { src: foto('mechas-rubias.jpg'), type: 'color', caption: 'Mechas rubias' },
  { src: foto('fallera-mono-dorado.jpg'), type: 'recogidos', caption: 'Moño de fallera con aderezo dorado' },
  { src: foto('coleta-pulida-anilla.jpg'), type: 'coletas', caption: 'Coleta pulida con anilla plateada' },
  { src: foto('ondas-retro-castano.jpg'), type: 'ondas', caption: 'Ondas retro en castaño' },
  { src: foto('recogido-ondas-esculpidas.jpg'), type: 'recogidos', caption: 'Recogido con ondas esculpidas' },
  { src: foto('coleta-burbuja.jpg'), type: 'coletas', caption: 'Coleta de burbujas' },
  { src: foto('media-melena-mechas.jpg'), type: 'color', caption: 'Media melena con mechas' },
  { src: foto('mono-pulido-flequillo.jpg'), type: 'recogidos', caption: 'Moño pulido con mechones sueltos' },
  { src: foto('ondas-rubias.jpg'), type: 'ondas', caption: 'Ondas rubias sueltas' },
  { src: foto('trenza-texturizada.jpg'), type: 'coletas', caption: 'Trenza texturizada' },
  { src: foto('mono-bajo-texturizado.jpg'), type: 'recogidos', caption: 'Moño bajo texturizado' },
  { src: foto('melena-larga-ondas.jpg'), type: 'ondas', caption: 'Melena larga con ondas' },
  { src: foto('capas-rubias.jpg'), type: 'color', caption: 'Corte a capas en rubio' },
  { src: foto('trenza-lateral-lisa.jpg'), type: 'coletas', caption: 'Liso con trenza lateral' },
  { src: foto('mono-efecto-mojado.jpg'), type: 'recogidos', caption: 'Moño con efecto mojado' },
  { src: foto('media-melena-texturizada.jpg'), type: 'ondas', caption: 'Media melena texturizada' },
  { src: foto('corte-corto.jpg'), type: 'color', caption: 'Corte corto' },
  { src: foto('coleta-baja-rizada.jpg'), type: 'coletas', caption: 'Coleta baja con rizos' },
  { src: foto('mono-bajo-torcido.jpg'), type: 'recogidos', caption: 'Moño bajo torcido' },
  { src: foto('liso-raya-lateral.jpg'), type: 'ondas', caption: 'Liso pulido con raya lateral' },
  { src: foto('trenza-rizos.jpg'), type: 'coletas', caption: 'Trenza de rizos' },
];
