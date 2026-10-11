/**
 * Diagram Components — Spirea Platform (handoff v5)
 *
 * Converted directly from the approved v5 preview so geometry, colours and labels match it.
 * Do not modify coordinates, fills, or stroke values by hand; re-export from the approved source.
 *
 * Exports:
 *   PlatformFrameworkDiagram — Home: illustrative platform schematic (NOT a Prototype V1 specification)
 *   D1ResilienceMap          — Strategic Applications, Domain 01: Resilient Infrastructure
 *   D2DeploymentGrid         — Strategic Applications, Domain 02: Rapid Deployment
 *   D3RemoteMap              — Strategic Applications, Domain 03: Remote & Distributed
 *
 * v5 changes: ProcessMapSVG (the 7-stage development map) is removed along with the
 * stage-based V1 page. The "Site context" and "Assembly sequence" captions are removed
 * from the domain diagrams. Each is also available as standalone SVG/PNG in src/assets/diagrams/
 */

/** Home: illustrative platform schematic (wrap in an overflow-x:auto container; the SVG keeps a 640px minimum width). */
export function PlatformFrameworkDiagram() {
  return (
    <svg width="100%" style={{minWidth: "640px", display: "block"}} viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Platform framework schematic showing material, production, and deployment systems">
            <title>Spirea Platform Framework</title>
            <desc>Illustrative schematic of three system zones: Material Systems on the left, Production Systems in the centre showing digital fabrication paths, and Deployment Systems on the right showing a modular assembly grid. Not a Prototype V1 specification.</desc>
            <defs>
              <pattern id="grid-p" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E8E5DF" strokeWidth="0.35"/>
              </pattern>
            </defs>
            <rect width="800" height="300" fill="#F7F5F2"/>
            <rect width="800" height="300" fill="url(#grid-p)"/>

            {/* Zone labels */}
            <text x="183" y="28" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="13" fill="#6A6A68" letterSpacing="2" fontWeight="400">MATERIAL SYSTEMS</text>
            <text x="400" y="28" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="13" fill="#6A6A68" letterSpacing="2" fontWeight="400">PRODUCTION SYSTEMS</text>
            <text x="617" y="28" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="13" fill="#6A6A68" letterSpacing="2" fontWeight="400">DEPLOYMENT SYSTEMS</text>

            {/* Zone borders */}
            <rect x="50" y="38" width="267" height="210" fill="none" stroke="#D8D5CF" strokeWidth="0.5"/>
            <rect x="267" y="38" width="266" height="210" fill="none" stroke="#D8D5CF" strokeWidth="0.5"/>
            <rect x="533" y="38" width="217" height="210" fill="none" stroke="#D8D5CF" strokeWidth="0.5"/>

            {/* Material zone: fibre layers */}
            <rect x="70"  y="58" width="227" height="18" fill="#D8D4CC" rx="1"/>
            <rect x="70"  y="82" width="227" height="28" fill="#EAE6DC" rx="1"/>
            {/* fibre hatch (illustrative) */}
            <line x1="80"  y1="90" x2="287" y2="90" stroke="#D0CCBf" strokeWidth="0.4" strokeDasharray="7 4"/>
            <line x1="80"  y1="98" x2="287" y2="98" stroke="#D0CCBf" strokeWidth="0.4" strokeDasharray="7 4"/>
            {/* structural modules */}
            <rect x="70"  y="116" width="46" height="76" fill="#2C2C2A" rx="1"/>
            <rect x="120" y="116" width="46" height="76" fill="#2C2C2A" rx="1"/>
            <rect x="170" y="116" width="46" height="76" fill="#2C2C2A" rx="1"/>
            <rect x="220" y="116" width="46" height="76" fill="#2C2C2A" rx="1"/>
            {/* teal accent on structural */}
            <rect x="70"  y="116" width="3"  height="76" fill="#1D9E75"/>
            {/* print layer lines inside modules */}
            <line x1="70" y1="126" x2="266" y2="126" stroke="#444" strokeWidth="0.3" strokeDasharray="3 2"/>
            <line x1="70" y1="136" x2="266" y2="136" stroke="#444" strokeWidth="0.3" strokeDasharray="3 2"/>
            <line x1="70" y1="146" x2="266" y2="146" stroke="#444" strokeWidth="0.3" strokeDasharray="3 2"/>
            <line x1="70" y1="156" x2="266" y2="156" stroke="#444" strokeWidth="0.3" strokeDasharray="3 2"/>
            <line x1="70" y1="166" x2="266" y2="166" stroke="#444" strokeWidth="0.3" strokeDasharray="3 2"/>
            {/* interior finish */}
            <rect x="70" y="198" width="227" height="18" fill="#F5F2EE" rx="1"/>

            {/* Production zone: nozzle paths */}
            <path d="M 290 220 Q 400 55 510 220" fill="none" stroke="#1D9E75" strokeWidth="1" strokeDasharray="5 3" opacity="0.4"/>
            <path d="M 290 200 Q 400 75 510 200" fill="none" stroke="#1D9E75" strokeWidth="1" strokeDasharray="5 3" opacity="0.3"/>
            <path d="M 290 180 Q 400 95 510 180" fill="none" stroke="#1D9E75" strokeWidth="1" strokeDasharray="5 3" opacity="0.2"/>
            {/* nozzle head */}
            <circle cx="400" cy="82" r="6" fill="none" stroke="#1D9E75" strokeWidth="0.8"/>
            <circle cx="400" cy="82" r="2" fill="#1D9E75" opacity="0.5"/>
            {/* flow arrows */}
            <line x1="350" y1="148" x2="340" y2="160" stroke="#C8C4B8" strokeWidth="0.4"/>
            <line x1="370" y1="138" x2="360" y2="150" stroke="#C8C4B8" strokeWidth="0.4"/>
            <line x1="390" y1="132" x2="380" y2="144" stroke="#C8C4B8" strokeWidth="0.4"/>
            <line x1="410" y1="132" x2="420" y2="144" stroke="#C8C4B8" strokeWidth="0.4"/>
            <line x1="430" y1="138" x2="440" y2="150" stroke="#C8C4B8" strokeWidth="0.4"/>
            {/* dimension: module width */}
            <line x1="290" y1="240" x2="510" y2="240" stroke="#B0ADA8" strokeWidth="0.4"/>
            <text x="400" y="254" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#6A6A68" letterSpacing="1">Illustrative schematic</text>

            {/* Deployment zone: module grid */}
            <rect x="552" y="58" width="44" height="60" fill="none" stroke="#B0ADA8" strokeWidth="0.5" rx="1"/>
            <rect x="600" y="58" width="44" height="60" fill="none" stroke="#B0ADA8" strokeWidth="0.5" rx="1"/>
            <rect x="648" y="58" width="44" height="60" fill="none" stroke="#B0ADA8" strokeWidth="0.5" rx="1"/>
            <rect x="552" y="124" width="44" height="60" fill="none" stroke="#B0ADA8" strokeWidth="0.5" rx="1"/>
            <rect x="600" y="124" width="44" height="60" fill="none" stroke="#B0ADA8" strokeWidth="0.5" rx="1"/>
            <rect x="648" y="124" width="44" height="60" fill="none" stroke="#B0ADA8" strokeWidth="0.5" rx="1"/>
            <rect x="552" y="190" width="44" height="28" fill="none" stroke="#B0ADA8" strokeWidth="0.5" rx="1"/>
            <rect x="600" y="190" width="44" height="28" fill="none" stroke="#B0ADA8" strokeWidth="0.5" rx="1"/>
            <rect x="648" y="190" width="44" height="28" fill="none" stroke="#B0ADA8" strokeWidth="0.5" rx="1"/>

            {/* System arrows */}
            <defs>
              <marker id="arr-p" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4" markerHeight="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8" fill="none" stroke="#1D9E75" strokeWidth="1.2"/>
              </marker>
            </defs>
            <line x1="320" y1="155" x2="268" y2="155" stroke="#1D9E75" strokeWidth="0.7" markerStart="url(#arr-p)" opacity="0.4"/>
            <line x1="513" y1="155" x2="551" y2="155" stroke="#1D9E75" strokeWidth="0.7" opacity="0.4"/>

            {/* Title block */}
            <rect x="0" y="262" width="800" height="38" fill="#F0EDE8"/>
            <text x="20" y="279" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#3A3A38" letterSpacing="1.5" fontWeight="400">SPIREA PLATFORM</text>
            <text x="20" y="295" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#6A6A68" letterSpacing="1" fontWeight="400">Illustrative schematic — not a V1 specification</text>
        
            <text x="690" y="295" textAnchor="end" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#6A6A68" letterSpacing="1" fontWeight="400">Not to scale</text>
          </svg>
  );
}

