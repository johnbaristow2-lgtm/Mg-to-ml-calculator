import React from 'react';
import MlToMgCalculator from '../components/MlToMgCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const MlToMgPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              ML to MG Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Instantly convert volume in milliliters (ml) to mass in milligrams (mg). This conversion depends on the density of the substance, which you can select from our list or enter manually.
            </p>
          </div>
          <div className="mt-12">
            <MlToMgCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Understanding ML to MG Conversion</h2>
            <p>While often confused, milliliters (a measure of volume) and milligrams (a measure of mass) are not directly interchangeable. The key to converting between them is **density**. The formula is simple:</p>
            <p className="text-center text-lg font-mono bg-gray-100 p-4 rounded-md shadow-sm">Mass (mg) = Volume (ml) × Density (mg/ml)</p>
            <p>Our calculator automates this process. Just input the volume in ml, select the substance, and we'll handle the math for you. This is essential for accuracy in cooking, chemistry, and other scientific applications.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/ml-to-mg" />
    </>
  );
};

export default MlToMgPage;
