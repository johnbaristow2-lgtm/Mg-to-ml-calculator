import React from 'react';
import { Link } from 'react-router-dom';
import EndotoxinCalculator from '../components/EndotoxinCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const EndotoxinPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              EU/ml to EU/mg Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              A specialized tool for converting Endotoxin Units from a volumetric measurement (EU/ml) to a mass-based measurement (EU/mg).
            </p>
          </div>
          <div className="mt-12">
            <EndotoxinCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Endotoxin Unit Conversion</h2>
            <p>In pharmaceutical and biotech quality control, measuring endotoxin levels is critical for safety. While initial tests often yield a result in EU/ml, specifications are frequently set in EU/mg of the active substance (e.g., a protein). This calculator simplifies the conversion, requiring the EU/ml result and the concentration of the substance in mg/ml. For more basic needs, see our main <Link to="/" className="text-primary hover:underline font-semibold">MG to ML Calculator</Link>.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/eu-ml-to-eu-mg" />
    </>
  );
};

export default EndotoxinPage;