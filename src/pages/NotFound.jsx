import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="legal-page legal-page--center">
      <h1>Página no encontrada</h1>
      <p>La página que buscas no existe o ha cambiado de sitio.</p>
      <Link to="/" className="rv-btn rv-btn--solid">Volver al inicio</Link>
    </div>
  );
}
