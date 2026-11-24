import { Gemstone } from '../types/gemstone';

// Colour and cut data informed by:
// - NGJA (ngja.gov.lk/gems/gemstones-found-in-sri-lanka/)
// - Sri Lanka EDB (srilankabusiness.com)
// - Established gemmological literature on Ceylon / Sri Lankan gemstones
//
// Rarity notes are based on documented Sri Lankan gemmological sources.
// Not every unusual shade is marked rare — only those with supporting evidence.

// Faceted sapphire/ruby/spinel cuts available (excluding cabochon)
const FACETED_CORUNDUM_CUTS = ['oval', 'round', 'cushion', 'pear', 'marquise', 'emerald', 'princess', 'heart', 'radiant', 'trillion', 'baguette'];
const FACETED_SPINEL_CUTS   = ['oval', 'round', 'cushion', 'pear', 'marquise', 'princess', 'heart', 'radiant', 'trillion'];
const FACETED_GARNET_CUTS   = ['oval', 'round', 'cushion', 'pear', 'marquise', 'emerald', 'radiant', 'trillion'];
const FACETED_TOURMALINE_CUTS = ['oval', 'round', 'cushion', 'pear', 'marquise', 'emerald', 'princess', 'radiant', 'trillion', 'baguette'];
// Moonstone: cabochon-first, some faceting is done but cabochon is the natural preference
const MOONSTONE_CUTS = ['cabochon', 'oval', 'round'];
// Quartz species (Amethyst): faceted cuts and cabochon
const QUARTZ_CUTS = ['oval', 'round', 'cushion', 'pear', 'marquise', 'emerald', 'princess', 'heart', 'radiant', 'trillion', 'baguette', 'cabochon'];

