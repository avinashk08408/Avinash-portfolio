import { ArrowLeft } from "lucide-react";
import { getCategory, getRecords } from "../data/records";
import "./RecordsPage.css";

export default function RecordPage() {
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get("category") || "events";
  const category = getCategory(categoryId);
  const entry = getRecords(categoryId).find((item) => item.slug === params.get("slug")) || getRecords(categoryId)[0];
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main className="records-page record-article-page">
      <div className="records-page__container">
        <a className="records-page__back" href={`${baseUrl}records.html?category=${categoryId}`}>
          <ArrowLeft size={15} /> Back to {category.label.toLowerCase()}
        </a>

        <article className="record-article">
          <header className="record-article__header">
            <p className="records-page__meta">{category.singular} · {entry.date}</p>
            <h1>{entry.title}</h1>
            <p className="record-article__lead">{entry.excerpt}</p>
          </header>

          <div className="record-article__body">
            {entry.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <footer className="record-article__footer">
            {entry.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </footer>
        </article>
      </div>
    </main>
  );
}
