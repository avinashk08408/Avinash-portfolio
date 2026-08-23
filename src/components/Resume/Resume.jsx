import { ArrowRight } from "lucide-react";
import "./Resume.css";

export default function Resume() {
  return <section id="resume" className="ct-section qs-shell resume-component"><p className="ct-label"><span>06</span>RÉSUMÉ</p><div className="ct-content resume-content"><div><h2>A concise professional summary.</h2><p>A résumé outlining technical interests, learning record, and focused project work.</p></div><a className="qs-primary" href="https://avinashk08408.github.io/resume.pdf" target="_blank" rel="noreferrer">View résumé <ArrowRight size={16} /></a></div></section>;
}
