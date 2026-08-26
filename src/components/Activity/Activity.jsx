import { useState } from "react";
import "./Activity.css";

const records = [
  {
    id: "event",
    menuLabel: "EVENT",
    category: "HACKATHON RECORD",
    date: "ADD ACTUAL DATE",
    titleStart: "From a challenge brief to a",
    titleAccent: "working response.",
    description:
      "Write your real hackathon story here: the prompt, your contribution, the idea your team tested, and the lesson you will carry forward.",
    tags: ["EVENT", "PROJECT", "REFLECTION"],
    readUrl: "",
  },
  {
    id: "build",
    menuLabel: "BUILD",
    category: "PROJECT BUILD LOG",
    date: "ADD ACTUAL DATE",
    titleStart: "When the first version asks for a",
    titleAccent: "better answer.",
    description:
      "Use this entry for a real project update: what you started with, which decision changed the work, what you tested, and what you will improve next.",
    tags: ["BUILD", "PROTOTYPE", "TESTING"],
    readUrl: "",
  },
  {
    id: "study",
    menuLabel: "STUDY",
    category: "SECURITY STUDY",
    date: "ADD ACTUAL DATE",
    titleStart: "A security idea worth a",
    titleAccent: "closer look.",
    description:
      "Use this entry after studying a cybersecurity concept. Explain what became clearer, why it matters, and which safe learning task you will explore next.",
    tags: ["SECURITY", "LEARNING", "SYSTEMS"],
    readUrl: "",
  },
];

export default function Activity() {
  const [activeRecordId, setActiveRecordId] = useState("event");

  const activeRecord = records.find(
    (record) => record.id === activeRecordId,
  );

  return (
    <section id="activity" className="open-record qs-shell">
  
    <div className="open-record__intro">
<p className="open-record__label">
  <span>07 BLOG</span>
</p>
      
         <h2>
            Open <em>record</em>
        </h2>
  
        <p>
          Stories from hackathons, project builds,
          <br />
          and cybersecurity learning.
        </p>
      </div>

      <div className="open-record__viewer">
        <div
          className="open-record__menu"
          role="tablist"
          aria-label="Story categories"
        >
          {records.map((record) => (
            <button
              key={record.id}
              type="button"
              className={
                record.id === activeRecordId
                  ? "open-record__menu-button is-active"
                  : "open-record__menu-button"
              }
              role="tab"
              aria-selected={record.id === activeRecordId}
              aria-controls="open-record-story"
              onClick={() => setActiveRecordId(record.id)}
            >
              {record.menuLabel}
            </button>
          ))}
        </div>

        <article
          key={activeRecord.id}
          id="open-record-story"
          className="open-record__story"
        >
          <span className="open-record__number">
            {String(records.indexOf(activeRecord) + 1).padStart(2, "0")}
          </span>

          <p className="open-record__category">
            {activeRecord.category} · {activeRecord.date}
          </p>

          <h3>
            {activeRecord.titleStart}
            <br />
            <em>{activeRecord.titleAccent}</em>
          </h3>

          <p className="open-record__description">
            {activeRecord.description}
          </p>

          <footer className="open-record__story-footer">
            <div className="open-record__tags">
              {activeRecord.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {activeRecord.readUrl ? (
              <a
                className="open-record__read-link"
                href={activeRecord.readUrl}
                target="_blank"
                rel="noreferrer"
              >
                OPEN ↗
              </a>
            ) : (
              <span className="open-record__empty-link">OPEN</span>
            )}
          </footer>
        </article>
      </div>
    </section>
  );
}
