import { useNavigate } from "react-router-dom";
import DetailedServiceCard from "../components/DetailedServiceCard";

const services = [
  {
    title: "Manned Guarding Services",
    desc: (
      <>
        <p className="mb-2">
          Professional, uniformed security officers deployed at commercial,
          residential, and industrial sites. Our guards are:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Background verified & rigorously trained</li>
          <li>Equipped to handle emergencies & security threats</li>
          <li>Monitored in real-time for better vigilance</li>
        </ul>
      </>
    ),
  },
  {
    title: "Corporate & Office Security",
    desc: (
      <>
        <p className="mb-2">
          Protect your workplace, employees, and assets with our corporate
          security solutions:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>24/7 surveillance & patrolling</li>
          <li>Visitor & access control systems</li>
          <li>Crisis response & emergency planning</li>
        </ul>
      </>
    ),
  },
  {
    title: "Residential Security",
    desc: (
      <>
        <p className="mb-2">
          Keeping your home and community safe & secure with:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Trained security guards for apartment complexes & villas</li>
          <li>CCTV monitoring & AI-based threat detection</li>
          <li>Emergency response services</li>
        </ul>
      </>
    ),
  },
  {
    title: "Retail & Mall Security",
    desc: (
      <>
        <p className="mb-2">
          Ensure safe shopping experiences and theft prevention with:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Uniformed security guards at entry/exit points</li>
          <li>CCTV surveillance & theft control</li>
          <li>Trained response to crowd management</li>
        </ul>
      </>
    ),
  },
  {
    title: "Event Security",
    desc: (
      <>
        <p className="mb-2">
          Comprehensive event safety planning and on-ground control with:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Crowd control & VIP protection</li>
          <li>Access control & baggage screening</li>
          <li>Crisis management & rapid response</li>
        </ul>
      </>
    ),
  },
  {
    title: "VIP & Executive Protection",
    desc: (
      <>
        <p className="mb-2">
          Specialized personal protection for executives and high-profile
          clients:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Highly trained personal security officers</li>
          <li>Discreet & professional bodyguards</li>
          <li>Escort services for high-risk individuals</li>
        </ul>
      </>
    ),
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate("/contact");
  };

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Our Security Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, idx) => (
          <DetailedServiceCard key={idx} title={s.title} desc={s.desc} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-gray-50 p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-primary mb-4">
          Need a Custom Security Plan?
        </h3>
        <p className="text-gray-600 mb-6">
          Every client’s security requirements are unique. Let us design a
          tailored protection strategy that fits your specific needs.
        </p>
        <button
          onClick={handleContactRedirect}
          className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Contact Us for a Free Consultation
        </button>
      </div>
    </div>
  );
}