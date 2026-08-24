import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import "./Activity.css";

const activityLinks = [
  {
    label: "GitHub",
    description: "Projects and study practice",
    href: "https://github.com/avinashk08408",
    icon: Github,
  },
  {
    label: "LinkedIn",
    description: "Professional learning journey",
    href: "https://www.linkedin.com/in/avinash-k-201b47384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
  },
];

export default function Activity() {
  return (
    <section id="activity" className="ct-section qs-shell activity-component">
      <p className="ct-label">
        <span>07</span>
        ACTIVITY
      </p>

      <div className="ct-content">
        <div className="ct-heading-row">
          <div>
            <h2>Learning in public.</h2>
            <p>
              Follow project work and the ongoing cybersecurity learning journey.
            </p>
          </div>
        </div>

        <div className="activity-links">
          {activityLinks.map(({ label, description, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Icon size={16} />

              <span>
                <b>{label}</b>
                <small>{description}</small>
              </span>

              <ArrowUpRight size={15} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
