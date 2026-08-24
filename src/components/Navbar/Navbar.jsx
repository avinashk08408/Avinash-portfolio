import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

const navigation = [["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Journey", "journey"], ["Contact", "contact"]];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <><header className="qs-nav navbar-component"><a href="#home" className="qs-brand"><span className="qs-seal" aria-hidden="true">AK</span><span>AVINASH K. <i>/</i> PORTFOLIO</span></a><nav className="qs-nav-links" aria-label="Primary navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><button className="qs-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <HiX /> : <HiMenu />}</button></header>{menuOpen && <nav className="qs-mobile-nav navbar-mobile" aria-label="Mobile navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<span aria-hidden="true">→</span></a>)}</nav>}</>;
}
