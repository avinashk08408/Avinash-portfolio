import "./Journey.css";
const records = [["B.E Cyber Security", "SRM Valliammai Engineering College", "2025 – Present · Pursuing"], ["Higher Secondary", "Don Bosco Matric Hr. Sec. School", "2025 · 85%"], ["Secondary School", "Don Bosco Matric Hr. Sec. School", "2023 · 90%"]];

export default function Journey() {
  return <section id="journey" className="ct-section qs-shell journey-component"><p className="ct-label"><span>04</span>ACADEMIC PASSPORT</p><div className="ct-content"><div className="ct-heading-row"><div><h2>Learning journey.</h2><p>Education and milestones in the learning journey.</p></div></div><div className="ct-records">{records.map(([title, institution, outcome], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{institution}</p></div><b>{outcome}</b></article>)}</div></div></section>;
}
