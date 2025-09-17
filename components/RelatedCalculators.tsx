
import React from 'react';
import { Link } from 'react-router-dom';

interface CalculatorLink {
    path: string;
    title: string;
    description: string;
}

const allCalculators: CalculatorLink[] = [
    { path: '/mg-to-ml', title: 'MG to ML Calculator', description: 'Convert mass (mg) to volume (ml) based on substance density.' },
    { path: '/ml-to-mg', title: 'ML to MG Calculator', description: 'Convert volume (ml) to mass (mg) using density.' },
    { path: '/mg-to-ml-medicine', title: 'MG to ML (Medicine)', description: 'Calculate the volume (ml) of a liquid medicine from a dose (mg).' },
    { path: '/ml-to-mg-medicine', title: 'ML to MG (Medicine)', description: 'Calculate the dose (mg) in a specific volume (ml) of medicine.' },
    { path: '/mg-to-ml-syringe', title: 'MG to ML Syringe Calculator', description: 'For medical dosage calculations involving syringes.' },
    { path: '/mg-hr-to-ml-hr', title: 'MG/hr to ML/hr Calculator', description: 'Convert infusion dose rates from mass/hour to volume/hour.' },
    { path: '/mg-ml-to-molarity', title: 'MG/ML to Molarity Calculator', description: 'Calculate molarity from concentration and molar mass.' },
    { path: '/dilution-calculator', title: 'Dilution Calculator', description: 'Calculate final concentrations after dilution (C1V1 = C2V2).' },
    { path: '/mg-ml-to-ppm', title: 'MG/ML to PPM Calculator', description: 'Convert concentration from mg/ml to parts per million (PPM).' },
    { path: '/molar-to-mg-ml', title: 'Molar to MG/ML Calculator', description: 'Convert molarity (M) to concentration in mg/ml.' },
    { path: '/micromolar-to-mg-ml', title: 'Micromolar (uM) to MG/ML', description: 'Convert micromolar (uM) concentration to mg/ml.' },
    { path: '/mg-ml-to-um', title: 'MG/ML to Micromolar (uM)', description: 'Convert concentration in mg/ml to micromolar (uM).' },
    { path: '/mg-min-to-ml-hr', title: 'MG/min to ML/hr Calculator', description: 'Convert medical infusion rates from mg/minute to ml/hour.' },
    { path: '/eu-ml-to-eu-mg', title: 'EU/ml to EU/mg Calculator', description: 'Calculate endotoxin units per milligram from concentration.' },
    { path: '/mg-to-ng-ml', title: 'MG to NG/ML Calculator', description: 'Calculate concentration in ng/ml from mass and volume.' },
];

interface RelatedCalculatorsProps {
    currentPage: string;
}

const RelatedCalculators: React.FC<RelatedCalculatorsProps> = ({ currentPage }) => {
    // Show up to 9 related calculators, excluding the current one
    const related = allCalculators.filter(calc => calc.path !== currentPage).slice(0, 9);

    return (
        <section className="py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Explore Other Calculators</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {related.map(calc => (
                        <Link to={calc.path} key={calc.path} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-primary">
                            <h3 className="font-bold text-lg text-primary">{calc.title}</h3>
                            <p className="mt-2 text-gray-600">{calc.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedCalculators;
