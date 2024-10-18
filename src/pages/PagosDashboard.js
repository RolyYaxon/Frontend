import React from 'react';
import './Dashboard.css'; // Usar el mismo archivo CSS para mantener consistencia

const PagosDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Panel de Pagos</h1>
      <p>Aquí puedes gestionar los pagos.</p>

      <div className="dashboard-actions">
        <button>Gestionar Pagos</button>
        <button>Historial de Pagos</button>
      </div>
    </div>
  );
};

export default PagosDashboard;