/** Domain 01 diagram (wrap in a .img-arc container). */
export function D1ResilienceMap() {
  return (
    <svg width="100%" viewBox="0 0 280 360" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Infrastructure — remote terrain context">
              <title>Infrastructure context — remote terrain</title>
              <defs>
                <pattern id="t1" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C8C4B8" strokeWidth="0.3"/>
                </pattern>
              </defs>
              <rect width="280" height="360" fill="#CDCAC4"/>
              <rect width="280" height="360" fill="url(#t1)"/>
              {/* Horizon line */}
              <rect x="0" y="200" width="280" height="160" fill="#D4D1CB"/>
              <line x1="0" y1="200" x2="280" y2="200" stroke="#B8B4AE" strokeWidth="0.6"/>
              {/* Terrain contours */}
              <path d="M 0 200 Q 70 160 140 175 Q 210 190 280 165" fill="none" stroke="#B0ADA8" strokeWidth="0.5" strokeDasharray="6 4"/>
              <path d="M 0 185 Q 60 150 120 160 Q 180 170 280 145" fill="none" stroke="#B0ADA8" strokeWidth="0.4" strokeDasharray="6 4"/>
              {/* Building footprints (site plan language) */}
              <rect x="40" y="100" width="70" height="80" fill="none" stroke="#9A9A98" strokeWidth="0.7"/>
              <rect x="130" y="120" width="60" height="60" fill="none" stroke="#9A9A98" strokeWidth="0.7"/>
              <rect x="55" y="215" width="90" height="55" fill="none" stroke="#9A9A98" strokeWidth="0.7" strokeDasharray="4 3"/>
              {/* Access route */}
              <line x1="140" y1="360" x2="105" y2="215" stroke="#B0ADA8" strokeWidth="1.5"/>
              <line x1="145" y1="360" x2="110" y2="215" stroke="#B0ADA8" strokeWidth="1.5"/>
              {/* Teal accent — structural indicator, left edge of primary footprint */}
              <rect x="40" y="100" width="2" height="80" fill="#1D9E75" opacity="0.55"/>
              {/* Scale bar */}
              <line x1="20" y1="336" x2="60" y2="336" stroke="#9A9A98" strokeWidth="0.5"/>
              <line x1="20" y1="333" x2="20" y2="339" stroke="#9A9A98" strokeWidth="0.5"/>
              <line x1="60" y1="333" x2="60" y2="339" stroke="#9A9A98" strokeWidth="0.5"/>
              {/* Title block — D2 drawing convention */}
              <rect x="0" y="342" width="280" height="18" fill="#E0DDD8"/>
              <text x="10" y="353" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#6A6A68" letterSpacing="1" fontWeight="400">RESILIENT INFRASTRUCTURE</text>
            </svg>
  );
}

