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
];

interface RelatedCalculatorsProps {
    currentPage: string;
}

const RelatedCalculators: React.FC<RelatedCalculatorsProps> = ({ currentPage }) => {
    const related = allCalculators.filter(calc => calc.path !== currentPage);

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
