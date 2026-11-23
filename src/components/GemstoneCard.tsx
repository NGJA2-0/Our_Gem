import React from 'react';
import { Gemstone } from '../types/gemstone';
import { Eye } from 'lucide-react';

interface GemstoneCardProps {
  gemstone: Gemstone;
  onSelect: (gemstone: Gemstone) => void;
}

export const GemstoneCard: React.FC<GemstoneCardProps> = ({ gemstone, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(gemstone)}
      className="group relative bg-charcoal-900/80 border border-ivory-200/10 hover:border-gold-500/50 transition-all duration-400 cursor-pointer flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl"
    >
      {/* Top Specimen Header */}
      <div className="p-4 sm:p-5 pb-3 flex items-center justify-between border-b border-ivory-200/5 bg-charcoal-900/70">
        <span className="font-serif text-sm font-semibold tracking-wider text-gold-400">
          {gemstone.itemNumber}
        </span>
        <span className="text-xs uppercase tracking-wider text-ivory-300/90 font-medium">
          {gemstone.mineralFamily}
        </span>
      </div>

      {/* Image Showcase Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-charcoal-950 flex items-center justify-center p-3 sm:p-4">
        <img
          src={gemstone.image}
          alt={gemstone.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle luxury corner gradient shield */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
        
        {/* Refined bottom-right corner badge */}
        <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
          <span className="text-[10px] uppercase tracking-wider text-ivory-300 font-medium px-2 py-0.5 bg-charcoal-950/90 backdrop-blur-sm border border-ivory-200/15">
            Specimen
          </span>
        </div>

        {/* Hover overlay indicator for Desktop */}
        <div className="absolute inset-0 bg-charcoal-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="px-4 py-2 bg-charcoal-950/95 border border-gold-400/60 text-xs tracking-wider text-ivory-100 font-semibold uppercase flex items-center space-x-2 shadow-xl">
            <Eye className="w-4 h-4 text-gold-400" />
            <span>Examine Gem</span>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 pt-4 flex-1 flex flex-col justify-between bg-charcoal-900/50">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-ivory-100 group-hover:text-gold-300 transition-colors tracking-normal mb-1.5">
            {gemstone.name}
          </h3>
          <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">
            {gemstone.cut}
          </p>
          <p className="text-sm text-ivory-300 font-normal leading-relaxed line-clamp-2">
            {gemstone.colorDescription} &bull; {gemstone.variety}
          </p>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="mt-4 pt-3 border-t border-ivory-200/5 flex items-center justify-between text-xs tracking-wider text-ivory-400 uppercase font-medium">
          <span>Natural Crystal</span>
          <span className="text-gold-400 group-hover:text-gold-300 group-hover:translate-x-0.5 transition-all">
            Inspect Details &rarr;
          </span>
        </div>
      </div>
    </article>
  );
};
