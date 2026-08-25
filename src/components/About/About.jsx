import "./About.css";

const statistics = [
  ["4+", "Projects"],
  ["1+", "Hackathons"],
  ["15+", "Technologies"],
];

export default function About() {
  return (
    <section id="about" className="ct-section qs-shell about-component">
      <p className="ct-label">
        <span>01</span>
        PROFILE
      </p>

      <div className="ct-content about-content">

        {/* LEFT: PHOTO */}
        <div className="about-photo-wrap">
          <img
            src="/sample2.github.io/IMG_20251205_202928.jpg"
            alt="Avinash K"
            className="about-photo"
          />
        </div>

        {/* RIGHT: ABOUT CONTENT */}
        <div className="ct-about-copy">

          <h2>Who I am</h2>

          <h3>Cyber Security Student & Web Developer</h3>

          <p>
            I’m <strong>Avinash</strong>, a Cyber Security student and web
            developer passionate about crafting{" "}
            <strong>modern digital experiences</strong> and exploring the
            security behind them. I enjoy transforming ideas into intuitive,
            purposeful web applications while continuously deepening my
            understanding of cybersecurity, networking, and application
            security.
          </p>

          <p>
            I’m driven by curiosity and a hands-on mindset — building,
            experimenting, and refining with every project. For me, technology
            isn’t just about writing code; it’s about understanding systems,
            solving meaningful problems, and creating solutions that are both{" "}
            <strong>functional and secure.</strong>
          </p>

          {/* STATISTICS */}
          <div className="ct-stats">
            {statistics.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>

          {/* QUOTE */}
          <blockquote>
            “The best way out is always through.”
            <cite>— Robert Frost</cite>
          </blockquote>

        </div>
      </div>
    </section>
  );
}
