
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We'd love to hear from you. Whether you have a question, feedback, or a suggestion, please get in touch.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Email Support</h2>
              <p className="mt-2 text-gray-600">For general inquiries, feedback, or support, please email us directly. We aim to respond within 48 hours.</p>
              <a href="mailto:support@mg-to-ml.com" className="mt-3 inline-block text-lg font-semibold text-primary hover:underline">
                support@mg-to-ml.com
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Media Inquiries</h2>
              <p className="mt-2 text-gray-600">For press and media-related questions, please contact our media relations team.</p>
              <a href="mailto:media@mg-to-ml.com" className="mt-3 inline-block text-lg font-semibold text-primary hover:underline">
                media@mg-to-ml.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light-gray p-8 rounded-lg border">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 focus:ring-primary focus:border-primary" placeholder="Your message..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Submit (UI Only)
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
