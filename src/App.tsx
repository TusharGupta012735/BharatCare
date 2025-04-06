import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AppointmentBooking from './pages/AppointmentBooking';
import ClinicFinder from './pages/ClinicFinder';
import EmergencyAssistance from './pages/EmergencyAssistance';
import HealthProfile from './pages/HealthProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<AppointmentBooking />} />
            <Route path="/clinics" element={<ClinicFinder />} />
            <Route path="/emergency" element={<EmergencyAssistance />} />
            <Route path="/profile" element={<HealthProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;