/**
 * Footer — Spirea Platform site footer (v5)
 * Approved content: "© 2026 Spirea Platform" only.
 * Light footer: Chalk background with a 0.5px top rule. The D2 mark uses the
 * 'primary' (light-background) variant — not the legacy 'footer' variant.
 */
import { D2Logo } from './D2Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="ft-copy">© 2026 Spirea Platform</span>
      <D2Logo variant="primary" size={22} ariaLabel="" />
    </footer>
  );
}
