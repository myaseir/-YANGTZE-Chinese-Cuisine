"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Get the current route
  const pathname = usePathname();

  // Transition background on scroll to maintain readability over the dark hero image
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-700 ${
        scrolled || isOpen
          ? "bg-zinc-950/90 backdrop-blur-md py-4 border-b border-zinc-800/50 shadow-lg" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-10">
          
          {/* 1. Desktop Left Navigation - Dining Focus */}
          <div className="hidden md:flex gap-10 items-center flex-1">
            <Link 
              href="/menu" 
              className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-amber-500 
                ${isActive("/menu") ? "text-white font-bold" : "text-gray-300 font-semibold"}`}
            >
              Menu
            </Link>
            <Link 
              href="/private-dining" 
              className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-amber-500 
                ${isActive("/private-dining") ? "text-white font-bold" : "text-gray-300 font-semibold"}`}
            >
              Private Dining
            </Link>
          </div>

          {/* 2. Central Logo - Premium Branding */}
          <div className="flex-shrink-0 z-50">
            <Link 
              href="/" 
              onClick={closeMenu}
              className="text-2xl md:text-3xl font-serif tracking-widest text-white transition-opacity hover:opacity-80 flex flex-col items-center leading-none"
            >
              <span className="mb-1">YANGTZE</span>
              <span className="text-[9px] tracking-[0.4em] uppercase font-sans text-amber-500 font-light">Chinese Cuisine</span>
            </Link>
          </div>

          {/* 3. Desktop Right Navigation - Action Focused */}
          <div className="hidden md:flex gap-10 items-center justify-end flex-1">
            <Link 
              href="/about" 
              className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-amber-500 
                ${isActive("/about") ? "text-white font-bold" : "text-gray-300 font-semibold"}`}
            >
              Our Story
            </Link>
            <Link 
              href="/reservations"
              className="px-6 py-2.5 bg-amber-600 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-amber-500 transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.2)] rounded-sm"
            >
              Reservations
            </Link>
          </div>

          {/* 4. Mobile Toggle Button - Dark Mode Adapted */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 relative z-[110]"
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
                <span className={`h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}></span>
                <span className={`h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 5. Compact Mobile Menu Drop-down - Dark Theme */}
      <div 
        className={`fixed left-0 right-0 top-0 w-full bg-zinc-950 z-[90] shadow-2xl transition-all duration-500 ease-in-out md:hidden border-b border-zinc-800 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ height: 'auto' }} 
      >
        <nav className="flex flex-col items-center gap-6 py-8 pt-28 pb-12">
          
          <Link 
            href="/" 
            onClick={closeMenu} 
            className={`text-[10px] tracking-[0.4em] uppercase transition-colors 
              ${isActive("/") ? "text-amber-500 font-bold" : "text-gray-300 font-semibold hover:text-white"}`}
          >
            Home
          </Link>

          <Link 
            href="/menu" 
            onClick={closeMenu} 
            className={`text-[11px] tracking-[0.3em] uppercase transition-colors 
              ${isActive("/menu") ? "text-amber-500 font-bold" : "text-gray-300 font-semibold hover:text-white"}`}
          >
            Menu
          </Link>

          <Link 
            href="/private-dining" 
            onClick={closeMenu} 
            className={`text-[11px] tracking-[0.3em] uppercase transition-colors 
              ${isActive("/private-dining") ? "text-amber-500 font-bold" : "text-gray-300 font-semibold hover:text-white"}`}
          >
            Private Dining
          </Link>

          <Link 
            href="/about" 
            onClick={closeMenu} 
            className={`text-[11px] tracking-[0.3em] uppercase transition-colors 
              ${isActive("/about") ? "text-amber-500 font-bold" : "text-gray-300 font-semibold hover:text-white"}`}
          >
            Our Story
          </Link>

          <Link 
            href="/reservations"
            onClick={closeMenu}
            className="mt-4 px-8 py-3 bg-amber-600 text-white text-[10px] tracking-[0.3em] uppercase font-bold rounded-sm shadow-[0_0_15px_rgba(217,119,6,0.2)]"
          >
            Reservations
          </Link>

          {/* Small upscale tag replacing the location tag */}
          <span className="mt-6 text-[8px] tracking-[0.3em] text-zinc-600 uppercase">
            Premium Dining Experience
          </span>
        </nav>
      </div>
    </nav>
  );
}