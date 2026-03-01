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
import IITBombay from './pages/colleges/IITBombay';
import IITKharagpur from './pages/colleges/IITKharagpur';
import IITMadras from './pages/colleges/IITMadras';
import IITKanpur from './pages/colleges/IITKanpur';
import IITDelhi from './pages/colleges/IITDelhi';
import IITGuwahati from './pages/colleges/IITGuwahati';
import IITRoorkee from './pages/colleges/IITRoorkee';
import IITBhubaneswar from './pages/colleges/IITBhubaneswar';
import IITGandhinagar from './pages/colleges/IITGandhinagar';
import IITHyderabad from './pages/colleges/IITHyderabad';
import IITJodhpur from './pages/colleges/IITJodhpur';
import IITPatna from './pages/colleges/IITPatna';
import IITRopar from './pages/colleges/IITRopar';
import IITIndore from './pages/colleges/IITIndore';
import IITMandi from './pages/colleges/IITMandi';
import IITBHUVaranasi from './pages/colleges/IITBHUVaranasi';
import IITPalakkad from './pages/colleges/IITPalakkad';
import IITTirupati from './pages/colleges/IITTirupati';
import IITDhanbad from './pages/colleges/IITDhanbad';
import IITBhilai from './pages/colleges/IITBhilai';
import IITGoa from './pages/colleges/IITGoa';
import IITJammu from './pages/colleges/IITJammu';
import IITDharwad from './pages/colleges/IITDharwad';
import NITTrichy from './pages/colleges/NITTrichy';
import NITSurathkal from './pages/colleges/NITSurathkal';
import NITWarangal from './pages/colleges/NITWarangal';
import NITCalicut from './pages/colleges/NITCalicut';
import NITRourkela from './pages/colleges/NITRourkela';
import NITDurgapur from './pages/colleges/NITDurgapur';
import NITKurukshetra from './pages/colleges/NITKurukshetra';
import NITSilchar from './pages/colleges/NITSilchar';
import NITHamirpur from './pages/colleges/NITHamirpur';
import NITJamshedpur from './pages/colleges/NITJamshedpur';
import NITPatna from './pages/colleges/NITPatna';
import NITRaipur from './pages/colleges/NITRaipur';
import NITSrinagar from './pages/colleges/NITSrinagar';
import NITAgartala from './pages/colleges/NITAgartala';
import NITArunachal from './pages/colleges/NITArunachal';
import NITManipur from './pages/colleges/NITManipur';
import NITMeghalaya from './pages/colleges/NITMeghalaya';
import NITMizoram from './pages/colleges/NITMizoram';
import NITNagaland from './pages/colleges/NITNagaland';
import NITSikkim from './pages/colleges/NITSikkim';
import NITUttarakhand from './pages/colleges/NITUttarakhand';
import NITDelhi from './pages/colleges/NITDelhi';
import NITGoa from './pages/colleges/NITGoa';
import NITPuducherry from './pages/colleges/NITPuducherry';
import NITAndhraPradesh from './pages/colleges/NITAndhraPradesh';
import MNITJaipur from './pages/colleges/MNITJaipur';
import MANITBhopal from './pages/colleges/MANITBhopal';
import MNNITAllahabad from './pages/colleges/MNNITAllahabad';
import NITJalandhar from './pages/colleges/NITJalandhar';
import SVNITSurat from './pages/colleges/SVNITSurat';
import Colleges from './pages/Colleges';

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
                            <Route path="/colleges" element={<Colleges />} />
                            <Route path="/colleges/iit-bombay" element={<IITBombay />} />
                            <Route path="/colleges/iit-kharagpur" element={<IITKharagpur />} />
                            <Route path="/colleges/iit-madras" element={<IITMadras />} />
                            <Route path="/colleges/iit-kanpur" element={<IITKanpur />} />
                            <Route path="/colleges/iit-delhi" element={<IITDelhi />} />
                            <Route path="/colleges/iit-guwahati" element={<IITGuwahati />} />
                            <Route path="/colleges/iit-roorkee" element={<IITRoorkee />} />
                            <Route path="/colleges/iit-bhubaneswar" element={<IITBhubaneswar />} />
                            <Route path="/colleges/iit-gandhinagar" element={<IITGandhinagar />} />
                            <Route path="/colleges/iit-hyderabad" element={<IITHyderabad />} />
                            <Route path="/colleges/iit-jodhpur" element={<IITJodhpur />} />
                            <Route path="/colleges/iit-patna" element={<IITPatna />} />
                            <Route path="/colleges/iit-ropar" element={<IITRopar />} />
                            <Route path="/colleges/iit-indore" element={<IITIndore />} />
                            <Route path="/colleges/iit-mandi" element={<IITMandi />} />
                            <Route path="/colleges/iit-bhu-varanasi" element={<IITBHUVaranasi />} />
                            <Route path="/colleges/iit-palakkad" element={<IITPalakkad />} />
                            <Route path="/colleges/iit-tirupati" element={<IITTirupati />} />
                            <Route path="/colleges/iit-dhanbad" element={<IITDhanbad />} />
                            <Route path="/colleges/iit-bhilai" element={<IITBhilai />} />
                            <Route path="/colleges/iit-goa" element={<IITGoa />} />
                            <Route path="/colleges/iit-jammu" element={<IITJammu />} />
                            <Route path="/colleges/iit-dharwad" element={<IITDharwad />} />
                            <Route path="/colleges/nit-trichy" element={<NITTrichy />} />
                            <Route path="/colleges/nit-surathkal" element={<NITSurathkal />} />
                            <Route path="/colleges/nit-warangal" element={<NITWarangal />} />
                            <Route path="/colleges/national-institute-of-technology-calicut-2025-report" element={<NITCalicut />} />
                            <Route path="/colleges/national-institute-of-technology-rourkela-2025-admission" element={<NITRourkela />} />
                            <Route path="/colleges/national-institute-of-technology-durgapur-2025-admission-guide" element={<NITDurgapur />} />
                            <Route path="/colleges/nit-kurukshetra" element={<NITKurukshetra />} />
                            <Route path="/colleges/nit-silchar" element={<NITSilchar />} />
                            <Route path="/colleges/nit-hamirpur" element={<NITHamirpur />} />
                            <Route path="/colleges/nit-jamshedpur" element={<NITJamshedpur />} />
                            <Route path="/colleges/nit-patna" element={<NITPatna />} />
                            <Route path="/colleges/nit-raipur" element={<NITRaipur />} />
                            <Route path="/colleges/nit-srinagar" element={<NITSrinagar />} />
                            <Route path="/colleges/nit-agartala" element={<NITAgartala />} />
                            <Route path="/colleges/nit-arunachal-pradesh" element={<NITArunachal />} />
                            <Route path="/colleges/nit-manipur" element={<NITManipur />} />
                            <Route path="/colleges/nit-meghalaya" element={<NITMeghalaya />} />
                            <Route path="/colleges/nit-mizoram" element={<NITMizoram />} />
                            <Route path="/colleges/nit-nagaland" element={<NITNagaland />} />
                            <Route path="/colleges/nit-sikkim" element={<NITSikkim />} />
                            <Route path="/colleges/nit-uttarakhand" element={<NITUttarakhand />} />
                            <Route path="/colleges/nit-delhi" element={<NITDelhi />} />
                            <Route path="/colleges/nit-goa" element={<NITGoa />} />
                            <Route path="/colleges/nit-puducherry" element={<NITPuducherry />} />
                            <Route path="/colleges/nit-andhra-pradesh" element={<NITAndhraPradesh />} />
                            <Route path="/colleges/mnit-jaipur" element={<MNITJaipur />} />
                            <Route path="/colleges/manit-bhopal" element={<MANITBhopal />} />
                            <Route path="/colleges/mnnit-allahabad" element={<MNNITAllahabad />} />
                            <Route path="/colleges/nit-jalandhar" element={<NITJalandhar />} />
                            <Route path="/colleges/svnit-surat" element={<SVNITSurat />} />
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
