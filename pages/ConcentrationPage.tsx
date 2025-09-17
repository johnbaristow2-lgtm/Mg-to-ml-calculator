
import React from 'react';
import ConcentrationCalculator from '../components/ConcentrationCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const ConcentrationPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG to NG/ML Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Easily calculate the concentration in nanograms per milliliter (ng/ml) when a specific mass in milligrams (mg) is dissolved in a volume of milliliters (ml).
            </p>
          </div>
          <div className="mt-12">
            <ConcentrationCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Calculating Concentration</h2>
            <p>This tool is essential in laboratory settings where precise concentrations are required. To find the final concentration, you need the initial mass of the substance and the final volume of the solvent it's dissolved in. Since there are 1,000,000 nanograms (ng) in 1 milligram (mg), the conversion is straightforward.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/mg-to-ng-ml" />
    </>
  );
};

export default ConcentrationPage;
