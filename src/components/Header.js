import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logoSecuzy.jpg";
import NavbarLinks from "./NavbarLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down → hide
        setShowHeader(false);
      } else {
        // scrolling up → show
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-primary text-white shadow-md fixed top-0 w-full z-50
        transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Secuzy Security Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold">
            Secuzy Security
          </h1>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <NavbarLinks />
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-gray-700">
          <nav className="flex flex-col items-center py-6 space-y-4">
            <NavbarLinks onClick={() => setIsOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}
