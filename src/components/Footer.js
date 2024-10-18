import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Alquileres GT</h4>
          <p>Encuentra tu propiedad ideal con nosotros.</p>
        </div>

        <div className="footer-section social-icons">
          <h4>Síguenos</h4>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.x.com" target="_blank" rel="noreferrer" aria-label="X">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>

        <div className="footer-section">
          <h4>Suscríbete a nuestro boletín</h4>
          <div className="newsletter">
            <input type="email" placeholder="Tu dirección de email" />
            <button>Suscribirse</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Alquileres GT. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
