import React from 'react';
import './AdministradorDashboard.css';

const AdministradorDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <h1>Bienvenido al Panel de Administrador</h1>
      <p>Aquí puedes gestionar los usuarios, contratos y pagos.</p>

      <div className="dashboard-actions">
        <button>Gestionar Usuarios</button>
        <button>Ver Contratos</button>
        <button>Gestionar Pagos</button>
      </div>
    </div>
  );
};

export default AdministradorDashboard;
