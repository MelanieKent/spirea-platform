/**
 * Diagram Components — Spirea Platform
 *
 * All diagrams use exact path data and geometry from the approved production file.
 * Do not modify coordinates, fills, or stroke values.
 *
 * Exports:
 *   PlatformFrameworkDiagram — Homepage platform schematic (four engines)
 *   ProcessMapSVG            — V1 8-stage development program map
 *   D1ResilienceMap          — Domain 01: Resilient Infrastructure
 *   D2DeploymentGrid         — Domain 02: Rapid Deployment
 *   D3RemoteMap              — Domain 03: Remote & Distributed
 *
 * Each is also available as standalone SVG/PNG in src/assets/diagrams/
 */

// ─────────────────────────────────────────────────────────────────────────────
// PLATFORM FRAMEWORK DIAGRAM
// Architectural schematic: Spirea Platform running four permanent engines —
// Technology Development, Validation, Commercialization, Knowledge — with the
// Technology Development engine producing the successive V1 / V2 / V3 prototypes.
// Used in Homepage Platform Framework section
// ─────────────────────────────────────────────────────────────────────────────
export function PlatformFrameworkDiagram() {
  const engines = [
    { x: 50,  w: 172, label: 'TECHNOLOGY', label2: 'DEVELOPMENT', accent: true  },
    { x: 226, w: 172, label: 'VALIDATION', label2: '',            accent: false },
    { x: 402, w: 172, label: 'COMMERCIALIZATION', label2: '',     accent: false },
    { x: 578, w: 172, label: 'KNOWLEDGE', label2: '',              accent: false },
  ];
  const protos = [
    { cx: 90,  label: 'V1', state: 'active'  },
    { cx: 150, label: 'V2', state: 'outline' },
    { cx: 210, label: 'V3', state: 'dashed'  },
  ];
  return (
    <svg
      width="100%"
      viewBox="0 0 800 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Platform framework schematic showing Spirea Platform running four permanent engines: Technology Development, Validation, Commercialization, and Knowledge"
    >
      <title>Spirea Platform Framework — Four Engines</title>
      <desc>Spirea Platform organized as four permanent engines — Technology Development, Validation, Commercialization, and Knowledge — with the Technology Development engine producing the successive Prototype V1, V2, and V3 outputs.</desc>
      <defs>
        <pattern id="grid-p" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E8E5DF" strokeWidth="0.35"/>
        </pattern>
        <marker id="arr-p" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8" fill="none" stroke="#1D9E75" strokeWidth="1.2"/>
        </marker>
      </defs>

      <rect width="800" height="300" fill="#F7F5F2"/>
      <rect width="800" height="300" fill="url(#grid-p)"/>

      {/* Spirea Platform band */}
      <rect x="50" y="38" width="700" height="30" fill="#1A1A18" rx="1"/>
      <text x="400" y="57" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fill="#F0EDE8" letterSpacing="3" fontWeight="300">SPIREA PLATFORM</text>

      {/* Arrow down */}
      <line x1="400" y1="68" x2="400" y2="85" stroke="#1D9E75" strokeWidth="0.8" markerEnd="url(#arr-p)"/>

      {/* Four engine bands */}
      {engines.map((e) => (
        <g key={e.label}>
          <rect x={e.x} y="92" width={e.w} height="58" fill="#fff" stroke="#D8D5CF" strokeWidth="0.5" rx="1"/>
          {e.accent && <rect x={e.x} y="92" width="3" height="58" fill="#1D9E75"/>}
          <text x={e.x + e.w/2} y={e.label2 ? 118 : 124} textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#1A1A18" letterSpacing="1.5" fontWeight="400">{e.label}</text>
          {e.label2 && <text x={e.x + e.w/2} y="130" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="#1A1A18" letterSpacing="1.5" fontWeight="400">{e.label2}</text>}
        </g>
      ))}

      {/* Connector from Technology Development engine down to prototype outputs */}
      <line x1="136" y1="150" x2="136" y2="172" stroke="#1D9E75" strokeWidth="0.8" markerEnd="url(#arr-p)"/>
      <text x="146" y="167" fontFamily="DM Sans,sans-serif" fontSize="6" fill="#1D9E75" fontStyle="italic" fontWeight="300">Technology Development engine</text>

      {/* Prototype output row */}
      <rect x="55" y="182" width="290" height="76" fill="none" stroke="#D8D5CF" strokeWidth="0.5" strokeDasharray="3 2" rx="1"/>
      <text x="70" y="198" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#9A9A98" letterSpacing="2" fontWeight="300">SUCCESSIVE PROTOTYPES</text>
      {protos.map((p, i) => (
        <g key={p.label}>
          {i > 0 && <line x1={protos[i-1].cx + 16} y1="228" x2={p.cx - 16} y2="228" stroke="#B0ADA8" strokeWidth="0.6" strokeDasharray={p.state === 'dashed' ? '3 2' : undefined}/>}
          <circle
            cx={p.cx} cy="228" r="16"
            fill={p.state === 'active' ? '#1D9E75' : '#fff'}
            stroke={p.state === 'active' ? 'none' : '#1D9E75'}
            strokeWidth="0.9"
            strokeDasharray={p.state === 'dashed' ? '2 1.5' : undefined}
          />
          <text x={p.cx} y="232" textAnchor="middle" fontFamily="DM Serif Display,serif" fontSize="10" fill={p.state === 'active' ? '#fff' : '#1D9E75'}>{p.label}</text>
        </g>
      ))}
      <text x="200" y="252" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="6" fill="#9A9A98" letterSpacing="1" fontWeight="300">Validation, Commercialization, and Knowledge run continuously beneath every prototype</text>

      {/* Right-side note */}
      <rect x="375" y="182" width="375" height="76" fill="none" stroke="#D8D5CF" strokeWidth="0.5" rx="1"/>
      <text x="390" y="198" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#9A9A98" letterSpacing="2" fontWeight="300">WHY THIS MATTERS</text>
      <text x="390" y="216" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#6A6A68" fontWeight="300">Prototype V1 is the first output of a permanent platform,</text>
      <text x="390" y="230" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#6A6A68" fontWeight="300">not a one-off project. Validation, commercialization, and</text>
      <text x="390" y="244" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#6A6A68" fontWeight="300">knowledge do not reset — each prototype is faster and cheaper than the last.</text>

      {/* Title block */}
      <rect x="0" y="264" width="800" height="36" fill="#F0EDE8"/>
      <text x="20" y="280" fontFamily="DM Sans,sans-serif" fontSize="7"   fill="#9A9A98" letterSpacing="1.5" fontWeight="300">SPIREA PLATFORM</text>
      <text x="20" y="293" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#C8C4B8" letterSpacing="1"   fontWeight="300">Platform Framework — Four Engines Schematic</text>
      <text x="780" y="280" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#C8C4B8" letterSpacing="1" fontWeight="300">Not to scale</text>
      <text x="780" y="293" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#C8C4B8" letterSpacing="1" fontWeight="300">Stage 02 — Lean Lab Setup</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS MAP SVG
// 8-stage development program linear diagram — used in Prototype V1 page
// ─────────────────────────────────────────────────────────────────────────────
export function ProcessMapSVG() {
  const nodes = [
    { cx: 30,  l1: 'PROGRAM',     l2: 'FOUNDATION',    state: 'done'     },
    { cx: 106, l1: 'LEAN LAB',    l2: 'SETUP',          state: 'active'   },
    { cx: 182, l1: 'EQUIPMENT',   l2: 'MANUFACTURING',  state: 'underway' },
    { cx: 258, l1: 'PROTOTYPE',   l2: 'DEVELOPMENT',    state: 'planned'  },
    { cx: 334, l1: 'LAB',         l2: 'VALIDATION',      state: 'planned'  },
    { cx: 410, l1: 'ALT.',        l2: 'SOLUTION',        state: 'planned'  },
    { cx: 486, l1: 'DEMONSTR.',   l2: 'PROJECT',         state: 'planned'  },
    { cx: 562, l1: 'COMMERCIAL',  l2: 'LAUNCH',          state: 'future'   },
  ];
  const fillFor = (state) => ({
    done: '#2C2C2A',
    active: '#1D9E75',
    underway: '#FDFCF9',
    planned: '#F5F3EF',
    future: '#F5F3EF',
  }[state]);
  const textFor = (state) => ({
    done: '#D0CDCA',
    active: '#fff',
    underway: '#0F6E56',
    planned: '#9A9A98',
    future: '#C8C4B8',
  }[state]);
  return (
    <svg width="100%" height="110" viewBox="0 0 610 110" role="img">
      <title>8-stage development program — Stage 02 Lean Lab Setup is active</title>
      {/* Connectors */}
      {nodes.slice(0, -1).map((n, i) => {
        const next = nodes[i + 1];
        const stroke = i === 0 ? '#2C2C2A' : i === 1 ? '#1D9E75' : '#D8D5D0';
        const dashed = i > 1;
        return (
          <line
            key={n.cx}
            x1={n.cx + (n.state === 'active' ? 18 : 14)} y1="42"
            x2={next.cx - 14} y2="42"
            stroke={stroke} strokeWidth={dashed ? 0.6 : 0.8}
            strokeDasharray={dashed ? '3 2' : undefined}
          />
        );
      })}
      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.cx}>
          {n.state === 'active' && <circle cx={n.cx} cy="42" r="18" fill="none" stroke="#1D9E75" strokeWidth="0.6" opacity="0.3"/>}
          <circle
            cx={n.cx} cy="42" r="14"
            fill={fillFor(n.state)}
            stroke={n.state === 'underway' ? '#1D9E75' : n.state === 'planned' || n.state === 'future' ? '#D8D5D0' : 'none'}
            strokeWidth={n.state === 'underway' ? 0.9 : 0.6}
            strokeDasharray={n.state === 'future' ? '3 2' : undefined}
          />
          <text x={n.cx} y="39" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="4.6" fill={textFor(n.state)}>{n.l1}</text>
          <text x={n.cx} y="47.5" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="4.6" fill={textFor(n.state)}>{n.l2}</text>
        </g>
      ))}
      {/* Current stage marker */}
      <line x1="106" y1="58" x2="106" y2="68" stroke="#1D9E75" strokeWidth="0.5"/>
      <text x="106" y="78" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="5.5" fill="#1D9E75" letterSpacing="1.5">CURRENT STAGE</text>
      {/* Legend */}
      <circle cx="14"  cy="100" r="3.5" fill="#2C2C2A"/>
      <text x="22"  y="103" fontFamily="DM Sans,sans-serif" fontSize="5.5" fill="#9A9A98" letterSpacing="0.8">Completed</text>
      <circle cx="76"  cy="100" r="3.5" fill="#1D9E75"/>
      <text x="84"  y="103" fontFamily="DM Sans,sans-serif" fontSize="5.5" fill="#9A9A98" letterSpacing="0.8">Active</text>
      <circle cx="125" cy="100" r="3.5" fill="#FDFCF9" stroke="#1D9E75" strokeWidth="0.8"/>
      <text x="133" y="103" fontFamily="DM Sans,sans-serif" fontSize="5.5" fill="#9A9A98" letterSpacing="0.8">Underway</text>
      <circle cx="191" cy="100" r="3.5" fill="#F5F3EF" stroke="#D8D5D0" strokeWidth="0.6"/>
      <text x="199" y="103" fontFamily="DM Sans,sans-serif" fontSize="5.5" fill="#9A9A98" letterSpacing="0.8">Planned</text>
      <circle cx="252" cy="100" r="3.5" fill="#F5F3EF" stroke="#D8D5D0" strokeWidth="0.6" strokeDasharray="2 1"/>
      <text x="260" y="103" fontFamily="DM Sans,sans-serif" fontSize="5.5" fill="#9A9A98" letterSpacing="0.8">Future target</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// D1 RESILIENCE MAP
