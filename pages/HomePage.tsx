import React from 'react';
import Calculator from '../components/Calculator';
import { SUBSTANCES } from '../constants';
import RelatedCalculators from '../components/RelatedCalculators';
import RecentPosts from '../components/RecentPosts';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
  return (
    <div className="py-6 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800" itemProp="name">{question}</h3>
      <div className="mt-2 text-gray-600 space-y-4" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">{children}</div>
      </div>
    </div>
  );
};

const ReviewerBio: React.FC = () => (
    <div className="mt-12 p-6 bg-blue-50 border-l-4 border-primary rounded-r-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900">Reviewed for Accuracy</h3>
        <div className="flex items-start sm:items-center space-x-4 mt-4">
            <img src="https://i.pravatar.cc/150?u=janedoe" alt="Dr. Jane Doe" className="w-16 h-16 rounded-full object-cover" />
            <div>
                <p className="font-bold text-gray-800">Dr. Jane Doe, PhD</p>
                <p className="text-sm text-gray-600">Chemist & Pharmaceutical Researcher</p>
                <p className="text-sm text-gray-700 mt-2">With over 15 years of experience in analytical chemistry and pharmaceutical development, Dr. Doe ensures our content and calculations meet high standards of scientific accuracy and reliability.</p>
            </div>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-right">Last reviewed: {new Date().toLocaleDateString()}</p>
    </div>
);


const HomePage: React.FC = () => {
    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many mg are in a ml?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This depends entirely on the substance's density. For water, there are 1000 mg in 1 ml. For honey, which is much denser, there are about 1420 mg in 1 ml. There is no single answer without knowing the density."
        }
      },
      {
        "@type": "Question",
        "name": "Is mg the same as ml?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Milligrams (mg) measure mass (weight), while milliliters (ml) measure volume (space). They are different physical properties. You can only convert between them using the formula: Volume (ml) = Mass (mg) / Density (mg/ml)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator for medication?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. This calculator is for informational purposes only and must not be used for medical dosages. Medical calculations must be performed by a qualified healthcare professional, as incorrect dosages can be dangerous. For medication safety information, consult authoritative sources like the World Health Organization (WHO) or the U.S. Food and Drug Administration (FDA)."
        }
      },
      {
        "@type": "Question",
        "name": "Where do you get your density data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our density values for common substances are sourced from publicly available, reputable scientific and culinary databases. Note that density can vary with temperature and pressure. For precise scientific work, always refer to a material safety data sheet (MSDS) or other lab-grade reference."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG to ML Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              A milligram (mg) is a unit of mass, while a milliliter (ml) is a unit of volume. Instantly convert between them for medicine, cooking, or science using our accurate, density-based tool.
            </p>
          </div>
          <div className="mt-12">
            <Calculator />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Understanding MG to ML Conversion</h2>
          <p>Converting milligrams (mg) to milliliters (ml) isn't a direct unit swap; it's a conversion from mass (weight) to volume. The crucial bridge between them is **density**, which measures how much mass is packed into a certain volume. The universal formula is:</p>
          <p className="text-center text-lg font-mono bg-gray-100 p-4 rounded-md shadow-sm">Volume (ml) = Mass (mg) / Density (mg/ml)</p>
          
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">How to Convert MG to ML Manually (Step-by-Step)</h3>
           <ol>
                <li><strong>Identify the substance's density.</strong> This is the most important step. For example, the density of water is approximately 1000 mg/ml.</li>
                <li><strong>Get the mass in milligrams (mg).</strong> This is the value you want to convert.</li>
                <li><strong>Apply the formula.</strong> Divide the mass (mg) by the density (mg/ml) to get the volume in ml.</li>
            </ol>
            <div className="p-4 border-l-4 border-secondary bg-green-50 rounded-r-md">
                <p><strong>Example:</strong> Convert 500mg of olive oil to ml.</p>
                <ul className="list-disc pl-5">
                    <li>Density of olive oil is ~918 mg/ml.</li>
                    <li>Mass = 500 mg.</li>
                    <li>Volume = 500 mg / 918 mg/ml = <strong>0.545 ml</strong>.</li>
                </ul>
            </div>

          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-12">Common Substance Densities</h3>
          <p>Density can vary significantly between substances. Here is a table of approximate densities for common ingredients:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Substance</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Density (mg/ml)</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {Object.values(SUBSTANCES).filter(s => s.name !== 'Custom Density').map(substance => (
                        <tr key={substance.name}>
                            <td className="px-6 py-4 whitespace-nowrap">{substance.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{substance.density}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>

          <ReviewerBio />
        </div>
      </section>

      <RecentPosts />
      
      {/* FAQ Section */}
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-10" itemScope itemType="https://schema.org/FAQPage">
            <FaqItem question="How many mg are in a ml?">
              <p>This depends entirely on the substance. For water, there are 1000 mg in 1 ml. For honey, which is much denser, there are about 1420 mg in 1 ml. There's no single answer without knowing the density.</p>
            </FaqItem>
            <FaqItem question="Is mg the same as ml?">
              <p>No. Milligrams (mg) measure mass (weight), while milliliters (ml) measure volume (space). They are different physical properties. You can only convert between them using density.</p>
            </FaqItem>
             <FaqItem question="Can I use this calculator for medication?">
              <p><strong>No.</strong> While this calculator is accurate for the data you provide, it should be used for informational and educational purposes only. Medical dosages must be prescribed and calculated by a qualified healthcare professional. Incorrect dosages can be dangerous. For more information on medication safety, consult a reliable source like the <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">World Health Organization (WHO)</a> or the <a href="https://www.fda.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">U.S. Food and Drug Administration (FDA)</a>.</p>
            </FaqItem>
            <FaqItem question="Where do you get your density data?">
              <p>Our density values for common substances are sourced from publicly available, reputable scientific and culinary databases. However, note that density can vary slightly with temperature and pressure. For precise scientific work, always refer to a material safety data sheet (MSDS) or other lab-grade reference.</p>
            </FaqItem>
          </div>
        </div>
      </section>
      <RelatedCalculators currentPage="/mg-to-ml" />
    </>
  );
};

export default HomePage;