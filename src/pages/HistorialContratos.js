import React, { useState, useEffect } from 'react';
import './HistorialContratos.css'; // Asegúrate de tener este archivo de estilo
import { useNavigate } from 'react-router-dom'; 

const HistorialContratos = () => {
  const [historialContratos, setHistorialContratos] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchHistorialContratos = async () => {
      try {
        const response = await fetch('http://localhost:5095/api/Contratos/historial'); // Asegúrate de que la URL sea la correcta
        if (!response.ok) {
          throw new Error('Error al obtener el historial de contratos');
        }
        const data = await response.json();
        setHistorialContratos(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchHistorialContratos();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="historial-container">
      <h2>Historial de Contratos</h2>
      <table className="historial-table">
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
          {historialContratos.map((contrato) => (
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

export default HistorialContratos;
