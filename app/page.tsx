import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Website preview · content pending</p>
        <h1>A thoughtful introduction to your reassurance company starts here.</h1>
        <p className="hero-copy">
          This space is reserved for a company introduction using information
          you confirm. No services, credentials, or company claims have been
          added.
        </p>
        <Link className="button button-primary" href="/about">
          About the company
          <span aria-hidden="true">→</span>
        </Link>
        <span className="hero-note">Company details to be confirmed</span>
      </section>

      <section aria-labelledby="discover-heading" className="discover">
        <div className="section-heading">
          <p className="eyebrow">Explore</p>
          <h2 id="discover-heading">Information will be added with you.</h2>
        </div>
        <div className="card-grid">
          <article className="info-card">
            <span className="card-number" aria-hidden="true">
              01
            </span>
            <h3>Services</h3>
            <p>
              A description of the company&apos;s actual services will go here
              once provided.
            </p>
            <Link className="text-link" href="/services">
              View services page <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article className="info-card">
            <span className="card-number" aria-hidden="true">
              02
            </span>
            <h3>About</h3>
            <p>
              Verified background and company information will be added here.
            </p>
            <Link className="text-link" href="/about">
              View about page <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article className="info-card">
            <span className="card-number" aria-hidden="true">
              03
            </span>
            <h3>Contact</h3>
            <p>
              Confirmed contact details will be published here when available.
            </p>
            <Link className="text-link" href="/contact">
              View contact page <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
