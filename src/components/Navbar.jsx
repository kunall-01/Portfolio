import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function PortfolioNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-emerald-950/95 backdrop-blur-md shadow-lg shadow-emerald-500/20 border-b border-emerald-900/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-2xl mt-5 font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent hover:from-emerald-300 hover:to-green-500 transition-all duration-300"
              >
                <img
                  src={"/logo.svg"}
                  height={78}
                  width={70}
                  alt="Kunal Kumawat Logo"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.name.toLowerCase()
                      ? "text-emerald-400 bg-emerald-500/10 shadow-sm shadow-emerald-500/20"
                      : "text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
              <button className="ml-4 px-5 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/30">
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-gray-900/98 backdrop-blur-md border-t border-emerald-900/30">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.name.toLowerCase()
                    ? "text-emerald-400 bg-emerald-500/10 shadow-sm shadow-emerald-500/20"
                    : "text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-center space-x-6 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
            <button className="w-full mt-4 px-5 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/30">
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
