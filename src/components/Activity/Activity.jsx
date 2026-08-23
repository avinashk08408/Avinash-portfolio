import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import "./Activity.css";

export default function Activity() {
  return <section id="activity" className="ct-section qs-shell activity-component"><p className="ct-label"><span>07</span>ACTIVITY</p><div className="ct-content"><div className="ct-heading-row"><div><h2>Learning in public.</h2><p>Follow project work and the ongoing cybersecurity learning journey.</p></div></div><div className="activity-links"><a href="https://github.com/avinashk08408" target="_blank" rel="noreferrer"><Github size={16} /><span><b>GitHub</b><small>Projects and study practice</small></span><ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/avinash-k-201b47384?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><Linkedin size={16} /><span><b>LinkedIn</b><small>Professional learning journey</small></span><ArrowUpRight size={15} /></a></div></div></section>;
}
