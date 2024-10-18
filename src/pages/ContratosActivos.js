import React, { useState, useEffect } from 'react';
import './ContratosActivos.css'; // Importa el archivo CSS
import { useNavigate } from 'react-router-dom'; 
const ContratosActivos = () => {
  const [contratos, setContratos] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchContratos = async () => {
      try {
        const response = await fetch('http://localhost:5095/api/Contratos/activos');
        if (!response.ok) {
          throw new Error('Error al obtener los contratos');
        }
        const data = await response.json();
        setContratos(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchContratos();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="contratos-container">
      <h2>Contratos Actuales</h2>
      <table className="contratos-table">
        <thead>
          <tr>
            <th>ID Contrato</th>
            <th>Inquilino</th>
            <th>Propiedad</th>
            <th>Monto Alquiler</th>
            <th>Fecha Inicio</th>
            <th>Fecha Finalización</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {contratos.map((contrato) => (
            <tr key={contrato.id}>
              <td>{contrato.id}</td>
              <td>{contrato.id_inquilino}</td>
              <td>{contrato.id_propiedad}</td>
              <td>{contrato.monto_alquiler}</td>
              <td>{contrato.fecha_inicio}</td>
              <td>{contrato.fecha_finalizacion}</td>
              <td>{contrato.estado_contrato}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
      <button onClick={() => navigate('/contratos-dashboard')}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default ContratosActivos;
