import React from "react";
import Card from "../components/ServiceCard";

const services = [
  { title: "Manned Guarding", desc: "Professional, uniformed officers for commercial, residential, and industrial sites." },
  { title: "Corporate & Office Security", desc: "24/7 surveillance, access control, and emergency response for workplaces." },
  { title: "Residential Security", desc: "Trained guards, CCTV monitoring, and AI-based threat detection." },
  { title: "Retail & Shopping Malls", desc: "Theft prevention, crowd management, and safe shopping experiences." },
  { title: "Event Security", desc: "Crowd control, VIP protection, and rapid crisis response." },
  { title: "VIP & Executive Protection", desc: "Highly trained personal bodyguards and discreet escort services." },
];

export default function Services() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Our Security Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <Card key={idx} title={s.title} desc={s.desc} clickable={true}/>
        ))}
      </div>
    </div>
  );
}
