/**
 * Portfolio-first redesign: every variation uses a single uninterrupted background.
 * Shared rule: Manrope for information; Yapari only for the name and rare key emphasis.
 */
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type Variant = "minimal" | "dark";

const skills = [
  ["01", "Cybersecurity", "Security principles, threat awareness, and secure-by-design thinking."],
  ["02", "Web development", "Responsive user interfaces and practical front-end systems."],
  ["03", "Security tools", "Exploring the utilities, workflows, and methods used in modern security work."],
  ["04", "Systems thinking", "Understanding how users, components, and controls work together."],
];

const projects = [
  ["01", "Security tool / active study", "An ongoing security study that will document a practical workflow, method, and outcome."],
  ["02", "Web experience / active study", "A focused interface study connecting clear web design with security-aware implementation."],
  ["03", "Research note / active study", "A concise technical record that turns a live question or lab into reusable learning."],
];

function SectionHeader({ number, title, note }: { number: string; title: string; note?: string }) {
  return (
    <div className="pf-section-head">
      <span className="pf-number">{number}</span>
      <div><p>{title}</p>{note && <small>{note}</small>}</div>
    </div>
  );
}

function RouteSwitch({ variant }: { variant: Variant }) {
  return (
    <a className="pf-route-switch" href={variant === "minimal" ? "/dark-modern" : "/"}>
      <span>{variant === "minimal" ? "TRY DARK MODERN" : "TRY MINIMAL"}</span><ArrowUpRight size={15} />
    </a>
  );
}

