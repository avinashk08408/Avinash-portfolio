import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Programming",
    items: ["Python", "Java", "C", "C++", "Go"],
  },
  {
    title: "Security",
    items: ["Ethical Hacking", "Web Security", "Networking", "TCP/IP"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "SQL", "Linux"],
  },
];

function Skills() {
  return (
    <section className="skills section-wrap" id="skills">
      <div className="section-heading">
        <span>03 / Skills</span>
        <h2>Tools I use to learn, build, and secure.</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
