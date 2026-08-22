/**
 * Reference-informed personal portfolio for Avinash K.
 * The layout follows the reference's approachable student-profile flow while preserving Avinash's own content and AK identity.
 */
import { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Menu, Send, X } from "lucide-react";

const nav = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Interests", "interests"], ["Projects", "projects"], ["Learning", "learning"], ["Goals", "goals"], ["Contact", "contact"],
];

const skillGroups: Array<[string, string[]]> = [
  ["Web fundamentals", ["HTML", "CSS", "JavaScript"]],
  ["Cybersecurity", ["Security basics", "Secure web practices", "Security tools"]],
  ["Development workflow", ["Git & GitHub", "Responsive design", "Problem solving"]],
  ["Systems", ["Operating systems", "Networks", "Databases"]],
];

const interests = [
  ["01", "Cybersecurity", "Learning how systems and data are protected through practical security principles."],
  ["02", "Secure web development", "Exploring how thoughtful interface work and safer engineering can work together."],
  ["03", "Security tools", "Building familiarity with the tools, workflows, and methods used in security practice."],
  ["04", "Programming", "Strengthening logic, structure, and problem-solving through regular coding practice."],
  ["05", "Computer networks", "Understanding how systems communicate and where security controls matter."],
  ["06", "Digital forensics", "Developing curiosity about evidence, investigation, and secure digital systems."],
];

const learning = [
  ["01", "Cybersecurity foundations", "Active study"], ["02", "Secure web development", "Active study"], ["03", "Security tools & lab exercises", "Active study"], ["04", "Systems & networking", "Active study"],
];

