import React, { useEffect } from 'react';
import { Gemstone } from '../types/gemstone';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-charcoal-950/95 backdrop-blur-md overflow-y-auto"
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
      <div className="relative w-full max-w-5xl bg-charcoal-900 border border-ivory-200/15 shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto max-h-[94vh]">
        
        {/* Mobile Sticky / Top Bar with Close Button */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-ivory-200/10 bg-charcoal-950">
          <div className="flex items-center space-x-2">
            <span className="font-serif font-semibold text-gold-400 text-sm tracking-wider">
              {gemstone.itemNumber}
            </span>
            <span className="text-xs uppercase tracking-wider text-ivory-200 font-medium">
              &bull; {gemstone.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-ivory-200 hover:text-ivory-100 bg-charcoal-900 border border-ivory-200/20 transition-colors focus:outline-none min-w-[42px] min-h-[42px] flex items-center justify-center"
            aria-label="Close inspection window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Left: Gemstone Visual Showcase */}
        <div className="relative md:w-1/2 bg-charcoal-950 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 border-b md:border-b-0 md:border-r border-ivory-200/10">
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center overflow-hidden bg-charcoal-900/40 border border-ivory-200/10">
            {/* Gemstone Image */}
            <img
              src={gemstone.image}
              alt={gemstone.name}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Subtle bottom gradient shield */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal-950/70 to-transparent pointer-events-none" />

            {/* Corner Authenticity Mark */}
            <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
              <span className="text-[10px] uppercase tracking-wider text-gold-400/90 font-semibold px-2 py-0.5 bg-charcoal-950/90 backdrop-blur-sm border border-gold-500/25">
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
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 text-ivory-300 hover:text-gold-300 bg-charcoal-900/80 border border-ivory-200/15 hover:border-gold-500/40 transition-all focus:outline-none"
            aria-label="Previous gemstone"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('next');
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 text-ivory-300 hover:text-gold-300 bg-charcoal-900/80 border border-ivory-200/15 hover:border-gold-500/40 transition-all focus:outline-none"
            aria-label="Next gemstone"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Curatorial Specifications & Inspection Notes */}
        <div className="md:w-1/2 p-5 sm:p-7 md:p-10 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Desktop Header with Non-overlapping Close Button */}
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
                  className="p-1.5 text-ivory-400 hover:text-ivory-100 hover:border-gold-400/60 bg-charcoal-950/80 border border-ivory-200/15 transition-all focus:outline-none"
                  aria-label="Close inspection window"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h2 id="modal-gem-title" className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-ivory-100 tracking-tight mb-1.5">
              {gemstone.name}
            </h2>

            <p className="text-xs sm:text-sm uppercase tracking-wider text-gold-400 font-semibold mb-4">
              {gemstone.variety}
            </p>

            <div className="hairline-subtle my-4" />

            {/* Specimen Specification Grid */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-ivory-200/5">
                <span className="text-ivory-400 uppercase tracking-wide text-xs font-medium">
                  Cut & Faceting
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
              <div className="flex justify-between items-center py-1.5 border-b border-ivory-200/5">
                <span className="text-ivory-400 uppercase tracking-wide text-xs font-medium">
                  Mineral Structure
                </span>
                <span className="text-ivory-100 font-semibold text-right">
                  {gemstone.mineralFamily}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-ivory-200/5">
                <span className="text-ivory-400 uppercase tracking-wide text-xs font-medium">
                  Optics
                </span>
                <span className="text-ivory-100 font-semibold text-right">
                  Natural Daylight Evaluation
                </span>
              </div>
            </div>

            {/* Curatorial Highlights */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-gold-400 mb-3 font-semibold">
                Visual Inspection Notes
              </div>
              <ul className="space-y-2">
                {gemstone.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm text-ivory-200 flex items-start space-x-2.5">
                    <span className="text-gold-400 leading-none mt-1">&bull;</span>
                    <span className="leading-relaxed font-normal">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Quick Navigation Bar */}
          <div className="md:hidden flex items-center justify-between gap-3 pt-4 border-t border-ivory-200/10">
            <button
              onClick={() => onNavigate('prev')}
              className="flex-1 py-3 px-4 bg-charcoal-950 border border-ivory-200/20 text-xs tracking-wider uppercase text-ivory-100 font-semibold active:bg-charcoal-800 flex items-center justify-center space-x-1.5 min-h-[44px]"
            >
              <ChevronLeft className="w-4 h-4 text-gold-400" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => onNavigate('next')}
              className="flex-1 py-3 px-4 bg-charcoal-950 border border-ivory-200/20 text-xs tracking-wider uppercase text-ivory-100 font-semibold active:bg-charcoal-800 flex items-center justify-center space-x-1.5 min-h-[44px]"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>

          {/* Desktop Footer Controls */}
          <div className="hidden md:flex mt-6 pt-5 border-t border-ivory-200/10 items-center justify-between">
            <span className="text-xs tracking-wider text-ivory-400 uppercase font-medium">
              Use &larr; &rarr; keys to browse
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-ivory-100 border border-ivory-200/25 hover:border-gold-400/70 hover:text-gold-300 transition-colors"
            >
              Return to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
