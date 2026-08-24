/* Quiet Scholar: certification records read like a calm academic ledger—Ivory Paper, Ink, and Sienna emphasis. */
import "./Certifications.css";

const certifications = [
  ["01", "Cybersecurity Foundations", "Foundational study in security principles, threats, and defensive practice.", "Learning record"],
  ["02", "Web Security Practice", "Hands-on exploration of secure authentication, common vulnerabilities, and safer web development.", "Practice record"],
  ["03", "Continuous Learning", "Currently expanding practical knowledge through projects, labs, and focused technical study.", "Ongoing"],
];

export default function Certifications() {
  return <section id="certification" className="qs-section qs-shell certifications-component"><div className="qs-section-intro"><span>06</span><p>CREDENTIALS</p></div><div className="qs-section-body"><h2>Learning with intent.</h2><div className="qs-supporting-copy"><p>Every credential is part of a larger practice: understanding systems deeply, documenting the work, and applying security thinking to real interfaces.</p></div><div>{certifications.map(([number, title, description, status]) => <article className="qs-cert-row" key={title}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><em>{status}</em></article>)}</div></div></section>;
}
