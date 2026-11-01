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

const contactEmail = "avinashk08408@gmail.com";

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${contactEmail}`,
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

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = `Portfolio message from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailtoLink = [
      `mailto:${contactEmail}`,
      `?subject=${encodeURIComponent(subject)}`,
      `&body=${encodeURIComponent(body)}`,
    ].join("");

    setMessageReady(true);
    window.location.href = mailtoLink;
  }

  return (
    <section id="contact" className="ct-contact qs-shell contact-component">
      <div className="ct-contact-copy">
        <p className="ct-label">
          <span>08 CONTACT & COLLABORATION</span>
          
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

          <a className="qs-text-link" href={`mailto:${contactEmail}`}>
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
          <input name="name" required placeholder="Your name" />
        </label>

        <label>
          EMAIL
          <input
            name="email"
            required
            type="email"
            placeholder="Your email"
          />
        </label>

        <label>
          MESSAGE
          <textarea
            name="message"
            required
            placeholder="Write your message..."
          />
        </label>

        <button type="submit">
          <Send size={15} />
          Send message
        </button>

        {messageReady && (
          <small>
            Your email app has been opened with this message addressed to
            Avinash.
          </small>
        )}
      </form>
    </section>
  );
}
