import React, { useState } from 'react';
import { GEMSTONES } from './data/gemstones';
import { Gemstone } from './types/gemstone';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GemstoneGrid } from './components/GemstoneGrid';
import { CuratorialSection } from './components/CuratorialSection';
import { Footer } from './components/Footer';
import { GemstoneModal } from './components/GemstoneModal';

export const App: React.FC = () => {
  const [selectedGemstone, setSelectedGemstone] = useState<Gemstone | null>(null);

  const handleNavigate = (direction: 'next' | 'prev') => {
    if (!selectedGemstone) return;
    const currentIndex = GEMSTONES.findIndex((g) => g.id === selectedGemstone.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % GEMSTONES.length;
      setSelectedGemstone(GEMSTONES[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + GEMSTONES.length) % GEMSTONES.length;
      setSelectedGemstone(GEMSTONES[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory-100 font-body flex flex-col selection:bg-gold-500 selection:text-charcoal-950">
      {/* Top Luxury Header */}
      <Header itemCount={GEMSTONES.length} />

      {/* Main Showcase Body */}
      <main className="flex-1">
        <Hero />
        <GemstoneGrid
          gemstones={GEMSTONES}
          onSelectGemstone={setSelectedGemstone}
        />
        <CuratorialSection />
      </main>

      {/* Understated Editorial Footer */}
      <Footer />

      {/* Full-view Gemstone Modal Lightbox */}
      <GemstoneModal
        gemstone={selectedGemstone}
        onClose={() => setSelectedGemstone(null)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;
