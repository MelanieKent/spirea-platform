/**
 * StrategicApplications — Spirea Platform
 *
 * Background: limestone (#F0EDE8) with chalk (#F7F5F2) on alternate domains
 * Three domains, each with left-column text + right-column SVG diagram
 * D2 arc corner treatment on all diagram containers
 * Dark closing statement band
 *
 * Diagrams are imported as separate JSX components (inline SVG)
 * and also available as standalone assets in src/assets/diagrams/
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { SectionDivider } from '../components/UI';
import D1ResilienceMap    from '../components/diagrams/D1ResilienceMap';
import D2DeploymentGrid  from '../components/diagrams/D2DeploymentGrid';
import D3RemoteMap       from '../components/diagrams/D3RemoteMap';

const DOMAINS = [
  {
    num:        'Domain 01',
    title:      'Resilient Infrastructure Systems',
    sub:        'Performance across conditions',
    body: [
      'The built environment faces increasing demands for performance consistency across extreme and variable conditions — cold climates, high humidity, seismic zones, and sustained environmental stress. Conventional construction systems do not address these conditions at the system level. Components may perform individually; the integrated assembly does not perform predictably.',
      'Spirea addresses this at the design stage — material selection, production method, and assembly logic are chosen together for the deployment condition, not assembled after independent specification.',
    ],
    conditions: [
      ['Climate range',  'Extreme cold to high humidity'],
      ['Performance',    'Thermal, structural, durability'],
      ['Application',    'Housing, institutional, infrastructure'],
      ['Stage',          'Pending Prototype V1 validation'],
    ],
    bg:        '#F0EDE8',
    Diagram:   D1ResilienceMap,
  },
  {
    num:        'Domain 02',
    title:      'Rapid Deployment Frameworks',
    sub:        'Time-to-occupancy as a system property',
    body: [
      'Conventional construction timelines are determined by trade sequencing and site logistics, not by the inherent speed potential of building materials. A system designed for rapid deployment treats time as a design parameter — not a project management problem to solve after specification.',
      "Spirea's modular production and assembly logic is intended to reduce time-to-occupancy by reducing trade dependencies at the site level. The speed gain is structural to the system.",
    ],
    conditions: [
      ['Application',    'Emergency housing, rapid-response infrastructure'],
      ['Key feature',    'Reduced on-site trade dependency'],
      ['Priority',       'Time-to-occupancy, repeatability'],
      ['Stage',          'Pending Prototype V1 validation'],
    ],
    bg:        '#F7F5F2',
    Diagram:   D2DeploymentGrid,
  },
  {
    num:        'Domain 03',
    title:      'Remote & Distributed Development',
    sub:        'Infrastructure where supply chains end',
    body: [
      'Remote communities, Indigenous nations, northern settlements, and strategic infrastructure locations face a common challenge: conventional construction supply chains are impractical, expensive, or simply absent. The result is a persistent gap between infrastructure need and infrastructure delivery.',
      'A modular, factory-produced construction system with reduced on-site labour requirements changes the economics and logistics of building in remote conditions.',
    ],
    conditions: [
      ['Geography',     'Northern Canada, remote communities'],
      ['Application',   'Housing, community, strategic facilities'],
      ['Key feature',   'Factory production, reduced site labour'],
      ['Stage',         'Pending Prototype V1 validation'],
    ],
    bg:        '#F0EDE8',
    Diagram:   D3RemoteMap,
  },
];

export default function StrategicApplications() {
  return (
    <>
      <Nav bg="#F0EDE8" />

      <div style={{ background: '#F0EDE8' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '72px 64px 56px', borderBottom: '0.5px solid #E0DDD8' }}>
          <SectionDivider label="Strategic applications" />
          <h1 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(28px,4vw,48px)', color: '#1A1A18', lineHeight: 1.1, letterSpacing: '-0.015em', maxWidth: 580, marginBottom: 16, fontWeight: 700 }}>
            Where Spirea may be deployed.
          </h1>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#6A6A68', lineHeight: 1.82, maxWidth: 480 }}>
            The platform is being engineered for future deployment across contexts where conventional construction has not found an integrated answer.
          </p>
          <div style={{ maxWidth: 530, background: '#F7F5F2', border: '0.5px solid #E0DDD8', borderLeft: '2px solid #1D9E75', padding: '12px 18px', marginTop: 28, fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 11, color: '#6A6A68', lineHeight: 1.72 }}>
            Applications described here represent intended future deployment domains, not current operational capability. Prototype V1 is under active development. All applications are contingent on successful validation and engineering review.
          </div>
        </section>

        {/* ── DOMAIN SECTIONS ── */}
        {DOMAINS.map((d) => {
          const { Diagram } = d;
          return (
            <section
              key={d.num}
              style={{ background: d.bg, borderBottom: '0.5px solid #E0DDD8', padding: '56px 64px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 56, alignItems: 'start' }}
            >
              {/* Left: text */}
              <div>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 12 }}>{d.num}</div>
                <h2 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 25, color: '#1A1A18', lineHeight: 1.2, marginBottom: 7, fontWeight: 550 }}>{d.title}</h2>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 22 }}>{d.sub}</div>
                {d.body.map((para, j) => (
                  <p key={j} style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13, color: '#6A6A68', lineHeight: 1.87, marginBottom: j < d.body.length - 1 ? 14 : 0 }}>{para}</p>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13, marginTop: 20 }}>
                  {d.conditions.map(([label, value]) => (
                    <div key={label} style={{ borderTop: '0.5px solid #E0DDD8', paddingTop: 9 }}>
                      <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 3 }}>{label}</div>
                      <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 11.5, color: '#3A3A38', lineHeight: 1.5 }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: diagram with D2 arc corner */}
              <div style={{ borderRadius: '0 0 120px 0', overflow: 'hidden' }}>
                <Diagram />
              </div>
            </section>
          );
        })}

        {/* ── CLOSING ── */}
        <section style={{ background: '#1A1A18', padding: '72px 64px' }}>
          <SectionDivider label="Platform vision" dark />
          <h2 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(22px,3vw,36px)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.0, maxWidth: 600, marginBottom: 14, fontWeight: 700 }}>
            The platform exists to serve conditions where conventional construction has not found an adequate answer.
          </h2>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.36)', lineHeight: 1.82, maxWidth: 480 }}>
            All applications are contingent on the successful development and validation of Prototype V1. Spirea Platform welcomes discussions with organisations working in these domains.
          </p>
        </section>

      </div>

      <Footer />
    </>
  );
}
