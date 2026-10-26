import { useEffect, useRef, useState } from 'react';
import { whatsappText } from '../config.js';
import { categories, trabajos } from '../trabajos.js';
import { ArrowLeft, ArrowRight, Close } from './Icons.jsx';
import { WhatsAppButton } from './Contact.jsx';
import Photo from './Photo.jsx';

const PAGE = 12; // photos shown before "Ver más"
const large = (src) => src.replace(/w=\d+/, 'w=1600');
const labelOf = Object.fromEntries(categories.map((c) => [c.id, c.label]));
// "Todos" starts with the photos that are not already in the hero.
const all = [...trabajos.filter((t) => !t.featured), ...trabajos.filter((t) => t.featured)];

// All the work photos, filterable by type. Clicking one opens it large,
// with a WhatsApp link that quotes the photo ("me gustaría algo parecido").
export default function Gallery() {
  const [filter, setFilter] = useState('todos');
  const [shown, setShown] = useState(PAGE);
  const [open, setOpen] = useState(null); // index in `list` of the photo shown large
  const ref = useRef(null);

  const list = filter === 'todos' ? all : trabajos.filter((t) => t.type === filter);
  const visible = list.slice(0, shown);
  const move = (step) => setOpen((n) => (n + step + list.length) % list.length);

  useEffect(() => {
    const dialog = ref.current;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  const pick = (id) => {
    setFilter(id);
    setShown(PAGE);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') move(1);
    if (e.key === 'ArrowLeft') move(-1);
  };

  const count = (id) => (id === 'todos' ? trabajos.length : trabajos.filter((t) => t.type === id).length);
  const current = open !== null ? list[open] : null;

  return (
    <section id="trabajos" className="rv-section rv-gallery">
      <div className="container">
        <header className="rv-section__head">
          <p className="rv-eyebrow">Nuestros trabajos</p>
          <h2 className="rv-title">Peinados <em>de verdad</em></h2>
          <p className="rv-section__intro">Fotos de clientas que han pasado por el salón. Si ves algo que te gusta, pulsa la foto y pregúntanos.</p>
        </header>

        <div className="rv-filters" role="group" aria-label="Filtrar trabajos">
          {[{ id: 'todos', label: 'Todos' }, ...categories].map((c) => (
            <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => pick(c.id)}>
              {c.label} <small>{count(c.id)}</small>
            </button>
          ))}
        </div>

        <div className="rv-gallery__grid" key={filter}>
          {visible.map((t, n) => (
            <button key={t.src} type="button" className="rv-gallery__item" onClick={() => setOpen(n)} aria-label={`Ampliar: ${t.caption}`}>
              <Photo src={t.src} alt={t.caption} className="rv-gallery__img" />
              <span className="rv-gallery__caption">
                <small>{labelOf[t.type]}</small>
                {t.caption}
              </span>
            </button>
          ))}
        </div>

        {list.length > shown && (
          <p className="rv-gallery__more">
            <button type="button" className="rv-btn rv-btn--line" onClick={() => setShown((s) => s + PAGE)}>
              Ver más trabajos ({list.length - shown})
            </button>
          </p>
        )}
      </div>

      <dialog ref={ref} className="rv-lightbox" onClose={() => setOpen(null)} onKeyDown={onKeyDown} onClick={(e) => e.target === ref.current && setOpen(null)} aria-label="Foto ampliada">
        {current && (
          <figure>
            <Photo src={large(current.src)} alt={current.caption} className="rv-lightbox__img" loading="eager" />
            <figcaption>
              <span className="rv-lightbox__text">
                <small>{labelOf[current.type]} · {open + 1} / {list.length}</small>
                {current.caption}
              </span>
              <WhatsAppButton text={whatsappText.photo(current.caption)} className="rv-btn rv-btn--light">Quiero uno así</WhatsAppButton>
            </figcaption>
          </figure>
        )}
        <button type="button" className="rv-lightbox__btn rv-lightbox__btn--prev" onClick={() => move(-1)} aria-label="Anterior"><ArrowLeft /></button>
        <button type="button" className="rv-lightbox__btn rv-lightbox__btn--next" onClick={() => move(1)} aria-label="Siguiente"><ArrowRight /></button>
        <button type="button" className="rv-lightbox__btn rv-lightbox__btn--close" onClick={() => setOpen(null)} aria-label="Cerrar"><Close /></button>
      </dialog>
    </section>
  );
}
