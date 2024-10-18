import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './header.css';  // Importa el archivo de estilos CSS

function Header() {
  const navigate = useNavigate();
  
  // Comprobar si el token está en localStorage
  const token = localStorage.getItem('token');
  
  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');  // Eliminar el token del localStorage
    navigate('/login');  // Redirigir a la página de inicio de sesión
  };

  return (
    <header>
      <div className="logo" onClick={() => navigate('/')}>Alquileres GT</div>
      <nav>
        <ul>
          <li onClick={() => navigate('/login/inquilino')}>Inquilinos</li>
          <li onClick={() => navigate('/login/administrador')}>Administradores</li>
          <li onClick={() => navigate('/login/contratos')}>Contratos</li>
          <li onClick={() => navigate('/login/pagos')}>Pagos</li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {/* Mostrar los botones según si el usuario está autenticado o no */}
        {!token ? (
          <>
            <button onClick={() => navigate('/login')}>Iniciar sesión</button>
            <button onClick={() => navigate('/registro')}>Registro</button>
          </>
        ) : (
          <button onClick={handleLogout}>Cerrar sesión</button>
        )}
      </div>
    </header>
  );
};

export default Header;
