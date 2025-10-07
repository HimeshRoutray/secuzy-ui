import Card from "../components/ServiceCard";
import bgImage from "../assets/bgImage2.png";
import aboutImg from "../assets/aboutImage.png"; 
import missionImg from "../assets/missionImage.png"; 

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
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Security, Our Commitment
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            At Secuzy Security Private Limited, we take security to the next
            level. With a team of highly trained security professionals and
            cutting-edge surveillance technology, we provide customized
            solutions for businesses, residential communities, events, and VIP
            clients.
          </p>
          <button
            onClick={handleScroll}
            className="bg-accent px-6 py-3 rounded-lg shadow-md text-white font-semibold hover:bg-red-700 transition"
          >
            Explore More
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          <img
            src={aboutImg}
            alt="About Secuzy"
            className="w-full lg:w-1/2 max-h-[400px] rounded-2xl shadow-lg object-cover object-center"
          />
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-primary">
              About Secuzy
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Established with a vision to redefine security services in India,
              Secuzy has grown into a trusted partner for businesses,
              communities, and individuals looking for high-end security
              solutions. Our mission is to create a safer environment by
              integrating professional manpower with the latest security
              technology.
            </p>

            <h4 className="text-2xl font-semibold text-accent mb-3">
              Our Mission & Values
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Excellence & Professionalism –</strong> We adhere to the
                highest industry standards in training, conduct, and service.
              </li>
              <li>
                <strong>Client-Centric Approach –</strong> Understanding unique
                security needs and offering tailored solutions.
              </li>
              <li>
                <strong>Integrity & Confidentiality –</strong> Protecting
                assets, privacy, and confidential information.
              </li>
              <li>
                <strong>Innovation & Technology –</strong> Leveraging AI
                surveillance, biometric access, and real-time tracking.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4 text-primary">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We are on a mission to redefine security across sectors. Beyond
              providing protection, we aim to build trust, confidence, and peace
              of mind through proactive monitoring, rapid response systems, and
              client-first service ethics.
            </p>
          </div>
          <img
            src={missionImg}
            alt="Mission Secuzy"
            className="w-full lg:w-1/2 max-h-[400px] rounded-2xl shadow-lg object-cover object-center"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="container mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-primary">
          Why Choose Us?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => (
            <Card
              key={idx}
              title={item.title}
              desc={item.desc}
              clickable={true}
              className="bg-white shadow-lg hover:shadow-xl transition transform hover:scale-105"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
