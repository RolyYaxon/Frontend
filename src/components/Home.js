import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import './Home.css';
import { useNavigate } from 'react-router-dom'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Home() {
  const propertiesRef = useRef(null); // Referencia a la sección "Nuestras Propiedades"
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad
  const navigate = useNavigate(); 
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Comprobar si la sección "Nuestras Propiedades" está visible
      if (propertiesRef.current) {
        const propertiesTop = propertiesRef.current.getBoundingClientRect().top;
        if (propertiesTop < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = () => {
    navigate('/property-detail'); // Navega a la página de detalles
  };

  // Manejador para las imágenes del slider
  const handleImageClick = () => {
    navigate('/property-detail'); // Navega a la página de detalles cuando se haga clic en la imagen
  };
  const Arrow = ({ className, onClick, direction }) => {
    return (
      <div className={className} onClick={onClick}>
        {direction === "prev" ? "⮜" : "⮞"}
      </div>
    );
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <Arrow className="slick-next" direction="next" />,
    prevArrow: <Arrow className="slick-prev" direction="prev" />
  };
  

  return (
    <>
      {/* Primera sección estática */}
      <main className="home-container" style={{ backgroundColor: 'white' }}>
        <section className="hero">
          <div className="hero-content">
            <h1>Visita nuestra propiedad modelo</h1>
            <p>
              Nuestras propiedades se encuentran en una ubicación privilegiada, rodeadas de parques, centros comerciales y zonas de esparcimiento. Ofrece amenidades de primer nivel, incluyendo piscina, gimnasio, salón de eventos y áreas recreativas para niños. Además, cuenta con seguridad las 24 horas y acceso exclusivo para residentes, garantizando un ambiente tranquilo y seguro.
            </p>
            <br>
            </br>
            <button onClick={handleButtonClick}>Ver Propiedad Modelo</button>
            <div className="location-icons">
              
            <h1>Encuentranos en:</h1>
    <a href="https://www.google.com/maps/place/Miraflores+Lima+Peru" target="_blank">
        <img src="https://banner2.cleanpng.com/20240216/erb/transparent-google-maps-logo-google-maps-icon-with-red-pinpoint-indicating-1710875694855.webp" alt="Google Maps" class="icon-google-maps" />
    </a>
    <a href="https://www.waze.com/live-map/directions?to=ll%3A-12.12108792%2C-77.02969897" target="_blank">
        <img src="https://w7.pngwing.com/pngs/867/266/png-transparent-waze-brands-icon-thumbnail.png" alt="Waze" class="icon-waze" />
    </a>
</div>
          </div>
          <div className="hero-image">
            <Slider {...settings}>
           
            <div onClick={handleImageClick}> 
                <img src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726015673/phnvhkzoinonw4oabllr.jpg" alt="Propiedad 4" />
              </div>
           <img src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726015673/nlabgbmwvbz8wc1k3zbr.jpg" alt="Propiedad 4" />
              <div>
                <img src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726015673/ua2dhack0afffaoffv58.jpg" alt="Propiedad 2" />
              </div>
              <div>
                <img src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726015673/i3dghkgoq8mrklgoniyg.jpg" alt="Propiedad 3" />
              </div>
              <div>
                <img src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726015674/nlifyr0nzeqbkuyc2o9c.jpg" alt="Propiedad 4" />
              </div>
            </Slider>
            
          </div>
         
        </section>
        
           
        <section className="section-properties">
     
     <h2>Nuestras Propiedades</h2>
     <div className="properties-grid">
       <div className="property-card">
         <img src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726098386/y45t9bb2siidnmbwhyfw.jpg" alt="Propiedad 1" />
       </div>
       <div className="property-card">
         <img src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726098386/tpekjaybxsv0xisk4zek.jpg" alt="Propiedad 2" />
       </div>
       <div className="property-card">
         <img src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726098387/ju8h4tktgvkv1dzz3rq2.jpg" alt="Propiedad 3" />
       </div>
       <div className="property-card">
         <img src="https://res.cloudinary.com/duy4hlmst/image/upload/v1726098387/srbzbvcg7wjtgl1z38yx.jpg" alt="Propiedad 4" />
       </div>
     </div>
   </section>

        
      </main>

  
     
    </>
  );
}

export default Home;