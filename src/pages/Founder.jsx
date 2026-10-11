/**
 * Founder (handoff v5)
 *
 * Approved v5 content:
 *   - Opening statement (first-person, exact wording — do not edit)
 *   - Section label "The Journey to Spirea"
 *   - Three career tracks with shortened bodies
 *   - Closing quote + one paragraph
 *
 * OPEN ITEM: the headline "The convergence of supply chain systems, material science,
 * and construction." was retained from earlier versions. It was not part of the v5
 * wording instructions — confirm with Julia whether it should stay.
 *
 * Photo: src/assets/images/julia-liu.jpg (D2 arc-corner wrapper, 0 0 120px 0).
 */
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { SectionDivider } from '../components/UI';
import founderPhoto from '../assets/images/julia-liu.jpg';

const TRACKS = [
  {
    period: ['26 years', 'Global Operations'],
    org: 'Cargill · ADM · Bunge',
    role: 'Global Supply Chain Leadership',
    body: 'Leadership of integrated agricultural commodity supply chains across multiple continents.',
  },
  {
    period: ['Builder', 'British Columbia'],
    org: 'BC Housing',
    role: 'Licensed Residential Builder',
    body: 'Licensed residential builder in British Columbia, with direct experience of how construction systems work on site.',
  },
  {
    period: ['PhD', 'Research'],
    org: 'Edinburgh Napier University',
    role: 'PhD · Built Environment',
    body: 'PhD in the Built Environment, Edinburgh Napier University, within the Resource Efficient Built Environment Lab (REBEL). Research on bio-based materials, material substitution and low-carbon construction systems.',
  },
];

export default function Founder() {
  return (
    <>
      <Nav bg="#F7F5F2" />

      <div className="founder-page">
        <div className="founder-hero">
          <div>
            <div className="fo-name">Julia Liu · Founder</div>
            <h1 className="fo-h">The convergence of supply chain systems, material science, and construction.</h1>
            <p className="fo-intro" style={{ maxWidth: 640, fontSize: 19, lineHeight: 1.8, marginTop: 24 }}>
              “I founded Spirea because I believe better construction begins with designing the whole system. Through engineering science, Spirea brings materials, digital manufacturing, modular assembly and validation together to develop practical, scalable building systems.”
            </p>
          </div>
          <div className="img-arc" style={{ minHeight: 340, overflow: 'hidden', borderRadius: '0 0 120px 0' }}>
            <img
              src={founderPhoto}
              alt="Julia Liu, Founder, Spirea Platform"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>

        <div className="founder-content">
          <SectionDivider label="The Journey to Spirea" />
          <div style={{ height: 8 }} />
          <div className="track">
            {TRACKS.map((t, i) => {
              const last = i === TRACKS.length - 1;
              const bdr = last ? '' : ' bdr-b';
              return (
                <div key={t.org} style={{ display: 'contents' }}>
                  <div className={`track-period${bdr}`}>{t.period[0]}<br />{t.period[1]}</div>
                  <div className={`track-detail${bdr}`}>
                    <div className="track-org">{t.org}</div>
                    <div className="track-role">{t.role}</div>
                    <p className="track-body">{t.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="founder-closing">
          <blockquote className="fo-quote">
            Materials, fabrication and assembly are most powerful when they are considered together.
          </blockquote>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p className="sbody">
              Spirea is exploring how material science, controlled manufacturing and modular deployment can be brought together in construction, alongside established industry practice.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
