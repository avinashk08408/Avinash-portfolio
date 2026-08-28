import "./Stack.css";

const capabilityGroups = [
  
  {
    number: "01",
    title: "Web engineering",
    description:
      "Building clear, responsive interfaces and connected web applications.",
    tools: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    number: "02",
    title: "Development practice",
    description:
      "Organising code, working with data, and improving projects through iteration.",
    tools: ["Git", "GitHub", "Python", "SQL", "SQLite"],
  },
  {
    number: "03",
    title: "Security foundations",
    description:
      "Learning to identify, understand, and reduce common web-security risks.",
    tools: ["Linux", "Networking", "OWASP", "Burp Suite", "Nmap"],
  },
];

export default function Stack() {
  return (
    <section
      id="skills"
      className="qs-shell stack-component"
    >
      <div className="stack-header">
        <p className="stack-label">
          <span>02</span>
          CAPABILITIES
        </p>

        <h2>Technology stack</h2>

        <p className="stack-intro">
          A practical foundation across cybersecurity, web engineering,
          and continuous technical learning.
        </p>
      </div>

      <div className="stack-record-list">
        {capabilityGroups.map((group) => (
          <article
            key={group.number}
            className="stack-record-row"
          >
            <span className="stack-record-number">
              {group.number}
            </span>

            <div className="stack-record-copy">
              <h3>{group.title}</h3>

              <p>{group.description}</p>
            </div>

            <div className="stack-record-tools">
              {group.tools.map((tool, index) => (
                <span key={tool}>
                  {tool}

                  {index < group.tools.length - 1 && " / "}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
