import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "AuthShield",
    description:
      "A secure authentication system with role-based access control and protected user access.",
    tags: ["React", "Flask", "SQLite"],
  },
  {
    id: 2,
    title: "Web Vulnerability Scanner",
    description:
      "A cybersecurity tool designed to identify common web security vulnerabilities.",
    tags: ["Python", "Flask", "Security"],
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A weather application that retrieves forecast information through an external API.",
    tags: ["Python", "API"],
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="projects-heading">
          <span className="projects-label">
            SELECTED WORK
          </span>

          <h2>Featured Projects</h2>

          <p>
            Security-focused builds, web experiments,
            and continuous learning.
          </p>
        </div>

        {/* =========================
            THREE PROJECT CARDS
        ========================= */}

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              {/* Project Visual Area */}

              <div className="project-image">
                <span className="project-number">
                  0{project.id}
                </span>
              </div>

              {/* Project Content */}

              <div className="project-card-content">

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}

                <div className="project-links">
                  <a
                    href="#"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="#"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    Live Demo ↗
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* =========================
            MORE PROJECTS
        ========================= */}

        <div className="projects-more">
          <a
            href={`${import.meta.env.BASE_URL}projects.html`}
            className="projects-more-link"
          >
            More projects
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
