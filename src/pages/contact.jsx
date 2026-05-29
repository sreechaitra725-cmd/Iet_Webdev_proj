export default function Contact() {
  return (
    <main className="page contact-page">
      <section className="contact-card">
        <p className="hero-eyebrow">Get in touch</p>
        <h1 className="hero-title">Need help?</h1>
        <p className="hero-copy">
          Our team is here to answer questions about products, orders, or
          business inquiries. Reach out and we’ll respond within one business
          day.
        </p>

        <div className="contact-details">
          <div>
            <strong>Email</strong>
            <p>support@megastore.com</p>
          </div>
          <div>
            <strong>Phone</strong>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <strong>Location</strong>
            <p>Remote-first team • Worldwide shipping</p>
          </div>
        </div>
      </section>
    </main>
  );
}