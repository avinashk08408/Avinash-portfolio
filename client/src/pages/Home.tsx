/**
 * Practice Ledger — original portfolio for Avinash K.
 * Uses a single Limestone background, Graphite information layer, and Burnished Terracotta accent.
 * Manrope is functional; Yapari appears only in the name and final contact emphasis.
 */
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, FileText, Github, Linkedin, Mail, Menu, Send, Terminal, X } from "lucide-react";

const navItems = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Journey", "journey"], ["Contact", "contact"]];
const skillBlocks: Array<[string, string, string[]]> = [
  ["01", "Secure web", ["Security foundations", "Secure-by-design thinking", "Web safety awareness"]],
  ["02", "Development", ["Responsive interfaces", "Front-end practice", "Problem solving"]],
  ["03", "Systems", ["Networks", "Operating systems", "Databases"]],
  ["04", "Tooling", ["Git & GitHub", "Security tools", "Technical research"]],
];
const activity = [[Github, "GitHub", "Project repositories & practice"], [Linkedin, "LinkedIn", "Professional learning record"], [Terminal, "LeetCode", "Problem-solving practice"]] as const;

function LedgerLabel({ index, label }: { index: string; label: string }) {
  return <div className="ledger-label"><span>{index}</span><p>{label}</p></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setFormSent(true); };

  return (
    <div className="ledger-page" id="home">
      <header className="ledger-nav">
        <a href="#home" className="ledger-brand" aria-label="Avinash K home"><img src="/manus-storage/avinash-ak-field-seal_300c0181.png" alt="AK field seal" /><span>AVINASH K <i>/</i> PORTFOLIO</span></a>
        <nav className="ledger-desktop-nav" aria-label="Primary navigation">{navItems.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
        <button className="ledger-menu" onClick={() => setMenuOpen(!menuOpen)} type="button" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={22} />}</button>
      </header>
      {menuOpen && <nav className="ledger-mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={17} /></a>)}</nav>}

      <main>
        <section className="ledger-hero ledger-shell">
          <div className="hero-registration"><span>AVINASH K / 2026</span><span>CYBERSECURITY × WEB DEVELOPMENT</span></div>
          <div className="hero-ledger-grid">
            <div className="hero-main-copy"><p className="eyebrow">HELLO, I’M</p><h1>Avinash<br /><strong>K.</strong></h1><p className="hero-statement">A cybersecurity student building the habit of <b>clear thinking, secure making,</b> and practical technical work. I’m most interested in the moment a concept becomes something I can test and understand.</p><div className="hero-links"><a href="#projects" className="primary-link">Explore selected work <ArrowDownRight size={17} /></a><a href="#contact" className="secondary-link">Start a conversation <ArrowUpRight size={16} /></a></div></div>
            <aside className="hero-ledger-card"><div className="ledger-card-top"><span>FIELD NOTE / 01</span><i /></div><div className="ledger-card-mark"><img src="/manus-storage/avinash-ak-field-seal_300c0181.png" alt="" /></div><div className="ledger-card-data"><p><span>STUDY</span><b>Cybersecurity</b></p><p><span>INSTITUTION</span><b>SRM Valliammai Engineering College</b></p><p><span>FOCUS</span><b>Security tools & web development</b></p><p><span>LOCATION</span><b>Tamil Nadu, India</b></p></div><p className="ledger-card-status"><i /> CURRENTLY LEARNING IN PUBLIC</p></aside>
          </div>
          <div className="hero-footnote"><span>SCROLL FOR THE PRACTICE LEDGER</span><span>OPEN TO LEARNING OPPORTUNITIES</span></div>
        </section>

        <section id="about" className="ledger-section ledger-shell about-ledger">
          <LedgerLabel index="01" label="ABOUT ME" />
          <div className="ledger-content about-ledger-content"><div><h2>Curious about what makes a system <em>hold.</em></h2><p>I’m pursuing Cybersecurity at SRM Valliammai Engineering College. My interests sit between cybersecurity, web development, and the thoughtful technical choices that make digital systems more reliable.</p><p>I’m building my foundation through academic study, small technical experiments, and consistent practice with the tools and concepts behind modern security work.</p><div className="about-context"><span>WHY THIS PATH</span><p>I enjoy the process of taking a large technical idea, breaking it into a smaller test, and understanding what it teaches me about a real system.</p></div></div><div className="principle-block"><p>MY CURRENT PRACTICE</p><strong>Learn the system.<br />Test the edges.<br /><span>Document the work.</span></strong></div></div>
        </section>

        <section id="skills" className="ledger-section ledger-shell skills-ledger">
          <LedgerLabel index="02" label="SKILLS" />
          <div className="ledger-content"><div className="section-heading-row"><h2>A practical toolkit,<br /><em>still growing.</em></h2><p>Not a finished list of claims — a focused set of areas I am actively developing through study and hands-on practice.</p></div><div className="skill-ledger-grid">{skillBlocks.map(([number, title, items]) => <article key={number}><span>{number}</span><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><div className="practice-proof-strip"><div><span>CURRENT MATERIAL</span><b>Security concepts & systems</b></div><div><span>PRACTICE MODE</span><b>Small builds & technical notes</b></div><div><span>WORKING HABIT</span><b>Research, test, reflect</b></div></div></div>
        </section>

        <section id="projects" className="ledger-section ledger-shell projects-ledger">
          <LedgerLabel index="03" label="PROJECTS" />
          <div className="ledger-content"><div className="project-heading"><h2>Work that earns<br /><em>its place.</em></h2><p>Each project entry will be shaped as evidence: a real problem, an applied method, and a clear lesson.</p></div><article className="project-ledger-card"><div className="project-sequence">01</div><div className="project-summary"><p>ACTIVE BUILD</p><h3>Cybersecurity portfolio</h3><p>This portfolio is the first public record of my evolving technical practice, bringing together cybersecurity interests, web development, and a structured way to document future work.</p><div><span>Web development</span><span>Portfolio system</span><span>Active</span></div></div><a href="#contact" className="case-link">View project note <ArrowUpRight size={17} /></a></article><div className="project-next"><span>02</span><p>The next security tool, research note, or web case study enters here.</p></div></div>
        </section>

        <section id="journey" className="ledger-section ledger-shell journey-ledger">
          <LedgerLabel index="04" label="EDUCATION & JOURNEY" />
          <div className="ledger-content"><h2>Learning turned into<br /><em>direction.</em></h2><div className="journey-line"><article><span>PRESENT</span><div><h3>Cybersecurity student</h3><p>SRM Valliammai Engineering College</p></div></article><article><span>NOW</span><div><h3>Building technical foundations</h3><p>Cybersecurity tools, secure web practices, systems, and problem-solving.</p></div></article><article><span>NEXT</span><div><h3>Documented applied work</h3><p>Case studies, credentials, and a more complete record of practical learning.</p></div></article></div><div className="journey-proof"><span>ACADEMIC GROUNDING</span><p>Every new topic is being connected to a practical question: what does it protect, how does it work, and where might it fail?</p></div></div>
        </section>

        <section id="certification" className="ledger-section ledger-shell certification-ledger">
          <LedgerLabel index="05" label="CERTIFICATION" />
          <div className="ledger-content certification-content"><div><h2>Every credential needs<br /><em>context.</em></h2><p>Course completions and certifications will be captured here with the institution, date, and learning outcome — as evidence of continued progress.</p></div><div className="credential-card"><FileText size={28} /><div><span>RECORD / 01</span><h3>Learning credential archive</h3><p>Current status: building through active coursework and future certifications.</p></div><i>IN PROGRESS</i></div></div>
        </section>

        <section id="resume" className="ledger-section ledger-shell resume-ledger">
          <LedgerLabel index="06" label="RÉSUMÉ" />
          <div className="ledger-content resume-content"><div><p className="eyebrow">ONE-PAGE SUMMARY</p><h2>A focused record<br />of the <em>work.</em></h2></div><div><p>A concise résumé will consolidate education, selected projects, skills, and verified learning into one professional view.</p><span className="resume-status">RÉSUMÉ / IN PREPARATION</span></div></div>
        </section>

        <section id="activity" className="ledger-section ledger-shell activity-ledger">
          <LedgerLabel index="07" label="ACTIVITY" />
          <div className="ledger-content"><div className="section-heading-row"><h2>Signals from the<br /><em>practice.</em></h2><p>Professional channels that will make the process visible: code, learning, and regular problem-solving.</p></div><div className="activity-ledger-grid">{activity.map(([Icon, label, copy]) => <a href="#contact" key={label}><Icon size={22} /><div><span>{label}</span><p>{copy}</p></div><ArrowUpRight size={17} /></a>)}</div></div>
        </section>

        <section id="contact" className="ledger-contact ledger-shell">
          <div className="contact-ledger-copy"><p className="eyebrow">CONTACT</p><h2>Let’s make the next<br />step <em>useful.</em></h2><p>I’m open to learning opportunities, cybersecurity conversations, collaborative work, and thoughtful web projects.</p><div className="contact-intent"><Mail size={18} /><div><span>OPEN CHANNEL</span><b>Opportunities, student collaborations, and technical conversations are welcome.</b></div></div></div>
          <form className="ledger-contact-form" onSubmit={onSubmit}><p className="form-kicker">CONVERSATION NOTE</p><label>NAME<input required placeholder="Your name" /></label><label>EMAIL<input required type="email" placeholder="you@example.com" /></label><label>MESSAGE<textarea required placeholder="Tell me about the opportunity..." /></label><button type="submit">{formSent ? "Note prepared" : <><Send size={15} /> Prepare note</>}</button>{formSent && <p>Thank you. This portfolio conversation note is ready for the contact route selected at publication.</p>}</form>
        </section>
      </main>
      <footer className="ledger-footer"><span>© 2026 AVINASH K. / PRACTICE LEDGER</span><span>CYBERSECURITY × WEB DEVELOPMENT</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  );
}
