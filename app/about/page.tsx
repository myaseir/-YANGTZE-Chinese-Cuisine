"use client";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-20 selection:bg-amber-600/30 selection:text-amber-200">
      
      {/* Editorial Header */}
      <section className="bg-black text-gray-300 py-32 px-4 text-center relative overflow-hidden border-b border-zinc-800">
        {/* Subtle Texture/Dark Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 text-[10px] md:text-xs tracking-[0.5em] font-bold uppercase mb-6 block"
          >
            Our Heritage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8 italic tracking-tighter"
          >
            The Spirit of the Wok
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto font-light leading-relaxed text-gray-400 text-lg md:text-xl italic"
          >
            Discover the dedication and artistry behind Islamabad's premier destination for authentic Chinese gastronomy.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* High-Reliability Editorial Image - Culinary Craft */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] md:h-[700px] w-full overflow-hidden shadow-2xl group bg-zinc-900 border border-zinc-800"
          >
            <img 
              src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1000" 
              alt="The Culinary Art" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            {/* Subtle Inner Frame */}
            <div className="absolute inset-0 border-[1px] border-amber-500/30 m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.div>

          {/* Brand Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start"
          >
            <h4 className="text-amber-500 text-[11px] tracking-[0.3em] uppercase font-bold mb-4">
              The Yangtze Philosophy
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 italic leading-tight">
              Tradition, Technique & <br/> Modern Elegance
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
              <p>
                Yangtze Chinese Cuisine is an exclusive dining destination where we focus on the intersection of time-honored tradition and high-end gastronomy. We believe a meal is not just sustenance, but a sensory journey through the diverse provinces of the East.
              </p>
              <p>
                From the meticulous folding of our signature dim sum to the fiery precision of our wok-seared mains, our process is defined by deep respect for the ingredients. We don't just cook; we curate unforgettable culinary experiences tailored for the modern palate.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-8 items-center">
              <Link 
                href="/menu" 
                className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:-translate-y-1 rounded-sm"
              >
                Explore The Menu
              </Link>
              <span className="text-[9px] tracking-widest uppercase text-zinc-500">
                Crafted in <span className="text-gray-300 font-bold uppercase">Islamabad</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Quote */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed mb-8 drop-shadow-lg"
          >
            "A dish is more than a recipe—it is a story of heritage told through flavor."
          </motion.p>
          <span className="text-[10px] tracking-[0.5em] uppercase text-amber-500 font-bold">Our Promise</span>
        </div>
      </section>
    </main>
  );
}