function MiniLabel({ children }: { children: string }) {
  return <p className="mini-label"><span /> {children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return (
    <div className="profile-page" id="home">
      <header className="profile-nav">
        <a href="#home" className="profile-brand" aria-label="Avinash K portfolio home"><span className="ak-avatar-icon" aria-hidden="true"><i /><b /></span> AVINASH K.</a>
        <nav className="profile-nav-links" aria-label="Primary navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <button className="profile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={21} />}</button>
      </header>
      {menuOpen && <nav className="profile-mobile-nav" aria-label="Mobile navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<ArrowRight size={16} /></a>)}</nav>}

      <main>
        <section className="profile-hero section-shell">
          <div className="hero-intro">
            <MiniLabel>PORTFOLIO</MiniLabel>
            <div className="hero-name-row">
              <div className="hero-avatar" aria-label="Avinash K monogram"><img src="/manus-storage/avinash-ak-field-seal_300c0181.png" alt="AK field seal" /></div>
              <div><h1>Avinash <strong>K.</strong></h1><p className="role-line">CYBERSECURITY STUDENT</p></div>
            </div>
            <p className="hero-copy">I am a Cybersecurity student at SRM Valliammai Engineering College with a strong interest in cybersecurity, secure web development, and the tools that help build safer digital systems.</p>
            <div className="hero-actions"><a href="#projects" className="filled-button">View my projects <ArrowRight size={16} /></a><a href="#contact" className="outlined-button">Contact me</a></div>
            <div className="hero-socials"><a href="#contact" aria-label="LinkedIn profile"><Linkedin size={18} /></a><a href="#contact" aria-label="GitHub profile"><Github size={18} /></a></div>
          </div>
          <aside className="profile-summary">
            <p className="summary-title">PROFILE SUMMARY <i /></p>
            <div className="summary-line"><span>ROLE</span><strong>Cybersecurity student</strong></div>
            <div className="summary-line"><span>COLLEGE</span><strong>SRM Valliammai</strong></div>
            <div className="summary-line"><span>FOCUS</span><strong>Cybersecurity & web</strong></div>
            <div className="summary-line"><span>LOCATION</span><strong>Tamil Nadu, India</strong></div>
            <p className="summary-footer">Open to internships & learning opportunities</p>
          </aside>
        </section>

        <section id="about" className="section-shell profile-section about-section">
          <div className="section-rail"><MiniLabel>ABOUT</MiniLabel></div>
          <div className="section-main about-main"><div><h2>A student building toward <strong>cybersecurity.</strong></h2><p>I am pursuing Cybersecurity at SRM Valliammai Engineering College. My aim is to build practical knowledge across security fundamentals, secure software development, and the systems that support reliable digital experiences.</p><p>I am continuously improving through academic learning, independent study, hands-on practice, and the projects I document along the way.</p></div><div className="fact-grid"><div><span>ROLE</span><strong>Cybersecurity student</strong></div><div><span>LEVEL</span><strong>Learning & building</strong></div><div><span>FOCUS</span><strong>Security, web, tools</strong></div><div><span>AVAILABILITY</span><strong>Open to opportunities</strong></div></div></div>
        </section>

        <section className="section-shell profile-section education-section">
          <div className="section-rail"><MiniLabel>EDUCATION</MiniLabel></div>
          <div className="section-main"><h2>Academic <strong>background.</strong></h2><div className="education-card"><div><span>PROGRAM</span><strong>Engineering / Cybersecurity</strong></div><div><span>INSTITUTION</span><strong>SRM Valliammai Engineering College</strong></div><div><span>CURRENT FOCUS</span><strong>Cybersecurity & secure web development</strong></div><div><span>LOCATION</span><strong>Tamil Nadu, India</strong></div></div></div>
        </section>

        <section id="skills" className="section-shell profile-section skills-section">
          <div className="section-rail"><MiniLabel>SKILLS</MiniLabel></div>
          <div className="section-main"><h2>Technical <strong>skills.</strong></h2><p className="section-intro">Skills and areas of practice being built through coursework, hands-on learning, and project work.</p><div className="skill-groups">{skillGroups.map(([title, items]) => <article key={title}><h3>{title}</h3><div>{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div>
        </section>

        <section id="interests" className="section-shell profile-section interests-section">
          <div className="section-rail"><MiniLabel>INTERESTS</MiniLabel></div>
          <div className="section-main"><h2>Areas of <strong>interest.</strong></h2><p className="section-intro">Fields I’m actively exploring and where I want to build deeper technical ability.</p><div className="interest-grid">{interests.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
        </section>

        <section id="projects" className="section-shell profile-section projects-section">
          <div className="section-rail"><MiniLabel>PROJECTS</MiniLabel></div>
          <div className="section-main"><h2>Featured <strong>work.</strong></h2><article className="feature-project"><div className="project-mark"><span>AK</span><i /></div><div className="project-info"><p>PERSONAL PORTFOLIO</p><h3>Cybersecurity portfolio website</h3><p className="project-copy">A personal portfolio designed to document my cybersecurity learning journey, web development interests, and future technical work in a clear, professional format.</p><div className="project-tags"><span>Web development</span><span>Portfolio</span><span>Active project</span></div></div><a href="#contact" className="project-link">Project notes <ArrowRight size={16} /></a></article></div>
        </section>

        <section id="learning" className="section-shell profile-section learning-section">
          <div className="section-rail"><MiniLabel>LEARNING</MiniLabel></div>
          <div className="section-main"><h2>Courses & continuous <strong>learning.</strong></h2><p className="section-intro">A current record of areas I am studying to strengthen technical understanding.</p><div className="learning-list">{learning.map(([number, title, state]) => <article key={number}><span>{number}</span><h3>{title}</h3><small>{state}</small></article>)}</div></div>
        </section>

        <section className="section-shell profile-section beyond-section">
          <div className="section-rail"><MiniLabel>BEYOND ACADEMICS</MiniLabel></div>
          <div className="section-main"><h2>Always <strong>exploring.</strong></h2><div className="beyond-list"><span>Reading technical documentation</span><span>Improving programming skills</span><span>Exploring cybersecurity topics</span><span>Building clearer web interfaces</span></div></div>
        </section>

        <section id="goals" className="section-shell profile-section goals-section">
          <div className="section-rail"><MiniLabel>GOALS</MiniLabel></div>
          <div className="section-main goals-main"><div><h2>Building a practical <strong>roadmap.</strong></h2><h3>Short-term goals</h3><ul><li>Strengthen cybersecurity and programming fundamentals.</li><li>Build practical projects and document the learning behind them.</li><li>Develop familiarity with cybersecurity tools and secure web workflows.</li><li>Gain hands-on technical experience through consistent practice.</li></ul></div><div className="long-goal"><span>LONG-TERM DIRECTION</span><p>My long-term goal is to become a skilled cybersecurity professional, capable of contributing to safer digital systems through strong fundamentals, practical problem-solving, and thoughtful technical work.</p></div></div>
        </section>

        <section id="contact" className="contact-section section-shell">
          <div className="contact-copy"><MiniLabel>CONTACT</MiniLabel><h2>Let’s <strong>connect.</strong></h2><p>Open to internships, collaborations, and conversations around cybersecurity and web development.</p><div className="contact-details"><p><Mail size={16} /><span>EMAIL</span><strong>Email address to be added</strong></p><p><MapPin size={16} /><span>LOCATION</span><strong>Tamil Nadu, India</strong></p><p><Linkedin size={16} /><span>LINKEDIN</span><strong>Profile link to be added</strong></p><p><Github size={16} /><span>GITHUB</span><strong>Profile link to be added</strong></p></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><label>NAME<input name="name" placeholder="Your name" required /></label><label>EMAIL<input type="email" name="email" placeholder="you@example.com" required /></label><label>MESSAGE<textarea name="message" placeholder="Write your message..." required /></label><button type="submit">{sent ? "Message prepared" : <><Send size={15} /> Prepare message</>}</button>{sent && <p className="form-note">Thank you. Add your preferred email address before publishing to receive messages directly.</p>}</form>
        </section>
      </main>

      <footer className="profile-footer"><span>© 2026 AVINASH K. ALL RIGHTS RESERVED.</span><div><a href="#contact" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="#contact" aria-label="GitHub"><Github size={16} /></a></div></footer>
    </div>
  );
}
