import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Your existing project description goes here.",
    tags: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Your existing project description goes here.",
    tags: ["Python", "Security"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Your existing project description goes here.",
    tags: ["Flask", "SQLite"],
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <span className="projects-label">SELECTED WORK</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-content">

                <span className="project-number">
                  {String(project.id).padStart(2, "0")}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="projects-more-wrapper">

          <div className="projects-more-text">
            <p>
              Explore more of my work, experiments, and technical projects
              built across development and cybersecurity.
            </p>
          </div>

          <a
            href="/projects.html"
            className="projects-more-button"
          >
            <span>More Projects</span>
            <span className="projects-arrow">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

