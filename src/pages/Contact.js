import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Here’s how you can reach us.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="font-bold text-lg mb-2">Office Address</h3>
          <p className="text-gray-600">
            P406 SRI TIRUMALA SAROVAR <br /> SINGASANDRA
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="font-bold text-lg mb-2">Contact Info</h3>
          <p className="text-gray-600">Phone: [Your Phone Number]</p>
          <p className="text-gray-600">Email: [Your Email]</p>
          <p className="text-gray-600">Website: [Your Website]</p>
        </div>
      </div>

      {/* Support Button */}
      <div className="text-center mt-12">
        <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
          Contact Support
        </button>
      </div>
    </div>
  );
}
