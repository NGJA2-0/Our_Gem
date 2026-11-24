import React from 'react';
import { GEM_CUTS } from '../data/gemCuts';
import { GemCutSilhouette } from './GemCutSilhouette';

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
 * Highlights the recommended cut with a gold border + label.
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
    <div>
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
          Cut &amp; Faceting
        </span>
        <div className="flex-1 hairline-gold" />
      </div>

      {/* Selected cut name */}
      <p className="text-sm text-ivory-100 font-medium mb-3 h-5">
        {selectedCut?.name ?? ''}
        {isSelectedRecommended && (
          <span className="ml-2 text-[10px] uppercase tracking-wider text-gold-400 font-semibold border border-gold-500/40 px-1.5 py-px">
            Recommended
          </span>
        )}
      </p>

      {/* Cut silhouette grid */}
      <div
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-3"
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
                  'relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12',
                  'transition-all duration-200 focus:outline-none',
                  'focus-visible:ring-1 focus-visible:ring-gold-400 focus-visible:ring-offset-1 focus-visible:ring-offset-charcoal-900',
                  isSelected
                    ? 'text-gold-300 scale-110'
                    : 'text-ivory-400 hover:text-ivory-100 hover:scale-105',
                  isSelected && isRecommended
                    ? 'border border-gold-500/60 bg-charcoal-800/60'
                    : isSelected
                    ? 'border border-ivory-200/30 bg-charcoal-800/40'
                    : 'border border-transparent hover:border-ivory-200/15',
                ].join(' ')}
              >
                <GemCutSilhouette cutId={cut.id} size={28} />

                {/* Recommended dot indicator */}
                {isRecommended && (
                  <span
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400 border border-charcoal-900"
                    aria-hidden="true"
                    title="Recommended cut"
                  />
                )}
              </button>

              {/* Cut label */}
              <span
                className={[
                  'text-[9px] sm:text-[10px] uppercase tracking-wide leading-none text-center transition-colors',
                  isSelected ? 'text-gold-300' : 'text-ivory-400',
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
        <p className="mt-3 text-[11px] text-ivory-400/70 leading-relaxed italic border-l border-gold-500/20 pl-2">
          {note}
        </p>
      )}
    </div>
  );
};
