/**
 * Quiet Scholar content edition for Avinash K.
 * Preserves the approved minimal-classic theme while carrying the supplied portfolio's complete content and structure.
 */
import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Menu, Phone, Send, X } from "lucide-react";

const navItems = [["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Experience", "experience"], ["Contact", "contact"]];
const capabilityGroups = [
  ["Experience layer", ["HTML", "CSS", "JavaScript", "React"]],
  ["Programming", ["Python", "Go", "Java", "C", "C++"]],
  ["Data & tools", ["SQL", "Git", "GitHub"]],
  ["Networking", ["Networking", "TCP/IP", "HTTP"]],
];
const projects = [
  ["AuthShield", "Secure authentication system with role-based access control.", ["React", "Flask", "SQLite"]],
  ["Web Vulnerability Scanner", "Scans websites for common vulnerabilities.", ["Python", "Flask"]],
  ["Fake GitHub Repo Detector", "Detects fake GitHub repositories using AI.", ["React", "AI"]],
  ["Coming Soon", "More cybersecurity projects.", ["Cyber"]],
];
const records = [
  ["B.E Cyber Security", "SRM Valliammai Engineering College", "2025 – Present · Pursuing"],
  ["Higher Secondary", "Don Bosco Matric Hr. Sec. School", "2025 · 85%"],
  ["Secondary School", "Don Bosco Matric Hr. Sec. School", "2023 · 90%"],
];

function SectionLabel({ number, label }) {
  return <p className="ct-label"><span>{number}</span>{label}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageReady, setMessageReady] = useState(false);
  const submit = (event) => { event.preventDefault(); setMessageReady(true); };

  return (
    <div className="quiet-scholar content-edition" id="home">
      <header className="qs-nav">
        <a href="#home" className="qs-brand"><span className="qs-seal" aria-hidden="true">AK</span><span>AVINASH K. <i>/</i> PORTFOLIO</span></a>
        <nav className="qs-nav-links" aria-label="Primary navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <button className="qs-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={21} />}</button>
      </header>
      {menuOpen && <nav className="qs-mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowRight size={15} /></a>)}</nav>}

      <main>
        <section className="ct-hero qs-shell">
          <div className="ct-hero-copy"><p className="qs-kicker">HELLO, I’M</p><h1>Avinash <span>K.</span></h1><p className="ct-role">CYBER SECURITY STUDENT</p><p className="ct-lead">Passionate about cybersecurity, secure web development, ethical hacking and building modern web applications with beautiful user experiences.</p><div className="qs-hero-actions"><a className="qs-primary" href="#projects">View projects <ArrowRight size={16} /></a><a className="qs-text-link" href="#contact">Contact me</a></div></div>
          <aside className="ct-hero-profile"><span className="ct-initials">AK</span><div><p>PROFILE</p><h2>Cyber Security Student<br />& Web Developer</h2><span>Security · Web · Systems</span></div></aside>
        </section>

        <section id="about" className="ct-section qs-shell"><SectionLabel number="01" label="PROFILE" /><div className="ct-content about-content"><div className="ct-about-copy"><h2>Who I am.</h2><h3>Cyber Security Student & Web Developer</h3><p>I’m <strong>Avinash</strong>, a Cyber Security student and web developer passionate about crafting <strong>modern digital experiences</strong> and exploring the security behind them. I enjoy transforming ideas into intuitive, purposeful web applications while continuously deepening my understanding of cybersecurity, networking, and application security.</p><p>I’m driven by curiosity and a hands-on mindset — building, experimenting, and refining with every project. For me, technology isn’t just about writing code; it’s about understanding systems, solving meaningful problems, and creating solutions that are both <strong>functional and secure.</strong></p><blockquote>“The best way out is always through.”<cite>— Robert Frost</cite></blockquote></div><div className="ct-stats"><article><strong>4+</strong><span>Projects</span></article><article><strong>1+</strong><span>Hackathons</span></article><article><strong>15+</strong><span>Technologies</span></article></div></div></section>

        <section id="skills" className="ct-section qs-shell"><SectionLabel number="02" label="CAPABILITIES" /><div className="ct-content"><div className="ct-heading-row"><div><h2>Engineering stack.</h2><p>How I build, secure, and ship products.</p></div><span>SKILLS & TOOLS</span></div><div className="ct-capabilities">{capabilityGroups.map(([title, items], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

        <section id="projects" className="ct-section qs-shell"><SectionLabel number="03" label="PORTFOLIO" /><div className="ct-content"><div className="ct-heading-row"><div><h2>Featured projects.</h2><p>Selected work across cybersecurity and web development.</p></div></div><div className="ct-project-grid">{projects.map(([title, description, tags], index) => <article key={title}><div className="ct-project-index">0{index + 1}</div><h3>{title}</h3><p>{description}</p><div className="ct-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="ct-project-links"><a href="https://github.com/avinashk08408" target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a><span>Live Demo</span></div></article>)}</div></div></section>

        <section id="experience" className="ct-section qs-shell"><SectionLabel number="04" label="ACADEMIC PASSPORT" /><div className="ct-content"><div className="ct-heading-row"><div><h2>Verified learning records.</h2><p>Education and milestones in the learning journey.</p></div></div><div className="ct-records">{records.map(([title, institution, outcome], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{institution}</p></div><b>{outcome}</b></article>)}</div></div></section>

        <section id="contact" className="ct-contact qs-shell"><div className="ct-contact-copy"><SectionLabel number="05" label="CONTACT & COLLABORATION" /><h2>Let’s create<br /><span>secure digital experiences.</span></h2><p>I’m passionate about cybersecurity, secure web development, ethical hacking and modern web technologies. I’m always open to internships, hackathons, collaborations and exciting projects.</p><div className="ct-availability"><span>AVAILABLE FOR OPPORTUNITIES</span><b>Internships · Hackathons · Open Source · Frontend Projects</b></div><div className="ct-contact-actions"><a className="qs-primary" href="https://avinashk08408.github.io/resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowRight size={16} /></a><a className="qs-text-link" href="mailto:avinashk08408@gmail.com">Email me</a></div><div className="ct-socials"><a href="mailto:avinashk08408@gmail.com" aria-label="Email"><Mail size={16} /></a><a href="https://github.com/avinashk08408" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a><a href="https://www.linkedin.com/in/avinash-k-201b47384?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="https://wa.me/916379301585" target="_blank" rel="noreferrer" aria-label="WhatsApp"><Phone size={16} /></a></div></div><form className="ct-form" onSubmit={submit}><p>SEND MESSAGE</p><label>NAME<input required placeholder="Your name" /></label><label>EMAIL<input required type="email" placeholder="Your email" /></label><label>SUBJECT<input required placeholder="Subject" /></label><label>MESSAGE<textarea required placeholder="Tell me about your project..." /></label><button type="submit">{messageReady ? "Message prepared" : <><Send size={15} /> Send message</>}</button>{messageReady && <small>Your message is prepared for the portfolio contact route.</small>}</form></section>
      </main>

      <footer className="ct-footer"><div><strong>Avinash K</strong><span>Cyber Security Student · Frontend Developer</span></div><nav>{navItems.slice(0, 4).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><a href="https://github.com/avinashk08408" target="_blank" rel="noreferrer"><Github size={15} /></a><p>© 2026 Avinash K · All Rights Reserved</p></footer>
    </div>
  );
}
