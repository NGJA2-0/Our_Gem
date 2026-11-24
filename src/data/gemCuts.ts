// Shared gemstone cut definitions used across the archive.
// Based on internationally recognised faceting and cabochon styles.

export interface GemCutDefinition {
  id: string;
  name: string;
  label: string; // Short label shown below silhouette
}

export const GEM_CUTS: GemCutDefinition[] = [
  { id: 'oval',      name: 'Oval Mixed Cut',          label: 'Oval'      },
  { id: 'round',     name: 'Round Brilliant Cut',      label: 'Round'     },
  { id: 'cushion',   name: 'Cushion Cut',              label: 'Cushion'   },
  { id: 'pear',      name: 'Pear Brilliant Cut',       label: 'Pear'      },
  { id: 'marquise',  name: 'Marquise Cut',             label: 'Marquise'  },
  { id: 'emerald',   name: 'Emerald Step Cut',         label: 'Emerald'   },
  { id: 'princess',  name: 'Princess Cut',             label: 'Princess'  },
  { id: 'heart',     name: 'Heart Brilliant Cut',      label: 'Heart'     },
  { id: 'radiant',   name: 'Radiant Cut',              label: 'Radiant'   },
  { id: 'trillion',  name: 'Trillion Brilliant Cut',   label: 'Trillion'  },
  { id: 'baguette',  name: 'Baguette Step Cut',        label: 'Baguette'  },
  { id: 'cabochon',  name: 'Smooth Dome Cabochon',     label: 'Cabochon'  },
];
