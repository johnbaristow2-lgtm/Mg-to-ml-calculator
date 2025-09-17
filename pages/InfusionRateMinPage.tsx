
import React from 'react';
import InfusionRateMinToHrCalculator from '../components/InfusionRateMinToHrCalculator';
import RelatedCalculators from '../components/RelatedCalculators';

const InfusionRateMinPage: React.FC = () => {
  return (
    <>
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG/min to ML/hr Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              Convert a prescribed IV dose rate from milligrams per minute (mg/min) to an infusion pump rate in milliliters per hour (ml/hr).
            </p>
          </div>
          <div className="mt-12">
            <InfusionRateMinToHrCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Converting Infusion Rates</h2>
            <p>While some IV drug dosages are prescribed per hour, others, especially potent medications, are prescribed per minute for finer control. Since infusion pumps operate in ml/hr, a two-step conversion is necessary. First, convert the dose from mg/min to mg/hr by multiplying by 60. Then, divide by the drug's concentration in mg/ml to find the final ml/hr rate.</p>
        </div>
      </section>

      <RelatedCalculators currentPage="/mg-min-to-ml-hr" />
    </>
  );
};

export default InfusionRateMinPage;
