import "./Certifications.css";

const certificateBasePath =
  `${import.meta.env.BASE_URL}assets/certificates/`;

const credentials = [
  {
    number: "01",
    type: "FEATURED CREDENTIAL",
    title: "Certificate title",
    issuer: "Issuing organisation",
    date: "Date earned",
    focus: "Course topic / learning outcome",
    image: `${certificateBasePath}certificate-01.png`,
  },
  {
    number: "02",
    type: "SUPPORTING RECORD",
    title: "Certificate title",
    issuer: "Issuing organisation",
    date: "Date earned",
    image: `${certificateBasePath}certificate-02.png`,
  },
  {
    number: "03",
    type: "SUPPORTING RECORD",
    title: "Certificate title",
    issuer: "Issuing organisation",
    date: "Date earned",
    image: `${certificateBasePath}certificate-03.png`,
  },
];

export default function Certifications() {
  const featuredCredential = credentials[0];

  const supportingCredentials = credentials.slice(1);

  return (
    <section
      id="certifications"
      className="qs-shell certifications-component"
    >
      <div className="credentials-header">
        <p className="credentials-label">
          <span>05</span>
          VERIFIED CREDENTIALS
        </p>

        <h2>Credentials.</h2>

        <p className="credentials-intro">
          A closer look at selected learning milestones
          and supporting evidence.
        </p>
      </div>

      <article className="credential-proof-sheet">
        <a
          className="credential-image-link"
          href={featuredCredential.image}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${featuredCredential.title}`}
        >
          <img
            src={featuredCredential.image}
            alt={featuredCredential.title}
          />
        </a>

        <div className="credential-proof-copy">
          <p className="credential-type">
            {featuredCredential.type}
          </p>

          <h3>{featuredCredential.title}</h3>

          <p className="credential-issuer">
            {featuredCredential.issuer}
          </p>

          <div className="credential-facts">
            <div>
              <strong>DATE EARNED</strong>
              <span>{featuredCredential.date}</span>
            </div>

            <div>
              <strong>FOCUS</strong>
              <span>{featuredCredential.focus}</span>
            </div>

            <div>
              <strong>STATUS</strong>
              <span>Certificate available</span>
            </div>
          </div>

          <a
            className="credential-view-link"
            href={featuredCredential.image}
            target="_blank"
            rel="noreferrer"
          >
            VIEW CREDENTIAL ↗
          </a>
        </div>
      </article>

      <div className="supporting-credentials">
        {supportingCredentials.map((credential) => (
          <article
            key={credential.number}
            className="supporting-credential"
          >
            <p>
              {credential.number} / {credential.type}
            </p>

            <h3>{credential.title}</h3>

            <span>
              {credential.issuer} · {credential.date}
            </span>

            <a
              href={credential.image}
              target="_blank"
              rel="noreferrer"
            >
              VIEW ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
