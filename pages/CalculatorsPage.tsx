
import React from 'react';
import { Link } from 'react-router-dom';

const calculatorList = [
  { path: '/mg-to-ml', title: 'MG to ML Calculator', description: 'General purpose conversion from mass (mg) to volume (ml) using density.' },
  { path: '/ml-to-mg', title: 'ML to MG Calculator', description: 'The reverse of mg to ml, converting volume back to mass based on density.' },
  { path: '/mg-to-ml-medicine', title: 'MG to ML Calculator (Medicine)', description: 'Specifically for liquid medicine, converting a dose in mg to a volume in ml.' },
  { path: '/ml-to-mg-medicine', title: 'ML to MG Calculator (Medicine)', description: 'Find the total dose in mg contained within a specific volume of liquid medicine.' },
  { path: '/dose-calculator-mg-to-ml', title: 'Dose Calculator (MG to ML)', description: 'A straightforward tool to find the correct volume for a prescribed dose.' },
  { path: '/mg-to-ml-syringe', title: 'MG to ML Syringe Calculator', description: 'Visual and practical tool for calculating dosages for administration by syringe.' },
  { path: '/mg-hr-to-ml-hr', title: 'MG/hr to ML/hr Infusion Calculator', description: 'Essential for calculating IV drip rates in a medical setting.' },
  { path: '/mg-min-to-ml-hr', title: 'MG/min to ML/hr Calculator', description: 'Convert medical infusion rates from mg/minute to ml/hour.' },
  { path: '/mg-ml-to-molarity', title: 'MG/ML to Molarity Calculator', description: 'A chemistry tool to convert concentration in mg/ml to molarity (mol/L).' },
  { path: '/molar-to-mg-ml', title: 'Molar to MG/ML Calculator', description: 'Convert molarity (M) to concentration in mg/ml.' },
  { path: '/micromolar-to-mg-ml', title: 'Micromolar (uM) to MG/ML', description: 'Convert micromolar (uM) concentration to mg/ml.' },
  { path: '/mg-ml-to-um', title: 'MG/ML to Micromolar (uM)', description: 'Convert concentration in mg/ml to micromolar (uM).' },
  { path: '/mg-ml-to-molarity-protein', title: 'Protein Molarity Calculator', description: 'Calculate molarity of proteins using concentration and molar mass in kDa.' },
  { path: '/mg-ml-to-ppm', title: 'MG/ML to PPM Calculator', description: 'Convert concentration from mg/ml to parts per million (PPM).' },
  { path: '/dilution-calculator', title: 'Dilution Calculator (C1V1=C2V2)', description: 'Calculate final concentrations after adding solvent to a stock solution.' },
  { path: '/mg-to-ng-ml', title: 'Mass to Concentration Calculator', description: 'Calculate concentration (ng/ml) from a mass (mg) and volume (ml).' },
  { path: '/eu-ml-to-eu-mg', title: 'EU/ml to EU/mg Calculator', description: 'Calculate endotoxin units per milligram from concentration.' },
];

const CalculatorsPage: React.FC = () => {
  return (
    <div className="bg-light-gray py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Our Conversion Calculators
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
            A comprehensive suite of tools for science, medicine, and general purpose conversions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculatorList.sort((a,b) => a.title.localeCompare(b.title)).map((calc) => (
            <Link to={calc.path} key={calc.path} className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200">
              <h2 className="text-xl font-bold text-primary">{calc.title}</h2>
              <p className="mt-3 text-gray-600">{calc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorsPage;
