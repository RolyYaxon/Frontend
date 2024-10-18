import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './components/Home';
import Registro  from './pages/Registro';
import Login from './pages/login';  // Importa la página de login
import InquilinoDashboard from './pages/InquilinosDashboard'; // Crea este componente
import AdministradorDashboard from './pages/AdministradorDashboard'; // Crea este componente
import ContratosDashboard from './pages/ContratosDashboard'; // Crea este componente
import PagosDashboard from './pages/PagosDashboard'; // Crea este componente
import ContratosActivos from './pages/ContratosActivos';
import HistorialContratos from './pages/HistorialContratos';
import PropertyDetail from  './pages/PropertyDetail';
import ScheduleAppointment from './pages/ScheduleAppoinment';
import './App.css';

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); 
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} /> 
        <Route path="/login/:role" element={<Login />} /> {/* Ruta para login basado en el rol */}
        <Route path="/inquilino-dashboard" element={<InquilinoDashboard />} />
        <Route path="/administrador-dashboard" element={<AdministradorDashboard />} />
        <Route path="/contratos-dashboard" element={<ContratosDashboard />} />
        <Route path="/pagos-dashboard" element={<PagosDashboard />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/contratos-actuales" element={<ContratosActivos />} />
        <Route path="/historial-contratos" element={<HistorialContratos />} />
        <Route path="/property-detail" element={<PropertyDetail />} />
        <Route path="/property-detail" element={<PropertyDetail isAuthenticated={isAuthenticated} />} />
        <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
