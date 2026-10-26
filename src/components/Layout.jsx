import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { company, hours } from '../config.js';
import { directionsLink, telLink } from '../lib/site.js';
import { hoursRows } from '../lib/hours.js';
import { LegalLinks } from '../pages/Legal.jsx';
import { Close, Menu, Phone } from './Icons.jsx';
import { CallButton, WhatsAppButton } from './Contact.jsx';
import Zebra from './Zebra.jsx';

const sections = [['#trabajos', 'Trabajos'], ['#eventos', 'Eventos'], ['#precios', 'Precios'], ['#historia', 'Historia'], ['#cita', 'Contacto']];

export function Logo({ className = '' }) {
  return (
    <span className={`rv-logo ${className}`}>
      <span className="rv-logo__name">{company.name}</span>
      <span className="rv-logo__tag">{company.tagline}</span>
    </span>
  );
}

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <nav className="rv-callbar" aria-label="Pedir cita">
        <a href={telLink(company.phone)}><Phone width={18} height={18} /> Llamar</a>
        <WhatsAppButton className="rv-callbar__wa">WhatsApp</WhatsAppButton>
      </nav>
    </>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  useEffect(() => setMenuOpen(false), [pathname, hash]);
  useEffect(() => {
    document.documentElement.classList.toggle('rv-locked', menuOpen);
    return () => document.documentElement.classList.remove('rv-locked');
  }, [menuOpen]);

  const links = sections.map(([href, label]) => <Link key={href} to={`/${href}`}>{label}</Link>);

  return (
    <header className="rv-header">
      <div className="container rv-header__inner">
        <Link to="/" className="rv-header__home" aria-label={`${company.name} ${company.tagline}, inicio`}>
          <Logo />
        </Link>
        <nav className="rv-header__nav" aria-label="Secciones">{links}</nav>
        <div className="rv-header__actions">
          <WhatsAppButton className="rv-btn rv-btn--solid rv-btn--small">Pedir cita</WhatsAppButton>
          <button type="button" className="rv-header__burger" aria-expanded={menuOpen} aria-controls="rv-menu" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <Close /> : <Menu />} <span className="sr-only">Menú</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="rv-menu" className="rv-menu" aria-label="Menú">
          {links}
          <div className="rv-menu__actions">
            <WhatsAppButton />
            <CallButton />
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="rv-footer">
      <Zebra edge="top" height={70} seed={19} className="rv-footer__zebra" />
      <div className="container rv-footer__grid">
        <div>
          <Logo className="rv-logo--light" />
          <p className="rv-footer__town">{company.town} · {company.province}</p>
        </div>
        <div>
          <h2>Dónde estamos</h2>
          <p>{company.street}<br />{company.postcode} {company.town}</p>
          <a href={directionsLink(company.address)} target="_blank" rel="noopener noreferrer">Cómo llegar →</a>
        </div>
        <div>
          <h2>Cita</h2>
          <p>Teléfono: <a href={telLink(company.phone)}>{company.phone}</a></p>
          <p>Móvil y WhatsApp: <a href={telLink(company.mobile)}>{company.mobile}</a></p>
          <p><WhatsAppButton className="rv-footer__wa">Escribir por WhatsApp</WhatsAppButton></p>
        </div>
        <div>
          <h2>Horario</h2>
          {hoursRows(hours).map(([days, text]) => <p key={days}>{days}: {text}</p>)}
        </div>
      </div>
      <div className="container rv-footer__legal">
        <span>© {new Date().getFullYear()} {company.name} {company.tagline}</span>
        <LegalLinks />
      </div>
    </footer>
  );
}
