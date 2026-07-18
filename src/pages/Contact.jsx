/**
 * Contact — Spirea Platform
 *
 * Background: white (#ffffff) — cleared, pure function
 * D2 mark centred as sole compositional element (no wordmark)
 * Maximum negative space
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { D2Logo } from '../components/D2Logo';

const CHANNELS = [
  { label: 'General inquiries',      value: 'info@spireaplatform.ca',  href: 'mailto:info@spireaplatform.ca'  },
  { label: 'Strategic partnerships', value: 'julia@spireaplatform.ca', href: 'mailto:julia@spireaplatform.ca' },
  { label: 'Location',               value: 'Vancouver, Canada',        href: null                            },
  { label: 'Website',                value: 'spireaplatform.ca',        href: 'https://spireaplatform.ca'     },
];

export default function Contact() {
  return (
    <>
      <Nav bg="#ffffff" />

      <div style={{ background: '#fff', minHeight: '80vh' }}>
        <div style={{ maxWidth: 500, margin: '0 auto', padding: '88px 32px 72px', textAlign: 'center' }}>

          {/* D2 mark — sole compositional element, no wordmark */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 52 }}>
            <D2Logo variant="primary" size={60} ariaLabel="Spirea Platform" />
          </div>

          <h1 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(28px,4vw,44px)', color: '#1A1A18', marginBottom: 14, lineHeight: 1.15 }}>
            Get in touch.
          </h1>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13, color: '#6A6A68', lineHeight: 1.82, maxWidth: 400, margin: '0 auto 48px' }}>
            Spirea Platform welcomes collaboration, research, validation, and strategic development discussions.
          </p>

          <div style={{ height: 0.5, background: '#E0DDD8', marginBottom: 40 }} />

          {/* Contact channels */}
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            {CHANNELS.map((ch, i) => (
              <div
                key={ch.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '15px 0',
                  borderBottom: i < CHANNELS.length - 1 ? '0.5px solid #E0DDD8' : 'none',
                }}
              >
                <span style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9A9A98', flexShrink: 0, marginRight: 16 }}>
                  {ch.label}
                </span>
                {ch.href ? (
                  <a href={ch.href} style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#3A3A38', textDecoration: 'none' }}>
                    {ch.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#3A3A38' }}>
                    {ch.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          <p style={{ fontFamily: '"DM Serif Display",serif', fontStyle: 'italic', fontSize: 15, color: '#9A9A98', marginTop: 52, lineHeight: 1.72 }}>
            "We are building the foundation<br />for the next generation of construction."
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
