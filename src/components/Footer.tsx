import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-brand-60 text-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          © {new Date().getFullYear()} Your Studio — All rights reserved
        </div>
        <nav className="flex gap-4 text-sm">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
