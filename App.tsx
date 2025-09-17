
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import CalculatorsPage from './pages/CalculatorsPage';
import MlToMgPage from './pages/MlToMgPage';
import MgToMlMedicinePage from './pages/MgToMlMedicinePage';
import MolarityPage from './pages/MolarityPage';
import DoseCalculatorPage from './pages/DoseCalculatorPage';
import MlToMgMedicinePage from './pages/MlToMgMedicinePage';
import SyringeCalculatorPage from './pages/SyringeCalculatorPage';
import InfusionRatePage from './pages/InfusionRatePage';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            
            {/* Calculator Hub */}
            <Route path="/calculators" element={<CalculatorsPage />} />
            
            {/* New Calculator Pages */}
            <Route path="/mg-to-ml" element={<HomePage />} />
            <Route path="/mg-to-ml-conversion" element={<HomePage />} />
            <Route path="/ml-to-mg" element={<MlToMgPage />} />
            <Route path="/ml-to-mg-conversion" element={<MlToMgPage />} />
            <Route path="/mg-to-ml-medicine" element={<MgToMlMedicinePage />} />
            <Route path="/mg-to-ml-drug-conversion" element={<MgToMlMedicinePage />} />
            <Route path="/dose-calculator-mg-to-ml" element={<DoseCalculatorPage />} />
            <Route path="/mg-to-ml-syringe" element={<SyringeCalculatorPage />} />
            <Route path="/ml-to-mg-medicine" element={<MlToMgMedicinePage />} />
            <Route path="/mg-hr-to-ml-hr" element={<InfusionRatePage />} />
            <Route path="/mg-ml-to-molarity" element={<MolarityPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;