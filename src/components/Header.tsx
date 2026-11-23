import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  itemCount: number;
}

export const Header: React.FC<HeaderProps> = ({ itemCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-charcoal-950/90 backdrop-blur-md border-b border-ivory-200/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Identity */}
        <a 
          href="#" 
          className="group flex flex-col items-start focus:outline-none"
        >
          <span className="font-serif text-2xl tracking-wider text-ivory-100 font-semibold group-hover:text-gold-300 transition-colors">
            AURELIA
          </span>
          <span className="text-[11px] tracking-widest text-gold-400 font-medium font-sans uppercase">
            Haute Gemmes &bull; Private Archive
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9">
          <button
            onClick={() => scrollToSection('collection')}
            className="text-sm font-medium tracking-wide text-ivory-300 hover:text-ivory-100 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Showcase ({itemCount})
          </button>
          <button
            onClick={() => scrollToSection('provenance')}
            className="text-sm font-medium tracking-wide text-ivory-300 hover:text-ivory-100 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Visual Characteristics
          </button>
          <button
            onClick={() => scrollToSection('curation')}
            className="text-sm font-medium tracking-wide text-ivory-300 hover:text-ivory-100 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Archive Notes
          </button>
        </nav>

        {/* Specimen Counter Pill */}
        <div className="hidden md:flex items-center space-x-2 text-xs font-medium tracking-wider text-gold-400 border border-gold-500/25 px-4 py-2 bg-charcoal-900/60">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>{itemCount} Singular Gems</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ivory-200 hover:text-gold-300 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-900 border-b border-ivory-200/10 px-6 py-8">
          <nav className="flex flex-col space-y-6">
            <button
              onClick={() => scrollToSection('collection')}
              className="text-left text-base font-medium tracking-wide text-ivory-100 hover:text-gold-300 transition-colors"
            >
              The 9 Specimens ({itemCount})
            </button>
            <button
              onClick={() => scrollToSection('provenance')}
              className="text-left text-base font-medium tracking-wide text-ivory-100 hover:text-gold-300 transition-colors"
            >
              Visual Characteristics
            </button>
            <button
              onClick={() => scrollToSection('curation')}
              className="text-left text-base font-medium tracking-wide text-ivory-100 hover:text-gold-300 transition-colors"
            >
              Archive Notes
            </button>
            <div className="pt-4 border-t border-ivory-200/10 flex items-center justify-between text-xs tracking-wider text-gold-400">
              <span className="font-sans font-medium">NATURAL SPECIMEN SHOWCASE</span>
              <span className="font-serif italic font-semibold">Edition I</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
