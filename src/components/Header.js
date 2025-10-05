// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoSecuzy.jpg"; // 👈 place your logo inside src/assets/

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Secuzy Security Logo" 
            className="h-10 w-auto object-contain" // 👈 adjust height as needed
          />
          <h1 className="text-xl md:text-2xl font-bold">Secuzy Security</h1>
        </div>

        {/* Nav Links */}
        <nav className="space-x-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/services" className="hover:text-accent">Services</Link>
          <Link to="/industries" className="hover:text-accent">Industries</Link>
          <Link to="/about" className="hover:text-accent">About Us</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
