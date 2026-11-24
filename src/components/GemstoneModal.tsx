import React, { useEffect, useState } from 'react';
import { Gemstone } from '../types/gemstone';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GemColourSelector } from './GemColourSelector';
import { GemCutSelector } from './GemCutSelector';

interface GemstoneModalProps {
  gemstone: Gemstone | null;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const GemstoneModal: React.FC<GemstoneModalProps> = ({
  gemstone,
  onClose,
  onNavigate,
}) => {
  const [selectedColourIndex, setSelectedColourIndex] = useState(0);
  const [selectedCutId, setSelectedCutId] = useState<string>('');

  // Reset selection state whenever the gemstone changes
  useEffect(() => {
    setSelectedColourIndex(0);
    setSelectedCutId(gemstone?.recommendedCut ?? gemstone?.availableCuts?.[0] ?? '');
  }, [gemstone]);

  // Lock body scroll and listen for keyboard navigation
  useEffect(() => {
    if (gemstone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gemstone, onClose, onNavigate]);

  if (!gemstone) return null;

  const hasColourVariants = gemstone.colourVariants && gemstone.colourVariants.length > 0;

  // Moonstone gets a special optical-effect note
  const cutNote = gemstone.id === 'royal-moonstone'
    ? 'Blue adularescence is an optical scattering effect visible across all body colours — it is not a separate colour variety.'
    : undefined;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 bg-charcoal-950/95 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-gem-title"
    >
      {/* Background click to dismiss */}
      <div
        className="fixed inset-0 cursor-pointer -z-10"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl lg:max-w-6xl bg-charcoal-900 border border-ivory-200/15 shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto rounded-lg">

        {/* Mobile Sticky / Top Bar with Close Button */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-ivory-200/10 bg-charcoal-950">
          <div className="flex items-center space-x-2">
            <span className="font-serif font-semibold text-gold-400 text-sm tracking-wider">
              {gemstone.itemNumber}
            </span>
            <span className="text-xs uppercase tracking-wider text-ivory-200 font-medium truncate max-w-[200px]">
              &bull; {gemstone.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-ivory-200 hover:text-ivory-100 bg-charcoal-900 border border-ivory-200/20 transition-colors focus:outline-none min-w-[42px] min-h-[42px] flex items-center justify-center rounded-sm"
            aria-label="Close inspection window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Left: Gemstone Visual Showcase */}
        <div className="relative md:w-[42%] lg:w-[44%] bg-charcoal-950 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-ivory-200/10">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center overflow-hidden bg-charcoal-900/40 border border-ivory-200/10 rounded-md">
            {/* Gemstone Image — preserved original archival photograph */}
            <img
              src={gemstone.image}
              alt={gemstone.name}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Subtle bottom gradient shield */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal-950/70 to-transparent pointer-events-none" />

            {/* Corner Authenticity Mark */}
            <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
              <span className="text-[10px] uppercase tracking-wider text-gold-400/90 font-semibold px-2 py-0.5 bg-charcoal-950/90 backdrop-blur-sm border border-gold-500/25 rounded-sm">
                Archival Specimen
              </span>
            </div>
          </div>

          {/* Previous / Next Desktop In-Image Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('prev');
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 text-ivory-300 hover:text-gold-300 bg-charcoal-900/80 border border-ivory-200/15 hover:border-gold-500/40 transition-all focus:outline-none rounded-sm"
            aria-label="Previous gemstone"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('next');
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 text-ivory-300 hover:text-gold-300 bg-charcoal-900/80 border border-ivory-200/15 hover:border-gold-500/40 transition-all focus:outline-none rounded-sm"
            aria-label="Next gemstone"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Curatorial Specifications & Interactive Sections */}
        <div className="md:w-[58%] lg:w-[56%] flex flex-col overflow-y-auto max-h-[80vh] md:max-h-[92vh]">
          <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between mb-4 pb-3 border-b border-ivory-200/10">
              <span className="font-serif font-semibold text-gold-400 text-sm tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>{gemstone.itemNumber} &bull; ARCHIVAL SPECIMEN</span>
              </span>
              <div className="flex items-center space-x-3.5">
                <span className="text-xs uppercase tracking-wider text-ivory-300 font-medium">
                  {gemstone.mineralFamily}
                </span>
                <button
                  onClick={onClose}
                  className="p-1.5 text-ivory-400 hover:text-ivory-100 hover:border-gold-400/60 bg-charcoal-950/80 border border-ivory-200/15 transition-all focus:outline-none rounded-sm"
                  aria-label="Close inspection window"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── GEMSTONE IDENTITY ─────────────────────────────────────────── */}
            <h2
              id="modal-gem-title"
              className="font-serif text-2xl sm:text-3xl md:text-[1.9rem] font-semibold text-ivory-100 tracking-tight mb-1"
            >
              {gemstone.name}
            </h2>

            <p className="text-xs sm:text-sm uppercase tracking-wider text-gold-400 font-semibold mb-3">
              {gemstone.variety}
            </p>

            <div className="hairline-subtle mb-4" />

            {/* ── SPECIMEN SPECIFICATIONS ───────────────────────────────────── */}
            <div className="space-y-2 mb-5 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-ivory-200/5">
                <span className="text-ivory-400 uppercase tracking-wide text-xs font-medium">
                  Cut &amp; Faceting
                </span>
                <span className="text-ivory-100 font-semibold text-right">
                  {gemstone.cut}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-ivory-200/5">
                <span className="text-ivory-400 uppercase tracking-wide text-xs font-medium">
                  Color Saturation
                </span>
                <span className="text-ivory-100 font-semibold text-right">
                  {gemstone.colorDescription}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-ivory-200/5">
                <span className="text-ivory-400 uppercase tracking-wide text-xs font-medium">
                  Mineral Structure
                </span>
                <span className="text-ivory-100 font-semibold text-right">
                  {gemstone.mineralFamily}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-ivory-200/5">
                <span className="text-ivory-400 uppercase tracking-wide text-xs font-medium">
                  Optics
                </span>
                <span className="text-ivory-100 font-semibold text-right">
                  Natural Daylight Evaluation
                </span>
              </div>
            </div>

            {/* ── FEATURE 1: COLOUR VARIATIONS (Visual Cards) ──────────────── */}
            {hasColourVariants && gemstone.colourVariants && (
              <div className="mb-5">
                <GemColourSelector
                  variants={gemstone.colourVariants}
                  selectedIndex={selectedColourIndex}
                  onSelect={setSelectedColourIndex}
                />
              </div>
            )}

            {/* ── FEATURE 2: CUT & FACETING SELECTOR ───────────────────────── */}
            {gemstone.availableCuts && gemstone.availableCuts.length > 0 && gemstone.recommendedCut && (
              <>
                <div className="hairline-subtle mb-5" />
                <div className="mb-5">
                  <GemCutSelector
                    availableCutIds={gemstone.availableCuts}
                    selectedCutId={selectedCutId}
                    recommendedCutId={gemstone.recommendedCut}
                    onSelect={setSelectedCutId}
                    note={cutNote}
                  />
                </div>
              </>
            )}

            {/* ── VISUAL INSPECTION NOTES ───────────────────────────────────── */}
            <div className="hairline-subtle mb-4" />
            <div className="mb-4">
              <div className="text-xs uppercase tracking-wider text-gold-400 mb-2 font-semibold">
                Visual Inspection Notes
              </div>
              <ul className="space-y-1.5">
                {gemstone.highlights.map((highlight, index) => (
                  <li key={index} className="text-xs sm:text-sm text-ivory-200 flex items-start space-x-2">
                    <span className="text-gold-400 leading-none mt-1">&bull;</span>
                    <span className="leading-relaxed font-normal">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* ── MOBILE NAVIGATION ─────────────────────────────────────────── */}
            <div className="md:hidden flex items-center justify-between gap-3 pt-3 border-t border-ivory-200/10 mt-2">
              <button
                onClick={() => onNavigate('prev')}
                className="flex-1 py-2.5 px-4 bg-charcoal-950 border border-ivory-200/20 text-xs tracking-wider uppercase text-ivory-100 font-semibold active:bg-charcoal-800 flex items-center justify-center space-x-1.5 min-h-[44px] rounded-sm"
              >
                <ChevronLeft className="w-4 h-4 text-gold-400" />
                <span>Previous</span>
              </button>
              <button
                onClick={() => onNavigate('next')}
                className="flex-1 py-2.5 px-4 bg-charcoal-950 border border-ivory-200/20 text-xs tracking-wider uppercase text-ivory-100 font-semibold active:bg-charcoal-800 flex items-center justify-center space-x-1.5 min-h-[44px] rounded-sm"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 text-gold-400" />
              </button>
            </div>

            {/* ── DESKTOP FOOTER CONTROLS ───────────────────────────────────── */}
            <div className="hidden md:flex mt-4 pt-3 border-t border-ivory-200/10 items-center justify-between">
              <span className="text-xs tracking-wider text-ivory-400 uppercase font-medium">
                Use &larr; &rarr; keys to browse
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-ivory-100 border border-ivory-200/25 hover:border-gold-400/70 hover:text-gold-300 transition-colors rounded-sm"
              >
                Return to Gallery
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
