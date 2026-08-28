import React from "react";
import "./Projects.css";

const projects = [
  {
    id: "01",
    title: "AuthShield",
    description:
      "Secure authentication system with role-based access control and protected user access.",
    tags: ["React", "Flask", "SQLite"],
    github: "#",
    demo: "#",
  },
  {
    id: "02",
    title: "Web Vulnerability Scanner",
    description:
      "A cybersecurity tool that scans websites for common vulnerabilities and security issues.",
    tags: ["Python", "Flask"],
    github: "#",
    demo: "#",
  },
  {
    id: "03",
    title: "Weather Forecast App",
    description:
      "A clean weather application that retrieves real-time forecast information through an external API.",
    tags: ["Python", "API"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* SECTION HEADER */}
        <header className="projects-header">
          <span className="projects-eyebrow">03 PORTFOLIO</span>

          <h2>Featured projects</h2>

          <p>
            Security-focused builds, web experiments, and continuous learning.
          </p>
        </header>

        {/* THREE PROJECT CARDS */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>

              {/* IMAGE / VISUAL AREA */}
              <div className="project-image">
                <span className="project-image-number">
                  {project.id}
                </span>
              </div>

              {/* INFORMATION AREA */}
              <div className="project-info">

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github}>GitHub ↗</a>
                  <a href={project.demo}>Live Demo ↗</a>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* MORE PROJECTS BAR */}
        <div className="projects-more">

          <div className="projects-more-message">
            Explore more projects, experiments, and technical work across
            development and cybersecurity.
          </div>

          <a
            href={`${import.meta.env.BASE_URL}projects.html`}
            className="projects-more-button"
          >
            More Projects
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}
