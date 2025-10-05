import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Card({ title, desc, img, className = "", clickable = false }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (clickable && desc) {
      setExpanded(!expanded);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative bg-white p-6 rounded-lg shadow-md transition-all duration-300 
        ${clickable ? "cursor-pointer hover:shadow-xl hover:scale-[1.02]" : ""} 
        ${className}`}
    >
      {/* Image */}
      {img && (
        <div className="w-full h-48 md:h-56 overflow-hidden mb-4">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-300 
              ${clickable ? 'hover:scale-105' : ''}"
          />
        </div>
      )}

      {/* Title + Arrow */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-xl">{title}</h3>
        {clickable && desc && (
          <ChevronRight
            className={`w-5 h-5 text-primary transition-transform duration-300 ${
              expanded ? "rotate-90" : ""
            }`}
          />
        )}
      </div>

      {/* Description (only if clickable) */}
      {clickable && desc && expanded && (
        <p className="text-gray-600 mt-2">{desc}</p>
      )}
    </div>
  );
}
