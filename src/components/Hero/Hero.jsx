import { ArrowRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="ct-hero qs-shell hero-component" id="home">
      <div className="ct-hero-copy">
        <p className="qs-kicker">HELLO, I’M</p>

        <h1>
          Avinash <span>K</span>
        </h1>

        <p className="ct-role">CYBER SECURITY STUDENT</p>

        <p className="ct-lead">
          Passionate about cybersecurity, secure web development,
          ethical hacking and building modern web applications with
          beautiful user experiences.
        </p>

        <div className="qs-hero-actions">
          <a className="qs-primary" href="#projects">
            View projects <ArrowRight size={16} />
          </a>

          <a className="qs-text-link" href="#contact">
            Contact me
          </a>
        </div>
      </div>


    </section>
  );
}
