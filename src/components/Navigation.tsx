"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onExplore: () => void;
  onBookDemo: () => void;
  onContact: () => void;
}

const navLinks = [
  { label: "Evidence", href: "#knowledge-hub" },
  { label: "Methodology", href: "#engagement" },
  { label: "ROI Demo", href: "#roi-demo" },
  { label: "Case Studies", href: "#success-stories" },
  { label: "Resources", href: "#downloads" },
];

export default function Navigation({ onExplore, onBookDemo, onContact }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-[rgba(255,92,168,0.12)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5CA8] to-[#FF8BC2] flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-[#1F1F1F] text-lg tracking-tight">
              AhaSlides
            </span>
            <span className="hidden md:inline text-xs font-medium text-[#FF5CA8] bg-[#FCE7F3] px-2 py-0.5 rounded-full">
              PROVE IT
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#6B7280] hover:text-[#FF5CA8] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onContact}
              className="text-sm font-medium text-[#6B7280] hover:text-[#1F1F1F] transition-colors px-4 py-2"
            >
              Contact
            </button>
            <button
              onClick={onExplore}
              className="text-sm font-medium text-[#FF5CA8] border border-[#FF5CA8] px-4 py-2 rounded-lg hover:bg-[#FCE7F3] transition-all duration-200"
            >
              Explore Evidence
            </button>
            <button
              onClick={onBookDemo}
              className="text-sm font-medium text-white bg-[#FF5CA8] px-4 py-2 rounded-lg hover:bg-[#FF8BC2] transition-all duration-200 shadow-sm"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#1F1F1F]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-[rgba(255,92,168,0.12)] shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[#1F1F1F] hover:text-[#FF5CA8] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-[rgba(255,92,168,0.12)]">
                <button
                  onClick={() => { onExplore(); setMobileOpen(false); }}
                  className="text-sm font-medium text-[#FF5CA8] border border-[#FF5CA8] px-4 py-2.5 rounded-lg text-center"
                >
                  Explore Evidence
                </button>
                <button
                  onClick={() => { onBookDemo(); setMobileOpen(false); }}
                  className="text-sm font-medium text-white bg-[#FF5CA8] px-4 py-2.5 rounded-lg text-center"
                >
                  Book ROI Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
