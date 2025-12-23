export default function Contact() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-primary mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Reach out to us or learn more about the
          leadership that drives Secuzy Security.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="font-bold text-lg mb-2">Office Address</h3>
          <p className="text-gray-600">
            P406 SRI TIRUMALA SAROVAR <br /> SINGASANDRA
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="font-bold text-lg mb-2">Contact Information</h3>
          <p className="text-gray-600">Phone: 76196 02836</p>
          <p className="text-gray-600">Email: enquiry@secuzysecurity.com</p>
        </div>
      </div>

      {/* Leadership Section */}
<div className="mb-10">
  <h2 className="text-3xl font-bold text-center text-primary mb-12">
    Our Leadership
  </h2>

  <div className="grid md:grid-cols-2 gap-10">
    
    {/* Leader Card */}
    <div className="group relative bg-white p-8 rounded-xl shadow-md 
      hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      
      {/* Accent Bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-l-xl"></div>

      <h3 className="text-xl font-bold text-primary mb-1">
        Prof. (Dr.) Arun Kumar Prasad
      </h3>

      <p className="text-sm font-semibold text-gray-500 mb-4">
        Strategic Leadership & Governance
      </p>

      <div className="h-1 w-12 bg-primary mb-4 transition-all duration-300 
        group-hover:w-20"></div>

      <p className="text-gray-700 leading-relaxed text-sm">
        Prof. (Dr.) Arun Kumar Prasad is a former college principal known for his
        strong administration, discipline, and exceptional people leadership.
        A dynamic leader with a proven record of managing institutions and
        engaging actively in social and public domains, he brings sharp
        strategic vision and deep community insight.
        <br /><br />
        At Secuzy Security, he drives growth, governance, and operational
        excellence, ensuring clients receive safety built on trust and
        integrity. His extensive network and understanding of public systems
        help the company build strong partnerships with clients and authorities.
        A firm advocate of ethics and social responsibility, he plays a key role
        in shaping Secuzy’s values and long-term vision.
      </p>
    </div>

    {/* Leader Card */}
    <div className="group relative bg-white p-8 rounded-xl shadow-md 
      hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      
      {/* Accent Bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-l-xl"></div>

      <h3 className="text-xl font-bold text-primary mb-1">
        Colonel M Ranjan Prasad (Retd)
      </h3>

      <p className="text-sm font-semibold text-gray-500 mb-4">
        Head of Operations
      </p>

      <div className="h-1 w-12 bg-primary mb-4 transition-all duration-300 
        group-hover:w-20"></div>

      <p className="text-gray-700 leading-relaxed text-sm">
        A decorated veteran of the Indian Army, Colonel M Ranjan Prasad (Retd) is
        a seasoned operations leader with over three decades of distinguished
        service. Renowned for his strategic insight and disciplined leadership,
        he has successfully led teams in some of the most challenging
        operational environments.
        <br /><br />
        At Secuzy Security, he applies his expertise in planning, risk
        management, and mission execution to drive operational efficiency and
        organizational growth.
        <br /><br />
        After transitioning to the private sector, Colonel Prasad has
        spearheaded large-scale security operations for leading corporates,
        industrial enterprises, and critical infrastructure projects. His
        leadership combines military precision with strategic foresight,
        emphasizing discipline, accountability, and proactive risk management.
      </p>
    </div>

  </div>
</div>

    </div>
  );
}
