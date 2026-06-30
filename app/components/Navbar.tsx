"use client";

import { useState, useEffect } from "react";
import { useBookingModal } from "./BookingModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Beranda" },
    { href: "#features", label: "Keunggulan" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#services", label: "Layanan" },
    { href: "#calculator", label: "Kalkulator" },
    { href: "#testi", label: "Testimoni" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100"
          : "bg-white/90 backdrop-blur-md border-b border-blue-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:bg-blue-700 transition-colors">
              <i className="fa-solid fa-soap text-xl"></i>
            </div>
            <div>
              <span className="text-xl font-extrabold text-blue-900 tracking-tight block leading-tight">
                JIHAN
              </span>
              <span className="text-xs font-semibold text-blue-500 tracking-widest uppercase block -mt-1">
                Laundry
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => openModal()}
              id="nav-cta-btn"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <i className="fa-solid fa-truck-ramp-box mr-2"></i>
              Pesan Antar Jemput
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              <i
                className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => {
            openModal();
            setMobileMenuOpen(false);
          }}
          id="mobile-cta-btn"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
        >
          <i className="fa-solid fa-truck-ramp-box"></i>
          <span>Pesan Antar Jemput</span>
        </button>
      </div>
    </nav>
  );
}
