import React from 'react';
import MlToMgMedicalCalculator from '../components/MlToMgMedicalCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const MlToMgMedicinePage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              ML to MG Medicine Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Calculate the total dose (mg) of a medication contained in a specific volume (ml) based on its concentration.
            </p>
          </div>
          <div className="mt-12">
            <MlToMgMedicalCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">How to Find Total Dose from Volume</h2>
            <p>Sometimes you need to know how many milligrams of active ingredient are in a certain volume of liquid medicine. This is crucial for tracking total dosage over time. You need the volume administered (ml) and the drug's concentration (mg/ml).</p>
            <p>The formula is:</p>
            <p className="text-center text-lg font-mono bg-gray-100 p-4 rounded-md shadow-sm">Dose (mg) = Volume (ml) × Concentration (mg/ml)</p>
            <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-900">
                <p className="font-bold">Disclaimer:</p>
                <p className="italic mt-1">This tool is for informational purposes only. Do not rely on it for medical decisions. Consult a qualified healthcare provider.</p>
            </div>
        </div>
      </section>

      <RelatedCalculators currentPage="/ml-to-mg-medicine" />
    </>
  );
};

export default MlToMgMedicinePage;
