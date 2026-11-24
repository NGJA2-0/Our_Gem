import React from 'react';
import { GemColourVariant } from '../types/gemstone';

interface GemColourSelectorProps {
  variants: GemColourVariant[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

/**
 * Premium colour swatch selector for gemstone colour variations.
 * Swatches are square with subtle rounded corners, champagne-gold selected border.
 */
export const GemColourSelector: React.FC<GemColourSelectorProps> = ({
  variants,
  selectedIndex,
  onSelect,
}) => {
  return (
    <div>
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
          Colour Variations
        </span>
        <div className="flex-1 hairline-gold" />
      </div>

      {/* Selected colour name */}
      <p className="text-sm text-ivory-100 font-medium mb-3 h-5">
        {variants[selectedIndex]?.name ?? ''}
        {variants[selectedIndex]?.isRare && (
          <span className="ml-2 text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-500/40 px-1.5 py-px">
            Rare
          </span>
        )}
      </p>

      {/* Swatch grid */}
      <div
        className="flex flex-wrap gap-2.5"
        role="listbox"
        aria-label="Gemstone colour variations"
      >
        {variants.map((variant, index) => {
          const isSelected = index === selectedIndex;
          return (
            <div key={index} className="flex flex-col items-center gap-1">
              <button
                role="option"
                aria-selected={isSelected}
                aria-label={`${variant.name}${variant.isRare ? ' — Rare' : ''}`}
                onClick={() => onSelect(index)}
                className={[
                  'relative w-9 h-9 sm:w-10 sm:h-10 rounded-sm transition-all duration-200 focus:outline-none',
                  'focus-visible:ring-1 focus-visible:ring-gold-400 focus-visible:ring-offset-1 focus-visible:ring-offset-charcoal-900',
                  isSelected
                    ? 'ring-1 ring-gold-400 ring-offset-[2px] ring-offset-charcoal-900 scale-105 shadow-md'
                    : 'ring-1 ring-ivory-200/15 hover:ring-ivory-200/35 hover:scale-105',
                ].join(' ')}
                style={{ backgroundColor: variant.hex }}
              >
                {/* Rare dot indicator */}
                {variant.isRare && (
                  <span
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400 border border-charcoal-900"
                    aria-hidden="true"
                  />
                )}
              </button>
              {/* Colour name label — small, understated */}
              <span
                className={[
                  'text-[9px] sm:text-[10px] uppercase tracking-wide leading-none text-center max-w-[40px] truncate transition-colors',
                  isSelected ? 'text-gold-300' : 'text-ivory-400',
                ].join(' ')}
              >
                {variant.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Moonstone adularescence note — example of optical effect annotation */}
    </div>
  );
};
