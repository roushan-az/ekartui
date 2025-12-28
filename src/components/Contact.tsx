export default function Contact() {
  return (
    <section className="contact-page container">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Message" rows={6}></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}
