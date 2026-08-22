/**
 * Monograph / 01 — Editorial cybersecurity portfolio.
 * Visual rule: warm parchment foundation, ink-green grounding, oxidized-copper accents;
 * display serif for identity, humanist sans for prose, mono for evidence and metadata.
 */
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  CircleDot,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  SquareTerminal,
  X,
} from "lucide-react";

const sectionLinks = [
  ["01", "About", "about"],
  ["02", "Work", "projects"],
  ["03", "Journey", "journey"],
  ["04", "Contact", "contact"],
];

const skills = [
  { icon: ShieldCheck, number: "01", title: "Security foundations", detail: "Threat awareness, secure-by-design thinking, web security concepts" },
  { icon: Code2, number: "02", title: "Web development", detail: "Responsive interfaces, frontend craft, practical web systems" },
  { icon: SquareTerminal, number: "03", title: "Tool exploration", detail: "Cybersecurity utilities, terminals, and workflow experiments" },
  { icon: Layers3, number: "04", title: "System thinking", detail: "Learning how components, users, and controls work together" },
];

const projectPlaceholders = [
  {
    id: "01",
    category: "Security tooling",
    title: "Case study / in development",
    copy: "A reserved space for a cybersecurity tool, lab, or automation workflow. Add the problem, method, evidence, and outcome here.",
    tags: ["Research", "Tooling"],
    image: "/manus-storage/avinash-project-architecture_42161d74.jpg",
  },
  {
    id: "02",
    category: "Web experience",
    title: "Case study / in development",
    copy: "A future project documenting how intentional front-end decisions can make digital experiences clearer and more trustworthy.",
    tags: ["Web", "Interface"],
    image: "/manus-storage/avinash-signal-studies_dc1cdfcc.jpg",
  },
];

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="section-label">
      <span className="section-index">{index}</span>
      <span>{label}</span>
    </div>
  );
}

