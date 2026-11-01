import React from "react";
import "./Projects.css";

const projects = [
{
    id: 1,
    title: "Upgrade Impact Analyzer",
    description:
      "A VS Code extension and developer tool that scans your active project dependencies across multiple ecosystems to evaluate upgrade impact.",
    tags: ["React", "TypeScript", "VS Code Extension"],
    github: "https://github.com/avinashk08408/Upgrade-Impact-Analyzer",
  },
  {
    id: 2,
    title: "AuthShield",
    description:
      "A secure authentication system with role-based access control and protected user access.",
    tags: ["React", "Flask", "SQLite"],
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
           03 SELECTED WORK
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
                    href={project.github || "#"}
                    target={project.github ? "_blank" : undefined}
                    rel={project.github ? "noopener noreferrer" : undefined}
                    onClick={(event) => {
                      if (!project.github) {
                        event.preventDefault();
                      }
                    }}
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

          {/* <div className="projects-more">
          <a
            href={`${import.meta.env.BASE_URL}projects.html`}
            className="projects-more-link"
          >
            More projects
            <span>↗</span>
          </a>
        </div>
*/}
      </div>
    </section>
  );
}
