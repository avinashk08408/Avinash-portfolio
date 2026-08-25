import { useRef } from "react";
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
  const projectRailRef = useRef(null);

  function scrollProjects(direction) {
    const rail = projectRailRef.current;

    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * rail.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="projects"
      className="qs-shell projects-carousel-section"
    >
      <div className="projects-carousel-header">
        <div>
          <p className="ct-label">
            <span>03</span>
            PORTFOLIO
          </p>

          <h2>Featured projects.</h2>

          <p className="projects-carousel-intro">
            Security-focused builds, web experiments, and continuous learning.
          </p>
        </div>

        <div className="projects-carousel-controls">
          <button
            type="button"
            onClick={() => scrollProjects(-1)}
            aria-label="Show previous projects"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollProjects(1)}
            aria-label="Show next projects"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={projectRailRef}
        className="projects-scroll-rail"
        aria-label="Featured projects"
      >
        {projects.map((project) => (
          <article
            key={project.number}
            className="projects-scroll-card"
          >
            <div className="projects-card-image">
              <img
                src={project.image}
                alt={project.title}
              />

              <span>{project.number}</span>
            </div>

            <div className="projects-card-copy">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="projects-card-tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="projects-card-links">
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

      <p className="projects-carousel-note">
        Swipe through the archive or use the arrow buttons to explore more work.
      </p>
    </section>
  );
}
