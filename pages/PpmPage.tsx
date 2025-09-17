import React from 'react';
import { Link } from 'react-router-dom';
import MgMlToPpmCalculator from '../components/MgMlToPpmCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const PpmPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG/ML to PPM Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Convert a substance's concentration from milligrams per milliliter (mg/ml) to parts per million (PPM).
            </p>
          </div>
          <div className="mt-12">
            <MgMlToPpmCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">What is Parts Per Million (PPM)?</h2>
            <p>PPM is a way of expressing very dilute concentrations of substances. For aqueous solutions, one PPM is equivalent to 1 milligram of substance per liter of water (mg/L). Since 1 milliliter (ml) of water is equal to 1000 liters (L), the conversion from mg/ml to PPM is straightforward: simply multiply by 1000.</p>
            <p>This conversion is useful for dilute solutions. For more direct mass-to-volume calculations, our main <Link to="/" className="text-primary hover:underline font-semibold">MG to ML Calculator</Link> is available on the homepage.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/mg-ml-to-ppm" />
    </>
  );
};

export default PpmPage;