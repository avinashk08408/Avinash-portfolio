import "./Stack.css";

const capabilityGroups = [
  ["Experience layer", ["HTML", "CSS", "JavaScript", "React"]],
  ["Programming", ["Python", "Go", "Java", "C", "C++"]],
  ["Data & tools", ["SQL", "Git", "GitHub"]],
  ["Networking", ["Networking", "TCP/IP", "HTTP"]],
];

export default function Stack() {
  return (
    <section id="skills" className="ct-section qs-shell stack-component">
      <p className="ct-label">
        <span>02</span>
        CAPABILITIES
      </p>

      <div className="ct-content">
        <div className="ct-heading-row">
          <div>
            <h2>Engineering stack.</h2>
            <p>How I build, secure, and ship products.</p>
          </div>

          <span>SKILLS & TOOLS</span>
        </div>

        <div className="ct-capabilities">
          {capabilityGroups.map(([title, items], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>

              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
