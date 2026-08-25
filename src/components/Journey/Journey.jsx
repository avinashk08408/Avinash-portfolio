import "./Journey.css";

const academicFoundations = [
  {
    year: "2025",
    title: "Higher Secondary",
    institution: "Don Bosco Matric Hr. Sec. School",
    score: "85%",
  },
  {
    year: "2023",
    title: "Secondary School",
    institution: "Don Bosco Matric Hr. Sec. School",
    score: "90%",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="qs-shell journey-component"
    >
      <div className="journey-header">
        <p className="journey-label">
          <span>04</span>
          ACADEMIC RECORD
        </p>

        <h2>Learning journey.</h2>

        <p className="journey-intro">
          A record of the foundations and focused study shaping my work
          in cybersecurity.
        </p>
      </div>

      <div className="journey-content">
        <p className="journey-section-label">
          CURRENT CHAPTER
        </p>

        <article className="journey-current-record">
          <span className="journey-current-date">
            2025 — PRESENT
          </span>

          <div className="journey-current-copy">
            <h3>B.E. Cyber Security</h3>

            <p className="journey-current-institution">
              SRM Valliammai Engineering College
            </p>

            <p className="journey-current-note">
              Building foundations in web security and development.
            </p>
          </div>

          <span className="journey-status">
            PURSUING
          </span>
        </article>

        <div className="journey-foundations">
          <p className="journey-section-label">
            ACADEMIC FOUNDATIONS
          </p>

          <div className="journey-school-list">
            {academicFoundations.map((record) => (
              <article
                key={record.title}
                className="journey-school-row"
              >
                <span className="journey-school-year">
                  {record.year}
                </span>

                <h3>{record.title}</h3>

                <p>{record.institution}</p>

                <span className="journey-school-score">
                  {record.score}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="journey-direction">
          <strong>CURRENT DIRECTION</strong>

          <p>
            Focused on web security, cybersecurity tools,
            and practical web development.
          </p>
        </div>
      </div>
    </section>
  );
}
