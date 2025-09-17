import React from 'react';
import MedicalDosageCalculator from '../components/MedicalDosageCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const DoseCalculatorPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Dose Calculator: MG to ML
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              An essential tool for accurately converting a prescribed medication dose from milligrams (mg) to milliliters (ml).
            </p>
          </div>
          <div className="mt-12">
            <MedicalDosageCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ensuring Dosage Accuracy</h2>
            <p>Administering the correct dose of liquid medication is critical. This calculator helps you determine the exact volume (ml) to give based on the doctor's prescribed dose (mg) and the concentration listed on the medication bottle (mg/ml).</p>
            <p className="text-center text-lg font-mono bg-gray-100 p-4 rounded-md shadow-sm">Volume (ml) = Dose (mg) / Concentration (mg/ml)</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/dose-calculator-mg-to-ml" />
    </>
  );
};

export default DoseCalculatorPage;
