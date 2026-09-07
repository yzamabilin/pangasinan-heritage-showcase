"use client";

import { useState } from "react";
import NavigationItem from "../molecules/NavigationItem";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/heritage-sites", label: "Destinations" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-5 bg-[#2f4a35]/90 z-50">
      <span className="font-semibold text-lg text-white">Explore PANGASINAN</span>

      <nav className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <NavigationItem key={link.href} href={link.href} label={link.label} variant="desktop" />
        ))}
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="md:hidden text-white text-2xl w-10 h-10 flex items-center justify-center"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-[#2f4a35] flex flex-col items-center py-4 gap-4 shadow-lg">
          {navLinks.map((link) => (
            <NavigationItem
              key={link.href}
              href={link.href}
              label={link.label}
              variant="mobile"
              onClick={() => setIsOpen(false)}
            />
          ))}
        </nav>
      )}
    </header>
  );
}