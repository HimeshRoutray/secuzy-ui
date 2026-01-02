import { useNavigate } from "react-router-dom";
import DetailedServiceCard from "../components/DetailedServiceCard";
import { Helmet } from "react-helmet-async";

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

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Security Services in Bangalore | Manned Guarding, Corporate & Event Security | Secuzy
        </title>

        <meta
          name="description"
          content="Secuzy Security offers professional security services in Bangalore including manned guarding, corporate security, residential security, retail & mall security, event security, and VIP protection."
        />

        <link
          rel="canonical"
          href="https://www.secuzysecurity.com/services"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Security Services | Secuzy Security" />
        <meta
          property="og:description"
          content="Professional security services including manned guarding, corporate security, residential protection, mall security, event security, and VIP protection."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.secuzysecurity.com/services" />
        <meta property="og:image" content="/og-services.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Security Services by Secuzy" />
        <meta
          name="twitter:description"
          content="Trusted security solutions for corporates, residences, malls, events, and VIPs."
        />
      </Helmet>
      {/* ================= END SEO ================= */}

      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Our Security Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Secuzy Security delivers end-to-end security services designed to
          protect people, property, and operations across industries.
        </p>
      </header>

      {/* Services Grid */}
      <section
        aria-label="Security services offered by Secuzy"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {services.map((s, idx) => (
          <article key={idx}>
            <DetailedServiceCard title={s.title} desc={s.desc} />
          </article>
        ))}
      </section>

      {/* CTA Section */}
      <section
        aria-label="Contact Secuzy for security consultation"
        className="text-center mt-16 bg-gray-50 p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">
          Need a Custom Security Plan?
        </h2>
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
      </section>
    </div>
  );
}