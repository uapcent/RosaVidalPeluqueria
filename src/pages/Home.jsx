import { Link } from 'react-router-dom';
import Photo from '../components/Photo.jsx';
import Gallery from '../components/Gallery.jsx';
import Zebra from '../components/Zebra.jsx';
import { CallButton, WhatsAppButton } from '../components/Contact.jsx';
import { Clock, MapPin } from '../components/Icons.jsx';
import { company, eventSteps, hours, hoursNote, images, services, story, whatsappText } from '../config.js';
import { categories, trabajos } from '../trabajos.js';
import { directionsLink, telLink } from '../lib/site.js';
import { hoursRows } from '../lib/hours.js';
import { price } from '../lib/format.js';

const labelOf = Object.fromEntries(categories.map((c) => [c.id, c.label]));

export default function Home() {
  const featured = trabajos.filter((t) => t.featured).slice(0, 4);

  return (
    <>
      <section className="rv-hero">
        <div className="container rv-hero__text">
          <p className="rv-eyebrow">Peluquería en {company.town}</p>
          <h1>Peinados para <em>tus días especiales</em></h1>
          <p className="rv-hero__lead">Novias, madrinas, invitadas y comuniones. Y el corte de cada mes, como siempre.</p>
          <div className="rv-hero__actions">
            <WhatsAppButton />
            <CallButton />
          </div>
        </div>
        <div className="rv-hero__photos">
          {featured.map((t) => (
            <Link key={t.src} to="/#trabajos" className="rv-hero__item">
              <Photo src={t.src} alt={t.caption} className="rv-hero__img" loading="eager" sizes="(max-width: 760px) 72vw, (max-width: 1360px) 25vw, 330px" />
              <span className="rv-hero__caption"><small>{labelOf[t.type]}</small>{t.caption}</span>
            </Link>
          ))}
        </div>
      </section>

      <Gallery />

      <section id="eventos" className="rv-section rv-events">
        <div className="container">
          <header className="rv-section__head">
            <p className="rv-eyebrow">Bodas, comuniones y fiestas</p>
            <h2 className="rv-title">Para tu día, <em>con tiempo</em></h2>
          </header>
          <ol className="rv-steps">
            {eventSteps.map((s, i) => (
              <li key={s.title}>
                <span className="rv-steps__n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="rv-events__cta">
            <WhatsAppButton text={whatsappText.event}>Reservar fecha por WhatsApp</WhatsAppButton>
          </p>
        </div>
      </section>

      <section id="precios" className="rv-section rv-prices">
        <div className="container rv-prices__grid">
          <div className="rv-prices__side">
            <p className="rv-eyebrow">Servicios</p>
            <h2 className="rv-title">Precios <em>orientativos</em></h2>
            <p>El precio final depende del largo del pelo y del trabajo. Pregúntanos sin compromiso y te lo decimos antes de empezar.</p>
          </div>
          <div className="rv-prices__list">
            {services.map((group) => (
              <div key={group.category} className="rv-prices__group">
                <h3>{group.category}</h3>
                {group.note && <p className="rv-prices__note">{group.note}</p>}
                <ul>
                  {group.items.map((s) => (
                    <li key={s.name}>
                      <div className="rv-prices__line">
                        <span>{s.name}</span>
                        <span className="rv-prices__dots" aria-hidden="true" />
                        <span className="rv-prices__amount"><small>desde</small> {price(s.from)}</span>
                      </div>
                      {s.detail && <p className="rv-prices__detail">{s.detail}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="historia" className="rv-section rv-story">
        <div className="container rv-story__grid">
          <div className="rv-story__photos">
            <Photo src={images.story.src} alt={images.story.alt} className="rv-story__img rv-story__img--big" />
            <Photo src={images.storySmall.src} alt={images.storySmall.alt} className="rv-story__img rv-story__img--small" sizes="(max-width: 960px) 46vw, 270px" />
          </div>
          <div className="rv-story__text">
            <p className="rv-eyebrow">Nuestra historia</p>
            <h2 className="rv-title">{story.title}</h2>
            {story.paragraphs.map((p, i) => <p key={i} className={i === 0 ? 'rv-lead' : undefined}>{p}</p>)}
            <div className="rv-story__future">
              <h3>{story.future.title}</h3>
              <p>{story.future.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cita" className="rv-section rv-contact">
        <div className="container rv-contact__grid">
          <div className="rv-card">
            <Zebra className="rv-card__zebra" height={200} seed={3} />
            <div className="rv-card__inner">
              <p className="rv-card__name">{company.name}</p>
              <p className="rv-card__tag">{company.tagline}</p>
              <p className="rv-card__address">{company.street}<br />{company.townShort} {company.postcode}</p>
              <p className="rv-card__phones">
                <a href={telLink(company.phone)}>Tlf. y WhatsApp: {company.phone}</a>
              </p>
            </div>
          </div>

          <div className="rv-contact__text">
            <p className="rv-eyebrow">Pide tu cita</p>
            <h2 className="rv-title">Llámanos o <em>escríbenos</em></h2>
            <p className="rv-lead">Las citas las damos por teléfono y por WhatsApp. Te contestamos en cuanto dejamos las tijeras.</p>
            <div className="rv-contact__actions">
              <WhatsAppButton>Escribir por WhatsApp</WhatsAppButton>
              <CallButton />
            </div>

            <div className="rv-contact__info">
              <div>
                <h3><Clock width={18} height={18} /> Horario</h3>
                <dl className="rv-hours">
                  {hoursRows(hours).map(([days, text]) => (
                    <div key={days}><dt>{days}</dt><dd>{text}</dd></div>
                  ))}
                </dl>
                <p className="rv-hours__note">{hoursNote}</p>
              </div>
              <div>
                <h3><MapPin width={18} height={18} /> Dónde estamos</h3>
                <p>{company.street}<br />{company.postcode} {company.town}<br />{company.province}</p>
                <a className="rv-link" href={directionsLink(company.address)} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
