import { Github } from "lucide-react";
import "./Footer.css";

const footerLinks = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
];

export default function Footer() {
  return (
    <footer className="ct-footer footer-component">
      <div>
        <strong>Avinash K</strong>
        <span>Cyber Security Student · Frontend Developer</span>
      </div>

      <nav>
        {footerLinks.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>

      <a
        href="https://github.com/avinashk08408"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <Github size={15} />
      </a>

      <p>© 2026 Avinash K · All Rights Reserved</p>
    </footer>
  );
}