export const GEMSTONES: Gemstone[] = [
  {
    id: 'padparadscha-sapphire',
    itemNumber: 'N° 01',
    name: 'Padparadscha Sapphire',
    mineralFamily: 'Corundum Species',
    variety: 'Natural Fancy Sapphire',
    cut: 'Faceted Oval Mixed Cut',
    colorDescription: 'Sunset Lotus Pink-Orange',
    image: '/gems/padparadscha.jpg',
    highlights: [
      'Delicate balance of pink and orange hues',
      'High optical brilliance and facet symmetry',
      'Unheated crystalline clarity',
    ],
    colourVariants: [
      {
        name: 'Lotus Pink-Orange',
        hex: '#E8956B',
        image: '/gems/variants/padparadscha-sapphire/lotus-pink-orange.webp',
      },
      {
        name: 'Salmon',
        hex: '#E97F6A',
        image: '/gems/variants/padparadscha-sapphire/salmon.webp',
      },
      {
        name: 'Peach',
        hex: '#EDAA88',
        image: '/gems/variants/padparadscha-sapphire/peach.webp',
      },
      {
        name: 'Pink-Orange',
        hex: '#D97059',
        image: '/gems/variants/padparadscha-sapphire/pink-orange.webp',
      },
    ],
    availableCuts: FACETED_CORUNDUM_CUTS,
    recommendedCut: 'oval',
  },

  {
    id: 'royal-blue-sapphire',
    itemNumber: 'N° 02',
    name: 'Royal Blue Sapphire',
    mineralFamily: 'Corundum Species',
    variety: 'Natural Blue Sapphire',
    cut: 'Precision Oval Brilliant Cut',
    colorDescription: 'Vivid Ceylon Royal Blue',
    image: '/gems/sapphire.jpg',
    highlights: [
      'Deep velvety primary blue saturation',
      'Crisp facet reflections and brilliance',
      'Classic Ceylon corundum transparency',
    ],
    colourVariants: [
      {
        name: 'Royal Blue',
        hex: '#1A3A8A',
        image: '/gems/variants/royal-blue-sapphire/royal-blue.webp',
      },
      {
        name: 'Cornflower Blue',
        hex: '#5B82D6',
        image: '/gems/variants/royal-blue-sapphire/cornflower-blue.webp',
      },
      {
        name: 'Violetish Blue',
        hex: '#283878',
        image: '/gems/variants/royal-blue-sapphire/violetish-blue.webp',
      },
      {
        name: 'Deep Blue',
        hex: '#0D1F4F',
        image: '/gems/variants/royal-blue-sapphire/deep-blue.webp',
      },
      {
        name: 'Light Blue',
        hex: '#8AAEE6',
        image: '/gems/variants/royal-blue-sapphire/light-blue.webp',
      },
    ],
    availableCuts: FACETED_CORUNDUM_CUTS,
    recommendedCut: 'oval',
  },

  {
    id: 'pigeon-blood-ruby',
    itemNumber: 'N° 03',
    name: 'Pigeon Blood Ruby',
    mineralFamily: 'Corundum Species',
    variety: 'Natural Red Corundum',
    cut: 'Round Brilliant Faceted Cut',
    colorDescription: 'Intense Crimson Red',
    image: '/gems/ruby.jpg',
    highlights: [
      'Luminous pure red fire and luster',
      'Exceptional center crown facet alignment',
      'Signature internal fluorescence',
    ],
    colourVariants: [
      {
        name: 'Pinkish Red',
        hex: '#C0455A',
        image: '/gems/variants/pigeon-blood-ruby/pinkish-red.webp',
      },
      {
        name: 'Red',
        hex: '#A8192E',
        image: '/gems/variants/pigeon-blood-ruby/red.webp',
      },
      {
        name: 'Purplish Red',
        hex: '#8B2252',
        image: '/gems/variants/pigeon-blood-ruby/purplish-red.webp',
      },
      {
        name: 'Crimson Red',
        hex: '#8B0020',
        image: '/gems/variants/pigeon-blood-ruby/crimson-red.webp',
      },
    ],
    availableCuts: FACETED_CORUNDUM_CUTS,
    recommendedCut: 'cushion',
  },

  {
    id: 'vivid-pink-spinel',
    itemNumber: 'N° 04',
    name: 'Vivid Pink Spinel',
    mineralFamily: 'Spinel Group',
    variety: 'Natural Noble Spinel',
    cut: 'Precision Round Faceted Cut',
    colorDescription: 'Electric Fuchsia Pink',
    image: '/gems/spinel.jpg',
    highlights: [
      'Single refractive optical purity',
      'High vitreous luster and fire',
      'Vibrant saturation under natural lighting',
    ],
    colourVariants: [
      {
        name: 'Vivid Pink',
        hex: '#E0427A',
        image: '/gems/variants/vivid-pink-spinel/vivid-pink.webp',
      },
      {
        name: 'Red',
        hex: '#B52232',
        image: '/gems/variants/vivid-pink-spinel/red.webp',
      },
      {
        name: 'Purple',
        hex: '#7B3B8C',
        image: '/gems/variants/vivid-pink-spinel/purple.webp',
      },
      {
        name: 'Orange',
        hex: '#D4603A',
        image: '/gems/variants/vivid-pink-spinel/orange.webp',
      },
      {
        name: 'Cobalt Blue',
        hex: '#1A4A9C',
        isRare: true,
        image: '/gems/variants/vivid-pink-spinel/cobalt-blue.webp',
      },
    ],
    availableCuts: FACETED_SPINEL_CUTS,
    recommendedCut: 'oval',
  },

  {
    id: 'imperial-garnet',
    itemNumber: 'N° 05',
    name: 'Imperial Golden Garnet',
    mineralFamily: 'Garnet Group',
    variety: 'Natural Hessonite Garnet',
    cut: 'Elongated Marquise Cut',
    colorDescription: 'Warm Honeyed Amber-Gold',
    image: '/gems/garnet.jpg',
    highlights: [
      'Complex geometric facet array',
      'Warm autumnal brilliance and fire',
      'Sleek tapered silhouette with sharp tips',
    ],
    colourVariants: [
      {
        name: 'Honey Yellow',
        hex: '#C98B2A',
        image: '/gems/variants/imperial-garnet/honey-yellow.webp',
      },
      {
        name: 'Golden Yellow',
        hex: '#C8921A',
        image: '/gems/variants/imperial-garnet/golden-yellow.webp',
      },
      {
        name: 'Cinnamon',
        hex: '#A0541A',
        image: '/gems/variants/imperial-garnet/cinnamon.webp',
      },
      {
        name: 'Orange-Brown',
        hex: '#8A4518',
        image: '/gems/variants/imperial-garnet/orange-brown.webp',
      },
      {
        name: 'Amber',
        hex: '#B87A20',
        image: '/gems/variants/imperial-garnet/amber.webp',
      },
    ],
    availableCuts: FACETED_GARNET_CUTS,
    recommendedCut: 'marquise',
  },

  {
    id: 'chrome-tourmaline',
    itemNumber: 'N° 06',
    name: 'Chrome Green Tourmaline',
    mineralFamily: 'Tourmaline Group',
    variety: 'Natural Elbaite / Dravite',
    cut: 'Teardrop Pear Brilliant Cut',
    colorDescription: 'Deep Forest Emerald Green',
    image: '/gems/tourmaline.jpg',
    highlights: [
      'Intense rich green body color',
      'Balanced teardrop contours and proportion',
      'Vivid internal brilliance with minimal extinction',
    ],
    colourVariants: [
      {
        name: 'Yellowish Green',
        hex: '#7A9A3A',
        image: '/gems/variants/chrome-tourmaline/yellowish-green.webp',
      },
      {
        name: 'Dull Green',
        hex: '#5A7A42',
        image: '/gems/variants/chrome-tourmaline/dull-green.webp',
      },
      {
        name: 'Honey Yellow',
        hex: '#C0902A',
        image: '/gems/variants/chrome-tourmaline/honey-yellow.webp',
      },
      {
        name: 'Brown',
        hex: '#7A5020',
        image: '/gems/variants/chrome-tourmaline/brown.webp',
      },
      {
        name: 'Bright Green',
        hex: '#2A8A3A',
        isRare: true,
        image: '/gems/variants/chrome-tourmaline/bright-green.webp',
      },
      {
        name: 'Blue',
        hex: '#2A5A8A',
        isRare: true,
        image: '/gems/variants/chrome-tourmaline/blue.webp',
      },
    ],
    availableCuts: FACETED_TOURMALINE_CUTS,
    recommendedCut: 'pear',
  },

  {
    id: 'royal-moonstone',
    itemNumber: 'N° 07',
    name: 'Adularescent Moonstone',
    mineralFamily: 'Feldspar Group',
    variety: 'Natural Ceylon Orthoclase',
    cut: 'Smooth Spherical High-Dome Cabochon',
    colorDescription: 'Silvery Sheen with Blue Adularescence',
    image: '/gems/moonstone.jpg',
    highlights: [
      'Ethereal floating blue luminescence',
      'Hand-polished mirror surface finish',
      'Classic high-dome spherical symmetry',
    ],
    colourVariants: [
      {
        name: 'Milky White',
        hex: '#EDE8E0',
        image: '/gems/variants/royal-moonstone/milky-white.webp',
      },
      {
        name: 'Silvery White',
        hex: '#D8D8D8',
        image: '/gems/variants/royal-moonstone/silvery-white.webp',
      },
      {
        name: 'Cream',
        hex: '#E5D9B8',
        image: '/gems/variants/royal-moonstone/cream.webp',
      },
      {
        name: 'Grey',
        hex: '#9A9A9A',
        image: '/gems/variants/royal-moonstone/grey.webp',
      },
    ],
    availableCuts: MOONSTONE_CUTS,
    recommendedCut: 'cabochon',
  },

  {
    id: 'white-sapphire',
    itemNumber: 'N° 08',
    name: 'Crystalline White Sapphire',
    mineralFamily: 'Corundum Species',
    variety: 'Natural Colorless Sapphire',
    cut: 'Teardrop Pear Faceted Cut',
    colorDescription: 'Pure Ice-White Translucent Fire',
    image: '/gems/sapphire-1.jpg',
    highlights: [
      'Diamond-rivaling adamantine sparkle and fire',
      'Classic teardrop symmetry held in tweezers',
      'Pure colorless optical neutrality',
    ],
    colourVariants: [
      {
        name: 'Colourless',
        hex: '#F0F0F0',
        image: '/gems/variants/white-sapphire/colourless.webp',
      },
      {
        name: 'Near Colourless',
        hex: '#E8E5DA',
        image: '/gems/variants/white-sapphire/near-colourless.webp',
      },
      {
        name: 'Milky White',
        hex: '#E0DAD0',
        image: '/gems/variants/white-sapphire/milky-white.webp',
      },
    ],
    availableCuts: FACETED_CORUNDUM_CUTS,
    recommendedCut: 'pear',
  },

  {
    id: 'yellow-sapphire',
    itemNumber: 'N° 09',
    name: 'Canary Yellow Sapphire',
    mineralFamily: 'Corundum Species',
    variety: 'Natural Yellow Sapphire',
    cut: 'Round Brilliant Precision Cut',
    colorDescription: 'Sunburst Golden Canary Yellow',
    image: '/gems/sapphire-2.jpg',
    highlights: [
      'Vibrant warm golden canary fire',
      'High internal brilliance across all crown facets',
      'Flawless color uniformity under daylight',
    ],
    colourVariants: [
      {
        name: 'Pale Yellow',
        hex: '#E8DC8A',
        image: '/gems/variants/canary-yellow-sapphire/pale-yellow.webp',
      },
      {
        name: 'Lemon Yellow',
        hex: '#D4C040',
        image: '/gems/variants/canary-yellow-sapphire/lemon-yellow.webp',
      },
      {
        name: 'Canary Yellow',
        hex: '#D4A820',
        image: '/gems/variants/canary-yellow-sapphire/canary-yellow.webp',
      },
      {
        name: 'Golden Yellow',
        hex: '#C08018',
        image: '/gems/variants/canary-yellow-sapphire/golden-yellow.webp',
      },
      {
        name: 'Saffron Yellow',
        hex: '#C07010',
        image: '/gems/variants/canary-yellow-sapphire/saffron-yellow.webp',
      },
    ],
    availableCuts: FACETED_CORUNDUM_CUTS,
    recommendedCut: 'oval',
  },

  {
    id: 'amethyst',
    itemNumber: 'N° 10',
    name: 'Amethyst',
    mineralFamily: 'Quartz Group',
    variety: 'Natural Amethyst',
    cut: 'Oval Faceted Cut',
    colorDescription: 'Natural Purple Quartz',
    image: '/gems/amethyst.webp',
    highlights: [
      'Rich violet-purple crystalline saturation',
      'Distinctive quartz crystal clarity and vitreous luster',
      'Natural pleochroism displaying subtle violet-red undertones',
    ],
    colourVariants: [
      {
        name: 'Light Lavender',
        hex: '#C6A4EE',
        image: '/gems/variants/amethyst/light-lavender.webp',
      },
      {
        name: 'Violet',
        hex: '#8D42DE',
        image: '/gems/variants/amethyst/violet.webp',
      },
      {
        name: 'Deep Purple',
        hex: '#4B1884',
        image: '/gems/variants/amethyst/deep-purple.webp',
      },
    ],
    availableCuts: QUARTZ_CUTS,
    recommendedCut: 'oval',
  },
];
