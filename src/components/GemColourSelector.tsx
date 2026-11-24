import React from 'react';
import { GemColourVariant } from '../types/gemstone';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface GemColourSelectorProps {
  variants: GemColourVariant[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

/**
 * Premium visual colour selector for gemstone natural colour variations.
 * Follows the high-end gemmological archive direction:
 * - Each variation displays an individual faceted gemstone visual on black reflective ground
 * - Consistent cut, proportions, and viewing angle with only natural crystal colour changing
 * - Thin champagne-gold rounded border for the selected card
 * - Pill indicator [✔ Selected] below the selected colour name
 * - Subtle [★ Rare] pill indicator for verified rare varieties
 */
export const GemColourSelector: React.FC<GemColourSelectorProps> = ({
  variants,
  selectedIndex,
  onSelect,
}) => {
  return (
    <div className="w-full">
      {/* Header section matching reference design */}
      <div className="flex items-center gap-3 sm:gap-4 mb-1">
        <h3 className="font-serif text-sm sm:text-base md:text-lg tracking-wider text-gold-400 font-semibold uppercase whitespace-nowrap">
          Colour Variations
        </h3>
        <div className="flex-1 hairline-gold" />
      </div>

      <p className="text-xs sm:text-sm text-ivory-400/80 font-normal mb-4 sm:mb-5">
        Same cut, different natural colours.
      </p>

      {/* Gemstone Visuals Container — responsive flex layout with comfortable touch scrolling on mobile */}
      <div
        className="flex items-start gap-3 sm:gap-4 md:gap-5 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-charcoal-700 scrollbar-track-transparent snap-x snap-mandatory"
        role="radiogroup"
        aria-label="Gemstone natural colour variations"
      >
        {variants.map((variant, index) => {
          const isSelected = index === selectedIndex;

          return (
            <div
              key={variant.name}
              className="flex flex-col items-center flex-shrink-0 w-24 sm:w-28 md:w-32 snap-start group cursor-pointer"
              onClick={() => onSelect(index)}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect(index);
                }
              }}
            >
              {/* Gemstone Image Frame */}
              <div
                className={[
                  'relative w-full aspect-square rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center p-1.5 sm:p-2 bg-charcoal-950',
                  isSelected
                    ? 'border border-gold-400/90 shadow-[0_0_18px_rgba(203,176,133,0.18)] scale-100'
                    : 'border border-transparent hover:border-ivory-200/25 hover:bg-charcoal-900/60 opacity-80 hover:opacity-100',
                ].join(' ')}
              >
                {variant.image ? (
                  <img
                    src={variant.image}
                    alt={variant.name}
                    loading="lazy"
                    className="w-full h-full object-contain filter drop-shadow-md select-none transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  // Fallback gemstone colour block if image is loading or unlinked
                  <div
                    className="w-12 h-12 rounded-full shadow-inner"
                    style={{ backgroundColor: variant.hex }}
                  />
                )}
              </div>

              {/* Gemstone Colour Name */}
              <span
                className={[
                  'font-serif text-xs sm:text-sm text-center font-normal tracking-wide mt-2.5 transition-colors line-clamp-1',
                  isSelected ? 'text-ivory-100 font-medium' : 'text-ivory-300/80 group-hover:text-ivory-100',
                ].join(' ')}
                title={variant.name}
              >
                {variant.name}
              </span>

              {/* Status Indicator Pill: Selected or Rare or Empty spacer */}
              <div className="mt-1.5 flex items-center justify-center min-h-[26px]">
                {isSelected ? (
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full border border-gold-400/60 bg-[#161410] text-gold-300 text-[10px] sm:text-xs font-serif shadow-sm animate-fadeIn">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400" />
                    <span>Selected</span>
                  </div>
                ) : variant.isRare ? (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-gold-500/35 bg-gold-950/40 text-gold-400 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                    <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                    <span>Rare</span>
                  </div>
                ) : (
                  <div className="h-[22px]" aria-hidden="true" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