// Domain 01: Resilient Infrastructure Systems
// ─────────────────────────────────────────────────────────────────────────────
export function D1ResilienceMap() {
  return (
    <svg width="100%" viewBox="0 0 280 360" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Resilient infrastructure — site context and terrain">
      <title>Domain 01: Resilient Infrastructure Systems — Site context</title>
      <defs>
        <pattern id="t1" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C8C4B8" strokeWidth="0.3"/>
        </pattern>
      </defs>
      <rect width="280" height="360" fill="#CDCAC4"/>
      <rect width="280" height="360" fill="url(#t1)"/>
      <rect x="0" y="200" width="280" height="160" fill="#D4D1CB"/>
      <line x1="0" y1="200" x2="280" y2="200" stroke="#B8B4AE" strokeWidth="0.6"/>
      <path d="M 0 200 Q 70 160 140 175 Q 210 190 280 165" fill="none" stroke="#B0ADA8" strokeWidth="0.5" strokeDasharray="6 4"/>
      <path d="M 0 185 Q 60 150 120 160 Q 180 170 280 145" fill="none" stroke="#B0ADA8" strokeWidth="0.4" strokeDasharray="6 4"/>
      <rect x="40"  y="100" width="70" height="80" fill="none" stroke="#9A9A98" strokeWidth="0.7"/>
      <rect x="130" y="120" width="60" height="60" fill="none" stroke="#9A9A98" strokeWidth="0.7"/>
      <rect x="55"  y="215" width="90" height="55" fill="none" stroke="#9A9A98" strokeWidth="0.7" strokeDasharray="4 3"/>
      <line x1="140" y1="360" x2="105" y2="215" stroke="#B0ADA8" strokeWidth="1.5"/>
      <line x1="145" y1="360" x2="110" y2="215" stroke="#B0ADA8" strokeWidth="1.5"/>
      {/* Teal accent — structural indicator */}
      <rect x="40" y="100" width="2" height="80" fill="#1D9E75" opacity="0.55"/>
      {/* Scale bar */}
      <line x1="20" y1="336" x2="60" y2="336" stroke="#9A9A98" strokeWidth="0.5"/>
      <line x1="20" y1="333" x2="20" y2="339" stroke="#9A9A98" strokeWidth="0.5"/>
      <line x1="60" y1="333" x2="60" y2="339" stroke="#9A9A98" strokeWidth="0.5"/>
      {/* Title block */}
      <rect x="0" y="342" width="280" height="18" fill="#E0DDD8"/>
      <text x="10" y="353" fontFamily="DM Sans,sans-serif" fontSize="6" fill="#9A9A98" letterSpacing="1.2" fontWeight="300">RESILIENT INFRASTRUCTURE</text>
      <text x="270" y="353" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="6" fill="#C8C4B8" letterSpacing="0.8" fontWeight="300">Site context</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// D2 DEPLOYMENT GRID
// Domain 02: Rapid Deployment Frameworks
// ─────────────────────────────────────────────────────────────────────────────
export function D2DeploymentGrid() {
  return (
    <svg width="100%" viewBox="0 0 280 360" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Rapid deployment — modular assembly sequence">
      <title>Domain 02: Rapid Deployment Frameworks — Assembly sequence</title>
      <defs>
        <pattern id="t2" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#B8B4AE" strokeWidth="0.3"/>
        </pattern>
      </defs>
      <rect width="280" height="360" fill="#C5C2BC"/>
      <rect width="280" height="360" fill="url(#t2)"/>
      {/* Module grid rows */}
      {[50, 130].map(y => (
        [30, 85, 140, 195].map((x, ci) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={ci < 3 ? 50 : 55} height={70} fill="none" stroke="#9A9A98" strokeWidth="0.8" rx="1"/>
        ))
      ))}
      {/* Teal accent */}
      <rect x="30" y="50"  width="2" height="70" fill="#1D9E75" opacity="0.6"/>
      <rect x="30" y="130" width="2" height="70" fill="#1D9E75" opacity="0.6"/>
      {/* Dimension */}
      <line x1="30" y1="225" x2="80" y2="225" stroke="#9A9A98" strokeWidth="0.4"/>
      <line x1="30" y1="222" x2="30" y2="228" stroke="#9A9A98" strokeWidth="0.4"/>
      <line x1="80" y1="222" x2="80" y2="228" stroke="#9A9A98" strokeWidth="0.4"/>
      <text x="55" y="240" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#9A9A98" letterSpacing="1">Module</text>
      {/* Assembly arrows */}
      <line x1="60"  y1="280" x2="100" y2="260" stroke="#B0ADA8" strokeWidth="0.5"/>
      <line x1="110" y1="280" x2="145" y2="260" stroke="#B0ADA8" strokeWidth="0.5"/>
      <line x1="160" y1="280" x2="190" y2="260" stroke="#B0ADA8" strokeWidth="0.5"/>
      {/* Title block */}
      <rect x="0" y="342" width="280" height="18" fill="#E0DDD8"/>
      <text x="10" y="353" fontFamily="DM Sans,sans-serif" fontSize="6" fill="#9A9A98" letterSpacing="1.2" fontWeight="300">RAPID DEPLOYMENT</text>
      <text x="270" y="353" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="6" fill="#C8C4B8" letterSpacing="0.8" fontWeight="300">Assembly sequence</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// D3 REMOTE MAP
// Domain 03: Remote & Distributed Development
// ─────────────────────────────────────────────────────────────────────────────
export function D3RemoteMap() {
  return (
    <svg width="100%" viewBox="0 0 280 360" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Remote and distributed — northern landscape and community context">
      <title>Domain 03: Remote & Distributed Development — Site context</title>
      <defs>
        <pattern id="t3" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C0BDB7" strokeWidth="0.3"/>
        </pattern>
      </defs>
      <rect width="280" height="360" fill="#CCCAC3"/>
      <rect width="280" height="360" fill="url(#t3)"/>
      <rect x="0" y="240" width="280" height="120" fill="#C2C0BA"/>
      <line x1="0" y1="240" x2="280" y2="240" stroke="#ACA9A3" strokeWidth="0.7"/>
      <path d="M 0 240 Q 70 220 140 230 Q 200 240 280 218" fill="none" stroke="#A8A5A0" strokeWidth="0.5" strokeDasharray="8 5"/>
      <path d="M 0 200 Q 90 180 160 190 Q 220 200 280 175" fill="none" stroke="#A8A5A0" strokeWidth="0.4" strokeDasharray="8 5"/>
      <path d="M 0 160 Q 100 140 170 152 Q 230 165 280 138" fill="none" stroke="#ACA9A3" strokeWidth="0.4" strokeDasharray="8 5"/>
      {/* Settlement cluster */}
      <rect x="80"  y="215" width="18" height="14" fill="none" stroke="#9A9A98" strokeWidth="0.6"/>
      <rect x="104" y="218" width="14" height="11" fill="none" stroke="#9A9A98" strokeWidth="0.6"/>
      <rect x="124" y="215" width="18" height="14" fill="none" stroke="#9A9A98" strokeWidth="0.6"/>
      <rect x="148" y="218" width="14" height="11" fill="none" stroke="#9A9A98" strokeWidth="0.6"/>
      {/* Teal accent — primary building */}
      <rect x="80" y="215" width="2" height="14" fill="#1D9E75" opacity="0.55"/>
      {/* Supply route */}
      <line x1="140" y1="360" x2="115" y2="240" stroke="#ACA9A3" strokeWidth="1.2" strokeDasharray="6 4"/>
      {/* Supply gap annotation */}
      <line x1="20" y1="260" x2="20" y2="315" stroke="#9A9A98" strokeWidth="0.4"/>
      <line x1="17" y1="260" x2="23" y2="260" stroke="#9A9A98" strokeWidth="0.4"/>
      <line x1="17" y1="315" x2="23" y2="315" stroke="#9A9A98" strokeWidth="0.4"/>
      <text x="35" y="292" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="#9A9A98" letterSpacing="1">Supply gap</text>
      {/* Compass */}
      <circle cx="248" cy="48" r="12" fill="none" stroke="#ACA9A3" strokeWidth="0.5"/>
      <line x1="248" y1="38" x2="248" y2="36" stroke="#9A9A98" strokeWidth="0.6"/>
      <text x="248" y="33" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="5.5" fill="#9A9A98">N</text>
      {/* Title block */}
      <rect x="0" y="342" width="280" height="18" fill="#E0DDD8"/>
      <text x="10" y="353" fontFamily="DM Sans,sans-serif" fontSize="6" fill="#9A9A98" letterSpacing="1.2" fontWeight="300">REMOTE &amp; DISTRIBUTED</text>
      <text x="270" y="353" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="6" fill="#C8C4B8" letterSpacing="0.8" fontWeight="300">Site context</text>
    </svg>
  );
}

// Re-export individual components for tree-shaking
export default {
  PlatformFrameworkDiagram,
  ProcessMapSVG,
  D1ResilienceMap,
  D2DeploymentGrid,
  D3RemoteMap,
};
