import React from "react";
import "./ProjectsPage.css";

const projects = [
  {
    id: "01",
    title: "AuthShield",
    description:
      "Secure authentication system with role-based access control and protected user access.",
    tags: ["React", "Flask", "SQLite"],
  },
  {
    id: "02",
    title: "Web Vulnerability Scanner",
    description:
      "A cybersecurity tool designed to identify common web security vulnerabilities.",
    tags: ["Python", "Flask"],
  },
  {
    id: "03",
    title: "Weather Forecast App",
    description:
      "A weather application that retrieves forecast information through an external API.",
    tags: ["Python", "API"],
  },
  {
    id: "04",
    title: "Encrypted File Sharing",
    description:
      "A secure file-sharing project focused on encrypted transfers and controlled access.",
    tags: ["Python", "Security"],
  },
  {
    id: "05",
    title: "Browser History Analyzer",
    description:
      "A utility for analyzing browser history data and presenting useful activity insights.",
    tags: ["Python", "Data"],
  },
  {
    id: "06",
    title: "Fake Account Detector",
    description:
      "An experimental cybersecurity project focused on detecting suspicious account behaviour.",
    tags: ["Python", "Security"],
  },
  {
    id: "07",
    title: "Location Tracker",
    description:
      "A learning project exploring location-based application architecture and data handling.",
    tags: ["Python", "Web"],
  },
  {
    id: "08",
    title: "Security Dashboard",
    description:
      "A dashboard concept for presenting security metrics and system insights.",
    tags: ["React", "Security"],
  },
  {
    id: "09",
    title: "Cybersecurity Toolkit",
    description:
      "A collection of security utilities created while learning practical cybersecurity.",
    tags: ["Python", "Linux"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <div className="projects-page-container">

        <a href="/" className="projects-back">
          ← Back to portfolio
        </a>

        <header className="projects-page-header">
          <span>03 PORTFOLIO</span>

          <h1>All Projects</h1>

          <p>
            A collection of security-focused builds, web experiments,
            and technical work.
          </p>
        </header>

        <div className="projects-page-grid">
          {projects.map((project) => (
            <article className="projects-page-card" key={project.id}>

              <div className="projects-page-image">
                <span>{project.id}</span>
              </div>

              <div className="projects-page-content">

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="projects-page-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="projects-page-links">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Live Demo ↗
                  </a>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