/** Domain 02 diagram (wrap in a .img-arc container). */
export function D2DeploymentGrid() {
  return (
    <svg width="100%" viewBox="0 0 280 360" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Modular deployment — assembly sequence">
              <title>Rapid deployment — modular assembly sequence</title>
              <defs>
                <pattern id="t2" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#B8B4AE" strokeWidth="0.3"/>
                </pattern>
              </defs>
              <rect width="280" height="360" fill="#C5C2BC"/>
              <rect width="280" height="360" fill="url(#t2)"/>
              {/* Module grid — axonometric language */}
              <rect x="30" y="50" width="50" height="70" fill="none" stroke="#9A9A98" strokeWidth="0.8" rx="1"/>
              <rect x="85" y="50" width="50" height="70" fill="none" stroke="#9A9A98" strokeWidth="0.8" rx="1"/>
              <rect x="140" y="50" width="50" height="70" fill="none" stroke="#9A9A98" strokeWidth="0.8" rx="1"/>
              <rect x="195" y="50" width="55" height="70" fill="none" stroke="#9A9A98" strokeWidth="0.8" rx="1"/>
              <rect x="30" y="130" width="50" height="70" fill="none" stroke="#9A9A98" strokeWidth="0.8" rx="1"/>
              <rect x="85" y="130" width="50" height="70" fill="none" stroke="#9A9A98" strokeWidth="0.8" rx="1"/>
              <rect x="140" y="130" width="50" height="70" fill="none" stroke="#9A9A98" strokeWidth="0.8" rx="1"/>
              <rect x="195" y="130" width="55" height="70" fill="none" stroke="#9A9A98" strokeWidth="0.8" rx="1"/>
              {/* Teal accent on one module */}
              <rect x="30" y="50" width="2" height="70" fill="#1D9E75" opacity="0.6"/>
              <rect x="30" y="130" width="2" height="70" fill="#1D9E75" opacity="0.6"/>
              {/* Dimension: module pitch */}
              <line x1="30" y1="225" x2="80" y2="225" stroke="#9A9A98" strokeWidth="0.4"/>
              <line x1="30" y1="222" x2="30" y2="228" stroke="#9A9A98" strokeWidth="0.4"/>
              <line x1="80" y1="222" x2="80" y2="228" stroke="#9A9A98" strokeWidth="0.4"/>
              <text x="55" y="240" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#6A6A68" letterSpacing="1">Module</text>
              {/* Assembly sequence arrows */}
              <line x1="60" y1="280" x2="100" y2="260" stroke="#B0ADA8" strokeWidth="0.5"/>
              <line x1="110" y1="280" x2="145" y2="260" stroke="#B0ADA8" strokeWidth="0.5"/>
              <line x1="160" y1="280" x2="190" y2="260" stroke="#B0ADA8" strokeWidth="0.5"/>
              {/* Title block */}
              <rect x="0" y="342" width="280" height="18" fill="#E0DDD8"/>
              <text x="10" y="353" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#6A6A68" letterSpacing="1" fontWeight="400">RAPID DEPLOYMENT</text>
            </svg>
  );
}

