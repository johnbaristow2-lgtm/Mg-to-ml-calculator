
import React from 'react';
import MgMlToUmCalculator from '../components/MgMlToUmCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const MgMlToUmPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG/ML to µM Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Convert the concentration of a solution from milligrams per milliliter (mg/ml) to micromolar (µM).
            </p>
          </div>
          <div className="mt-12">
            <MgMlToUmCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Understanding Micromolarity</h2>
            <p>Micromolar (µM) is a unit of concentration equal to 10<sup>-6</sup> moles per liter. It's commonly used in biochemistry and molecular biology for enzymes, antibodies, and other molecules. This conversion requires the substance's molar mass (molecular weight) in g/mol. Our tool simplifies the multi-step calculation into one easy form.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/mg-ml-to-um" />
    </>
  );
};

export default MgMlToUmPage;
