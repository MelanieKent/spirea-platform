/**
 * Prototype V1 — Development Program (handoff v5)
 *
 * White page with a faint grid canvas. Workstreams progress in parallel (no staged
 * Stage 0–5 model). Wording must stay as approved: configuration and material details
 * are intentionally withheld; validation and building approval are pending.
 *
 * Status colours: teal = under way, amber = in preparation / evaluation, grey = pending.
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const META = [
  { label: 'Focus',                         value: 'Simplest practicable V1 system', color: 'var(--ink)' },
  { label: 'Pathway',                       value: 'BC Alternative Solution — evaluation under way', color: 'var(--teal-d)' },
  { label: 'Validation and approval',       value: 'Pending' },
];

// tone: 'a' = in preparation (amber), 't' = under way (teal)
const STAGE_STRIP = [
  { tone: 'a', label: 'In preparation', name: 'Equipment shipment and commissioning', inactive: false },
  { tone: 't', label: 'Under way',      name: 'Hemp printing materials with UBC',       inactive: true },
  { tone: 't', label: 'Under way',      name: 'Prototype V1 and Cabin 1 engineering',   inactive: true },
  { tone: 't', label: 'Under way',      name: 'Alternative Solution pathway evaluation', inactive: true },
];

// node: pn-u (in preparation) | pn-a (under way) | pn-p (pending, dependent) | pn-f (pending)
// det:  pd-u | pd-a | pd-p | pd-f
const WORKSTREAMS = [
  { node: 'pn-u', det: 'pd-u', name: 'Equipment',                    detail: 'Manufactured; preparing for shipment and commissioning' },
  { node: 'pn-a', det: 'pd-a', name: 'Hemp printing materials',      detail: 'Under development with UBC' },
  { node: 'pn-u', det: 'pd-u', name: 'UBC coyote project',           detail: 'Proposed 3D-printed pedestal for a steel coyote sculpture' },
  { node: 'pn-a', det: 'pd-a', name: 'Prototype V1 and Cabin 1',     detail: 'Design and engineering under way' },
  { node: 'pn-a', det: 'pd-a', name: 'Alternative Solution pathway', detail: 'Evaluation under way' },
  { node: 'pn-p', det: 'pd-p', name: 'Testing and system validation', detail: 'Pending commissioning and engineering' },
  { node: 'pn-f', det: 'pd-f', name: 'Building approval',            detail: 'Pending' },
];

// dot: sdt teal | sda amber | sdg grey
const STATUS_ROWS = [
  { label: 'Equipment manufactured',       dot: 'sdt' },
  { label: 'Hemp material research',       dot: 'sdt' },
  { label: 'V1 engineering',               dot: 'sdt' },
  { label: 'Commissioning',                dot: 'sda' },
  { label: 'Alternative Solution pathway', dot: 'sda' },
  { label: 'System validation',            dot: 'sdg' },
  { label: 'Building approval',            dot: 'sdg' },
];

const LEGEND = [
  { style: { background: 'var(--teal)' },                                   label: 'Under way' },
  { style: { background: '#BA7517' },                                       label: 'In preparation / evaluation' },
  { style: { background: 'var(--dv)', border: '0.5px solid #C8C4B8' },      label: 'Pending' },
];

const PRINCIPLES = [
  { lead: 'Parallel progress.', text: 'Design, materials and equipment work proceed together where practicable.' },
  { lead: 'Evidence-led.',      text: 'Choices follow engineering review, testing and regulatory requirements.' },
  { lead: 'Honest status.',     text: 'No claims are made beyond what has been achieved.' },
  { lead: 'Technical details remain confidential during development.',      text: '' },
];

export default function PrototypeV1() {
  return (
    <>
      <Nav bg="#fff" />

      <div className="v1-page">
        <div className="v1-canvas">
          <div className="v1-grid-bg" aria-hidden="true" />

          <header className="v1-header">
            <div>
              <div className="v1-eyebrow">Prototype V1 — Development Program</div>
              <h1 className="v1-title">Construction System Development</h1>
            </div>
            <div className="v1-meta">
              {META.map((m) => (
                <div key={m.label}>
                  {m.label} &nbsp;<span style={m.color ? { color: m.color } : undefined}>{m.value}</span>
                </div>
              ))}
            </div>
          </header>

          <div className="v1-hero-stmt">
            <div className="v1-hs-ey">Immediate priority</div>
            <div className="v1-hs-body">
              Develop the simplest practicable Prototype V1 system that can support an Alternative Solution acceptance pathway in British Columbia.
            </div>
            <div className="v1-hs-sub">
              Prototype V1 is Spirea’s first integrated wall system. Cabin 1 is the proposed demonstration building for engineering validation and approval. Technical details remain confidential during development.
            </div>
          </div>

          <div className="v1-stage-strip" role="list">
            {STAGE_STRIP.map((s) => (
              <div key={s.name} className={s.inactive ? 'v1-sc ia' : 'v1-sc'} role="listitem">
                <div className={`v1-sc-lbl ${s.tone}`}>{s.label}</div>
                <div className={s.tone === 'a' && !s.inactive ? 'v1-sc-name a' : 'v1-sc-name'}>{s.name}</div>
              </div>
            ))}
          </div>

          <div className="v1-main">
            <div className="v1-left">
              <div className="vc">
                <div className="vc-lbl">Workstreams — progressing in parallel</div>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {WORKSTREAMS.map((w, i) => (
                    <li
                      key={w.name}
                      className="prog-row"
                      style={i === WORKSTREAMS.length - 1 ? { borderBottom: 'none' } : undefined}
                    >
                      <div className={`pnode ${w.node}`} />
                      <div>
                        <div className="ps-name">{w.name}</div>
                        <div className={`ps-det ${w.det}`}>{w.detail}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="vc">
                <div className="vc-lbl">Initial material selection</div>
                <p className="ip-text" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  Manufacturer-supplied premix adapted for BC conditions, or the hemp-based printing material, depending on readiness and engineering evidence.
                </p>
              </div>
            </div>

            <div className="v1-right">
              <div className="sbk">
                <div className="sbk-title">Current status</div>
                {STATUS_ROWS.map((r) => (
                  <div key={r.label} className="st-row">
                    <span className="st-lbl">{r.label}</span>
                    <span className={`sdot ${r.dot}`} />
                  </div>
                ))}
                <div className="sleg">
                  {LEGEND.map((l) => (
                    <div key={l.label} className="sleg-row">
                      <span className="sleg-dot" style={l.style} />
                      <span className="sleg-lbl">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sbk">
                <div className="sbk-title">Development principles</div>
                {PRINCIPLES.map((p) => (
                  <div key={p.lead} className="prin">
                    <div className="prin-rule" />
                    <p className="prin-text">{p.lead} {p.text}</p>
                  </div>
                ))}
              </div>

              <div className="ip-note">
                <div className="ip-lbl">IP confidentiality</div>
                <p className="ip-text">
                  Prototype V1 architecture, system configuration and material details are intentionally withheld during ongoing development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
