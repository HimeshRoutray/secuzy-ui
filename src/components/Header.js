import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logoSecuzy.jpg";
import NavbarLinks from "./NavbarLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Secuzy Security Logo"
            className="h-10 w-auto object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold">Secuzy Security</h1>
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <NavbarLinks />
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-gray-700">
          <nav className="flex flex-col items-center py-4 space-y-3">
            <NavbarLinks onClick={() => setIsOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}
