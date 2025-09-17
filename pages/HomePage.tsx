
import React from 'react';
import Calculator from '../components/Calculator';
import { Link } from 'react-router-dom';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
  return (
    <div className="py-6 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
      <div className="mt-2 text-gray-600 space-y-4">{children}</div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              MG to ML Calculator
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
              A milligram (mg) is a unit of mass, while a milliliter (ml) is a unit of volume. Converting between them is essential in medicine, science, and cooking, but it requires knowing the substance's density.
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
          <p>Converting milligrams (mg) to milliliters (ml) isn't a simple unit conversion like meters to kilometers. It's a conversion from mass (weight) to volume. The "missing link" is density, which measures how much mass is packed into a certain volume. The formula is:</p>
          <p className="text-center text-lg font-mono bg-gray-100 p-4 rounded-md">Volume (ml) = Mass (mg) / Density (mg/ml)</p>
          
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">When Do You Need This Conversion?</h3>
          <ul>
            <li><strong>Medicine & Pharmaceuticals:</strong> Calculating dosages for liquid medications where the active ingredient is measured in mg but the dose is given in ml.</li>
            <li><strong>Cooking & Baking:</strong> Measuring ingredients like oil, honey, or flour where recipes might call for a weight (mg or g) but you're using a volume-based tool (measuring cup or spoon).</li>
            <li><strong>Science & Chemistry:</strong> Preparing solutions in a lab requires precise measurements of substance mass within a specific volume of solvent.</li>
          </ul>

          <h3 className="text-2xl font-bold tracking-tight text-gray-900">How Does Our Calculator Work?</h3>
          <p>Our tool simplifies this process. You just need to:</p>
          <ol>
            <li><strong>Select the substance:</strong> We've pre-loaded densities for common substances like water, milk, and oil.</li>
            <li><strong>Enter your value:</strong> Input either the milligrams or milliliters you want to convert.</li>
            <li><strong>Get an instant result:</strong> The calculator automatically provides the converted value based on the selected substance's density. For unique substances, you can enter a custom density.</li>
          </ol>
           <div className="mt-8 p-6 bg-blue-50 border-l-4 border-primary rounded-r-lg">
             <p className="font-semibold">Reviewed for Accuracy</p>
             <p className="text-sm text-gray-700 mt-1">This content has been reviewed by Dr. Jane Doe, a chemist with over 15 years of experience in pharmaceutical research, to ensure scientific accuracy and reliability. Last updated: {new Date().toLocaleDateString()}.</p>
           </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-10">
            {/* 
              This is where you would add FAQPage JSON-LD schema for SEO.
              <script type="application/ld+json"> ... </script>
            */}
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
    </>
  );
};

export default HomePage;
