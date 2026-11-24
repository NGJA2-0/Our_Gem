import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative border-b border-ivory-200/10 bg-charcoal-950 overflow-hidden">
      
      {/* =========================================================================
          1. MOBILE EXPERIENCE (< 768px): Refined Luxury Editorial Layout
          No text overlapping the gemstone. The sapphire and typography both shine.
          ========================================================================= */}
      <div className="md:hidden flex flex-col items-center px-5 pt-10 pb-14 text-center">
        {/* Curatorial Subtitle */}
        <div className="inline-flex items-center space-x-2 mb-4 px-3 py-1 bg-charcoal-900 border border-gold-500/25">
          <span className="w-3 h-[1px] bg-gold-400" />
          <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold font-sans">
            Natural Minerals &bull; Private Archive
          </span>
          <span className="w-3 h-[1px] bg-gold-400" />
        </div>

        {/* Primary Editorial Title */}
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ivory-100 tracking-tight leading-tight mb-2.5">
          The Geometry of Light <br />
          <span className="italic font-normal text-gold-300 text-2xl sm:text-3xl">Ten Rare Gemstones</span>
        </h1>

        {/* Readable Editorial Lead */}
        <p className="text-xs sm:text-sm text-ivory-300 font-normal leading-relaxed mb-6 max-w-xs sm:max-w-sm">
          An intimate exhibition celebrating geological precision, vivid natural saturation, and singular crystal cuts.
        </p>

        {/* Hero Gemstone Featured Showcase */}
        <div className="relative w-full max-w-sm aspect-[16/11] overflow-hidden border border-ivory-200/15 shadow-2xl mb-7 bg-charcoal-900 group">
          <img
            src="/gems/hero.png"
            alt="Natural Royal Blue Sapphire on wet stone"
            className="w-full h-full object-cover object-[70%_center] transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
          
          {/* Corner Specimen Caption */}
          <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
            <span className="text-[9px] uppercase tracking-wider text-ivory-200 font-medium px-2 py-0.5 bg-charcoal-950/90 backdrop-blur-sm border border-ivory-200/15">
              Royal Blue Sapphire
            </span>
          </div>
        </div>

        {/* Call to Explore CTA Button */}
        <button
          onClick={scrollToCollection}
          className="group flex flex-col items-center space-y-2.5 text-xs uppercase tracking-widest font-semibold text-ivory-100 active:text-gold-300 transition-colors focus:outline-none"
        >
          <span className="px-6 py-2.5 bg-charcoal-900 border border-gold-500/40 text-gold-300 shadow-lg tracking-wider text-xs">
            View The 10 Specimens
          </span>
          <div className="w-8 h-8 border border-ivory-200/15 flex items-center justify-center bg-charcoal-900/80">
            <ArrowDown className="w-3.5 h-3.5 text-gold-400 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>


      {/* =========================================================================
          2. DESKTOP EXPERIENCE (>= 768px): Full-Bleed Cinematic Showcase
          The layout verified and approved for large screens.
          ========================================================================= */}
      <div className="hidden md:flex relative min-h-[88vh] lg:min-h-[92vh] items-center justify-center">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/gems/hero.png"
            alt="Natural Royal Blue Sapphire on wet stone"
            className="w-full h-full object-cover object-center lg:object-right transform scale-100 transition-transform duration-1000"
          />

          {/* Vignettes for Contrast and Depth */}
          <div className="absolute inset-0 bg-charcoal-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/65 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal-950 via-charcoal-950/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-transparent" />
        </div>

        {/* Architectural vertical grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="h-full w-full max-w-7xl mx-auto border-x border-ivory-100 grid grid-cols-6">
            <div className="border-r border-ivory-100 h-full" />
            <div className="border-r border-ivory-100 h-full" />
            <div className="border-r border-ivory-100 h-full" />
            <div className="border-r border-ivory-100 h-full" />
            <div className="border-r border-ivory-100 h-full" />
            <div className="h-full" />
          </div>
        </div>

        {/* Desktop Editorial Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-24 text-center">
          {/* Subtitle Pill */}
          <div className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 bg-charcoal-950/80 backdrop-blur-md border border-ivory-200/15">
            <span className="w-8 h-[1.5px] bg-gold-400/80" />
            <span className="text-xs font-sans uppercase tracking-widest text-gold-400 font-semibold">
              Singular Natural Minerals &bull; Private Archive
            </span>
            <span className="w-8 h-[1.5px] bg-gold-400/80" />
          </div>

          {/* Primary Editorial Title */}
          <h1 className="font-serif text-5xl lg:text-7xl font-semibold text-ivory-100 tracking-tight leading-[1.12] mb-6 drop-shadow-md">
            The Geometry of Light <br />
            <span className="italic font-normal text-gold-300">Ten Rare Gemstones</span>
          </h1>

          {/* Readable Editorial Lead */}
          <p className="max-w-2xl mx-auto text-base lg:text-lg text-ivory-200 font-normal leading-relaxed mb-10 drop-shadow">
            An intimate exhibition celebrating geological precision, vivid natural saturation, 
            and singular crystal cuts. Presented purely for study and aesthetic contemplation.
          </p>

          {/* Call to Explore */}
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={scrollToCollection}
              className="group flex flex-col items-center space-y-3 text-xs uppercase tracking-widest font-semibold text-ivory-100 hover:text-gold-300 transition-colors focus:outline-none"
            >
              <span className="bg-charcoal-950/80 backdrop-blur-md px-5 py-2 border border-ivory-200/20 group-hover:border-gold-400/60 transition-all shadow-md">
                View The 10 Specimens
              </span>
              <div className="w-10 h-10 border border-ivory-200/20 group-hover:border-gold-400/80 flex items-center justify-center transition-all bg-charcoal-950/80 backdrop-blur-sm shadow-lg">
                <ArrowDown className="w-4 h-4 text-gold-400 group-hover:translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
