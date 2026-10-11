/**
 * Contact (handoff v5)
 * White page. D2 mark is the sole compositional element (no wordmark).
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { D2Logo } from '../components/D2Logo';

const CHANNELS = [
  { label: 'General inquiries',       value: 'info@spireaplatform.ca',  href: 'mailto:info@spireaplatform.ca' },
  { label: 'Pilots and partnerships', value: 'julia@spireaplatform.ca', href: 'mailto:julia@spireaplatform.ca' },
  { label: 'Location',                value: 'Vancouver, Canada' },
  { label: 'Website',                 value: 'spireaplatform.ca',       href: 'https://spireaplatform.ca' },
];

export default function Contact() {
  return (
    <>
      <Nav bg="#fff" />

      <div className="contact-page">
        <div className="contact-inner">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 52 }}>
            <D2Logo variant="primary" size={60} ariaLabel="" />
          </div>
          <h1 className="co-h">Get in touch.</h1>
          <p className="co-sub">
            Spirea Platform welcomes collaboration, research and validation discussions, and would be glad to discuss a focused architectural or landscape pilot.
          </p>
          <div className="co-rule" />
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            {CHANNELS.map((c, i) => (
              <div key={c.label} className="co-channel" style={i === CHANNELS.length - 1 ? { borderBottom: 'none' } : undefined}>
                <span className="cc-lbl">{c.label}</span>
                {c.href
                  ? <a className="cc-val" href={c.href}>{c.value}</a>
                  : <span className="cc-val">{c.value}</span>}
              </div>
            ))}
          </div>
          <p className="co-closing">We welcome a conversation<br />about one well-defined pilot.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
