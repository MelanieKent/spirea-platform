/**
 * Footer — Spirea Platform site footer
 * Approved content: "© 2026 Spirea Platform" only.
 * D2 logo in footer variant (teal core, muted rings on dark background).
 */
import { D2Logo } from './D2Logo';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1A1A18',
        padding: '22px 52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 300,
          fontSize: 10,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
        }}
      >
        © 2026 Spirea Platform
      </span>
      <D2Logo variant="footer" size={22} ariaLabel="" />
    </footer>
  );
}
