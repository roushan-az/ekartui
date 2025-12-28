export default function Contact() {
  return (
    <section className="contact-page container">
      <h1>Contact Us</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <div>
          <h3>Call Us</h3>
          <p>
            <a href="tel:+919876543210">+91 7021046153</a>
          </p>
        </div>

        <div>
          <h3>Email Us</h3>
          <p>
            <a href="mailto:info@diyainternational.com">
              info@diyainternational.com
            </a>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <h2>Send Us a Message</h2>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Message" rows={6} required></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}
