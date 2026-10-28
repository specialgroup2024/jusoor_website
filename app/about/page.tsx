export default function AboutPage() {
  return (
    <section className="content-page">
      <p className="eyebrow">About</p>
      <h1>About the company</h1>
      <p className="page-intro">
        This page will introduce the company using verified details you provide.
      </p>
      <div className="placeholder-panel">
        <span className="placeholder-icon" aria-hidden="true">
          02
        </span>
        <div>
          <h2>Company information to be confirmed</h2>
          <p>
            Background, credentials, and other company details have not yet
            been supplied.
          </p>
        </div>
      </div>
    </section>
  );
}
