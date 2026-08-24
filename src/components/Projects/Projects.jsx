import { ExternalLink } from "lucide-react";
import "./Projects.css";

const projects = [
  [
    "AuthShield",
    "Secure authentication system with role-based access control.",
    ["React", "Flask", "SQLite"],
  ],
  [
    "Web Vulnerability Scanner",
    "Scans websites for common vulnerabilities.",
    ["Python", "Flask"],
  ],
  [
    "Fake GitHub Repo Detector",
    "Detects fake GitHub repositories using AI.",
    ["React", "AI"],
  ],
  ["Coming Soon", "More cybersecurity projects.", ["Cyber"]],
];

export default function Projects() {
  return (
    <section id="projects" className="ct-section qs-shell projects-component">
      <p className="ct-label">
        <span>03</span>
        PORTFOLIO
      </p>

      <div className="ct-content">
        <div className="ct-heading-row">
          <div>
            <h2>Featured projects.</h2>
            <p>Selected work across cybersecurity and web development.</p>
          </div>
        </div>

        <div className="ct-project-grid">
          {projects.map(([title, description, tags], index) => (
            <article key={title}>
              <div className="ct-project-index">0{index + 1}</div>

              <h3>{title}</h3>
              <p>{description}</p>

              <div className="ct-tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="ct-project-links">
                <a
                  href="https://github.com/avinashk08408"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ExternalLink size={13} />
                </a>

                <span>Live Demo</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