export default function PortfolioExperience({ variant }: { variant: Variant }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMinimal = variant === "minimal";

  useEffect(() => {
    document.title = isMinimal ? "Avinash K — Portfolio / Minimal" : "Avinash K — Portfolio / Dark Modern";
  }, [isMinimal]);

  const navItems = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Journey", "journey"], ["Contact", "contact"]];

  return (
    <div className={`portfolio-page ${isMinimal ? "minimal-portfolio" : "dark-portfolio"}`}>
      <header className="pf-nav">
        <a className="pf-brand" href="#top" aria-label="Avinash K portfolio home"><span className="pf-monogram" aria-hidden="true"><b /><i /></span><em>AK</em><strong>/</strong> PORTFOLIO</a>
        <nav className="pf-desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="pf-nav-side"><RouteSwitch variant={variant} /><button className="pf-menu" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={20} />}</button></div>
      </header>

      {menuOpen && <nav className="pf-mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}</nav>}

      {!isMinimal && <div className="pf-system-band" aria-label="Dark Frame system status"><span>AK://FRAME_02</span><span><b /> ACTIVE LEARNING MODE</span><span>GRID REF. 20.26</span></div>}

      <main id="top">
        <section className="pf-hero">
          <div className="pf-hero-meta"><span>CYBERSECURITY STUDENT</span><span>SRM VALLIAMMAI ENGINEERING COLLEGE</span></div>
          <div className="pf-hero-main">
            <p>HELLO, I’M</p>
            <h1>Avinash<br /><span>K.</span></h1>
            <div className="pf-hero-statement"><span className="pf-line" /><p>A focused learner building confidence in <strong>cybersecurity</strong>, web development, and the tools that make digital systems more secure.</p></div>
          </div>
          <div className="pf-hero-bottom"><span>AVAILABLE FOR LEARNING & COLLABORATION</span><a href="#about">SCROLL TO EXPLORE ↓</a><span>{isMinimal ? "MINIMAL / 01" : "DARK MODERN / 02"}</span></div>
        </section>

        <section id="about" className="pf-section pf-about">
          <SectionHeader number="01" title="ABOUT ME" note="THE FOUNDATION" />
          <div className="pf-section-body pf-about-copy">
            <h2>Building with curiosity.<br /><strong className="pf-display-emphasis">Learning with intent.</strong></h2>
            <div><p>I’m Avinash K, pursuing Cybersecurity at SRM Valliammai Engineering College. I’m interested in understanding how useful web experiences are built, how systems are protected, and how small technical choices can build trust.</p><p>My current focus is turning classroom learning into practical evidence through security tools, web projects, and well-documented experiments.</p></div>
          </div>
        </section>

        <section id="skills" className="pf-section">
          <SectionHeader number="02" title="SKILLS & FOCUS" note="WHAT I’M DEVELOPING" />
          <div className="pf-section-body">
            <h2 className="pf-section-title">A growing technical<br /><strong>foundation.</strong></h2>
            <div className="pf-rows pf-skills-rows">
              {skills.map(([number, title, copy]) => <article key={number} className="pf-row"><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={17} /></article>)}
            </div>
          </div>
        </section>

        <section id="projects" className="pf-section">
          <SectionHeader number="03" title="PROJECTS" note="SELECTED WORK" />
          <div className="pf-section-body">
            <div className="pf-title-row"><h2 className="pf-section-title">Work in the<br /><strong>making.</strong></h2><p>A focused collection of current studies, experiments, and case work. Each entry is shaped to show the question, method, and outcome behind the work.</p></div>
            <div className="pf-project-list">
              {projects.map(([number, name, copy]) => <article className="pf-project" key={number}><span className="pf-project-no">{number}</span><div><h3>{name}</h3><p>{copy}</p></div><span className="pf-project-status">IN PROGRESS</span><ArrowUpRight size={18} /></article>)}
            </div>
          </div>
        </section>

        <section id="journey" className="pf-section pf-journey">
          <SectionHeader number="04" title="EDUCATION & JOURNEY" note="THE TIMELINE" />
          <div className="pf-section-body">
            <h2 className="pf-section-title">Study. Explore.<br /><strong className="pf-display-emphasis">Apply.</strong></h2>
            <div className="pf-timeline">
              <article><span>PRESENT</span><div><h3>Cybersecurity student</h3><p>SRM Valliammai Engineering College</p></div></article>
              <article><span>ONGOING</span><div><h3>Independent technical learning</h3><p>Web development, cybersecurity tools, and security foundations.</p></div></article>
              <article><span>NEXT</span><div><h3>Portfolio-ready evidence</h3><p>Case studies, credentials, and thoughtful documentation of practical work.</p></div></article>
            </div>
          </div>
        </section>

        <section id="certifications" className="pf-section">
          <SectionHeader number="05" title="CERTIFICATIONS" note="CREDENTIALS" />
          <div className="pf-section-body pf-certificate">
            <h2 className="pf-section-title">Proof belongs<br />with the <strong>work.</strong></h2>
            <div className="pf-certificate-box"><span>01</span><div><h3>Learning record</h3><p>Completed coursework, security training, and verifiable credentials will be recorded here as they are earned.</p></div><span className="pf-certificate-state">EARNING IN PROGRESS</span></div>
          </div>
        </section>

        <section id="resume" className="pf-section pf-resume">
          <SectionHeader number="06" title="RÉSUMÉ" note="ONE-PAGE SUMMARY" />
          <div className="pf-section-body pf-resume-body"><h2 className="pf-section-title">A concise record<br />of the <strong>direction.</strong></h2><div><p>A one-page résumé will gather education, selected work, credentials, and direct profile links into a single professional summary.</p><span className="pf-static-action">RÉSUMÉ / IN PREPARATION</span></div></div>
        </section>

        <section id="activity" className="pf-section pf-activity">
          <SectionHeader number="07" title="ACTIVITY" note="WHERE I KEEP LEARNING" />
          <div className="pf-section-body"><h2 className="pf-section-title">The evidence<br />continues <strong className="pf-display-emphasis">here.</strong></h2><div className="pf-activity-list"><div><Github size={20} /><span>GITHUB</span><p>Public record of development work, repositories, and experiments.</p></div><div><Linkedin size={20} /><span>LINKEDIN</span><p>Professional learning, connections, and ongoing progress.</p></div><div><span className="pf-code-icon">&lt;/&gt;</span><span>LEETCODE</span><p>Consistent problem-solving practice and technical discipline.</p></div></div></div>
        </section>

        <section id="contact" className="pf-contact">
          <p>OPEN TO THE NEXT CONVERSATION</p>
          <h2>Let’s build<br />something <strong>useful.</strong></h2>
          <div className="pf-contact-bottom"><span>A DIRECT CHANNEL FOR OPPORTUNITIES & COLLABORATION</span><a href="mailto:hello@example.com" aria-label="Email contact placeholder"><Mail size={18} /> CONTACT AVINASH <ArrowUpRight size={16} /></a></div>
        </section>
      </main>

      <footer className="pf-footer"><span>© 2026 AVINASH K</span><span>CYBERSECURITY × WEB DEVELOPMENT</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
