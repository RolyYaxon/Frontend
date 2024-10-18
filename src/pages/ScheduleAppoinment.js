import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScheduleAppoinment.css';

const ScheduleAppointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('userEmail'); // El correo del usuario logueado
    
    console.log("Correo del usuario:", email); // Para verificar en consola

    try {
      const response = await fetch('http://localhost:5095/api/ScheduleAppointment/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Añadir el token JWT si es necesario
        },
        body: JSON.stringify({ email, AppointmentDate: date, AppointmentTime: time }),
      });
  
      if (response.ok) {
        alert('Cita agendada y correo enviado con éxito.');
        navigate('/');
      } else {
        alert('Error al agendar la cita.');
      }
    } catch (error) {
      alert('Error al agendar la cita.');
    }
  };

  // Obtener el email del localStorage para mostrarlo en la interfaz
  const email = localStorage.getItem('userEmail') || 'No disponible';

  return (
    <div className="schedule-appointment-container">
      <h1>Agendar Cita</h1>
      
      {/* Mostrar el correo del usuario logueado */}
      <p><strong>Correo del usuario:</strong> {email}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default ScheduleAppointment;
