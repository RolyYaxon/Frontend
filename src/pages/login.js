import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5095/api/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar el token en el localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', email);
        // Autenticación exitosa y redireccionar según el rol
        if (data.role === 'Administrador') {
          navigate('/administrador-dashboard');
        } else if (data.role === 'Inquilino') {
          navigate('/inquilino-dashboard');
        } else {
          setErrorMessage('Rol no permitido');
        }
      } else {
        // Error en la autenticación
        setErrorMessage(data.message || 'Error en el inicio de sesión');
      }
    } catch (error) {
      setErrorMessage('Ocurrió un error en la solicitud');
    }
  };

  return (
    <div className="login-container">
      <h1>Inicio de sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
