import React from 'react';
import MedicalDosageCalculator from '../components/MedicalDosageCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const SyringeCalculatorPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG to ML Syringe Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Easily calculate the volume in milliliters (ml) to draw into a syringe for a given dose in milligrams (mg).
            </p>
          </div>
          <div className="mt-12">
            <MedicalDosageCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Accurate Dosing with a Syringe</h2>
            <p>Using a syringe to administer liquid medication requires precision. This calculator helps you convert the prescribed dose in mg into the correct volume in ml that you need to measure with the syringe. This is vital for ensuring the right amount of medication is given every time.</p>
             <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-900">
                <p className="font-bold">Safety First:</p>
                <p className="italic mt-1">This tool is a guide and not a substitute for professional medical advice. Always confirm dosages with a healthcare provider and carefully read the medication's label.</p>
            </div>
        </div>
      </section>

      <RelatedCalculators currentPage="/mg-to-ml-syringe" />
    </>
  );
};

export default SyringeCalculatorPage;
