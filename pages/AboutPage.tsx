
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">About Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Dedicated to providing accurate, reliable, and accessible conversion tools for everyone.
          </p>
        </div>

        <div className="mt-16 prose lg:prose-xl mx-auto text-gray-600">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
          <p>In a world where precision matters—from the kitchen to the laboratory—we saw a need for a simple, no-nonsense tool to convert milligrams to milliliters. The relationship between mass and volume is fundamental, yet often misunderstood. Our mission is to bridge that gap with a calculator that is not only mathematically accurate but also contextually aware, providing density information for various substances to ensure your conversions are always correct.</p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Trust Our Calculator?</h2>
          <p>This tool was developed by a team of engineers and content specialists with a passion for science and data accuracy. Here's our commitment to you:</p>
          <ul>
            <li><strong>Accuracy:</strong> Our calculations are based on established physics formulas. The pre-set density values are sourced from reputable scientific databases.</li>
            <li><strong>Transparency:</strong> We openly state that density is the key to this conversion. We provide the density values used and allow you to input your own for custom substances.</li>
            <li><strong>User-Centric Design:</strong> We believe powerful tools should be easy to use. Our interface is clean, fast, and works seamlessly on any device.</li>
            <li><strong>Ethical Responsibility:</strong> We include clear disclaimers about the use of our tool, especially concerning medical applications. Your safety is paramount, and we urge you to consult professionals for medical advice.</li>
          </ul>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Team</h2>
          <p>mg-to-ml.com was founded by a small group of professionals who believe in making knowledge accessible. Our lead developer has a background in software engineering with a focus on data-driven applications, while our content and research are managed by specialists who consult with subject-matter experts in chemistry and pharmacology to ensure the information we provide is trustworthy and easy to understand.</p>
          <p>We're constantly working to improve our tools and add new features. If you have any feedback, please don't hesitate to <a href="#/contact" className="text-primary hover:underline">contact us</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
