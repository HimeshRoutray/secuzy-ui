import React, { useState } from "react";

const faqs = [
  {
    q: "How do you ensure the quality of your security guards?",
    a: "Our guards undergo extensive background checks, physical training, and security certification programs before deployment.",
  },
  {
    q: "Do you offer 24/7 security services?",
    a: "Yes! We provide round-the-clock security monitoring, patrolling, and emergency response teams for all locations.",
  },
  {
    q: "Can I get a customized security plan?",
    a: "Absolutely! We analyze your security needs and design tailored security solutions to match your requirements.",
  },
  {
    q: "How can I hire security services for my business or residence?",
    a: "Simply call us at [Contact Number], or email us at [Email Address].",
  },
  {
    q: "What technology do you use for security monitoring?",
    a: "We use CCTV surveillance, biometric access control, AI-powered threat detection, and GPS tracking for maximum protection.",
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">About Secuzy</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Established with a vision to redefine security services in India, Secuzy has grown into a trusted partner for businesses, communities, and individuals looking for high-end security solutions.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <span className="text-accent">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
