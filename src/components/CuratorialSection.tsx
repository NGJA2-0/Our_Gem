import React from 'react';

export const CuratorialSection: React.FC = () => {
  return (
    <section id="provenance" className="py-20 md:py-28 border-t border-ivory-200/10 bg-charcoal-900/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-sans uppercase tracking-widest text-gold-400 font-semibold mb-3">
            Gemological Perspectives
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-100 tracking-tight leading-snug">
            Visual Harmony & Mineral Purity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory-300 font-normal leading-relaxed">
            Every gemstone in this private gallery is cataloged under standardized natural daylight conditions. 
            The collection represents an uncompromised commitment to genuine color saturation and master lapidary proportion.
          </p>
        </div>

        {/* 3 Pillars of Examination */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          <div className="border-t border-gold-500/40 pt-6">
            <span className="font-serif font-bold text-gold-400 text-lg">01</span>
            <h3 className="font-serif text-2xl font-semibold text-ivory-100 mt-2 mb-2 tracking-normal">
              Color Saturation
            </h3>
            <p className="text-sm text-ivory-300 font-normal leading-relaxed">
              Evaluating the purity of primary body hue, tone depth, and natural pleochroic dispersion without artificial color enhancement.
            </p>
          </div>

          <div className="border-t border-gold-500/40 pt-6">
            <span className="font-serif font-bold text-gold-400 text-lg">02</span>
            <h3 className="font-serif text-2xl font-semibold text-ivory-100 mt-2 mb-2 tracking-normal">
              Lapidary Precision
            </h3>
            <p className="text-sm text-ivory-300 font-normal leading-relaxed">
              Precision pavilion angles and culet symmetry engineered to maximize internal total reflection and minimize light windowing.
            </p>
          </div>

          <div className="border-t border-gold-500/40 pt-6">
            <span className="font-serif font-bold text-gold-400 text-lg">03</span>
            <h3 className="font-serif text-2xl font-semibold text-ivory-100 mt-2 mb-2 tracking-normal">
              Crystal Integrity
            </h3>
            <p className="text-sm text-ivory-300 font-normal leading-relaxed">
              Unblemished crystal structures showcasing diagnostic inclusions that authenticate their natural geological birth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
