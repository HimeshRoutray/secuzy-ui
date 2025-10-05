// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Secuzy Security Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
