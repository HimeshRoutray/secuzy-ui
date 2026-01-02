import corporateImg from "../assets/corporate.png";
import gatedSocietyImg from "../assets/gatedSociety.png";
import mallImg from "../assets/mall.png";
import industrialImg from "../assets/industrial.png";
import vipEscortImg from "../assets/vipEscort.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const industries = [
  {
    title: "Corporate Offices & IT Parks",
    img: corporateImg,
    desc: "Ensuring a secure work environment for employees and visitors.",
  },
  {
    title: "Gated Communities & Residential Complexes",
    img: gatedSocietyImg,
    desc: "Enhanced security for apartments, villas, and societies.",
  },
  {
    title: "Retail & Shopping Malls",
    img: mallImg,
    desc: "Protecting stores from theft, vandalism, and crowd mismanagement.",
  },
  {
    title: "Construction & Industrial Security",
    img: industrialImg,
    desc: "Preventing unauthorized access and equipment theft. Securing high-risk construction sites and warehouses.",
  },
  {
    title: "Event & Hospitality Security",
    img: vipEscortImg,
    desc: "Security planning and implementation for concerts, festivals, and corporate events. Managing large crowds, access control, and VIP security.",
  },
];

export default function Industries() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-12 space-y-10">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Industries We Serve | Security Services for Corporates, Malls & Communities | Secuzy
        </title>

        <meta
          name="description"
          content="Secuzy Security provides professional security services for corporate offices, IT parks, gated communities, shopping malls, industrial sites, and events across Bangalore."
        />

        <link
          rel="canonical"
          href="https://www.secuzysecurity.com/industries"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Industries We Serve | Secuzy Security" />
        <meta
          property="og:description"
          content="Professional security solutions for corporates, residential societies, malls, industries, and events in Bangalore."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.secuzysecurity.com/industries" />
        <meta property="og:image" content="/og-industries.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries We Serve | Secuzy Security" />
        <meta
          name="twitter:description"
          content="Trusted security services for offices, gated communities, malls, industrial sites, and events."
        />
      </Helmet>
      {/* ================= END SEO ================= */}

      {/* Page Heading */}
      <header className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Industries We Serve
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Secuzy Security delivers customized protection solutions across diverse
          industries, ensuring safety, compliance, and peace of mind.
        </p>
      </header>

      {/* Industries Grid */}
      <section
        aria-label="Industries served by Secuzy Security"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {industries.map((ind, idx) => (
          <article
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={ind.img}
              alt={`${ind.title} security services by Secuzy`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute bottom-0 bg-black bg-opacity-60 w-full text-white text-center py-2 text-lg font-semibold z-10">
              {ind.title}
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <p className="text-sm leading-relaxed">{ind.desc}</p>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section
        aria-label="Contact Secuzy Security"
        className="text-center mt-16 bg-gray-50 p-10 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">
          Looking for Specialized Security?
        </h2>
        <p className="text-gray-600 mb-6">
          Let’s discuss your requirements and design a protection strategy that fits your needs.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Contact Us Today
        </button>
      </section>
    </div>
  );
}
