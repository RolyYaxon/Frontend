import React from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import './Dashboard.css'; // Asegúrate de usar el mismo CSS para todos los dashboards

const ContratosDashboard = () => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  return (
    <div className="dashboard-container">
      <h1>Panel de Contratos</h1>
      <p>Aquí puedes gestionar los contratos.</p>

      <div className="dashboard-actions">
        <button onClick={() => navigate('/contratos-actuales')}>
          Ver Contratos Actuales
        </button>
        <button onClick={() => navigate('/historial-contratos')}>
          Historial de Contratos
        </button>
      </div>
    </div>
  );
};

export default ContratosDashboard;
