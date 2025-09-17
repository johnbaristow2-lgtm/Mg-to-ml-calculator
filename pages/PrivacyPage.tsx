
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose lg:prose-xl mx-auto text-gray-600">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center tracking-tight">Privacy Policy & Disclaimer</h1>
          
          <h2 id="privacy" className="text-3xl font-bold tracking-tight text-gray-900">Privacy Policy</h2>
          <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
          <p>Your privacy is important to us. It is mg-to-ml.com's policy to respect your privacy regarding any information we may collect from you across our website.</p>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
          <p>We do not collect any personal data through our calculator tool. All calculations are performed within your browser and are not logged, stored, or transmitted to our servers.</p>
          <p>We may use standard analytics services (like Google Analytics) to collect non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Our purpose in collecting this information is to better understand how our visitors use the website.</p>
          <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
          <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>

          <hr className="my-12" />

          <h2 id="disclaimer" className="text-3xl font-bold tracking-tight text-gray-900">Disclaimer</h2>
          <p>The information and calculations provided by the mg to ml calculator on this website are for general informational and educational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Not Medical Advice</h3>
          <p><strong>This calculator is NOT intended for medical use and should NOT be used to calculate dosages for medication.</strong> Calculating medication dosages requires high precision and should only be done by a qualified healthcare professional. Incorrect dosages can lead to severe health consequences. Always consult your doctor, pharmacist, or other qualified health provider with any questions you may have regarding a medical condition or treatment.</p>
          <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
