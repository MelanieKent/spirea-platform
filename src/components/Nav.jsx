/**
 * Nav — Spirea Platform sticky navigation (v5)
 *
 * Props:
 *   bg — background colour. Default: chalk. Per page: Home chalk, Prototype V1 white,
 *        Strategic Applications limestone, Founder chalk, Contact white.
 *
 * Mobile (768px and below): the link list is replaced by a 44 × 44px menu button.
 * The open panel is a full-width list under the bar; it closes on selection or route change.
 * Styles live in globals.css (.nav-links, .nav-toggle, nav.open).
 */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { D2Logo } from './D2Logo';

const NAV_ITEMS = [
  { label: 'Home',                   to: '/' },
  { label: 'Prototype V1',           to: '/prototype-v1' },
  { label: 'Strategic Applications', to: '/strategic-applications' },
  { label: 'Founder',                to: '/founder' },
  { label: 'Contact',                to: '/contact' },
];

export default function Nav({ bg = '#F7F5F2' }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Close the mobile panel whenever the route changes.
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className={open ? 'open' : ''} style={{ background: bg }}>
      <Link to="/" className="logo-wrap" aria-label="Spirea Platform home">
        <D2Logo variant="primary" size={36} ariaLabel="" />
        <div className="logo-text">
          <span className="n">Spirea</span>
          <span className="s">Platform</span>
        </div>
      </Link>

      <ul id="site-nav-links" className="nav-links">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={pathname === item.to ? 'on' : undefined}
              aria-current={pathname === item.to ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="site-nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
