import { Link } from "react-router-dom";

export default function NavbarLinks({ onClick }) {
  return (
    <>
      <Link 
        to="/" 
        className="text-base md:text-lg font-semibold px-3 py-2 rounded-md
             hover:text-accent transition" onClick={onClick}>
              Home
      </Link>
      <Link 
        to="/services" 
        className="text-base md:text-lg font-semibold px-3 py-2 rounded-md
             hover:text-accent transition" onClick={onClick}>
              Services
      </Link>
      <Link 
        to="/industries" 
        className="text-base md:text-lg font-semibold px-3 py-2 rounded-md
             hover:text-accent transition" onClick={onClick}>
              Industries
      </Link>
      <Link 
        to="/faq" 
        className="text-base md:text-lg font-semibold px-3 py-2 rounded-md
             hover:text-accent transition" onClick={onClick}>
              FAQs
      </Link>
      <Link 
        to="/contact" 
        className="text-base md:text-lg font-semibold px-3 py-2 rounded-md
             hover:text-accent transition" onClick={onClick}>
              Contact
      </Link>
    </>
  );
}
