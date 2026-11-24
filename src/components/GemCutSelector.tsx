import React from 'react';
import { GEM_CUTS } from '../data/gemCuts';
import { GemCutSilhouette } from './GemCutSilhouette';
import { Star } from 'lucide-react';

interface GemCutSelectorProps {
  availableCutIds: string[];
  selectedCutId: string;
  recommendedCutId: string;
  onSelect: (cutId: string) => void;
  /** Optional note to display (e.g. optical effect note for moonstone) */
  note?: string;
}

/**
 * Gemstone cut selection chart.
 * Displays only the cuts appropriate for the given gemstone.
 * Header matches the luxury archive direction with [★ Recommended Cut] badge.
 * Shows selected cut name below the grid.
 */
export const GemCutSelector: React.FC<GemCutSelectorProps> = ({
  availableCutIds,
  selectedCutId,
  recommendedCutId,
  onSelect,
  note,
}) => {
  const availableCuts = GEM_CUTS.filter((c) => availableCutIds.includes(c.id));
  const selectedCut = GEM_CUTS.find((c) => c.id === selectedCutId);
  const isSelectedRecommended = selectedCutId === recommendedCutId;

  return (
    <div className="w-full">
      {/* Section heading with right-aligned Recommended Cut pill as seen in reference */}
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <h3 className="font-serif text-sm sm:text-base md:text-lg tracking-wider text-gold-400 font-semibold uppercase whitespace-nowrap">
            Cut &amp; Faceting
          </h3>
          <div className="flex-1 hairline-gold mr-2 hidden xs:block sm:block" />
        </div>

        {/* Recommended Cut Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold-500/40 bg-charcoal-900/80 text-gold-300 text-xs font-serif flex-shrink-0 shadow-sm">
          <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          <span>Recommended Cut</span>
        </div>
      </div>

      {/* Selected cut subtitle / name indicator */}
      <p className="text-xs sm:text-sm text-ivory-300/80 font-normal mb-3 h-5 flex items-center">
        <span>Selected Cut:&nbsp;</span>
        <span className="text-ivory-100 font-medium">{selectedCut?.name ?? ''}</span>
        {isSelectedRecommended && (
          <span className="ml-2 text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-500/40 px-1.5 py-px rounded-sm bg-gold-950/30">
            Recommended
          </span>
        )}
      </p>

      {/* Cut silhouette grid */}
      <div
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-3"
        role="listbox"
        aria-label="Gemstone cut options"
      >
        {availableCuts.map((cut) => {
          const isSelected = cut.id === selectedCutId;
          const isRecommended = cut.id === recommendedCutId;

          return (
            <div key={cut.id} className="flex flex-col items-center gap-1">
              <button
                role="option"
                aria-selected={isSelected}
                aria-label={`${cut.name}${isRecommended ? ' — Recommended' : ''}`}
                onClick={() => onSelect(cut.id)}
                className={[
                  'relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg',
                  'transition-all duration-200 focus:outline-none',
                  'focus-visible:ring-1 focus-visible:ring-gold-400 focus-visible:ring-offset-1 focus-visible:ring-offset-charcoal-900',
                  isSelected
                    ? 'text-gold-300 scale-105'
                    : 'text-ivory-400 hover:text-ivory-100 hover:scale-105',
                  isSelected && isRecommended
                    ? 'border border-gold-500/70 bg-charcoal-800/70 shadow-[0_0_12px_rgba(203,176,133,0.15)]'
                    : isSelected
                    ? 'border border-ivory-200/40 bg-charcoal-800/50'
                    : 'border border-transparent hover:border-ivory-200/15 bg-charcoal-950/40',
                ].join(' ')}
              >
                <GemCutSilhouette cutId={cut.id} size={28} />

                {/* Recommended star dot indicator */}
                {isRecommended && (
                  <span
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-400 border border-charcoal-900"
                    aria-hidden="true"
                    title="Recommended signature cut"
                  />
                )}
              </button>

              {/* Cut label */}
              <span
                className={[
                  'text-[9px] sm:text-[10px] uppercase tracking-wide leading-none text-center transition-colors',
                  isSelected ? 'text-gold-300 font-medium' : 'text-ivory-400',
                ].join(' ')}
              >
                {cut.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Optional note (e.g. for moonstone adularescence) */}
      {note && (
        <p className="mt-3 text-[11px] text-ivory-400/70 leading-relaxed italic border-l border-gold-500/30 pl-2">
          {note}
        </p>
      )}
    </div>
  );
};
