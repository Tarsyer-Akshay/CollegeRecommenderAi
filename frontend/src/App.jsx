import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Scrolls to top on every route change
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JeeMainQuery from './pages/JeeMainQuery';
import JeeAdvancedQuery from './pages/JeeAdvancedQuery';
import JeeAdvancedFullReport from './pages/JeeAdvancedFullReport';
import JeeMainsQuery from './pages/JeeMainsQuery';
import JeeMainsFullReport from './pages/JeeMainsFullReport';
import { AuthProvider } from './context/AuthContext';
import Auth from './pages/Auth';
import ProtectedRoute from './components/ProtectedRoute';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function App() {
    return (
        <AuthProvider>
            <Router>
                <ScrollToTop />
                <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
                    <Navbar />
                    <main className="pt-16">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/auth" element={<Auth />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/privacy" element={<PrivacyPolicy />} />
                            <Route path="/terms" element={<Terms />} />
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
                            <Route
                                path="/jee-mains"
                                element={
                                    <ProtectedRoute>
                                        <JeeMainsQuery />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/jee-mains-full-report"
                                element={
                                    <ProtectedRoute>
                                        <JeeMainsFullReport />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
