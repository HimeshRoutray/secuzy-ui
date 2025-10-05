// src/pages/Home.js
import React from "react";
import Card from "../components/ServiceCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const whyChooseUs = [
    {
      title: "Highly Trained Security Personnel",
      desc: "Professionally trained guards ensuring top-notch safety for your premises.",
    },
    {
      title: "Advanced Security Solutions",
      desc: "AI-driven surveillance and cutting-edge monitoring systems.",
    },
    {
      title: "Tailored Protection Plans",
      desc: "Customizable solutions to fit every client’s unique needs.",
    },
    {
      title: "24/7 Vigilance & Support",
      desc: "Round-the-clock monitoring and emergency response at your fingertips.",
    },
    {
      title: "Strict Compliance & Integrity",
      desc: "Adhering to global standards of safety and professionalism.",
    },
  ];

  // Scroll to "Why Choose Us" section
  const handleScroll = () => {
    document.getElementById("why-choose-us")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <div>
      {/* Hero Section with Background */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/bgImage2.png')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-30 bg-black/60"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Security, Our Commitment
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            With expert personnel and advanced technology, we safeguard what matters most to you.
          </p>
          <button
            onClick={handleScroll}
            className="bg-accent px-6 py-3 rounded-lg shadow-md text-white font-semibold hover:bg-red-700 transition"
          >
            Explore More
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-6 text-primary">
          What Our Clients Say
        </h3>
        <div className="max-w-3xl mx-auto">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
          >
            <div>
              <p className="text-lg italic">
                "Secuzy Security has been a game-changer for our corporate office!"
              </p>
              <p className="mt-3 font-semibold">– Corporate Client</p>
            </div>
            <div>
              <p className="text-lg italic">
                "The guards are highly professional and well-trained. We feel safe!"
              </p>
              <p className="mt-3 font-semibold">– Residential Community</p>
            </div>
            <div>
              <p className="text-lg italic">
                "From events to daily monitoring, Secuzy has our complete trust."
              </p>
              <p className="mt-3 font-semibold">– Event Organizer</p>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="container mx-auto py-16">
        <h3 className="text-3xl font-bold text-center mb-10 text-primary">
          Why Choose Us?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => (
            <Card
              key={idx}
              title={item.title}
              desc={item.desc} // click to expand
              clickable={true}
              className="bg-white shadow-lg hover:shadow-xl transition transform hover:scale-105"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
