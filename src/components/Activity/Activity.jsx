import { ArrowUpRight } from "lucide-react";
import { recordCategories, getRecords } from "../../data/records";
import "./Activity.css";

const categoryCards = [
  {
    id: "events",
    number: "01",
    label: "EVENTS",
    title: "Where I showed up",
    description: "Hackathons, meetups, competitions, and the lessons I took from them.",
  },
  {
    id: "build",
    number: "02",
    label: "BUILD",
    title: "What I made",
    description: "Project logs about ideas, experiments, decisions, and better next versions.",
  },
  {
    id: "study",
    number: "03",
    label: "STUDY",
    title: "What I learned",
    description: "Notes from studying cybersecurity, development, and the systems behind them.",
  },
];

export default function Activity() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="activity" className="open-record qs-shell">
      <div className="open-record__intro">
        <p className="open-record__label">07 OPEN RECORD</p>
        <h2>
          Open <em>record</em>
        </h2>
        <p>
          A growing collection of event stories, build logs,
          <br />
          and study notes.
        </p>
      </div>

      <div className="open-record__cards">
        {categoryCards.map((card) => {
          const category = recordCategories[card.id];
          const count = getRecords(card.id).length;

          return (
            <article className="open-record__card" key={card.id}>
              <div className="open-record__card-top">
                <span>{card.number}</span>
                <span>{card.label}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="open-record__card-footer">
                <span>{count} {count === 1 ? "entry" : "entries"}</span>
                <a
                  className="open-record__read-link"
                  href={`${baseUrl}records.html?category=${category.id}`}
                  aria-label={`Open ${category.label.toLowerCase()} records`}
                >
                  OPEN <ArrowUpRight size={14} strokeWidth={1.6} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
