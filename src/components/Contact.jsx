import { company, whatsappText } from '../config.js';
import { telLink, whatsappLink } from '../lib/site.js';
import { Phone, WhatsApp } from './Icons.jsx';

// The two ways to ask for an appointment. `text` is the pre-written WhatsApp message.
export function WhatsAppButton({ text = whatsappText.general, children = 'Pedir cita por WhatsApp', className = 'rv-btn rv-btn--solid' }) {
  return (
    <a className={className} href={whatsappLink(company.whatsapp, text)} target="_blank" rel="noopener noreferrer">
      <WhatsApp width={18} height={18} /> {children}
    </a>
  );
}

export function CallButton({ number = company.phone, children, className = 'rv-btn rv-btn--line' }) {
  return (
    <a className={className} href={telLink(number)}>
      <Phone width={17} height={17} /> {children ?? `Llamar · ${number}`}
    </a>
  );
}
