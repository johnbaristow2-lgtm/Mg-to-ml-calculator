import React from 'react';
import { Link } from 'react-router-dom';
import InfusionRateCalculator from '../components/InfusionRateCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const InfusionRatePage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG/hr to ML/hr Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Calculate the required infusion rate in milliliters per hour (ml/hr) based on a prescribed dose rate in milligrams per hour (mg/hr).
            </p>
          </div>
          <div className="mt-12">
            <InfusionRateCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">IV Drip Rate Calculations</h2>
            <p>In healthcare, intravenous (IV) medications are often prescribed with a dose rate (e.g., mg/hr). However, infusion pumps are set in volume per hour (ml/hr). This calculator bridges that gap, ensuring the pump is set correctly to deliver the intended dose over time.</p>
            <p>The calculation requires the prescribed dose rate and the concentration of the medication in the IV bag (mg/ml). For non-infusion calculations, like converting simple kitchen ingredients, our primary <Link to="/" className="text-primary hover:underline font-semibold">MG to ML Calculator</Link> provides instant answers.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/mg-hr-to-ml-hr" />
    </>
  );
};

export default InfusionRatePage;