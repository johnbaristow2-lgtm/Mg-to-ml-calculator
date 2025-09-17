
import React from 'react';
import UmToMgMlCalculator from '../components/UmToMgMlCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const UmToMgMlPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Micromolar (µM) to MG/ML Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Convert the concentration of a solution from micromolar (µM) to milligrams per milliliter (mg/ml).
            </p>
          </div>
          <div className="mt-12">
            <UmToMgMlCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">From Micromolarity to Mass Concentration</h2>
            <p>This tool is useful when you need to prepare a solution with a specific mass concentration (mg/ml) from a stock solution whose concentration is known in micromolar (µM). You will need the substance's molar mass in g/mol to perform the calculation.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/micromolar-to-mg-ml" />
    </>
  );
};

export default UmToMgMlPage;
