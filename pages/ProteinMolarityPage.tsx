import React from 'react';
import { Link } from 'react-router-dom';
import MolarityCalculator from '../components/MolarityCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const ProteinMolarityPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              Protein Molarity Calculator (mg/ml to M)
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Calculate the molarity of a protein solution from its concentration in mg/ml and its molar mass (molecular weight).
            </p>
          </div>
          <div className="mt-12">
            <MolarityCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Calculating Protein Molarity</h2>
            <p>In protein science, concentration is often measured in mg/ml using spectrophotometry (like A280 readings). However, for many experiments (like enzyme kinetics or binding assays), knowing the molar concentration is essential. This tool makes the conversion simple.</p>
            <p>You need two values:</p>
            <ul>
                <li><strong>Protein Concentration in mg/ml:</strong> Your experimentally determined value.</li>
                <li><strong>Molar Mass in g/mol:</strong> The molecular weight of your protein. This is often expressed in kilodaltons (kDa), where 1 kDa = 1000 g/mol. For example, a 50 kDa protein has a molar mass of 50,000 g/mol.</li>
            </ul>
             <p>For simpler, non-molar conversions, such as finding the volume of a liquid from its mass, try our standard <Link to="/" className="text-primary hover:underline font-semibold">MG to ML Calculator</Link>.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/mg-ml-to-molarity-protein" />
    </>
  );
};

export default ProteinMolarityPage;