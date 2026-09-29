import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getCategory, getRecords, recordCategories } from "../data/records";
import "./RecordsPage.css";

function getCategoryFromUrl() {
  const value = new URLSearchParams(window.location.search).get("category");
  return recordCategories[value] ? value : "events";
}

export default function RecordsPage() {
  const categoryId = getCategoryFromUrl();
  const category = getCategory(categoryId);
  const entries = getRecords(categoryId);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main className="records-page">
      <div className="records-page__container">
        <a className="records-page__back" href={`${baseUrl}#activity`}>
          <ArrowLeft size={15} /> Back to portfolio
        </a>

        <header className="records-page__header">
          <span>{category.eyebrow}</span>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </header>

        <nav className="records-page__switcher" aria-label="Record categories">
          {Object.values(recordCategories).map((item) => (
            <a
              key={item.id}
              className={item.id === categoryId ? "is-active" : ""}
              href={`${baseUrl}records.html?category=${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <section className="records-page__list" aria-label={`${category.label} entries`}>
          {entries.map((entry, index) => (
            <article className="records-page__item" key={entry.slug}>
              <span className="records-page__number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="records-page__meta">{category.singular} · {entry.date}</p>
                <h2>{entry.title}</h2>
                <p className="records-page__excerpt">{entry.excerpt}</p>
                <div className="records-page__tags">
                  {entry.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <a
                className="records-page__open"
                href={`${baseUrl}record.html?category=${categoryId}&slug=${entry.slug}`}
              >
                READ <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
