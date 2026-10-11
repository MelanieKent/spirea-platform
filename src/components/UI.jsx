/**
 * Shared UI Components — Spirea Platform (handoff v5)
 *
 * SectionDivider  — teal arc rule + label, used on every page
 * BtnPrimary      — teal filled button (internal route via `to`, external or mailto via `href`)
 * BtnGhost        — outlined button on light backgrounds
 * StatusDot       — coloured dot for programme status indicators
 * TealAccentNote  — left-bordered note block, teal accent
 * ArcImage        — figure image with the D2 arc corner (applied to the wrapper, never the <img>)
 *
 * v5: dark-background props removed (the site has no dark sections). Sizes and colours
 * come from globals.css (.btn-primary, .btn-ghost, .slbl, ...), so there are no inline
 * font sizes here.
 */
import { Link } from 'react-router-dom';

export function SectionDivider({ label }) {
  return (
    <div className="sdiv">
      <span className="sarc" aria-hidden="true" />
      <span className="slbl">{label}</span>
    </div>
  );
}

function ButtonLink({ className, to, href, children, style, onClick }) {
  if (to)   return <Link to={to} className={className} style={style}>{children}</Link>;
  if (href) return <a href={href} className={className} style={style}>{children}</a>;
  return <button type="button" className={className} style={style} onClick={onClick}>{children}</button>;
}

/** Props: to (internal route) | href (external/mailto) | onClick, style, children */
export function BtnPrimary(props) {
  return <ButtonLink className="btn-primary" {...props} />;
}

export function BtnGhost(props) {
  return <ButtonLink className="btn-ghost" {...props} />;
}

/**
 * StatusDot — variant: 'teal' | 'amber' | 'dark' | 'grey' | 'outline-teal'; size in px (default 7).
 * Amber = in preparation / evaluation. Teal = under way. Grey = pending.
 */
export function StatusDot({ variant = 'teal', size = 7 }) {
  const styles = {
    teal:           { background: '#1D9E75' },
    amber:          { background: '#BA7517' },
    dark:           { background: '#2C2C2A' },
    grey:           { background: '#E0DDD8', border: '0.5px solid #C8C4B8' },
    'outline-teal': { background: '#fff', border: '1.5px solid #1D9E75' },
  };
  return (
    <span
      style={{ display: 'inline-block', width: size, height: size, borderRadius: '50%', flexShrink: 0, ...styles[variant] }}
      aria-hidden="true"
    />
  );
}

/**
 * TealAccentNote — optional label + body. bg: 'chalk' | 'white' (default 'white').
 */
export function TealAccentNote({ label = null, children, bg = 'white' }) {
  return (
    <div
      style={{
        background: bg === 'chalk' ? '#F7F5F2' : '#fff',
        border: '0.5px solid #E0DDD8',
        borderLeft: '2px solid #1D9E75',
        borderRadius: '0 3px 3px 0',
        padding: '11px 13px',
      }}
    >
      {label && <div className="ip-lbl">{label}</div>}
      <div className="ip-text">{children}</div>
    </div>
  );
}

/**
 * ArcImage — photograph inside the D2 arc-corner wrapper.
 *   size: 'sm' (0 0 80px 0, content photos) | 'lg' (0 0 120px 0, founder portrait)
 * Always pass width and height so the page does not shift while the image loads.
 */
export function ArcImage({ src, alt, width, height, size = 'sm', style }) {
  return (
    <div className={size === 'lg' ? 'img-arc' : 'img-arc-sm'} style={style}>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
