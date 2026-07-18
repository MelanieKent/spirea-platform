/**
 * PrototypeV1 — Spirea Platform
 *
 * Background: white (#ffffff) — evidence register
 * This page is the approved design benchmark for the entire site.
 * All other pages should feel system-consistent with this one.
 *
 * Structure:
 *   - Document header (eyebrow + title + meta)
 *   - Hero statement (approved language)
 *   - Stage summary strip (4 cells)
 *   - Main 2-column: left (process map + schedule + pillars) | right (sidebar)
 *
 * IP protection: architecture, system configuration, and material details
 * are NOT disclosed. Only programme methodology and stage status are shown.
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProcessMapSVG from '../components/diagrams/ProcessMapSVG';
import { StatusDot } from '../components/UI';

// ── STAGES DATA ────────────────────────────────────────────────────────────
// Update status field as programme progresses:
//   'done' | 'active' | 'underway' | 'planned' | 'future'
const STAGES = [
  { id: '01', label: 'Stage 01',              name: 'Program Foundation',                 status: 'done',     detail: 'Completed — governance model and Master Plan approved' },
  { id: '02', label: 'Stage 02 — Active',     name: 'Lean Lab Setup',                     status: 'active',   detail: 'Active — laboratory operational, print cycles underway' },
  { id: '03', label: 'Stage 03 — Underway',   name: 'Equipment Manufacturing',            status: 'underway', detail: 'Underway — Guan Li Spider procurement and commissioning' },
  { id: '04', label: 'Stage 04',              name: 'Prototype Development',              status: 'planned',  detail: 'Planned' },
  { id: '05', label: 'Stage 05',              name: 'Laboratory Validation',              status: 'planned',  detail: 'Planned' },
  { id: '06', label: 'Stage 06',              name: 'Alternative Solution',               status: 'planned',  detail: 'Planned' },
  { id: '07', label: 'Stage 07',              name: 'Demonstration Project',              status: 'planned',  detail: 'Planned' },
  { id: '08', label: 'Stage 08 — Future Target', name: 'Commercial Launch',               status: 'future',   detail: 'Future target' },
];

const STATUS_ITEMS = [
  { label: 'Laboratory establishment', variant: 'teal'         },
  { label: 'Equipment procurement',    variant: 'amber'        },
  { label: 'Validation planning',      variant: 'amber'        },
  { label: 'Research partnerships',    variant: 'teal'         },
  { label: 'Prototype V1 printing',    variant: 'grey'         },
  { label: 'Engineering validation',   variant: 'grey'         },
];

const PILLARS = [
  { sym: 'L', name: 'Laboratory\nEstablishment', active: true  },
  { sym: 'V', name: 'Validation\nPreparation',   active: true  },
  { sym: 'P', name: 'Prototype\nDevelopment',    active: false },
  { sym: 'M', name: 'Material\nScience',         active: false },
  { sym: 'E', name: 'Engineering\nAnalysis',     active: false },
  { sym: 'R', name: 'Regulatory\nReadiness',     active: false },
];

const PRINCIPLES = [
  'Foundation before fabrication. Laboratory infrastructure is established before prototype development begins.',
  'Validation-driven from the outset. The programme supports future independent engineering review.',
  'Honest stage representation. No claims are made beyond what the programme has achieved.',
  'IP protected throughout. Development details remain confidential pending patent preparation.',
];

function statusDetailColor(status) {
  return {
    done:     '#2C2C2A',
    active:   '#1D9E75',
    underway: '#BA7517',
    planned:  '#B0ADA8',
    future:   '#C8C4B8',
  }[status] ?? '#B0ADA8';
}

// ── COMPONENT ──────────────────────────────────────────────────────────────
export default function PrototypeV1() {
  return (
    <>
      <style>{`@keyframes sp{0%,100%{opacity:1}50%{opacity:.35}}.sp-pulse{animation:sp 2.4s ease-in-out infinite}`}</style>
      <Nav bg="#ffffff" />

      <div style={{ background: '#fff', padding: 40 }}>
        <div style={{ background: '#fff', maxWidth: 900, margin: '0 auto', border: '0.5px solid #E0DDD8', borderRadius: 3, padding: '40px 36px 60px', position: 'relative', overflow: 'hidden' }}>

          {/* Engineering grid background */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: [
                'repeating-linear-gradient(0deg,transparent,transparent 31px,rgba(180,176,168,.09) 31px,rgba(180,176,168,.09) 32px)',
                'repeating-linear-gradient(90deg,transparent,transparent 31px,rgba(180,176,168,.09) 31px,rgba(180,176,168,.09) 32px)',
              ].join(','),
            }}
          />

          {/* Document header */}
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 18, borderBottom: '0.5px solid #E0DDD8', marginBottom: 28, position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 5 }}>Prototype V1 — Development Program</div>
              <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: '1.25rem', color: '#1A1A18' }}>Construction System Development</div>
            </div>
            <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, color: '#9A9A98', textAlign: 'right', lineHeight: 2.1 }}>
              <div>Program stage &nbsp;<span style={{ color: '#1D9E75' }}>02 / Lean Lab Setup</span></div>
              <div>Status &nbsp;<span style={{ color: '#BA7517' }}>Foundation in progress</span></div>
              <div>Validation &nbsp;<span>Preparation underway</span></div>
            </div>
          </header>

          {/* Hero statement */}
          <div style={{ background: '#fff', border: '0.5px solid #E0DDD8', borderLeft: '2px solid #1D9E75', padding: '22px 26px', marginBottom: 26, position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 9 }}>Development & Validation Program</div>
            <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: '1.01rem', color: '#1A1A18', lineHeight: 1.65, maxWidth: 560 }}>
              Prototype V1 is being developed through a staged engineering and validation program designed to support future independent review and regulatory readiness.
            </div>
            <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8.5, color: '#6A6A68', lineHeight: 1.75, marginTop: 11, maxWidth: 510 }}>
              Spirea is building the physical and procedural foundation required for a disciplined validation process. Prototype V1 architecture, system configuration, and material details are intentionally withheld during ongoing development.
            </div>
          </div>

          {/* Stage strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: '0.5px solid #E0DDD8', background: '#E0DDD8', gap: 0.5, marginBottom: 26, position: 'relative', zIndex: 1 }} role="list">
            {[
              { label: 'Stage 01',           name: 'Research\nFoundation',      letter: 'R', variant: 'done'     },
              { label: 'Stage 02 — Active',   name: 'Laboratory\nEstablishment', letter: 'L', variant: 'active'   },
              { label: 'Stage 03 — Underway', name: 'Equipment\nProcurement',    letter: 'E', variant: 'underway' },
              { label: 'Stages 04 – 07',      name: 'Development\n& Validation', letter: 'D', variant: 'planned'  },
            ].map((cell) => (
              <div
                key={cell.letter}
                role="listitem"
                aria-current={cell.variant === 'active' ? 'step' : undefined}
                style={{ background: cell.variant === 'active' ? '#FDFCF9' : '#F7F5F2', padding: '13px 12px', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4, color: cell.variant === 'active' ? '#1D9E75' : cell.variant === 'underway' ? '#BA7517' : '#9A9A98' }}>{cell.label}</div>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 10, color: cell.variant === 'active' ? '#1D9E75' : cell.variant === 'underway' ? '#6A6A68' : '#1A1A18', lineHeight: 1.35, whiteSpace: 'pre-line' }}>{cell.name}</div>
                <span aria-hidden="true" style={{ fontFamily: '"DM Serif Display",serif', fontSize: 27, fontWeight: 200, position: 'absolute', bottom: 2, right: 7, color: cell.variant === 'active' ? '#B8E8D8' : '#E0DDD8', userSelect: 'none' }}>{cell.letter}</span>
              </div>
            ))}
          </div>

          {/* Main 2-column */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 196px', gap: 24, position: 'relative', zIndex: 1 }}>
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

              {/* Process map */}
              <div style={{ background: '#fff', border: '0.5px solid #E0DDD8', borderRadius: 3, padding: '16px 14px' }}>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 12 }}>Development program sequence</div>
                <ProcessMapSVG />
              </div>

              {/* Programme schedule */}
              <div style={{ background: '#fff', border: '0.5px solid #E0DDD8', borderRadius: 3, padding: '16px 14px' }}>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 12 }}>Programme schedule</div>
                <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {STAGES.map((stage, i) => (
                    <li key={stage.id} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: 9, padding: '8px 0', borderBottom: i < STAGES.length - 1 ? '0.5px solid #F0EDE8' : 'none' }}>
                      <span
                        className={stage.status === 'active' ? 'sp-pulse' : ''}
                        style={{
                          width: 13, height: 13, borderRadius: '50%', marginTop: 1, flexShrink: 0, display: 'inline-block',
                          background: stage.status === 'done' ? '#2C2C2A' : stage.status === 'active' ? '#1D9E75' : stage.status === 'underway' ? '#fff' : '#F0EDE8',
                          border: stage.status === 'underway' ? '1.5px solid #1D9E75' : stage.status === 'planned' ? '0.5px solid #E0DDD8' : stage.status === 'future' ? '0.5px dashed #E0DDD8' : 'none',
                        }}
                        aria-hidden="true"
                      />
                      <div>
                        <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 6.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B0ADA8', marginBottom: 1 }}>{stage.label}</div>
                        <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 9, color: '#1A1A18', lineHeight: 1.4, marginBottom: 1 }}>{stage.name}</div>
                        <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 6.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: statusDetailColor(stage.status) }}>{stage.detail}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Development pillars */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
                {PILLARS.map((p) => (
                  <div key={p.sym} style={{ border: `0.5px solid ${p.active ? '#1D9E75' : '#E0DDD8'}`, borderRadius: 3, padding: '10px 8px', background: '#fff', textAlign: 'center' }}>
                    <div style={{ fontFamily: '"DM Serif Display",serif', fontSize: 18, fontWeight: 200, color: p.active ? '#1D9E75' : '#E0DDD8', marginBottom: 4, lineHeight: 1 }} aria-hidden="true">{p.sym}</div>
                    <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9A9A98', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{p.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

              {/* Status */}
              <div style={{ background: '#fff', border: '0.5px solid #E0DDD8', borderRadius: 3, padding: 13 }}>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 10 }}>Current status</div>
                {STATUS_ITEMS.map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
                    <span style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, color: '#6A6A68' }}>{item.label}</span>
                    <StatusDot variant={item.variant} size={7} />
                  </div>
                ))}
                <div style={{ marginTop: 10, paddingTop: 9, borderTop: '0.5px solid #F0EDE8', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[['#1D9E75', 'Active / In progress'], ['#BA7517', 'Underway / Planning'], ['#E0DDD8', 'Not yet started']].map(([color, label]) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: color, display: 'inline-block', border: color === '#E0DDD8' ? '0.5px solid #C8C4B8' : 'none' }} aria-hidden="true" />
                      <span style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, color: '#B0ADA8', letterSpacing: '0.07em' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase bar */}
              <div style={{ background: '#fff', border: '0.5px solid #E0DDD8', borderRadius: 3, padding: 13 }}>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 10 }}>Program phase</div>
                <div style={{ display: 'flex', gap: 4, marginBottom: 8 }} role="progressbar" aria-valuenow={2} aria-valuemin={1} aria-valuemax={8} aria-label="Stage 2 of 8">
                  {['#2C2C2A', '#1D9E75', null, null, null, null, null, null].map((fill, i) => (
                    <div key={i} style={{ flex: 1, height: 4, borderRadius: 1, background: fill ?? '#EEEBE6', border: fill ? 'none' : '0.5px solid #E0DDD8' }} />
                  ))}
                </div>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 8 }}>Stage 02 of 08</div>
                <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, color: '#6A6A68', lineHeight: 1.7 }}>Validation activities are planned for a future stage.</p>
              </div>

              {/* Principles */}
              <div style={{ background: '#fff', border: '0.5px solid #E0DDD8', borderRadius: 3, padding: 13 }}>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 10 }}>Development principles</div>
                {PRINCIPLES.map((text, i) => (
                  <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: i < PRINCIPLES.length - 1 ? 7 : 0 }}>
                    <span style={{ width: 1, background: '#1D9E75', flexShrink: 0, marginTop: 2, alignSelf: 'stretch' }} aria-hidden="true" />
                    <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, color: '#6A6A68', lineHeight: 1.6, margin: 0 }}>{text}</p>
                  </div>
                ))}
              </div>

              {/* IP note */}
              <div style={{ background: '#F7F5F2', border: '0.5px solid #E0DDD8', borderLeft: '2px solid #1D9E75', borderRadius: '0 3px 3px 0', padding: '11px 13px' }}>
                <div style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 7, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#9A9A98', marginBottom: 4 }}>IP Confidentiality</div>
                <p style={{ fontFamily: '"DM Sans",sans-serif', fontWeight: 300, fontSize: 8, color: '#6A6A68', lineHeight: 1.65, margin: 0 }}>
                  Prototype V1 architecture, system configuration, and material details are intentionally withheld during ongoing development.
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
