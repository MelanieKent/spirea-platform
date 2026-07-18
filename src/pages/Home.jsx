/**
 * Home — Spirea Platform Homepage
 *
 * Background strategy:
 *   Hero:           #1C1C1A (hero-dark) — only dark entry in the site
 *   Why section:    limestone (#F0EDE8)
 *   Platform:       chalk (#F7F5F2), bordered top/bottom
 *   Dev program:    deep-ink (#1A1A18) dark band
 *   Apps preview:   limestone
 *   Contact band:   chalk
 *
 * D2 arc geometry appears in hero at opacity 0.04 — top-right, position:absolute
 * Platform framework: inline SVG schematic (architectural drawing quality)
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { D2LogoBg } from '../components/D2Logo';
import { SectionDivider, BtnPrimary, BtnGhost, StatusDot } from '../components/UI';
import PlatformFrameworkDiagram from '../components/diagrams/PlatformFrameworkDiagram';

// ── DATA ───────────────────────────────────────────────────────────────────
const ENGINES = [
  {
    label: 'Technology Development',
    title: 'Designs and builds every prototype.',
    body: 'Printer, materials, wall architecture, and fabrication process — the engine that produces each successive prototype, from Prototype V1 through V2, V3, and beyond.',
  },
  {
    label: 'Validation',
    title: 'Proves performance, earns acceptance.',
    body: 'Structural, thermal, and regulatory validation for every prototype the technology engine produces — the evidence base that carries each design toward code acceptance.',
  },
  {
    label: 'Commercialization',
    title: 'Converts prototypes into product.',
    body: 'The path from a validated prototype to a manufacturable, sellable, installable construction system, ready for deployment beyond the laboratory.',
  },
  {
    label: 'Knowledge',
    title: 'Compounds with every cycle.',
    body: 'Every print, test, and engineering decision captured as reusable intellectual capital, so each subsequent prototype starts ahead of the last.',
  },
];

const DEV_CELLS = [
  {
    tag: 'Infrastructure',
    name: 'Development Laboratory',
    body: 'A dedicated facility for additive manufacturing development, material testing, and Prototype V1 fabrication. Sized to the validation programme, not to demonstrate scale.',
    status: 'Establishment active',
    dotVariant: 'teal',
  },
  {
    tag: 'Equipment',
    name: 'Guan Li Spider — Procurement',
    body: 'Additive manufacturing equipment for Prototype V1 fabrication. Procurement underway. Commissioning to follow laboratory establishment.',
    status: 'Procurement underway',
    dotVariant: 'amber',
  },
  {
    tag: 'Programme',
    name: 'Validation Pathway',
    body: 'A structured programme of testing, engineering review, and regulatory preparation. The objective is validation readiness — not demonstration. Planned for Stages 05–06.',
    status: 'Preparation underway',
    dotVariant: 'amber',
  },
];

const STAGE_PROGRESS = [
  { label: 'Stage 01 — Program Foundation — Completed',                dotVariant: 'dark',         opacity: 0.35, pulse: false },
  { label: 'Stage 02 — Lean Lab Setup — Active',                       dotVariant: 'teal',         opacity: 0.7,  pulse: true  },
  { label: 'Stage 03 — Equipment Manufacturing — Underway',            dotVariant: 'outline-teal', opacity: 0.4,  pulse: false },
  { label: 'Stages 04–08 — Development, Validation & Launch — Planned', dotVariant: 'grey',        opacity: 0.28, pulse: false },
];

const APPS_PREVIEW = [
  {
    num: 'Domain 01',
    title: 'Resilient Infrastructure',
    body: 'Construction systems designed for consistent performance across demanding climate conditions — extreme cold, high humidity, seismic zones. System-level engineering, not component-level specification.',
  },
  {
    num: 'Domain 02',
    title: 'Rapid Deployment',
    body: 'Modular production and assembly logic that treats time-to-occupancy as a system property — reducing trade dependencies at site level rather than compressing conventional workflows.',
  },
  {
    num: 'Domain 03',
    title: 'Remote & Distributed',
    body: 'Infrastructure delivery to remote communities and strategic locations where conventional supply chains are impractical or absent. Factory production, reduced on-site dependency.',
  },
];

// ── COMPONENT ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav bg="#F7F5F2" />

      {/* ── HERO ── */}
      <section
        aria-label="Spirea Platform"
        style={{
          background: '#1C1C1A',
          minHeight: '84vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 64px 76px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* D2 arc geometry — ambient, not symbolic */}
        <div style={{ position: 'absolute', top: -60, right: -80 }}>
          <D2LogoBg size={420} color="#F0EDE8" opacity={0.04} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: '#1D9E75', flexShrink: 0 }} aria-hidden="true" />
            <span style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#1D9E75' }}>
              Integrated Construction Platform
            </span>
          </div>
          <h1 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(32px,4.6vw,54px)', fontWeight: 400, lineHeight: 1.1, color: 'rgba(255,255,255,0.92)', letterSpacing: '-0.01em', marginBottom: 24 }}>
            A new operating system<br />
            for <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.52)' }}>construction.</em>
          </h1>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.84, maxWidth: 460, marginBottom: 44 }}>
            Spirea Platform is developing an integrated approach to construction — combining material systems, production systems, and deployment systems into a unified platform. Prototype V1 is the first development program currently underway.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <BtnPrimary href="/prototype-v1">Development Program →</BtnPrimary>
            <BtnGhost href="/strategic-applications" dark>Strategic Applications</BtnGhost>
          </div>
        </div>
      </section>

      {/* ── WHY SPIREA EXISTS ── */}
      <section style={{ background: '#F0EDE8', padding: '72px 64px' }}>
        <SectionDivider label="Why Spirea exists" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 72, alignItems: 'start' }}>
          <h2 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(22px,2.8vw,34px)', color: '#1A1A18', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
            Construction has not been engineered as an integrated system.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'Construction today is a sequence of isolated decisions — materials specified independently, production contracted separately, assembly assembled on site from uncoordinated components. The result is slow delivery, inconsistent quality, and a structural inability to reduce carbon at scale.',
              'Spirea addresses this by designing material systems, production systems, and deployment systems together from the outset — treating construction as a platform problem, not a procurement problem.',
              'The platform is currently being realised through a staged development and validation programme.',
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#6A6A68', lineHeight: 1.87 }}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM FRAMEWORK ── */}
      <section style={{ background: '#F7F5F2', borderTop: '0.5px solid #E0DDD8', borderBottom: '0.5px solid #E0DDD8', padding: '64px 64px' }}>
        <SectionDivider label="Platform framework" />
        <h2 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(22px,2.8vw,34px)', color: '#1A1A18', lineHeight: 1.25, marginBottom: 16 }}>
          Four engines. One platform.
        </h2>
        <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#6A6A68', lineHeight: 1.87, maxWidth: 540, marginBottom: 40 }}>
          Technology Development, Validation, Commercialization, and Knowledge run as four permanent engines beneath every prototype. Prototype V1 is their first output — not the platform itself.
        </p>

        {/* Platform Framework Diagram — architectural schematic SVG */}
        <div style={{ background: '#fff', border: '0.5px solid #E0DDD8', overflow: 'hidden', marginBottom: 36, borderRadius: '0 0 80px 0' }}>
          <PlatformFrameworkDiagram />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: '0.5px solid #E0DDD8' }}>
          {ENGINES.map((p, i) => (
            <div key={i} style={{ padding: '28px 22px', borderRight: i < 3 ? '0.5px solid #E0DDD8' : 'none' }}>
              <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ display: 'inline-block', width: 16, height: 1, background: '#1D9E75', flexShrink: 0 }} aria-hidden="true" />
                {p.label}
              </div>
              <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: 19, color: '#1A1A18', marginBottom: 10, lineHeight: 1.2 }}>{p.title}</div>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 12, color: '#6A6A68', lineHeight: 1.82 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEVELOPMENT PROGRAM ── */}
      <section style={{ background: '#1A1A18', padding: '72px 64px' }}>
        <SectionDivider label="Development program" dark />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start', marginBottom: 40 }}>
          <div>
            <h2 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(22px,2.8vw,34px)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.25, marginBottom: 16 }}>
              Building the foundation for validation.
            </h2>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.87 }}>
              The platform is currently being developed through a staged engineering and validation programme. Prototype V1 is the first development program — focused on establishing laboratory infrastructure, equipment, and the methodology for future validation.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 10 }}>
              Current programme stage
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {STAGE_PROGRESS.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <StatusDot variant={s.dotVariant} size={8} />
                  <span style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 9, color: `rgba(255,255,255,${s.opacity})`, letterSpacing: '0.1em' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}>
          {DEV_CELLS.map((cell, i) => (
            <div key={i} style={{ background: '#1A1A18', padding: '26px 22px' }}>
              <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 8 }}>{cell.tag}</div>
              <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: 17, color: 'rgba(255,255,255,0.82)', marginBottom: 8, lineHeight: 1.2 }}>{cell.name}</div>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 11.5, color: 'rgba(255,255,255,0.36)', lineHeight: 1.77, marginBottom: 10 }}>{cell.body}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <StatusDot variant={cell.dotVariant} size={5} />
                <span style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.26)' }}>{cell.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STRATEGIC APPLICATIONS PREVIEW ── */}
      <section style={{ background: '#F0EDE8', borderTop: '0.5px solid #E0DDD8', padding: '72px 64px' }}>
        <SectionDivider label="Strategic applications" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start', marginBottom: 36 }}>
          <h2 style={{ fontFamily: '"DM Serif Display",serif', fontSize: 'clamp(22px,2.8vw,34px)', color: '#1A1A18', lineHeight: 1.25 }}>
            Where the platform may be deployed.
          </h2>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 13.5, color: '#6A6A68', lineHeight: 1.87 }}>
            These are the deployment contexts the Spirea platform is being engineered to serve — pending Prototype V1 validation. They are not current products. They are the territories where an integrated construction platform addresses problems that conventional construction has not resolved.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {APPS_PREVIEW.map((app, i) => (
            <div key={i} style={{ borderTop: '1px solid #E0DDD8', paddingTop: 22 }}>
              <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 10 }}>{app.num}</div>
              <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: 19, color: '#1A1A18', marginBottom: 8, lineHeight: 1.2 }}>{app.title}</div>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 12, color: '#6A6A68', lineHeight: 1.78 }}>{app.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT BAND ── */}
      <div style={{ background: '#F7F5F2', borderTop: '0.5px solid #E0DDD8', padding: '64px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 12 }}>Collaboration &amp; development</div>
          <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: 22, color: '#1A1A18', lineHeight: 1.35, marginBottom: 10, maxWidth: 500 }}>
            Spirea Platform welcomes collaboration, research, validation, and strategic development discussions.
          </div>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 12.5, color: '#6A6A68', lineHeight: 1.78, maxWidth: 440 }}>
            Building relationships with research institutions, engineering partners, and organisations aligned with long-term development and validation.
          </p>
        </div>
        <BtnPrimary href="/contact" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>Contact Spirea →</BtnPrimary>
      </div>

      <Footer />
    </>
  );
}
