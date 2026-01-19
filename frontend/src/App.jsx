import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JeeMainQuery from './pages/JeeMainQuery';
import JeeAdvancedQuery from './pages/JeeAdvancedQuery';
import JeeAdvancedFullReport from './pages/JeeAdvancedFullReport';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jee-main" element={<JeeMainQuery />} />
            <Route path="/jee-advanced" element={<JeeAdvancedQuery />} />
            <Route path="/jee-advanced-full-report" element={<JeeAdvancedFullReport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;