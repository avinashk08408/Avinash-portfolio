import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "AuthShield",
    description:
      "Secure authentication system with role-based access control and protected user access.",
    stack: ["React", "Flask", "SQLite"],
    image: `${import.meta.env.BASE_URL}assets/projects/authshield.png`,
    githubUrl: "https://github.com/avinashk08408",
    liveUrl: "",
  },
  {
    number: "02",
    title: "Web Vulnerability Scanner",
    description:
      "A cybersecurity tool that scans websites for common vulnerabilities and security issues.",
    stack: ["Python", "Flask"],
    image: `${import.meta.env.BASE_URL}assets/projects/scanner.png`,
    githubUrl: "https://github.com/avinashk08408",
    liveUrl: "",
  },
  {
    number: "03",
    title: "Fake GitHub Repo Detector",
    description:
      "An AI-assisted project for identifying suspicious GitHub repositories through repository signals.",
    stack: ["React", "AI"],
    image: `${import.meta.env.BASE_URL}assets/projects/github-detector.png`,
    githubUrl: "https://github.com/avinashk08408",
    liveUrl: "",
  },
  {
    number: "04",
    title: "Coming Soon",
    description:
      "More cybersecurity experiments, tools, and practical learning projects are in progress.",
    stack: ["Cybersecurity"],
    image: `${import.meta.env.BASE_URL}assets/projects/coming-soon.png`,
    githubUrl: "https://github.com/avinashk08408",
    liveUrl: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="ct-section qs-shell projects-component"
    >
      <p className="ct-label">
        <span>03</span>
        PORTFOLIO
      </p>

      <div className="ct-content">
        <div className="ct-heading-row">
          <h2>Featured projects.</h2>

          <p>
            Security-focused builds, web experiments, and continuous learning.
          </p>
        </div>

        <div className="project-card-grid">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card"
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          More security experiments and open-source work in progress.
        </p>
      </div>
    </section>
  );
}
