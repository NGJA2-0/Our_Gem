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
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 border-b border-ivory-200/10 overflow-hidden">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full max-w-7xl mx-auto border-x border-ivory-100 grid grid-cols-3 md:grid-cols-6">
          <div className="border-r border-ivory-100 h-full" />
          <div className="border-r border-ivory-100 h-full hidden md:block" />
          <div className="border-r border-ivory-100 h-full" />
          <div className="border-r border-ivory-100 h-full hidden md:block" />
          <div className="border-r border-ivory-100 h-full" />
          <div className="h-full hidden md:block" />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Curatorial Subtitle */}
        <div className="inline-flex items-center space-x-3 mb-6">
          <span className="w-8 h-[1.5px] bg-gold-400/70" />
          <span className="text-xs sm:text-sm font-sans uppercase tracking-widest text-gold-400 font-semibold">
            Singular Natural Minerals &bull; Private Archive
          </span>
          <span className="w-8 h-[1.5px] bg-gold-400/70" />
        </div>

        {/* Primary Editorial Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-semibold text-ivory-100 tracking-tight leading-[1.15] mb-6">
          The Geometry of Light <br />
          <span className="italic font-normal text-gold-300">Nine Rare Gemstones</span>
        </h1>

        {/* Readable Editorial Lead */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory-300 font-normal leading-relaxed mb-10">
          An intimate exhibition celebrating geological precision, vivid natural saturation, 
          and singular crystal cuts. Presented purely for study and aesthetic contemplation.
        </p>

        {/* Call to Explore */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={scrollToCollection}
            className="group flex flex-col items-center space-y-3 text-xs sm:text-sm uppercase tracking-widest font-medium text-ivory-200 hover:text-gold-300 transition-colors focus:outline-none"
          >
            <span>View The 9 Specimens</span>
            <div className="w-10 h-10 border border-ivory-200/20 group-hover:border-gold-400/70 flex items-center justify-center transition-all bg-charcoal-900/50">
              <ArrowDown className="w-4 h-4 text-gold-400 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
