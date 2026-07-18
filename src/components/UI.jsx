/**
 * Shared UI Components — Spirea Platform
 *
 * SectionDivider  — teal arc rule + label, used on every page
 * BtnPrimary      — teal filled button
 * BtnGhost        — transparent outlined button (dark/light contexts)
 * StatusDot       — coloured dot for programme status indicators
 */

/**
 * SectionDivider
 * Teal horizontal rule (40px) + tracked uppercase label.
 * Used at the top of every major section across all pages.
 *
 * Props:
 *   label — section label text
 *   dark  — true for dark section backgrounds (uses white/22% label)
 */
export function SectionDivider({ label, dark = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
      <span
        style={{
          display: 'inline-block',
          width: 40,
          height: 1,
          background: '#1D9E75',
          marginRight: 14,
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      <span
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 300,
          fontSize: 8,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: dark ? 'rgba(255,255,255,0.22)' : '#9A9A98',
        }}
      >
        {label}
      </span>
    </div>
  );
}

/**
 * BtnPrimary — teal filled CTA button
 * Used on: Homepage hero, homepage contact band
 *
 * Props:
 *   children  — button label
 *   href      — link destination (renders as <a> if provided, else <button>)
 *   onClick   — click handler
 *   style     — additional inline styles
 */
export function BtnPrimary({ children, href, onClick, style = {} }) {
  const baseStyle = {
    background: '#1D9E75',
    color: '#fff',
    padding: '13px 28px',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 10.5,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'inline-block',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 300,
    transition: 'background 0.14s',
    ...style,
  };

  if (href) {
    return (
      <a href={href} style={baseStyle}>
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      style={baseStyle}
      onMouseEnter={(e) => { e.target.style.background = '#0F6E56'; }}
      onMouseLeave={(e) => { e.target.style.background = '#1D9E75'; }}
    >
      {children}
    </button>
  );
}

/**
 * BtnGhost — transparent outlined button
 * Used in hero section on dark background.
 *
 * Props:
 *   children  — button label
 *   href      — link destination
 *   dark      — true for dark background context (default: true)
 */
export function BtnGhost({ children, href, dark = true }) {
  const style = {
    background: 'none',
    color: dark ? 'rgba(255,255,255,0.4)' : '#6A6A68',
    border: dark ? '0.5px solid rgba(255,255,255,0.2)' : '0.5px solid #E0DDD8',
    padding: '13px 28px',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 10.5,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    fontWeight: 300,
    transition: 'all 0.14s',
  };

  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
}

/**
 * StatusDot — coloured programme status indicator
 * Used in V1 page status sidebar and homepage dev program band.
 *
 * Props:
 *   variant — 'teal' | 'amber' | 'dark' | 'grey' | 'outline-teal'
 *   size    — diameter in px (default: 7)
 */
export function StatusDot({ variant = 'teal', size = 7 }) {
  const styles = {
    teal:         { background: '#1D9E75' },
    amber:        { background: '#BA7517' },
    dark:         { background: '#2C2C2A' },
    grey:         { background: '#E0DDD8', border: '0.5px solid #C8C4B8' },
    'outline-teal': { background: '#fff', border: '1.5px solid #1D9E75' },
  };

  return (
    <span
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        flexShrink: 0,
        ...styles[variant],
      }}
      aria-hidden="true"
    />
  );
}

/**
 * TealAccentNote — left-bordered note block, teal accent
 * Used for: IP confidentiality note, Applications disclaimer, hero sub-note on V1 page
 *
 * Props:
 *   label     — optional small label above text (string or null)
 *   children  — note body text
 *   bg        — background ('chalk' | 'white') default: 'white'
 */
export function TealAccentNote({ label = null, children, bg = 'white' }) {
  const bgColor = bg === 'chalk' ? '#F7F5F2' : '#fff';
  return (
    <div
      style={{
        background: bgColor,
        border: '0.5px solid #E0DDD8',
        borderLeft: '2px solid #1D9E75',
        borderRadius: '0 3px 3px 0',
        padding: '11px 13px',
      }}
    >
      {label && (
        <div
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 300,
            fontSize: 7,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#9A9A98',
            marginBottom: 4,
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 300,
          fontSize: 8,
          color: '#6A6A68',
          lineHeight: 1.65,
        }}
      >
        {children}
      </div>
    </div>
  );
}
