import { ArrowRight } from "lucide-react";
import "./Resume.css";

const resumeUrl = "https://avinashk08408.github.io/resume.pdf";

export default function Resume() {
  return (
    <section
      id="resume"
      className="ct-section qs-shell resume-component"
    >
      <div className="resume-heading">
        <p className="resume-label">
          <span>06</span>
          PROFESSIONAL FOLIO
        </p>

        <h2>Resume.</h2>

        <p className="resume-intro">
          A complete professional record, prepared as a clear reference for
          opportunities, collaborations, and project conversations.
        </p>
      </div>

      <div className="resume-folio">
        <aside className="resume-paper-wrap">
          <span className="resume-file-tab">
            RESUME FILE / 06
          </span>

          <div className="resume-paper">
            <div className="resume-paper-top">
              <strong>AVINASH K.</strong>
              <span>CURRICULUM VITAE</span>
            </div>

            <h3>Avinash K.</h3>

            <p className="resume-paper-role">
              CYBER SECURITY STUDENT
            </p>

            <div className="resume-paper-section">
              <strong>PROFILE</strong>
              <p>
                Security-minded web developer with a strong interest in
                practical cybersecurity learning.
              </p>
            </div>

            <div className="resume-paper-section">
              <strong>FOCUS</strong>
              <p>
                Web security · Web development · Technical projects
              </p>
            </div>

            <div className="resume-paper-section">
              <strong>EDUCATION</strong>
              <p>
                B.E. Cyber Security
                <br />
                SRM Valliammai Engineering College
              </p>
            </div>
          </div>
        </aside>

        <div className="resume-folio-copy">
          <p className="resume-eyebrow">
            WORKING THESIS
          </p>

          <h3>Build for understanding.</h3>

          <p className="resume-thesis-copy">
            Good work begins before the first line of code: with a clear
            question, a careful look at the system, and a reason for building
            it.
          </p>

          <div className="resume-details">
            <div className="resume-detail">
              <strong>THE QUESTION</strong>
              <span>
                What is the system trying to do, and where could the experience
                become clearer, safer, or more useful?
              </span>
            </div>

            <div className="resume-detail">
              <strong>THE METHOD</strong>
              <span>
                Observe the flow, make a focused change, and keep the result
                simple enough to understand.
              </span>
            </div>

            <div className="resume-detail">
              <strong>THE RESULT</strong>
              <span>
                Security-aware web work that is useful to people, honest about
                its purpose, and ready to keep improving.
              </span>
            </div>
          </div>

          <div className="resume-action-row">
            <p>THE COMPLETE RECORD</p>

            <a
              className="resume-action"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              OPEN FULL RESUME
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
