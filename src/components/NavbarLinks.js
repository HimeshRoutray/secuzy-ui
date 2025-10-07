import { Link } from "react-router-dom";

export default function NavbarLinks({ onClick }) {
  return (
    <>
      <Link to="/" className="hover:text-accent" onClick={onClick}>Home</Link>
      <Link to="/services" className="hover:text-accent" onClick={onClick}>Services</Link>
      <Link to="/industries" className="hover:text-accent" onClick={onClick}>Industries</Link>
      <Link to="/faq" className="hover:text-accent" onClick={onClick}>FAQs</Link>
      <Link to="/contact" className="hover:text-accent" onClick={onClick}>Contact</Link>
    </>
  );
}
