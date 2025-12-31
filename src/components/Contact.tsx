import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact-bg">
      <div className="contact-wrapper">

        {/* LEFT CARD */}
        <div className="contact-info">
          <div className="info-block">
            <h4>📍 Location</h4>
            <p>
              Diya International<br />
              Indirapuram, Ghaziabad<br />
              UP – 201010
            </p>
          </div>

          <div className="info-block">
            <h4>📞 Phone</h4>
            <p>+91 70210 46153</p>
          </div>

          <div className="info-block">
            <h4>⏰ Hours</h4>
            <p>
              Mon–Sat<br />
              9 AM – 8 PM
            </p>
          </div>

          <div className="info-block">
            <h4>✉️ Email</h4>
            <p>info@diyainternational.com</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h2>Contact Form</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Comment or message</label>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows={5}
            />
          </div>

          <button type="button">Submit</button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
