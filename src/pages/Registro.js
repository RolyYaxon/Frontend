import React, { useState } from 'react';
import './Registro.css';

const Registro = () => {
  const [selectedRole, setSelectedRole] = useState(null); // Almacena el rol seleccionado (admin o inquilino)
  const [formSubmitted, setFormSubmitted] = useState(false); // Almacena el estado del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    adminCode: '',
    propertyAddress: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Maneja la selección de rol (administrador o inquilino)
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(false);

    // Construir el objeto usuario para el backend
    const usuario = {
      Nombre_Completo: formData.name,
      Correo: formData.email,
      Contrasena: formData.password,
      Telefono: formData.phone,
      Rol: selectedRole === 'admin' ? 'Administrador' : 'Inquilino',
      Codigo_Administracion: selectedRole === 'admin' ? formData.adminCode : null,
      Direccion_Propiedad: selectedRole === 'inquilino' ? formData.propertyAddress : null
    };

    try {
      // Llamada a la API para registrar al usuario
      const response = await fetch('http://localhost:5095/api/Usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        setFormSubmitted(true); // Muestra la ventana de confirmación
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Error en el registro');
      }
    } catch (error) {
      setErrorMessage('Ocurrió un error en la solicitud');
    }
  };

  return (
    <div className="registro-container">
      {!formSubmitted ? (
        <>
          {!selectedRole ? (
            <div className="role-selection">
              <h2>¿Deseas registrarte como?</h2>
              <button onClick={() => handleRoleSelection('admin')}>Administrador</button>
              <button onClick={() => handleRoleSelection('inquilino')}>Inquilino</button>
            </div>
          ) : (
            <div className="registro-form">
              <h2>Registro de {selectedRole === 'admin' ? 'Administrador' : 'Inquilino'}</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                {/* Campos específicos para administradores */}
                {selectedRole === 'admin' && (
                  <input
                    type="text"
                    placeholder="Código de administración"
                    name="adminCode"
                    value={formData.adminCode}
                    onChange={handleChange}
                    required
                  />
                )}

                {/* Campos específicos para inquilinos */}
                {selectedRole === 'inquilino' && (
                  <input
                    type="text"
                    placeholder="Dirección de propiedad"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    required
                  />
                )}

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit">Registrarse</button>
              </form>
            </div>
          )}
        </>
      ) : (
        <div className="confirmation-message">
          <h2>¡Registro exitoso!</h2>
          <p>Gracias por registrarte como {selectedRole}.</p>
          <p>Revisa tu correo electrónico para completar la verificación.</p>
        </div>
      )}
    </div>
  );
};

export default Registro;
