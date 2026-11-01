import { useState } from "react";
import "./Activity.css";

const baseUrl = import.meta.env.BASE_URL;

const records = [
  {
    id: "event",
    menuLabel: "EVENT",
    category: "EVENT RECORD",
    date: "ADD ACTUAL DATE",
    titleStart: "From showing up to a",
    titleAccent: "lasting lesson.",
    description:
      "A space for the events, people, and experiences that shaped the way I learn and work.",
    tags: ["EVENT", "PROJECT", "REFLECTION"],
    readUrl: `${baseUrl}records.html?category=events`,
  },
  {
    id: "build",
    menuLabel: "BUILD",
    category: "PROJECT BUILD LOG",
    date: "ADD ACTUAL DATE",
    titleStart: "When the first version asks for a",
    titleAccent: "better answer.",
    description:
      "A running record of ideas turned into working projects, with the decisions and lessons behind each build.",
    tags: ["BUILD", "PROTOTYPE", "TESTING"],
    readUrl: `${baseUrl}records.html?category=build`,
  },
  {
    id: "study",
    menuLabel: "STUDY",
    category: "SECURITY STUDY",
    date: "ADD ACTUAL DATE",
    titleStart: "A security idea worth a",
    titleAccent: "closer look.",
    description:
      "Notes on cybersecurity concepts, practical experiments, and the questions I am exploring next.",
    tags: ["SECURITY", "LEARNING", "SYSTEMS"],
    readUrl: `${baseUrl}records.html?category=study`,
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
          Stories from events, project builds,
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
            {activeRecord.category}
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

            <a
              className="open-record__read-link"
              href={activeRecord.readUrl}
            >
              OPEN ↗
            </a>
          </footer>
        </article>
      </div>
    </section>
  );
}
