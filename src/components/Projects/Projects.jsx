import { ExternalLink } from "lucide-react";
import "./Projects.css";

const leadProject = {
  number: "01",
  title: "AuthShield",
  description:
    "A secure authentication system with role-based access control, protected routes, and structured user permissions.",
  stack: ["React", "Flask", "SQLite"],
  githubUrl: "https://github.com/avinashk08408",
  liveUrl: "",
};

const projects = [
  {
    number: "02",
    title: "Web Vulnerability Scanner",
    description:
      "A cybersecurity utility that scans websites for common web vulnerabilities and helps identify security risks.",
    stack: ["Python", "Flask"],
    githubUrl: "https://github.com/avinashk08408",
    liveUrl: "",
  },
  {
    number: "03",
    title: "Fake GitHub Repo Detector",
    description:
      "An AI-assisted project that helps identify suspicious GitHub repositories through repository-level signals.",
    stack: ["React", "AI"],
    githubUrl: "https://github.com/avinashk08408",
    liveUrl: "",
  },
  {
    number: "04",
    title: "Security Research in Progress",
    description:
      "New cybersecurity experiments, tools, and learning-focused projects will be added here.",
    stack: ["Cybersecurity"],
    githubUrl: "https://github.com/avinashk08408",
    liveUrl: "",
  },
];

function ProjectLinks({ githubUrl, liveUrl }) {
  return (
    <div className="ct-project-links">
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
        <ExternalLink size={13} />
      </a>

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          Live demo
          <ExternalLink size={13} />
        </a>
      )}
    </div>
  );
}

function ProjectTags({ stack }) {
  return (
    <div className="ct-tags">
      {stack.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="ct-section qs-shell projects-component"
    >
      <p className="ct-label">
        <span>03</span>
        SELECTED WORK
      </p>

      <div className="ct-content">
        <div className="ct-heading-row">
          <div>
            <h2>Featured projects.</h2>
            <p>
              Security-focused builds, web experiments, and continuous learning.
            </p>
          </div>
        </div>

        <article className="ct-lead-project">
          <div className="ct-lead-project-number">
            {leadProject.number}
          </div>

          <div className="ct-lead-project-content">
            <p className="ct-project-eyebrow">FEATURED BUILD</p>

            <h3>{leadProject.title}</h3>

            <p>{leadProject.description}</p>

            <ProjectTags stack={leadProject.stack} />

            <ProjectLinks
              githubUrl={leadProject.githubUrl}
              liveUrl={leadProject.liveUrl}
            />
          </div>
        </article>

        <div className="ct-project-archive-heading">
          <span>PROJECT ARCHIVE</span>
          <p>Tools, experiments, and learning in public.</p>
        </div>

        <div className="ct-project-grid">
          {projects.map((project) => (
            <article key={project.number}>
              <div className="ct-project-index">
                {project.number}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ProjectTags stack={project.stack} />

              <ProjectLinks
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </article>
          ))}
        </div>

        <p className="ct-project-closing-note">
          More security experiments and open-source work in progress.
        </p>
      </div>
    </section>
  );
}
