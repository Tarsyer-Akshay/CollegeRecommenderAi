import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JeeMainQuery from './pages/JeeMainQuery';
import JeeAdvancedQuery from './pages/JeeAdvancedQuery';
import JeeAdvancedFullReport from './pages/JeeAdvancedFullReport';
import { AuthProvider } from './context/AuthContext';
import Auth from './pages/Auth';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
                    <Navbar />
                    <main className="pt-16">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/auth" element={<Auth />} />
                            <Route
                                path="/jee-advanced"
                                element={
                                    <ProtectedRoute>
                                        <JeeAdvancedQuery />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/jee-advanced-full-report"
                                element={
                                    <ProtectedRoute>
                                        <JeeAdvancedFullReport />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
