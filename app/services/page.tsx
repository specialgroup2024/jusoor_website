export default function ServicesPage() {
  return (
    <section className="content-page">
      <p className="eyebrow">Services</p>
      <h1>Company services</h1>
      <p className="page-intro">
        This page is reserved for descriptions of the company&apos;s actual
        services. Details will be added after you provide and confirm them.
      </p>
      <div className="placeholder-panel">
        <span className="placeholder-icon" aria-hidden="true">
          01
        </span>
        <div>
          <h2>Service information to be confirmed</h2>
          <p>
            No services or solutions are being represented on this preview
            page.
          </p>
        </div>
      </div>
    </section>
  );
}
