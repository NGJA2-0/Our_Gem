import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="curation" className="border-t border-ivory-200/10 bg-charcoal-950 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-ivory-200/5">
          {/* Brand & Identity */}
          <div className="text-center md:text-left">
            <span className="font-serif text-3xl tracking-wider text-ivory-100 font-semibold uppercase block">
              AURELIA
            </span>
            <span className="text-xs tracking-widest text-gold-400 font-semibold uppercase font-sans mt-1 block">
              Haute Gemmes &bull; Private Specimen Showcase
            </span>
          </div>

          {/* Note */}
          <div className="text-center md:text-right max-w-sm">
            <p className="text-sm text-ivory-300 font-normal leading-relaxed">
              A private digital archive documenting rare natural mineral specimens and master faceted gemstones.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs tracking-wider text-ivory-400 uppercase font-medium gap-4">
          <span>&copy; {new Date().getFullYear()} AURELIA. ALL RIGHTS RESERVED.</span>
          <span className="text-ivory-300 font-serif italic text-sm normal-case tracking-normal">
            Natural Gemstone Exhibition
          </span>
        </div>
      </div>
    </footer>
  );
};
