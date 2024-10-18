import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyDetails.css'; // Importa el CSS personalizado

const PropertyDetail = () => {
  const navigate = useNavigate();

  // Función para manejar la redirección cuando se presiona el botón de agendar cita
  const handleScheduleAppointment = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      // Si no está autenticado, redirigir al login
      navigate('/login');
    } else {
      // Si está autenticado, redirigir a la página de agendar cita
      navigate('/schedule-appointment');
    }
  };

  return (
    <div className="property-detail-container">
      <main className="main-content">
        <section className="property-section">
          <h1 className="property-title">Casa en la Cañada</h1>
          <div className="property-info">
            <div className="property-details">
              <ul>
                <li>🛏️ 4 Habitaciones</li>
                <li>🚪 2 Baños</li>
                <li>🚗 2 Garajes</li>
                <li>🏊‍♂️ Piscina</li>
                <li>🌳 Amplio jardín con áreas verdes</li>
                <li>🏞️ Vistas panorámicas</li>
              </ul>
              {/* Cambiar el botón para llamar a la función que verifica la autenticación */}
              <button className="btn" onClick={handleScheduleAppointment}>
                Agendar una cita
              </button>
            </div>

            {/* Sección de imágenes de la propiedad */}
            <div className="property-images">
              <div className="property-img">
                <img
                  src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726015673/phnvhkzoinonw4oabllr.jpg"
                  alt="Propiedad 4"
                  className="property-image"
                />
              </div>
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.990021283095!2d-90.55223908545333!3d14.610626989792156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890b1c503ca68b%3A0xed69a44c661c8e3b!2sMiraflores%2C%20Guatemala!5e0!3m2!1ses-419!2sgt!4v1726105978937!5m2!1ses-419!2sgt"
                  width="100%"
                  height="350"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios principales */}
        <section className="benefits-section">
          <div className="benefit primary-benefit">
            <h2>Ambiente de Lujo y Confort</h2>
            <p>
              Disfruta de una experiencia de vida incomparable con espacios amplios y acabados de lujo, diseñados para ofrecer el máximo confort en cada rincón. 
              Ideal para quienes buscan una residencia moderna, funcional y con estilo.
            </p>
          </div>

          {/* Beneficios secundarios */}
          <div className="secondary-benefits">
            <div className="benefit">
              <h3>Zona Segura y Privada</h3>
              <p>
                Ubicada en un vecindario exclusivo con seguridad 24/7, esta propiedad garantiza privacidad y tranquilidad para ti y tu familia.
                Con acceso controlado y vigilancia constante, te sentirás protegido en todo momento.
              </p>
            </div>
            <div className="benefit">
              <h3>Cercanía a Servicios y Comercios</h3>
              <p>
                A solo minutos de los principales centros comerciales, restaurantes y escuelas de prestigio. 
                Tendrás todo lo que necesitas al alcance de tu mano sin perder la tranquilidad de vivir en una zona residencial.
              </p>
            </div>
            <div className="benefit">
              <h3>Espacios para el Entretenimiento</h3>
              <p>
                Disfruta de áreas recreativas como piscina, salón de eventos, gimnasio equipado y un hermoso jardín donde podrás relajarte o compartir momentos inolvidables con amigos y familiares.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PropertyDetail;
