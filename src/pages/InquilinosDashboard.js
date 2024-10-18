import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar el hook para navegación
import './InquilinosDashboard.css';

const InquilinosDashboard = () => {
  const navigate = useNavigate(); // Hook para la navegación

  // Funciones de manejo para cada botón
  const handlePagosClick = () => {
    navigate('/pagos-dashboard'); // Navegar a la página de pagos
  };

  const handleContratosClick = () => {
    navigate('/contratos-dashboard'); // Navegar a la página de contratos
  };

  return (
    <div className="inquilino-dashboard-container">
      <h1>Bienvenido al Panel de Inquilino</h1>
      <p>Aquí puedes gestionar tus pagos y contratos.</p>

      <div className="dashboard-actions">
        <button onClick={handlePagosClick}>Gestionar Pagos</button>
        <button onClick={handleContratosClick}>Ver Contratos</button>
      </div>
    </div>
  );
};

export default InquilinosDashboard;
