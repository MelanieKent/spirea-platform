/**
 * D2Logo — Approved Spirea Platform logo component
 *
 * Path data: Spirea Platform Implementation Package, June 2025
 * Three concentric dashed arc paths + teal core dot.
 * NEVER modify the SVG path coordinates or stroke values.
 *
 * Variants:
 *   'primary'  — dark rings (#2a2a28 / #6a6a68 / #c0beb6), teal core
 *                Use on: nav, letterhead, business cards, light backgrounds
 *   'reversed' — all limestone rings (#F0EDE8), teal core (not used in current site)
 *   'footer'   — teal core, muted rings for dark backgrounds (#c8c6bc / #555 / #2c2c2a)
 *                Use on: site footer (#1A1A18 background)
 *   'mono'     — all black (#111111), for single-colour print
 *
 * Size: pass as pixels; SVG renders at that exact size (viewBox is always 0 0 100 100)
 */

const VARIANTS = {
  primary: {
    core:  '#1D9E75',
    ring1: '#2a2a28',
    ring2: '#6a6a68',
    ring3: '#c0beb6',
  },
  reversed: {
    core:  '#F0EDE8',
    ring1: '#F0EDE8',
    ring2: '#F0EDE8',
    ring3: '#F0EDE8',
  },
  footer: {
    core:  '#1D9E75',
    ring1: '#c8c6bc',
    ring2: '#555555',
    ring3: '#2c2c2a',
  },
  mono: {
    core:  '#111111',
    ring1: '#111111',
    ring2: '#111111',
    ring3: '#111111',
  },
};

export function D2Logo({ variant = 'primary', size = 36, className = '', ariaLabel = 'Spirea Platform' }) {
  const c = VARIANTS[variant] ?? VARIANTS.primary;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label={ariaLabel}
      className={className}
    >
      {/* Teal core dot — origin of the spiral */}
      <circle cx="50" cy="50" r="6" fill={c.core} />

      {/* Ring 1 — inner arc, dasharray 7.5 1.5 */}
      <path
        d="M 37.39,53.56 A 13,13 0 1 1 51.81,62.87"
        fill="none"
        stroke={c.ring1}
        strokeWidth="6"
        strokeLinecap="butt"
        strokeDasharray="7.5 1.5"
      />

      {/* Ring 2 — middle arc, dasharray 10 2 */}
      <path
        d="M 26.93,56.62 A 24,24 0 1 1 53.34,73.77"
        fill="none"
        stroke={c.ring2}
        strokeWidth="7.5"
        strokeLinecap="butt"
        strokeDasharray="10 2"
      />

      {/* Ring 3 — outer arc, dasharray 13 2 */}
      <path
        d="M 12.89,62.05 A 39,39 0 1 1 55.43,88.62"
        fill="none"
        stroke={c.ring3}
        strokeWidth="9"
        strokeLinecap="butt"
        strokeDasharray="13 2"
      />
    </svg>
  );
}

/**
 * D2LogoBg — Arc geometry without the core dot, for use as ambient hero background.
 * Positioned absolute, opacity ~0.04, in the homepage hero section only.
 * Per brand doc: "the underlying geometry made architectural."
 */
export function D2LogoBg({ size = 420, color = '#F0EDE8', opacity = 0.04, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      style={{ opacity }}
      className={className}
    >
      <path
        d="M 37.39,53.56 A 13,13 0 1 1 51.81,62.87"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="butt"
        strokeDasharray="7.5 1.5"
      />
      <path
        d="M 26.93,56.62 A 24,24 0 1 1 53.34,73.77"
        fill="none"
        stroke={color}
        strokeWidth="7.5"
        strokeLinecap="butt"
        strokeDasharray="10 2"
      />
      <path
        d="M 12.89,62.05 A 39,39 0 1 1 55.43,88.62"
        fill="none"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="butt"
        strokeDasharray="13 2"
      />
    </svg>
  );
}

/**
 * D2Lockup — mark + wordmark horizontal lockup.
 * Used in: navigation header (all pages).
 */
export function D2Lockup({ variant = 'primary', size = 36 }) {
  const wordColor  = variant === 'reversed' || variant === 'footer' ? '#F0EDE8' : '#1A1A18';
  const subColor   = variant === 'reversed' || variant === 'footer' ? 'rgba(240,237,232,0.5)' : '#9A9A98';

  return (
    <div className="flex items-center gap-[11px]">
      <D2Logo variant={variant} size={size} ariaLabel="Spirea Platform" />
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: 14,
            letterSpacing: '0.19em',
            textTransform: 'uppercase',
            color: wordColor,
          }}
        >
          Spirea
        </span>
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: 7,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: subColor,
            marginTop: 2,
          }}
        >
          Platform
        </span>
      </div>
    </div>
  );
}
