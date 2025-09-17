
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
import MgMlToUmPage from './pages/MgMlToUmPage';
import PpmPage from './pages/PpmPage';
import ProteinMolarityPage from './pages/ProteinMolarityPage';
import ConcentrationPage from './pages/ConcentrationPage';
import InfusionRateMinPage from './pages/InfusionRateMinPage';
import UmToMgMlPage from './pages/UmToMgMlPage';
import EndotoxinPage from './pages/EndotoxinPage';
import MolarToMgMlPage from './pages/MolarToMgMlPage';
import DilutionPage from './pages/DilutionPage';

// Blog Posts
import HowToConvertMgToMl from './pages/blog/HowToConvertMgToMl';
import WhyDensityMatters from './pages/blog/WhyDensityMatters';
import TopUsesCalculator from './pages/blog/TopUsesCalculator';
import CommonMistakes from './pages/blog/CommonMistakes';
import WhatIs1mgInMl from './pages/blog/WhatIs1mgInMl';
import WhatIs5mgInMl from './pages/blog/WhatIs5mgInMl';
import HowMuchIs20mgInSyringe from './pages/blog/HowMuchIs20mgInSyringe';
import HowManyMlIs400mg from './pages/blog/HowManyMlIs400mg';


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
            
            {/* Blog Posts */}
            <Route path="/blog/how-to-convert-mg-to-ml" element={<HowToConvertMgToMl />} />
            <Route path="/blog/why-density-matters" element={<WhyDensityMatters />} />
            <Route path="/blog/top-uses-of-mg-to-ml-calculator" element={<TopUsesCalculator />} />
            <Route path="/blog/common-mistakes-in-mg-to-ml-conversion" element={<CommonMistakes />} />
            <Route path="/blog/what-is-1mg-in-ml" element={<WhatIs1mgInMl />} />
            <Route path="/blog/what-is-5mg-in-ml" element={<WhatIs5mgInMl />} />
            <Route path="/blog/how-much-is-20mg-in-ml-syringe" element={<HowMuchIs20mgInSyringe />} />
            <Route path="/blog/how-many-ml-is-400mg" element={<HowManyMlIs400mg />} />

            {/* Calculator Hub */}
            <Route path="/calculators" element={<CalculatorsPage />} />
            
            {/* Existing Calculator Pages */}
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

            {/* New Calculator Pages */}
            <Route path="/mg-ml-to-um" element={<MgMlToUmPage />} />
            <Route path="/mg-ml-to-ppm" element={<PpmPage />} />
            <Route path="/mg-ml-to-molarity-protein" element={<ProteinMolarityPage />} />
            <Route path="/mg-to-ng-ml" element={<ConcentrationPage />} />
            <Route path="/mg-min-to-ml-hr" element={<InfusionRateMinPage />} />
            <Route path="/micromolar-to-mg-ml" element={<UmToMgMlPage />} />
            <Route path="/conversion-from-mg-to-ml" element={<HomePage />} />
            <Route path="/eu-ml-to-eu-mg" element={<EndotoxinPage />} />
            <Route path="/molar-to-mg-ml" element={<MolarToMgMlPage />} />
            <Route path="/dilution-calculator" element={<DilutionPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
