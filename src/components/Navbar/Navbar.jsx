import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import "./Navbar.css";

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="qs-nav navbar-component">
        <a href="#home" className="qs-brand">
          <span className="qs-seal" aria-hidden="true">
            
          </span>

          <span>
           <i> AVINASH K </i> 
          </span>
        </a>

        <nav className="qs-nav-links" aria-label="Primary navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className="qs-menu"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={21} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="qs-mobile-nav navbar-mobile" aria-label="Mobile navigation">
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <ArrowRight size={15} />
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
