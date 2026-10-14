/**
 * Strategic Applications (handoff v5)
 *
 * Limestone page. Three future deployment domains with arc-corner schematic panels.
 * Even-numbered domain sections switch to chalk via CSS (.domain:nth-child(even)).
 * All applications are contingent on Prototype V1 validation — keep that language.
 * No insulation, performance or schedule claims beyond the approved wording.
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { SectionDivider } from '../components/UI';
import { D1ResilienceMap, D2DeploymentGrid, D3RemoteMap } from '../components/diagrams/Diagrams';

const DOMAINS = [
  {
    num: 'Domain 01',
    title: 'Resilient Infrastructure Systems',
    sub: 'Performance across conditions',
    body: [
      'Buildings in cold, humid and seismic regions must perform reliably over many years. Established practice meets these demands well on many projects. Spirea is exploring whether choosing materials, fabrication method and assembly together could add further options.',
      'Any performance benefit would need to be demonstrated through testing, engineering review and the relevant approvals.',
    ],
    cond: [
      ['Climate range', 'Extreme cold to high humidity'],
      ['Performance',   'Thermal, structural, durability'],
      ['Application',   'Housing, institutional, infrastructure'],
      ['Stage',         'Future direction: needs partners, validation and approvals'],
    ],
    bg: 'var(--dv)',
    Diagram: D1ResilienceMap,
  },
  {
    num: 'Domain 02',
    title: 'Rapid Deployment Frameworks',
    sub: 'Time-to-occupancy as a system property',
    body: [
      'Construction schedules depend on trade sequencing and site logistics. Spirea is exploring whether modular, factory-based production and assembly could reduce some site-level dependencies where speed matters.',
      'Any schedule benefit is an objective to evaluate, not an established result.',
    ],
    cond: [
      ['Application', 'Emergency housing, rapid-response infrastructure'],
      ['Key feature', 'Reduced on-site trade dependency'],
      ['Priority',    'Time-to-occupancy, repeatability'],
      ['Stage',       'Future direction: needs partners, validation and approvals'],
    ],
    bg: '#CBCAC4',
    Diagram: D2DeploymentGrid,
  },
  {
    num: 'Domain 03',
    title: 'Remote & Distributed Development',
    sub: 'Infrastructure where supply chains end',
    body: [
      'Remote communities, northern settlements and strategic locations often face long supply chains and limited site labour. Housing with interested Indigenous communities and infrastructure for remote or defence-related settings are future directions Spirea intends to explore with suitable partners.',
      'Factory-produced modular components with reduced on-site labour may suit these conditions, subject to demonstrated performance and application-specific approvals.',
    ],
    cond: [
      ['Geography',   'Northern Canada, remote communities'],
      ['Application', 'Housing, community, strategic facilities'],
      ['Key feature', 'Factory production, reduced site labour'],
      ['Stage',       'Future direction: needs partners, validation and approvals'],
    ],
    bg: '#D0CEC8',
    Diagram: D3RemoteMap,
  },
];

export default function StrategicApplications() {
  return (
    <>
      <Nav bg="#F0EDE8" />

      <div className="apps-page">
        <div className="apps-hero">
          <SectionDivider label="Strategic applications" />
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: '700', fontSize: 'clamp(28px,4vw,48px)', color: 'var(--di)', lineHeight: 1.1, letterSpacing: '-.015em', maxWidth: 580, marginBottom: 16 }}>
            Where Spirea may be deployed.
          </h1>
          <p className="sbody" style={{ maxWidth: 480, marginBottom: 0 }}>
            Spirea is exploring future deployment contexts where an integrated approach to materials, fabrication and assembly may offer advantages.
          </p>
          <div className="apps-note">
            Future directions, not current capability. Each would require suitable partners, Prototype V1 validation and relevant approvals.
          </div>
        </div>

        {DOMAINS.map(({ num, title, sub, body, cond, bg, Diagram }) => (
          <div key={num} className="domain">
            <div>
              <div className="domain-num">{num}</div>
              <h2 className="domain-title">{title}</h2>
              <div className="domain-sub">{sub}</div>
              {body.map((t) => <p key={t} className="domain-body">{t}</p>)}
              <div className="domain-cond">
                {cond.map(([lbl, val]) => (
                  <div key={lbl} className="dc-item">
                    <div className="dc-lbl">{lbl}</div>
                    <div className="dc-val">{val}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Illustrative schematic panel — arc corner per brand document */}
            <div className="img-arc" style={{ background: bg }}>
              <Diagram />
            </div>
          </div>
        ))}

        <div className="apps-closing">
          <SectionDivider label="Platform vision" />
          <h2 className="sh rev" style={{ maxWidth: 580, marginBottom: 14 }}>
            A longer-term direction for conditions where an integrated approach may help.
          </h2>
          <p className="sbody" style={{ maxWidth: 480 }}>
            Each direction would require suitable partners, validation and relevant approvals. Spirea Platform welcomes discussions with organisations working in these domains, beginning with a focused pilot.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
