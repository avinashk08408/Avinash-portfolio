/**
 * Quiet Scholar portfolio for Avinash K.
 * Minimal-classic presentation: Ivory Paper background, Ink type, Sienna accent, and conventional portfolio hierarchy.
 */
import { useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Menu, Send, Terminal, X } from "lucide-react";

const navItems = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Journey", "journey"], ["Contact", "contact"]];
const skills: Array<[string, string[]]> = [
  ["Cybersecurity", ["Security fundamentals", "Ethical hacking concepts", "Secure web practices"]],
  ["Web development", ["HTML & CSS", "Responsive interfaces", "Git & GitHub"]],
  ["Technical foundations", ["Programming practice", "Operating systems", "Networks & databases"]],
];
const activityItems = [[Github, "GitHub", "Project work and code practice"], [Linkedin, "LinkedIn", "Professional learning journey"], [Terminal, "LeetCode", "Problem-solving practice"]] as const;

function SectionIntro({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <div className="qs-section-intro"><span>{number}</span><div><p>{title}</p>{children}</div></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notePrepared, setNotePrepared] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setNotePrepared(true); };

  return (
    <div className="quiet-scholar" id="home">
      <header className="qs-nav">
        <a href="#home" className="qs-brand"><span className="qs-seal" aria-hidden="true">AK</span><span>AVINASH K. <i>/</i> PORTFOLIO</span></a>
        <nav className="qs-nav-links" aria-label="Primary navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <button className="qs-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={21} />}</button>
      </header>
      {menuOpen && <nav className="qs-mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowRight size={15} /></a>)}</nav>}

      <main>
        <section className="qs-hero qs-shell">
          <div className="qs-hero-copy"><p className="qs-kicker">CYBERSECURITY STUDENT · SRM VALLIAMMAI ENGINEERING COLLEGE</p><p className="qs-signature">Avinash K.</p><h1>A focused student of cybersecurity and secure digital systems.</h1><p className="qs-lead">I’m pursuing cybersecurity with a growing interest in secure web development, practical security tools, and the systems that make digital work safer.</p><div className="qs-hero-actions"><a className="qs-primary" href="#projects">View projects <ArrowRight size={16} /></a><a className="qs-text-link" href="#contact">Get in touch</a></div></div>
          <aside className="qs-profile-note"><div className="qs-profile-top"><span className="qs-small-seal" aria-hidden="true">AK</span><span>PROFILE</span></div><dl><div><dt>STUDY</dt><dd>Cybersecurity</dd></div><div><dt>FOCUS</dt><dd>Web security & tools</dd></div><div><dt>BASED IN</dt><dd>Tamil Nadu, India</dd></div><div><dt>STATUS</dt><dd>Open to learning opportunities</dd></div></dl></aside>
        </section>

        <section id="about" className="qs-section qs-shell"><SectionIntro number="01" title="ABOUT ME"><h2>A thoughtful start to a technical career.</h2></SectionIntro><div className="qs-section-body qs-about"><div><p>I am a cybersecurity student at SRM Valliammai Engineering College. I am interested in how secure systems are built, how applications can be made more reliable, and how technical choices affect the people who use them.</p><p>My current focus is simple: learn the fundamentals well, apply them in small projects, and turn each new topic into practical understanding.</p></div><div className="qs-quiet-note"><p>WHAT I VALUE</p><strong>Curiosity, consistency, and work I can explain clearly.</strong></div></div></section>

        <section id="skills" className="qs-section qs-shell"><SectionIntro number="02" title="SKILLS"><h2>Skills in progress.</h2></SectionIntro><div className="qs-section-body"><p className="qs-supporting-copy">A focused working set developed through coursework, independent study, and hands-on practice.</p><div className="qs-skill-list">{skills.map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

        <section id="projects" className="qs-section qs-shell"><SectionIntro number="03" title="PROJECTS"><h2>Selected work.</h2></SectionIntro><div className="qs-section-body"><article className="qs-project"><span>01</span><div><p>PERSONAL PORTFOLIO</p><h3>Cybersecurity portfolio website</h3><p>This website is a structured record of my learning journey, bringing together my interests in cybersecurity, web development, and future project work.</p><small>Web development · Active build</small></div><a href="#contact" aria-label="Discuss portfolio project"><ArrowRight size={19} /></a></article><div className="qs-project-next"><span>02</span><p>The next security tool, web project, or technical case study will be documented here.</p></div></div></section>

        <section id="journey" className="qs-section qs-shell"><SectionIntro number="04" title="EDUCATION & JOURNEY"><h2>Academic foundation.</h2></SectionIntro><div className="qs-section-body"><div className="qs-timeline"><article><time>NOW</time><div><h3>Cybersecurity student</h3><p>SRM Valliammai Engineering College</p></div></article><article><time>BUILDING</time><div><h3>Technical foundations</h3><p>Strengthening knowledge of security, web development, systems, networks, and problem-solving.</p></div></article><article><time>NEXT</time><div><h3>Applied project work</h3><p>Developing a stronger record of practical tools, written learnings, and verified credentials.</p></div></article></div></div></section>

        <section id="certification" className="qs-section qs-shell"><SectionIntro number="05" title="CERTIFICATION"><h2>Learning record.</h2></SectionIntro><div className="qs-section-body"><p className="qs-supporting-copy">Completed courses and certifications will be documented with the provider, date, and outcome as they are earned.</p><div className="qs-cert-row"><span>RECORD 01</span><div><h3>Certification archive</h3><p>Currently building through ongoing cybersecurity coursework and independent learning.</p></div><em>IN PROGRESS</em></div></div></section>

        <section id="resume" className="qs-section qs-shell"><SectionIntro number="06" title="RÉSUMÉ"><h2>A concise professional summary.</h2></SectionIntro><div className="qs-section-body qs-resume"><p>A résumé will bring together my education, growing technical skill set, selected work, and completed credentials in one focused document.</p><a href="#contact" className="qs-resume-link"><Download size={16} /> Résumé available on request</a></div></section>

        <section id="activity" className="qs-section qs-shell"><SectionIntro number="07" title="ACTIVITY"><h2>Learning in public.</h2></SectionIntro><div className="qs-section-body"><div className="qs-activity-list">{activityItems.map(([Icon, title, detail]) => <a href="#contact" key={title}><Icon size={19} /><div><h3>{title}</h3><p>{detail}</p></div><ArrowRight size={16} /></a>)}</div></div></section>

        <section id="contact" className="qs-contact qs-shell"><div className="qs-contact-copy"><p className="qs-kicker">CONTACT</p><h2>Let’s start a <span>useful conversation.</span></h2><p>I welcome internship opportunities, collaboration, and conversations around cybersecurity or web development.</p><div className="qs-contact-note"><Mail size={17} /><span>A SHORT NOTE</span><b>Please use the form to introduce yourself or share an opportunity. A direct contact route will be included with the final publication.</b></div></div><form className="qs-form" onSubmit={submit}><p className="qs-form-heading">SEND A NOTE</p><label>NAME<input required placeholder="Your name" /></label><label>EMAIL<input required type="email" placeholder="you@example.com" /></label><label>MESSAGE<textarea required placeholder="Tell me about your opportunity or idea..." /></label><button type="submit">{notePrepared ? "Note prepared" : <><Send size={15} /> Prepare note</>}</button>{notePrepared && <p className="qs-form-response">Thank you. Your note is ready for the selected contact route.</p>}</form></section>
      </main>

      <footer className="qs-footer"><span>© 2026 AVINASH K. ALL RIGHTS RESERVED.</span><div><a href="#contact" aria-label="LinkedIn"><Linkedin size={15} /></a><a href="#contact" aria-label="GitHub"><Github size={15} /></a></div><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}
