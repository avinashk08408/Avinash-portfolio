/* Quiet Scholar: résumé presentation is concise, editorial, and action-led without introducing a new visual system. */
import { FiArrowUpRight } from "react-icons/fi";
import "./Resume.css";

export default function Resume() {
  return <section id="resume" className="qs-section qs-shell resume-component"><div className="qs-section-intro"><span>07</span><p>RÉSUMÉ</p></div><div className="qs-section-body qs-resume"><div><h2>A focused record of practice.</h2><p>For a fuller view of my education, technical interests, projects, and current direction, view the résumé as a concise companion to this portfolio.</p></div><a className="qs-resume-link" href="/assets/Avinash-Resume.pdf" target="_blank" rel="noreferrer">View résumé <FiArrowUpRight size={15} /></a></div></section>;
}
