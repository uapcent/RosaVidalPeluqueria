import { Link } from 'react-router-dom';
import { company, privacyPurpose } from '../config.js';

// Texto legal de ejemplo. Antes de publicar, debe revisarlo el asesor de la peluquería.
const pages = {
  legal: {
    title: 'Aviso legal',
    sections: [
      ['Datos del titular', `En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), le informamos de que este sitio web pertenece a ${company.legalName}, con NIF ${company.nif} y domicilio en ${company.address}. Teléfono: ${company.phone}.`],
      ['Condiciones de uso', 'El acceso a esta web implica la aceptación de estas condiciones. La persona usuaria se compromete a hacer un uso adecuado de los contenidos ofrecidos.'],
      ['Propiedad intelectual', `Los textos, imágenes y logotipos de esta web pertenecen a ${company.legalName} o a sus licenciantes y no pueden reproducirse sin autorización. Las fotos de clientas se publican con su permiso.`],
      ['Responsabilidad', 'No nos hacemos responsables de los errores u omisiones en los contenidos ni de los daños que pudieran derivarse del uso de esta web.'],
    ],
  },
  privacy: {
    title: 'Política de privacidad',
    sections: [
      ['Responsable del tratamiento', `${company.legalName} (NIF ${company.nif}), ${company.address}. Teléfono: ${company.phone}.`],
      ['Finalidad', privacyPurpose],
      ['Legitimación', 'Su consentimiento, al ponerse en contacto con nosotros (artículo 6.1.a del Reglamento General de Protección de Datos).'],
      ['Conservación', 'Guardamos sus datos solo el tiempo necesario para atender su cita y cumplir con nuestras obligaciones legales.'],
      ['Destinatarios', 'No cedemos sus datos a terceros, salvo obligación legal. Si nos escribe por WhatsApp, ese servicio lo presta WhatsApp Ireland Ltd. según sus propias condiciones.'],
      ['Sus derechos', `Puede pedir el acceso, rectificación, supresión, oposición, limitación o portabilidad de sus datos en el salón o llamando al ${company.phone}. Si cree que no hemos tratado bien sus datos, puede reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`],
    ],
  },
  cookies: {
    title: 'Política de cookies',
    sections: [
      ['¿Qué son las cookies?', 'Son pequeños archivos que una web guarda en su dispositivo cuando la visita.'],
      ['Cookies que usamos', 'Esta web no utiliza cookies propias de análisis ni de publicidad, por lo que no necesitamos su consentimiento (artículo 22.2 de la LSSI-CE).'],
      ['Cómo gestionarlas', 'Puede permitir, bloquear o borrar las cookies desde la configuración de su navegador.'],
    ],
  },
};

export default function Legal({ page }) {
  const { title, sections } = pages[page];
  return (
    <div className="legal-page">
      <p className="legal-page__back">
        <Link to="/">← Volver al inicio</Link>
      </p>
      <h1>{title}</h1>
      {sections.map(([h, body]) => (
        <section key={h}>
          <h2>{h}</h2>
          <p>{body}</p>
        </section>
      ))}
    </div>
  );
}

export function LegalLinks() {
  return (
    <>
      <Link to="/aviso-legal">Aviso legal</Link>
      <Link to="/politica-de-privacidad">Privacidad</Link>
      <Link to="/politica-de-cookies">Cookies</Link>
    </>
  );
}

export const legalRoutes = [
  ['aviso-legal', 'legal'],
  ['politica-de-privacidad', 'privacy'],
  ['politica-de-cookies', 'cookies'],
];