function Rule() {
  return <div className="section-rule" aria-hidden="true" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f3f0e8] text-[#18231f]">
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Avinash K home">
          <img src="/manus-storage/avinash-ak-field-seal_300c0181.png" alt="AK field seal" />
          <span>AK <i>/</i> FIELD NOTES</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {sectionLinks.map(([index, label, target]) => (
            <a key={target} href={`#${target}`} className="nav-link">
              <span>{index}</span>{label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {sectionLinks.map(([index, label, target]) => (
            <a key={target} href={`#${target}`} onClick={closeMenu}>
              <span>{index}</span>{label}<ArrowUpRight size={17} />
            </a>
          ))}
        </nav>
      )}

      <main id="top">
        <section className="hero-shell">
          <div className="hero-topline">
            <p className="eyebrow"><CircleDot size={12} strokeWidth={2.5} /> STUDENT PORTFOLIO / 2026</p>
            <p className="hero-location">TAMIL NADU, INDIA <span>·</span> OPEN TO LEARNING</p>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="mono-note">HELLO, I’M</p>
              <h1>Avinash <em>K.</em></h1>
              <p className="hero-description">A cybersecurity student with a growing practice in <strong>secure web experiences</strong>, systems thinking, and the tools that help make the internet safer.</p>
              <div className="hero-actions">
                <a href="#projects" className="primary-action">Explore the work <ArrowDown size={17} /></a>
                <a href="#about" className="text-action">Read my field notes <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Editorial study workspace">
              <img src="/manus-storage/avinash-field-notes-hero_6d3f0f34.jpg" alt="A dark editorial workspace with technical notebook and materials" />
              <div className="art-card art-card-top"><span>FOCUS</span><strong>CYBERSECURITY</strong></div>
              <div className="art-card art-card-bottom"><span>SECONDARY</span><strong>WEB DEVELOPMENT</strong></div>
              <div className="seal-orbit" aria-hidden="true"><img src="/manus-storage/avinash-ak-field-seal_300c0181.png" alt="" /></div>
            </div>
          </div>

          <div className="hero-bottomline">
            <span>SCROLL TO START</span><ChevronDown size={16} />
            <span className="hero-code">DOSSIER NO. / AK-01</span>
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <aside><SectionLabel index="01" label="ABOUT" /></aside>
          <div className="section-content about-layout">
            <div>
              <p className="overline">THE SHORT VERSION</p>
              <h2>Curiosity is the first layer of <em>defence.</em></h2>
            </div>
            <div className="about-prose">
              <p>I’m <strong>Avinash K</strong>, pursuing Cybersecurity at <strong>SRM Valliammai Engineering College</strong>. I’m interested in the space where good web development and security discipline meet: building useful digital experiences while understanding the systems and risks beneath them.</p>
              <p>Right now, I’m strengthening my technical foundations, studying the tools behind modern security work, and documenting what I learn as I go.</p>
              <div className="now-note">
                <span className="now-marker">NOW</span>
                <p>Exploring cybersecurity tools, secure web practices, and the craft of building interfaces with intent.</p>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        <section id="skills" className="content-section skills-section">
          <aside><SectionLabel index="02" label="SKILLS / FOCUS" /></aside>
          <div className="section-content">
            <div className="skills-head">
              <div><p className="overline">A WORKING TOOLKIT</p><h2>Build with intent.<br /><em>Study the edges.</em></h2></div>
              <p className="skills-intro">An evolving set of interests that brings technical depth to the way I approach digital work.</p>
            </div>
            <div className="skills-list">
              {skills.map(({ icon: Icon, number, title, detail }) => (
                <article className="skill-row" key={number}>
                  <span className="skill-number">{number}</span>
                  <Icon size={23} strokeWidth={1.5} />
                  <div><h3>{title}</h3><p>{detail}</p></div>
                  <ArrowUpRight className="skill-arrow" size={19} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="project-intro content-section">
            <aside><SectionLabel index="03" label="SELECTED WORK" /></aside>
            <div className="section-content project-intro-copy">
              <div><p className="overline">THE ARCHIVE IS GROWING</p><h2>Work that shows<br /><em>the thinking.</em></h2></div>
              <p>These project frames are intentionally ready for the work that comes next. Share your project links and results to turn them into full case studies.</p>
            </div>
          </div>
          <div className="project-list">
            {projectPlaceholders.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-image"><img src={project.image} alt="Abstract editorial project visual" /><span>PROJECT / {project.id}</span></div>
                <div className="project-details">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <div className="project-bottom"><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="case-study-state">Case study pending <ArrowUpRight size={15} /></span></div>
                </div>
              </article>
            ))}
            <a href="#contact" className="project-blank-card">
              <span className="plus-mark">+</span><span>ADD THE NEXT<br />CHAPTER</span><ArrowUpRight size={22} />
            </a>
          </div>
        </section>

        <section id="journey" className="content-section journey-section">
          <aside><SectionLabel index="04" label="EDUCATION / JOURNEY" /></aside>
          <div className="section-content journey-layout">
            <div className="journey-lead"><p className="overline">LEARNING IN PUBLIC</p><h2>From questions to <em>practice.</em></h2><p>Every useful security habit starts by paying closer attention to how things work.</p></div>
            <div className="timeline">
              <article className="timeline-item"><span className="timeline-year">PRESENT</span><div><h3>Cybersecurity student</h3><p>SRM Valliammai Engineering College</p></div><span className="timeline-dot" /></article>
              <article className="timeline-item"><span className="timeline-year">ONGOING</span><div><h3>Independent exploration</h3><p>Web development, security tools, and practical technical learning.</p></div><span className="timeline-dot muted" /></article>
              <article className="timeline-item"><span className="timeline-year">NEXT</span><div><h3>Build, test, document</h3><p>Turning continued learning into portfolio-ready evidence and case studies.</p></div><span className="timeline-dot muted" /></article>
            </div>
          </div>
        </section>

        <Rule />

        <section id="certifications" className="content-section certification-section">
          <aside><SectionLabel index="05" label="CERTIFICATION" /></aside>
          <div className="section-content certification-layout">
            <div><p className="overline">EVIDENCE OF LEARNING</p><h2>Credentials will<br />live <em>here.</em></h2></div>
            <div className="certificate-placeholder"><FileText size={28} strokeWidth={1.5} /><div><p>Certificate archive</p><span>Add earned course names, issuers, and verification links here.</span></div><span className="placeholder-index">01—</span></div>
          </div>
        </section>

        <section id="resume" className="resume-band">
          <div><p className="overline">THE CONDENSED VERSION</p><h2>A record of where I’m headed.</h2></div>
          <div className="resume-side"><p>Once your CV is ready, this space can link directly to a polished one-page PDF.</p><a href="#contact" className="resume-action">Request the résumé <ArrowUpRight size={18} /></a></div>
        </section>

        <section id="activity" className="content-section activity-section">
          <aside><SectionLabel index="06" label="ACTIVITY" /></aside>
          <div className="section-content activity-layout">
            <div><p className="overline">WHERE THE WORK CONTINUES</p><h2>Signals, not<br /><em>noise.</em></h2></div>
            <div className="activity-grid">
              <a href="#contact" className="activity-card"><Github size={22} /><div><span>GITHUB</span><p>Add your handle & repositories</p></div><ArrowUpRight size={17} /></a>
              <a href="#contact" className="activity-card"><Linkedin size={22} /><div><span>LINKEDIN</span><p>Add your professional profile</p></div><ArrowUpRight size={17} /></a>
              <a href="#contact" className="activity-card"><Code2 size={22} /><div><span>LEETCODE</span><p>Add your coding practice profile</p></div><ArrowUpRight size={17} /></a>
              <a href="#contact" className="activity-card"><SquareTerminal size={22} /><div><span>LAB NOTES</span><p>Publish write-ups and experiments</p></div><ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-seal"><img src="/manus-storage/avinash-ak-field-seal_300c0181.png" alt="" /></div>
          <p className="overline">OPEN CHANNEL</p>
          <h2>Let’s make<br />something <em>considered.</em></h2>
          <p className="contact-copy">Have an opportunity, a project, or a useful idea? Add your preferred email address and social links here to turn this page into your direct point of contact.</p>
          <a className="contact-action" href="#top">Back to the top <ArrowUpRight size={18} /></a>
          <span className="contact-code">AK / CYBERSECURITY & WEB DEVELOPMENT</span>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 AVINASH K. / FIELD NOTES.</p>
        <p>DESIGNED AS AN EDITORIAL PORTFOLIO</p>
        <a href="#top">TOP <ArrowUpRight size={13} /></a>
      </footer>
    </div>
  );
}
