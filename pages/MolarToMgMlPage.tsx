import React from 'react';
import { Link } from 'react-router-dom';
import MolarToMgMlCalculator from '../components/MolarToMgMlCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const MolarToMgMlPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Molar to MG/ML Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Convert the molarity (mol/L) of a solution to a mass concentration in milligrams per milliliter (mg/ml).
            </p>
          </div>
          <div className="mt-12">
            <MolarToMgMlCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Converting from Molarity to Mass Concentration</h2>
            <p>This calculation is the reverse of our mg/ml to molarity tool. It is useful when you have a solution with a known molarity and need to find its concentration in terms of mass per volume, for example, to prepare a different kind of assay. You will need the substance's molar mass in g/mol.</p>
             <p>For other basic conversions, our homepage features the primary <Link to="/" className="text-primary hover:underline font-semibold">MG to ML Calculator</Link>.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/molar-to-mg-ml" />
    </>
  );
};

export default MolarToMgMlPage;