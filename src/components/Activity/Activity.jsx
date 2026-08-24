/* Quiet Scholar: activity is presented as a transparent public index—quiet, useful, and free of fabricated metrics or testimonials. */
import { FiArrowUpRight, FiGithub, FiLinkedin, FiCode } from "react-icons/fi";
import "./Activity.css";

const activity = [
  [FiGithub, "GitHub", "Projects, experiments, and source code", "https://github.com/avinashk08408"],
  [FiLinkedin, "LinkedIn", "Professional notes and conversations", "https://www.linkedin.com/in/avinash-k-201b47384"],
  [FiCode, "LeetCode", "Problem solving and steady practice", "https://leetcode.com/"],
];

export default function Activity() {
  return <section id="activity" className="qs-section qs-shell activity-component"><div className="qs-section-intro"><span>08</span><p>PUBLIC ACTIVITY</p></div><div className="qs-section-body"><h2>Keep the work visible.</h2><div className="qs-supporting-copy"><p>Selected public spaces where I document progress, share work, and continue learning in the open.</p></div><div className="qs-activity-list">{activity.map(([Icon, title, description, href]) => <a key={title} href={href} target="_blank" rel="noreferrer"><Icon size={17} /><span><h3>{title}</h3><p>{description}</p></span><FiArrowUpRight size={15} /></a>)}</div></div></section>;
}