/** Domain 03 diagram (wrap in a .img-arc container). */
export function D3RemoteMap() {
  return (
    <svg width="100%" viewBox="0 0 280 360" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Remote community — distributed deployment context">
              <title>Remote deployment — community scale</title>
              <defs>
                <pattern id="t3" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C0BDB7" strokeWidth="0.3"/>
                </pattern>
              </defs>
              <rect width="280" height="360" fill="#CCCAC3"/>
              <rect width="280" height="360" fill="url(#t3)"/>
              {/* Wide landscape: horizon high up */}
              <rect x="0" y="240" width="280" height="120" fill="#C2C0BA"/>
              <line x1="0" y1="240" x2="280" y2="240" stroke="#ACA9A3" strokeWidth="0.7"/>
              {/* Terrain lines (contours) */}
              <path d="M 0 240 Q 70 220 140 230 Q 200 240 280 218" fill="none" stroke="#A8A5A0" strokeWidth="0.5" strokeDasharray="8 5"/>
              <path d="M 0 200 Q 90 180 160 190 Q 220 200 280 175" fill="none" stroke="#A8A5A0" strokeWidth="0.4" strokeDasharray="8 5"/>
              <path d="M 0 160 Q 100 140 170 152 Q 230 165 280 138" fill="none" stroke="#ACA9A3" strokeWidth="0.4" strokeDasharray="8 5"/>
              {/* Distant settlement: small marks */}
              <rect x="80" y="215" width="18" height="14" fill="none" stroke="#9A9A98" strokeWidth="0.6"/>
              <rect x="104" y="218" width="14" height="11" fill="none" stroke="#9A9A98" strokeWidth="0.6"/>
              <rect x="124" y="215" width="18" height="14" fill="none" stroke="#9A9A98" strokeWidth="0.6"/>
              <rect x="148" y="218" width="14" height="11" fill="none" stroke="#9A9A98" strokeWidth="0.6"/>
              {/* Supply route (dotted) */}
              <line x1="140" y1="360" x2="115" y2="240" stroke="#ACA9A3" strokeWidth="1.2" strokeDasharray="6 4"/>
              {/* Distance annotation */}
              <line x1="20" y1="260" x2="20" y2="315" stroke="#9A9A98" strokeWidth="0.4"/>
              <line x1="17" y1="260" x2="23" y2="260" stroke="#9A9A98" strokeWidth="0.4"/>
              <line x1="17" y1="315" x2="23" y2="315" stroke="#9A9A98" strokeWidth="0.4"/>
              <text x="35" y="292" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#6A6A68" letterSpacing="1">Supply gap</text>
              {/* Compass rose: minimal */}
              <circle cx="248" cy="48" r="12" fill="none" stroke="#ACA9A3" strokeWidth="0.5"/>
              <line x1="248" y1="38" x2="248" y2="36" stroke="#9A9A98" strokeWidth="0.6"/>
              <text x="248" y="33" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fill="#6A6A68">N</text>
              {/* Teal accent on settlement cluster — primary building */}
              <rect x="80" y="215" width="2" height="14" fill="#1D9E75" opacity="0.55"/>
              {/* Title block */}
              <rect x="0" y="342" width="280" height="18" fill="#E0DDD8"/>
              <text x="10" y="353" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#6A6A68" letterSpacing="1" fontWeight="400">REMOTE &amp; DISTRIBUTED</text>
            </svg>
  );
}

export default {
  PlatformFrameworkDiagram,
  D1ResilienceMap,
  D2DeploymentGrid,
  D3RemoteMap,
};
