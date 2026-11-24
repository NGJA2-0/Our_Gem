export interface GemColourVariant {
  name: string;
  hex: string;
  isRare?: boolean;
  image?: string; // Optional alternate image path for this colour
}

export interface GemCutOption {
  id: string;
  name: string;
  label: string; // Short display label
}

export interface Gemstone {
  id: string;
  itemNumber: string;
  name: string;
  mineralFamily: string;
  variety: string;
  cut: string;
  colorDescription: string;
  image: string;
  highlights: string[];
  // New optional fields for interactive features
  colourVariants?: GemColourVariant[];
  availableCuts?: string[]; // Array of GemCutOption ids
  recommendedCut?: string;  // id of the recommended cut
}
