import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";

const allProjects = [
  {
    id: 1,
    title: "Project One",
    description: "Project description.",
    tags: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Project description.",
    tags: ["Python", "Security"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Project description.",
    tags: ["Flask", "SQLite"],
  },
  {
    id: 4,
    title: "Project Four",
    description: "Project description.",
    tags: ["Python", "API"],
  },
  {
    id: 5,
    title: "Project Five",
    description: "Project description.",
    tags: ["React", "Node"],
  },
  {
    id: 6,
    title: "Project Six",
    description: "Project description.",
    tags: ["Cybersecurity", "Web"],
  },
  {
    id: 7,
    title: "Project Seven",
    description: "Project description.",
    tags: ["Linux", "Security"],
  },
  {
    id: 8,
    title: "Project Eight",
    description: "Project description.",
    tags: ["Python", "Automation"],
  },
  {
    id: 9,
    title: "Project Nine",
    description: "Project description.",
    tags: ["Full Stack", "Web"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="all-projects-page">
      <div className="all-projects-container">

        <div className="all-projects-header">
          <Link to="/" className="back-button">
            ← Back
          </Link>

          <span>PROJECT ARCHIVE</span>

          <h1>All Projects</h1>

          <p>
            A collection of selected projects, experiments and technical work.
          </p>
        </div>

        <div className="all-projects-grid">
          {allProjects.map((project) => (
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

      </div>
    </main>
  );
}
