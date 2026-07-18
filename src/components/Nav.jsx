/**
 * Nav — Spirea Platform sticky navigation
 *
 * Props:
 *   bg        — background colour (Tailwind class or CSS value). Default: chalk.
 *   activePage — one of: 'home' | 'prototype-v1' | 'strategic-applications' | 'founder' | 'contact'
 */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { D2Lockup } from './D2Logo';

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

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ background: bg, borderBottomColor: '#E0DDD8', borderBottomWidth: '0.5px' }}
    >
      <div
        className="flex items-center justify-between"
        style={{ padding: '0 52px', height: 62 }}
      >
        <Link to="/" aria-label="Spirea Platform home" className="no-underline">
          <D2Lockup variant="primary" size={34} />
        </Link>

        {/* Desktop nav */}
        <ul className="desktop-nav flex gap-7 list-none m-0 p-0">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? '#1A1A18' : '#6A6A68',
                    textDecoration: 'none',
                    borderBottom: isActive ? '1px solid #1D9E75' : 'none',
                    paddingBottom: isActive ? 1 : 0,
                    transition: 'color 0.14s',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn flex-col gap-1 p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ display: 'block', width: 20, height: 1.5, background: '#1A1A18', marginBottom: i < 2 ? 4 : 0 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{ background: bg, borderTop: '0.5px solid #E0DDD8', padding: '16px 24px 24px' }}
        >
          <ul className="list-none m-0 p-0 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 300,
                    fontSize: 12,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: pathname === item.to ? '#1A1A18' : '#6A6A68',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
