"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Problem", href: "#problem" },
    { name: "Solutions", href: "#solutions" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg" 
          : "bg-white/80 backdrop-blur-sm"
      } border-b border-gray-100`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">

        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-60 to-brand-30 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform text-brand-60 bg-brand-60"
        >
          DevBrand
        </Link>

        <ul className="hidden md:flex gap-1 bg-gray-50 rounded-full px-2 py-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="px-4 py-2 rounded-full text-gray-600 hover:text-brand-60 hover:bg-white transition-all font-medium text-sm"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

 
        <a
          href="#contact"
          className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-brand-60 to-brand-30  text-white bg-brand-60 hover:shadow-xl hover:scale-105 transition-all font-semibold"
        >
          Start Project
        </a>


        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brand-60 text-2xl w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </nav>


      {open && (
        <div className="md:hidden bg-white border-t shadow-xl animate-fadeIn">
          <ul className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-gray-700 hover:text-brand-60 hover:bg-gray-50 py-3 px-4 text-lg rounded-lg transition-all"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block text-center py-3 rounded-xl bg-gradient-to-r from-brand-60 to-brand-30 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Project
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}