
import React from 'react';
import DilutionCalculator from '../components/DilutionCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const DilutionPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Solution Dilution Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Use the C₁V₁ = C₂V₂ formula to calculate how to prepare a diluted solution from a stock solution.
            </p>
          </div>
          <div className="mt-12">
            <DilutionCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Understanding Dilution</h2>
            <p>Dilution is the process of decreasing the concentration of a solute in a solution. It's a fundamental practice in chemistry and biology labs. The formula <code className="font-mono bg-gray-100 p-1 rounded">C₁V₁ = C₂V₂</code> is the cornerstone of these calculations, where:</p>
            <ul>
                <li><strong>C₁</strong> is the concentration of the initial stock solution.</li>
                <li><strong>V₁</strong> is the volume of the initial stock solution.</li>
                <li><strong>C₂</strong> is the concentration of the final, diluted solution.</li>
                <li><strong>V₂</strong> is the volume of the final, diluted solution.</li>
            </ul>
            <p>Our calculator allows you to solve for any of these four variables, making it a flexible tool for your lab work. Remember to keep your units consistent (e.g., if C₁ is in mg/ml, C₂ will also be in mg/ml).</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/dilution-calculator" />
    </>
  );
};

export default DilutionPage;
