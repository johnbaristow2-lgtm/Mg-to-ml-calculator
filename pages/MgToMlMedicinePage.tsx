import React from 'react';
import { Link } from 'react-router-dom';
import MedicalDosageCalculator from '../components/MedicalDosageCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const MgToMlMedicinePage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG to ML Medicine Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Calculate the correct volume (ml) of a liquid medication based on the required dose (mg) and the drug's concentration (mg/ml).
            </p>
          </div>
          <div className="mt-12">
            <MedicalDosageCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">How to Calculate Medication Volume</h2>
            <p>For liquid medications, the dose is prescribed in milligrams (mg), but it is administered in milliliters (ml). To find the correct volume, you must know the medication's concentration, which is usually printed on the label in mg/ml.</p>
            <p>The formula is straightforward:</p>
            <p className="text-center text-lg font-mono bg-gray-100 p-4 rounded-md shadow-sm">Volume (ml) = Total Dose (mg) / Concentration (mg/ml)</p>
            <p><strong>Example:</strong> A doctor prescribes 250 mg of a medication. The bottle says the concentration is 100 mg/ml. The calculation would be: 250 mg / 100 mg/ml = 2.5 ml. For general, non-medical conversions, please use our main <Link to="/" className="text-primary hover:underline font-semibold">MG to ML Calculator</Link>.</p>
            <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-900">
                <p className="font-bold">Disclaimer:</p>
                <p className="italic mt-1">This information is for educational purposes only. Always verify calculations with a pharmacist or doctor.</p>
            </div>
        </div>
      </section>

      <RelatedCalculators currentPage="/mg-to-ml-medicine" />
    </>
  );
};

export default MgToMlMedicinePage;