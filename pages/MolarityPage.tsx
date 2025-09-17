import React from 'react';
import { Link } from 'react-router-dom';
import MolarityCalculator from '../components/MolarityCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const MolarityPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG/ML to Molarity Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              A chemistry tool to convert the concentration of a solution from milligrams per milliliter (mg/ml) to molarity (mol/L).
            </p>
          </div>
          <div className="mt-12">
            <MolarityCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Understanding Molarity Conversion</h2>
            <p>Molarity is a common unit of concentration in chemistry, defined as moles of solute per liter of solution. To convert a mass concentration like mg/ml to molarity, you need the substance's molar mass (or molecular weight) in grams per mole (g/mol).</p>
            <p>The key insight is that 1 mg/ml is equivalent to 1 g/L. This simplifies the formula to:</p>
            <p className="text-center text-lg font-mono bg-gray-100 p-4 rounded-md shadow-sm">Molarity (mol/L) = Concentration (g/L) / Molar Mass (g/mol)</p>
            <p>This chemistry-focused tool handles molarity. For basic mass-to-volume conversions, our main <Link to="/" className="text-primary hover:underline font-semibold">MG to ML Calculator</Link> is the perfect tool.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/mg-ml-to-molarity" />
    </>
  );
};

export default MolarityPage;