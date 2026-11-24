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
    // NGJA: "colour is apparently a combination of pink and orange"
    // Padparadscha is defined by its pinkish-orange identity; not every shade below
    // is equally common — the classic lotus sunset colour is the defining standard.
    colourVariants: [
      { name: 'Lotus Pink-Orange', hex: '#E8956B' },      // Classic padparadscha — defining colour
      { name: 'Salmon',           hex: '#E97F6A' },        // Warm salmon-toned specimens
      { name: 'Peach',            hex: '#EDAA88' },        // Lighter peach-toned specimens
      { name: 'Pink-Orange',      hex: '#D97059' },        // Saturated pink-orange
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
    // NGJA: Ceylon blue sapphires noted for "lighter and brighter blue tones" to
    // "velvety blue to violetish hue, medium to medium-dark" — cornflower blue is
    // the internationally recognised descriptor for the finest Ceylon specimens.
    colourVariants: [
      { name: 'Royal Blue',       hex: '#1A3A8A' },        // Classic deep royal blue
      { name: 'Cornflower Blue',  hex: '#5B82D6' },        // Bright cornflower — Ceylon hallmark
      { name: 'Violetish Blue',   hex: '#283878' },        // Violetish hue documented by NGJA
      { name: 'Deep Blue',        hex: '#0D1F4F' },        // Very dark specimens
      { name: 'Light Blue',       hex: '#8AAEE6' },        // Lighter Ceylon material
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
    // NGJA: "Most Sri Lankan varieties are of a pinkish red and display a tint of purple"
    // "Pigeon Blood Red" is a colour description used in gem circles, not a universal grade.
    // The purplish tint in Sri Lankan rubies is attributed to iron + chromium oxide.
    colourVariants: [
      { name: 'Pinkish Red',    hex: '#C0455A' },          // Most common Sri Lankan ruby colour per NGJA
      { name: 'Red',            hex: '#A8192E' },          // Classic red
      { name: 'Purplish Red',   hex: '#8B2252' },          // Sri Lankan characteristic — iron + chromium
      { name: 'Crimson Red',    hex: '#8B0020' },          // Deep crimson specimens
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
    // NGJA: Sri Lankan spinel ranges "ruby red, pink, orange, shades of reddish brown,
    // purple, blue, bluish green, mauve, greenish black, black to colorless."
    // Cobalt blue spinel is documented from Rathnapura, Okkampitiya and Embilipitiya.
    colourVariants: [
      { name: 'Vivid Pink',   hex: '#E0427A' },            // Primary showcased colour
      { name: 'Red',          hex: '#B52232' },            // Ruby-red spinel — documented
      { name: 'Purple',       hex: '#7B3B8C' },            // Documented by NGJA
      { name: 'Orange',       hex: '#D4603A' },            // Orange spinel — documented
      { name: 'Cobalt Blue',  hex: '#1A4A9C', isRare: true }, // Natural cobalt-blue — documented as rare in SL
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
    // NGJA documents Hessonite as a Grossular variety.
    // Variety updated from "Natural Spessartine / Hessonite" to reflect distinction:
    // Hessonite is Grossular garnet (Ca-Al); Spessartine is Mn-Al garnet.
    // The warm honey-gold amber colour is characteristic of Sri Lankan Hessonite.
    colourVariants: [
      { name: 'Honey Yellow',   hex: '#C98B2A' },          // Classic hessonite honey tone
      { name: 'Golden Yellow',  hex: '#C8921A' },          // Deeper golden specimens
      { name: 'Cinnamon',       hex: '#A0541A' },          // Warm cinnamon-toned material
      { name: 'Orange-Brown',   hex: '#8A4518' },          // Deeper orange-brown
      { name: 'Amber',          hex: '#B87A20' },          // Rich amber material
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
    // NGJA explicitly states Sri Lankan tourmaline colours:
    // "yellowish green, dull green, honey yellow brown and rarely blue and bright green"
    // "Attractive pink, bi-colour and Paraiba tourmalines are not found in Sri Lanka"
    colourVariants: [
      { name: 'Yellowish Green',  hex: '#7A9A3A' },        // Most commonly noted by NGJA
      { name: 'Dull Green',       hex: '#5A7A42' },        // Documented shade — NGJA
      { name: 'Honey Yellow',     hex: '#C0902A' },        // Honey-yellow brown — NGJA
      { name: 'Brown',            hex: '#7A5020' },        // Yellowish-brown — most abundant per NGJA
      { name: 'Bright Green',     hex: '#2A8A3A', isRare: true }, // Rare in Sri Lanka — NGJA
      { name: 'Blue',             hex: '#2A5A8A', isRare: true }, // Rare in Sri Lanka — NGJA
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
    // Body colours documented for Sri Lankan moonstone.
    // Blue adularescence is an optical EFFECT (caused by light scattering between
    // feldspar layers) — not a separate body colour. It is noted separately below.
    colourVariants: [
      { name: 'Milky White',    hex: '#EDE8E0' },          // Classic translucent body colour
      { name: 'Silvery White',  hex: '#D8D8D8' },          // Near-transparent silvery material
      { name: 'Cream',          hex: '#E5D9B8' },          // Warm cream-toned body
      { name: 'Grey',           hex: '#9A9A9A' },          // Grey body colour specimens
    ],
    // Note: Blue sheen (adularescence) is an optical effect, not a colour variant.
    // All body colours above can display blue adularescence depending on stone quality.
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
    // NGJA: "white sapphires consist of pure corundum, devoid of any impurities"
    // Some specimens show slight milkiness (Geuda origin); documented accordingly.
    colourVariants: [
      { name: 'Colourless',       hex: '#F0F0F0' },        // Pure colorless — no impurities
      { name: 'Near Colourless',  hex: '#E8E5DA' },        // Very slightly tinted
      { name: 'Milky White',      hex: '#E0DAD0' },        // Translucent milky material
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
    // NGJA: "various shades are noted varying from pale yellow to saffron yellow
    // and from yellow slightly tinted red to a deep citron yellow"
    // Known locally as "Pushparaga". Found in all Corundum-producing areas.
    colourVariants: [
      { name: 'Pale Yellow',    hex: '#E8DC8A' },          // Lightest documented shade — NGJA
      { name: 'Lemon Yellow',   hex: '#D4C040' },          // Bright lemon yellow
      { name: 'Canary Yellow',  hex: '#D4A820' },          // Classic canary tone
      { name: 'Golden Yellow',  hex: '#C08018' },          // Deeper golden material
      { name: 'Saffron Yellow', hex: '#C07010' },          // Saffron — NGJA documented
    ],
    availableCuts: FACETED_CORUNDUM_CUTS,
    recommendedCut: 'oval',
  },
];
