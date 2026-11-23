import React from 'react';
import { Gemstone } from '../types/gemstone';
import { GemstoneCard } from './GemstoneCard';

interface GemstoneGridProps {
  gemstones: Gemstone[];
  onSelectGemstone: (gemstone: Gemstone) => void;
}

export const GemstoneGrid: React.FC<GemstoneGridProps> = ({
  gemstones,
  onSelectGemstone,
}) => {
  return (
    <section id="collection" className="py-16 md:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 border-b border-ivory-200/10 pb-6">
        <div>
          <div className="text-xs font-sans uppercase tracking-widest text-gold-400 font-semibold mb-2">
            Curated Showcase
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ivory-100 tracking-tight">
            The Permanent Collection
          </h2>
        </div>
        <div className="mt-4 md:mt-0 text-xs sm:text-sm tracking-wider text-ivory-300 font-medium">
          SHOWCASING <span className="text-gold-300 font-serif font-bold text-lg sm:text-xl">9</span> OF 9 SPECIMENS
        </div>
      </div>

      {/* 3x3 Luxury Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {gemstones.map((gem) => (
          <GemstoneCard
            key={gem.id}
            gemstone={gem}
            onSelect={onSelectGemstone}
          />
        ))}
      </div>
    </section>
  );
};
