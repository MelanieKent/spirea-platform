/**
 * Founder — Spirea Platform
 *
 * Background: chalk (#F7F5F2) — intimate, typography-led
 * One photograph: julia-liu.jpg with D2 arc corner treatment
 * Track layout: two-column period | detail grid
 *
 * Photo: src/assets/images/julia-liu.jpg
 * Arc corner applied to wrapper div, not the img element
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { SectionDivider } from '../components/UI';
import founderPhoto from '../assets/images/julia-liu.jpg';

const TRACK = [
  {
    period: '26 years\nGlobal Operations',
    org: 'Cargill · ADM · Bunge',
    role: 'Global Supply Chain Leadership',
    body: 'Leadership across integrated agricultural commodity supply chains on multiple continents. This experience established a precision understanding of how complex material systems — where inputs, production, logistics, and deployment interact — are designed, managed, and scaled at global scale. The rigour of commodity systems is directly analogous to what an integrated construction platform requires: controlled inputs, reproducible processes, and deployment infrastructure that operates consistently across diverse geographic and regulatory environments.',
    borderBottom: true,
  },
  {
    period: 'Builder\nBritish Columbia',
    org: 'BC Housing',
    role: 'Licensed Residential Builder',
    body: 'Licensed builder in British Columbia. Direct experience in residential construction provides a ground-level understanding of how construction systems actually operate at site — where the gap between what is designed and what is assembled becomes visible. That gap is one of the central problems Spirea is designed to close.',
    borderBottom: true,
  },
  {
    period: 'PhD\nResearch',
    org: 'Edinburgh Napier University',
    role: 'PhD · Built Environment',
    body: 'Julia Liu holds a PhD in the Built Environment from Edinburgh Napier University. Her doctoral research was conducted within the Resource Efficient Built Environment Lab (REBEL), where she investigated bio-based materials, material substitution, and low-carbon construction systems. This academic rigour continues to inform the Prototype V1 development programme and provides the evidentiary framework for approaching construction materials as engineered systems rather than inherited tradecraft.',
    borderBottom: false,
  },
];

export default function Founder() {
  return (
    <>
      <Nav bg="#F7F5F2" />

      <div style={{ background: '#F7F5F2' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '64px 64px 52px', borderBottom: '0.5px solid #E0DDD8', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 72, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 16 }}>
              Julia Liu · Founder
            </div>
            <h1 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(24px,3vw,38px)', color: '#1A1A18', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 22, fontWeight: 700 }}>
              The convergence of supply chain systems, material science, and construction.
            </h1>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#6A6A68', lineHeight: 1.87, maxWidth: 430 }}>
              Spirea Platform was founded by someone who has spent a career at the intersection of complex system design, material flows, and large-scale deployment — and who identified in construction a set of systems problems that her background was specifically positioned to address.
            </p>
          </div>

          {/*
            Founder photograph.
            D2 arc corner treatment applied to wrapper (border-radius: 0 0 120px 0).
            To update: replace src/assets/images/julia-liu.jpg
            Do not change the wrapper div styling.
          */}
          <div style={{ borderRadius: '0 0 120px 0', overflow: 'hidden' }}>
            <img
              src={founderPhoto}
              alt="Julia Liu, Founder, Spirea Platform"
              style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </section>

        {/* ── BACKGROUND TRACK ── */}
        <section style={{ padding: '56px 64px', background: '#F7F5F2' }}>
          <SectionDivider label="Professional background" />
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#6A6A68', lineHeight: 1.87, maxWidth: 580, marginBottom: 44 }}>
            The question Spirea is built to answer — how do you engineer a construction system from materials to deployment — requires a systems perspective trained across all three disciplines together, not from any one of them alone.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr' }}>
            {TRACK.map((item, i) => (
              <div key={i} style={{ display: 'contents' }}>
                {/* Period */}
                <div
                  style={{
                    padding: '20px 26px 20px 0',
                    fontFamily: '"DM Sans",sans-serif',
                    fontWeight: 300,
                    fontSize: 8,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: '#9A9A98',
                    borderRight: '0.5px solid #E0DDD8',
                    borderBottom: item.borderBottom ? '0.5px solid #E0DDD8' : 'none',
                    textAlign: 'right',
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {item.period}
                </div>
                {/* Detail */}
                <div
                  style={{
                    padding: '20px 0 20px 26px',
                    borderBottom: item.borderBottom ? '0.5px solid #E0DDD8' : 'none',
                  }}
                >
                  <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 5 }}>
                    {item.org}
                  </div>
                  <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: 17, color: '#1A1A18', marginBottom: 8, lineHeight: 1.2, fontWeight: 550 }}>
                    {item.role}
                  </div>
                  <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 12.5, color: '#6A6A68', lineHeight: 1.82 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CLOSING QUOTE ── */}
        <section style={{ padding: '56px 64px', background: '#F0EDE8', borderTop: '0.5px solid #E0DDD8', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          <blockquote style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(19px,2.2vw,26px)', fontStyle: 'italic', color: '#1A1A18', lineHeight: 1.5, margin: 0, fontWeight: 550 }}>
            "Construction is a systems problem. It has been treated as a procurement problem for too long."
          </blockquote>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#6A6A68', lineHeight: 1.87 }}>
              The disciplines that define Spirea — material science, controlled manufacturing, modular deployment — are not new to other industries. They are new to construction because construction has not yet been organised to use them together.
            </p>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#6A6A68', lineHeight: 1.87 }}>
              Julia Liu founded Spirea to apply the integrated systems logic she developed across global supply chains to the construction problem — beginning with Prototype V1 and the development program currently underway.
            </p>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
