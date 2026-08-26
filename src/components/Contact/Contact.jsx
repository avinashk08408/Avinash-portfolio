import { useState } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import "./Contact.css";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:avinashk08408@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/avinashk08408",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/avinash-k-201b47384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/916379301585",
    icon: Phone,
  },
];

export default function Contact() {
  const [messageReady, setMessageReady] = useState(false);

  function submit(event) {
    event.preventDefault();
    setMessageReady(true);
  }

  return (
    <section id="contact" className="ct-contact qs-shell contact-component">
      <div className="ct-contact-copy">
        <p className="ct-label">
          <span>08</span>
          CONTACT & COLLABORATION
        </p>

        <h2>
          Let’s create
          <br />
          <span>secure digital experiences.</span>
        </h2>

        <p>
          I’m passionate about cybersecurity, secure web development,
          ethical hacking and modern web technologies. I’m always open
          to internships, hackathons, collaborations and exciting projects.
        </p>

        <div className="ct-availability">
          <span>AVAILABLE FOR OPPORTUNITIES</span>
          <b>Internships · Hackathons · Open Source · Frontend Projects</b>
        </div>

        <div className="ct-contact-actions">
          <a
            className="qs-primary"
            href="https://avinashk08408.github.io/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowRight size={16} />
          </a>

          <a className="qs-text-link" href="mailto:avinashk08408@gmail.com">
            Email me
          </a>
        </div>

        <div className="ct-socials">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <form className="ct-form" onSubmit={submit}>
        <p>SEND MESSAGE</p>

        <label>
          NAME
          <input required placeholder="Your name" />
        </label>

        <label>
          EMAIL
          <input required type="email" placeholder="Your email" />
        </label>

        

        <label>
          MESSAGE
          <textarea required placeholder="write your message..." />
        </label>

        <button type="submit">
          {messageReady ? (
            "Message prepared"
          ) : (
            <>
              <Send size={15} />
              Send message
            </>
          )}
        </button>

        {messageReady && (
          <small>
            Your message is prepared for the portfolio contact route.
          </small>
        )}
      </form>
    </section>
  );
}
