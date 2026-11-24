import React from 'react';

interface GemCutSilhouetteProps {
  cutId: string;
  size?: number;
  className?: string;
}

/**
 * Renders a simplified gemmological cut silhouette as an inline SVG.
 * Each cut has its own distinct geometry — not generic icons.
 * Viewbox: 0 0 48 48 for all cuts (uniform size).
 */
export const GemCutSilhouette: React.FC<GemCutSilhouetteProps> = ({
  cutId,
  size = 40,
  className = '',
}) => {
  const sharedProps = {
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    'aria-hidden': true,
  };

  switch (cutId) {

    // ── OVAL ─────────────────────────────────────────────────────────────────
    case 'oval':
      return (
        <svg {...sharedProps}>
          {/* Outline */}
          <ellipse cx="24" cy="24" rx="14" ry="20" stroke="currentColor" strokeWidth="1.2" />
          {/* Table (central facet) */}
          <ellipse cx="24" cy="24" rx="8" ry="11" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6" />
          {/* Star facets — 4 upper, 4 lower */}
          <line x1="24" y1="4" x2="16" y2="13" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="4" x2="32" y2="13" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="44" x2="16" y2="35" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="44" x2="32" y2="35" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="10" y1="24" x2="16" y2="13" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="10" y1="24" x2="16" y2="35" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="38" y1="24" x2="32" y2="13" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="38" y1="24" x2="32" y2="35" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
        </svg>
      );

    // ── ROUND BRILLIANT ───────────────────────────────────────────────────────
    case 'round':
      return (
        <svg {...sharedProps}>
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.2" />
          {/* Table */}
          <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6" />
          {/* 8 main facet lines to table */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 24 + 20 * Math.cos(rad);
            const y1 = 24 + 20 * Math.sin(rad);
            const x2 = 24 + 10 * Math.cos(rad);
            const y2 = 24 + 10 * Math.sin(rad);
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />;
          })}
          {/* Upper girdle facets */}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 24 + 20 * Math.cos(rad);
            const y1 = 24 + 20 * Math.sin(rad);
            const r2 = ((deg - 22.5) * Math.PI) / 180;
            const x2 = 24 + 13 * Math.cos(r2);
            const y2 = 24 + 13 * Math.sin(r2);
            return <line key={`g${deg}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />;
          })}
        </svg>
      );

    // ── CUSHION ───────────────────────────────────────────────────────────────
    case 'cushion':
      return (
        <svg {...sharedProps}>
          {/* Cushion outline — rounded square */}
          <rect x="6" y="6" width="36" height="36" rx="10" ry="10" stroke="currentColor" strokeWidth="1.2" />
          {/* Table */}
          <rect x="13" y="13" width="22" height="22" rx="5" ry="5" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6" />
          {/* Corner facets */}
          <line x1="6" y1="6" x2="13" y2="13" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="42" y1="6" x2="35" y2="13" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="6" y1="42" x2="13" y2="35" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="42" y1="42" x2="35" y2="35" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          {/* Side facets */}
          <line x1="24" y1="6" x2="24" y2="13" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="42" x2="24" y2="35" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="6" y1="24" x2="13" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="42" y1="24" x2="35" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
        </svg>
      );

    // ── PEAR ──────────────────────────────────────────────────────────────────
    case 'pear':
      return (
        <svg {...sharedProps}>
          {/* Pear outline */}
          <path
            d="M24 44 C10 44 4 34 4 26 C4 14 14 4 24 4 C34 4 44 14 44 26 C44 34 38 44 24 44Z"
            stroke="currentColor" strokeWidth="1.2"
          />
          {/* Table */}
          <path
            d="M24 38 C15 38 10 31 10 26 C10 18 17 11 24 11 C31 11 38 18 38 26 C38 31 33 38 24 38Z"
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6"
          />
          {/* Star facets */}
          <line x1="24" y1="4" x2="24" y2="11" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="4" x2="17" y2="11" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="4" x2="31" y2="11" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="44" x2="24" y2="38" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="34" x2="10" y2="31" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="34" x2="38" y2="31" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
        </svg>
      );

    // ── MARQUISE ──────────────────────────────────────────────────────────────
    case 'marquise':
      return (
        <svg {...sharedProps}>
          {/* Marquise — pointed ellipse outline */}
          <ellipse cx="24" cy="24" rx="20" ry="13" stroke="currentColor" strokeWidth="1.2" />
          {/* Table */}
          <ellipse cx="24" cy="24" rx="10" ry="6" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6" />
          {/* Facet lines */}
          <line x1="4" y1="24" x2="14" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="24" x2="14" y2="18" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="24" x2="14" y2="30" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="24" x2="34" y2="18" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="24" x2="34" y2="30" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="11" x2="14" y2="18" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="11" x2="34" y2="18" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="37" x2="14" y2="30" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="37" x2="34" y2="30" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
        </svg>
      );

    // ── EMERALD (STEP CUT) ────────────────────────────────────────────────────
    case 'emerald':
      return (
        <svg {...sharedProps}>
          {/* Octagonal outline */}
          <polygon
            points="12,4 36,4 44,12 44,36 36,44 12,44 4,36 4,12"
            stroke="currentColor" strokeWidth="1.2"
          />
          {/* Step 1 */}
          <polygon
            points="16,8 32,8 40,16 40,32 32,40 16,40 8,32 8,16"
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.55"
          />
          {/* Step 2 — table */}
          <polygon
            points="18,13 30,13 35,18 35,30 30,35 18,35 13,30 13,18"
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4"
          />
          {/* Corner lines */}
          <line x1="12" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="36" y1="4" x2="32" y2="8" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="44" y1="12" x2="40" y2="16" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="44" y1="36" x2="40" y2="32" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="36" y1="44" x2="32" y2="40" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="12" y1="44" x2="16" y2="40" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="4" y1="36" x2="8" y2="32" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="4" y1="12" x2="8" y2="16" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
        </svg>
      );

    // ── PRINCESS ──────────────────────────────────────────────────────────────
    case 'princess':
      return (
        <svg {...sharedProps}>
          {/* Square outline */}
          <rect x="4" y="4" width="40" height="40" stroke="currentColor" strokeWidth="1.2" />
          {/* Table */}
          <rect x="12" y="12" width="24" height="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6" />
          {/* Diagonal corner facets */}
          <line x1="4" y1="4" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="4" x2="36" y2="12" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="44" x2="12" y2="36" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="44" x2="36" y2="36" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          {/* Side star facets */}
          <line x1="24" y1="4" x2="24" y2="12" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="44" x2="24" y2="36" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          {/* Inner cross */}
          <line x1="12" y1="12" x2="36" y2="36" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="36" y1="12" x2="12" y2="36" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
        </svg>
      );

    // ── HEART ─────────────────────────────────────────────────────────────────
    case 'heart':
      return (
        <svg {...sharedProps}>
          {/* Heart outline */}
          <path
            d="M24 42 C24 42 4 30 4 18 C4 10 10 4 17 4 C20 4 22 6 24 8 C26 6 28 4 31 4 C38 4 44 10 44 18 C44 30 24 42 24 42Z"
            stroke="currentColor" strokeWidth="1.2"
          />
          {/* Table */}
          <path
            d="M24 36 C24 36 10 26 10 18 C10 13 13 9 17 9 C19.5 9 21 11 24 14 C27 11 28.5 9 31 9 C35 9 38 13 38 18 C38 26 24 36 24 36Z"
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.55"
          />
          {/* Cleft line */}
          <line x1="24" y1="8" x2="24" y2="14" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          {/* Wing facets */}
          <line x1="4" y1="18" x2="10" y2="18" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="12" x2="10" y2="14" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="12" x2="38" y2="14" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="42" x2="24" y2="36" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
        </svg>
      );

    // ── RADIANT ───────────────────────────────────────────────────────────────
    case 'radiant':
      return (
        <svg {...sharedProps}>
          {/* Cropped corner rectangle */}
          <polygon
            points="10,4 38,4 44,10 44,38 38,44 10,44 4,38 4,10"
            stroke="currentColor" strokeWidth="1.2"
          />
          {/* Table */}
          <polygon
            points="15,10 33,10 38,15 38,33 33,38 15,38 10,33 10,15"
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6"
          />
          {/* Corner facet lines */}
          <line x1="10" y1="4" x2="15" y2="10" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="38" y1="4" x2="33" y2="10" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="10" x2="38" y2="15" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="38" x2="38" y2="33" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="38" y1="44" x2="33" y2="38" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="10" y1="44" x2="15" y2="38" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="38" x2="10" y2="33" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="10" x2="10" y2="15" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          {/* Side star facets */}
          <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="44" x2="24" y2="38" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
        </svg>
      );

    // ── TRILLION ──────────────────────────────────────────────────────────────
    case 'trillion':
      return (
        <svg {...sharedProps}>
          {/* Trillion outline — curved triangle */}
          <path
            d="M24 4 C26 4 44 38 44 42 C44 44 42 44 24 44 C6 44 4 44 4 42 C4 38 22 4 24 4Z"
            stroke="currentColor" strokeWidth="1.2"
          />
          {/* Table */}
          <path
            d="M24 14 C25 14 37 38 37 40 C37 41 35 41 24 41 C13 41 11 41 11 40 C11 38 23 14 24 14Z"
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6"
          />
          {/* Star facets */}
          <line x1="24" y1="4" x2="24" y2="14" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="42" x2="11" y2="40" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="42" x2="37" y2="40" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="4" y1="42" x2="14" y2="28" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="44" y1="42" x2="34" y2="28" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="4" x2="14" y2="28" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
          <line x1="24" y1="4" x2="34" y2="28" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5" />
        </svg>
      );

    // ── BAGUETTE ──────────────────────────────────────────────────────────────
    case 'baguette':
      return (
        <svg {...sharedProps}>
          {/* Baguette outline — elongated rectangle */}
          <rect x="12" y="4" width="24" height="40" stroke="currentColor" strokeWidth="1.2" />
          {/* Step 1 */}
          <rect x="16" y="8" width="16" height="32" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.6" />
          {/* Step 2 — table */}
          <rect x="18" y="13" width="12" height="22" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4" />
          {/* Corner lines */}
          <line x1="12" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="36" y1="4" x2="32" y2="8" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="12" y1="44" x2="16" y2="40" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="36" y1="44" x2="32" y2="40" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
        </svg>
      );

    // ── CABOCHON ──────────────────────────────────────────────────────────────
    case 'cabochon':
      return (
        <svg {...sharedProps}>
          {/* Cabochon profile — oval dome, side view */}
          <ellipse cx="24" cy="24" rx="20" ry="20" stroke="currentColor" strokeWidth="1.2" />
          {/* Base girdle line */}
          <line x1="4" y1="34" x2="44" y2="34" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
          {/* Dome highlight arc */}
          <path
            d="M10 20 Q24 8 38 20"
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4" fill="none"
          />
          {/* Inner dome curve */}
          <path
            d="M14 24 Q24 12 34 24"
            stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" fill="none"
          />
        </svg>
      );

    default:
      return (
        <svg {...sharedProps}>
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
  }
};
