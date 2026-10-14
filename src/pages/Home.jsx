/**
 * Home — Spirea Platform Homepage (handoff v5)
 *
 * Background strategy (light design language — no dark sections):
 *   Hero:                    chalk (#F7F5F2), 0.5px bottom rule
 *   Why an integrated approach: limestone (#F0EDE8)
 *   Platform framework:      chalk visual band, bordered top/bottom
 *   Hemp printing research:  chalk, bordered top
 *   Current development:     white (#fff)
 *   Near-term applications:  limestone, bordered top
 *   Longer-term applications: limestone, bordered top
 *   Contact band:            chalk
 *
 * Copy is approved and must be used exactly as written. Do not add insulation wording,
 * performance or cost claims, or approvals. Photographs show completed Guan Li projects
 * and equipment; they are not Spirea projects (see README, "Images and attribution").
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { D2LogoBg } from '../components/D2Logo';
import { SectionDivider, BtnPrimary, BtnGhost, StatusDot, ArcImage } from '../components/UI';
import PlatformFrameworkDiagram from '../components/diagrams/PlatformFrameworkDiagram';
import printerPhoto from '../assets/images/spirea-small-spider-printer.jpg';
import aerialPhoto  from '../assets/images/spirea-aerial-fabrication-reference.jpg';

// ── DATA ───────────────────────────────────────────────────────────────────
const WHY_PARAGRAPHS = [
  'Spirea develops materials, fabrication methods and assembly together, so that each informs the others.',
  'Spirea aims to explore what becomes possible when these are developed together: more design freedom through digital fabrication, lower-carbon material options such as hemp-based materials, and more repeatable assembly through modular systems.',
  'These are objectives to evaluate, not established results.',
];

const PILLARS = [
  {
    label: 'Material Systems',
    title: 'Hemp-based materials.',
    body: 'Hemp-based printing materials are being developed with UBC. Material choices for each application will follow testing and engineering evidence.',
  },
  {
    label: 'Production Systems',
    title: 'Controlled digital fabrication.',
    body: '3D printing offers controlled digital fabrication of complex shapes and details, subject to equipment commissioning, testing and quality control.',
  },
  {
    label: 'Deployment Systems',
    title: 'Repeatable assembly.',
    body: 'Modular assembly aims to make construction more repeatable across sites, from urban projects to remote locations, as the system is validated.',
  },
];

const HEMP_CARDS = [
  {
    label: 'Long-term direction',
    title: 'Hemp-based printing materials',
    body: 'Printable materials that bring hemp’s environmental potential into digital fabrication, developed and tested with UBC. They follow their own research, testing and validation path.',
    hemp: true,
  },
  {
    label: 'Initial V1 demonstration',
    title: 'Selected on readiness and evidence',
    body: 'Manufacturer-supplied premix adapted for BC conditions, or the hemp-based printing material, depending on readiness and engineering evidence.',
  },
];

// dot: 'amber' = in preparation; 'teal' = under way
const DEV_CELLS = [
  {
    tag: 'Equipment',
    name: 'Printers and mixing equipment',
    body: 'Construction and table printers and mixing equipment have been manufactured. Shipment and commissioning are being prepared.',
    status: 'Preparing for shipment and commissioning',
    dot: 'amber',
  },
  {
    tag: 'Materials',
    name: 'Hemp printing materials',
    body: 'Hemp-based printing material research is under way with UBC. Readiness will be confirmed by testing.',
    status: 'Under development with UBC',
    dot: 'teal',
  },
  {
    tag: 'Fabrication experience',
    name: 'UBC coyote project',
    body: 'Proposed 3D-printed pedestal for a steel coyote sculpture, an initial setting to build fabrication experience and explore artistic design.',
    status: 'Under development',
    dot: 'teal',
  },
  {
    tag: 'Engineering',
    name: 'Prototype V1 and Cabin 1',
    body: 'Prototype V1 is Spirea’s first integrated wall system. Cabin 1 is the proposed demonstration building for engineering validation and approval. Engineering and Alternative Solution pathway evaluation are underway.',
    status: 'Design and engineering under way',
    dot: 'teal',
  },
];

const NEAR_TERM = [
  { num: 'Application 01', title: 'Courtyard and landscape features',  body: 'Seating, planters, entry features and other elements shaped to complement a project’s architecture.' },
  { num: 'Application 02', title: 'Sculptural elements and art bases', body: 'Custom sculpture bases and landscape installations developed with artists and design teams.' },
  { num: 'Application 03', title: 'Bespoke architectural details',     body: 'Curved or textured feature elements, subject to engineering, durability and installation requirements.' },
];

const PILOT_STEPS = [
  { title: '1. Select a feature',    body: 'One landscape or architectural element, selected with the design team.' },
  { title: '2. Review and sample',   body: 'Review design and feasibility with the design and engineering team; sampling follows equipment commissioning.' },
  { title: '3. Compare and decide',  body: 'Compare installed cost with a conventional alternative before any project use.' },
];

const LONG_TERM = [
  { num: 'Domain 01', title: 'Resilient Infrastructure', body: 'Systems designed with performance in demanding conditions in mind, such as cold climates, humidity and seismic zones, to be demonstrated through testing and validation.' },
  { num: 'Domain 02', title: 'Rapid Deployment',         body: 'Modular production and assembly that aims to shorten time-to-occupancy by reducing site-level dependencies, to be evaluated.' },
  { num: 'Domain 03', title: 'Remote & Distributed',     body: 'Housing with interested Indigenous communities and infrastructure for remote or defence-related settings, where factory production may reduce on-site demands. Requires suitable partners and approvals.' },
];

// ── COMPONENT ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav bg="#F7F5F2" />

      {/* ── HERO ── */}
      <section className="hero" aria-label="Spirea Platform">
        {/* D2 arc geometry — ambient, not symbolic. Top-right, #6A6A68 at 7%. */}
        <div className="hero-arc-bg">
          <D2LogoBg size={420} />
        </div>

        <div className="hero-content">
          <div className="hero-eb">
            <span className="hero-eb-rule" aria-hidden="true" />
            <span className="hero-eb-lbl">Integrated construction approach</span>
          </div>
          <h1 className="hero-h1">
            3D printing, hemp-based materials and modular systems <em>for scalable construction.</em>
          </h1>
          <p className="hero-body">
            Spirea is developing an integrated construction approach combining digital fabrication, hemp-based building materials and modular systems. Current work includes hemp printing material development with UBC and the engineering of Prototype V1 toward an Alternative Solution pathway in British Columbia.
          </p>
          <div className="hero-acts">
            <BtnPrimary to="/prototype-v1">Current development →</BtnPrimary>
            <BtnGhost to="/contact">Discuss a pilot</BtnGhost>
          </div>
        </div>
      </section>

      {/* ── WHY AN INTEGRATED APPROACH ── */}
      <section className="sec" style={{ background: '#F0EDE8' }}>
        <SectionDivider label="Why an integrated approach" />
        <div className="two-col-wide">
          <h2 className="sh">Exploring how materials, fabrication and assembly can work together.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {WHY_PARAGRAPHS.map((text) => (
              <p key={text} className="sbody">{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM FRAMEWORK ── */}
      <section className="visual-band">
        <SectionDivider label="Platform framework" />
        <h2 className="sh" style={{ marginBottom: 16 }}>Three systems. One platform.</h2>
        <p className="sbody" style={{ maxWidth: 540, marginBottom: 40 }}>
          Materials, fabrication and assembly are developed together so that each can inform the others. That integration is Spirea’s long-term platform.
        </p>

        {/* Illustrative schematic — not a V1 specification. Scrolls horizontally on narrow screens. */}
        <div className="img-arc-sm" style={{ background: '#fff', border: '0.5px solid #E0DDD8', overflowX: 'auto', marginBottom: 36 }}>
          <PlatformFrameworkDiagram />
        </div>

        <div className="platform-grid">
          {PILLARS.map((p) => (
            <div key={p.label} className="platform-cell">
              <div className="cell-label">{p.label}</div>
              <div className="cell-title">{p.title}</div>
              <p className="cell-body">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HEMP PRINTING RESEARCH ── */}
      <section className="sec" style={{ background: '#F7F5F2', borderTop: '0.5px solid #E0DDD8' }}>
        <SectionDivider label="Hemp printing research" />
        <h2 className="sh" style={{ maxWidth: 660, marginBottom: 16 }}>Hemp remains central to Spirea’s materials direction.</h2>
        <p className="sbody" style={{ maxWidth: 640, marginBottom: 36 }}>
          Spirea is developing hemp-based printing materials with UBC. The long-term materials direction and the material for the first V1 demonstration are separate questions, and each will be decided on evidence.
        </p>
        <div className="two-col">
          {HEMP_CARDS.map((c) => (
            <div key={c.label} className={c.hemp ? 'mat-card hemp' : 'mat-card'}>
              <div className="cell-label">{c.label}</div>
              <div className="cell-title">{c.title}</div>
              <p className="cell-body">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="note-line">Wall configuration and other V1 details will be confirmed through engineering review.</p>
      </section>

      {/* ── CURRENT DEVELOPMENT — parallel workstreams, not stages ── */}
      <section className="sec dev-bg">
        <SectionDivider label="Current development" />
        <div className="two-col-wide two-col-even">
          <h2 className="sh">Work is under way on several fronts at once.</h2>
          <p className="sbody">
            Equipment, materials and engineering are progressing in parallel. The immediate priority is the simplest practicable Prototype V1 system that can support an Alternative Solution acceptance pathway in British Columbia.
          </p>
        </div>
        <div className="dev-grid">
          {DEV_CELLS.map((cell) => (
            <div key={cell.name} className="dev-cell">
              <div className="dev-tag">{cell.tag}</div>
              <div className="dev-name">{cell.name}</div>
              <p className="dev-body">{cell.body}</p>
              <div className="dev-status">
                <StatusDot variant={cell.dot} size={5} />
                <span className="dev-status-text">{cell.status}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="dev-row">
          {/* Guan Li equipment photograph — crop excludes the supplier's specification panel */}
          <figure className="dev-photo">
            <ArcImage
              src={printerPhoto}
              width={1040}
              height={820}
              alt="Blue and white articulated Small Spider 3D concrete printer on tracks against a white background"
            />
            <figcaption>Construction printer from Spirea’s equipment manufacturer</figcaption>
          </figure>
          <div className="dev-prio">
            <b style={{ fontWeight: '550' }}>Immediate priority</b>
            Develop the simplest practicable system for a BC Alternative Solution pathway. Initial material selection follows readiness and engineering evidence; system validation and building approval remain pending.
          </div>
        </div>
      </section>

      {/* ── NEAR-TERM APPLICATIONS + PILOT INVITATION ── */}
      <section className="sec" style={{ background: '#F0EDE8', borderTop: '0.5px solid #E0DDD8' }}>
        <SectionDivider label="Near-term applications" />
        <div className="two-col-wide two-col-even" style={{ marginBottom: 36 }}>
          <h2 className="sh">Architectural and landscape features, starting with a focused pilot.</h2>
          <p className="sbody">
            Digital fabrication may offer design freedom for curved, textured and bespoke elements. One landscape or architectural feature would let the teams assess design quality, fabrication feasibility and installed cost against a conventional alternative. No cost savings or performance benefits are assumed before evaluation.
          </p>
        </div>

        {/* Completed Guan Li project — fabrication reference only */}
        <figure className="photo-row">
          <ArcImage
            src={aerialPhoto}
            width={1172}
            height={840}
            alt="Aerial photograph of a landscaped play area with curved paths, orange surfacing and pale sculptural forms"
          />
          <figcaption>
            <b style={{ fontWeight: '550' }}>Fabrication reference</b>
            Completed project by Spirea’s equipment manufacturer, shown as a fabrication reference only. It is not a Spirea project, does not use hemp materials and carries no Canadian approval. Photograph supplied by the manufacturer.
          </figcaption>
        </figure>

        <div className="apps-preview-grid">
          {NEAR_TERM.map((a) => (
            <div key={a.num} className="app-preview-cell">
              <div className="ap-num">{a.num}</div>
              <div className="ap-title">{a.title}</div>
              <p className="ap-body">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="pilot-box">
          <div className="cell-label">A focused pilot</div>
          <div className="cell-title" style={{ fontSize: 24 }}>Start with one feature.</div>
          <div className="pilot-steps">
            {PILOT_STEPS.map((s) => (
              <div key={s.title} className="pilot-step">
                <b style={{ fontWeight: '550' }}>{s.title}</b>
                <span>{s.body}</span>
              </div>
            ))}
          </div>
          <p className="note-line" style={{ margin: '0 0 20px' }}>
            Julia Liu · <a href="mailto:julia@spireaplatform.ca">julia@spireaplatform.ca</a> · <a href="https://spireaplatform.ca">spireaplatform.ca</a>
          </p>
          <BtnPrimary to="/contact">Discuss a pilot →</BtnPrimary>
        </div>
      </section>

      {/* ── LONGER-TERM APPLICATIONS ── */}
      <section className="sec apps-preview-bg">
        <SectionDivider label="Longer-term applications" />
        <div className="two-col-wide two-col-even" style={{ marginBottom: 36 }}>
          <h2 className="sh">Where the platform may be deployed, in future.</h2>
          <p className="sbody">These are future directions. Each would require suitable partners, Prototype V1 validation and relevant approvals.</p>
        </div>
        <div className="apps-preview-grid">
          {LONG_TERM.map((a) => (
            <div key={a.num} className="app-preview-cell">
              <div className="ap-num">{a.num}</div>
              <div className="ap-title">{a.title}</div>
              <p className="ap-body">{a.body}</p>
            </div>
          ))}
        </div>
        <p className="note-line">
          <b style={{ fontFamily: 'var(--serif)', fontWeight: 550, fontSize: 18, color: '#1A1A18' }}>Intended business model:</b> licensing validated construction systems, supported by partner training and quality assurance.
        </p>
      </section>

      {/* ── CONTACT BAND ── */}
      <div className="contact-band">
        <div>
          <div className="cb-label">Collaboration &amp; development</div>
          <div className="cb-h">
            Spirea Platform welcomes collaboration, research and validation discussions, and would be glad to discuss a focused architectural or landscape pilot.
          </div>
          <p className="cb-b">
            Building relationships with research institutions, engineering partners, and organisations aligned with long-term development and validation.
          </p>
        </div>
        <BtnPrimary to="/contact" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>Contact Spirea →</BtnPrimary>
      </div>

      <Footer />
    </>
  );
}
