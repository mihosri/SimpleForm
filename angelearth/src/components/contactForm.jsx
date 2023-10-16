import React from 'react';
import './contactForm.css';

function contactForm() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="bold title">Get In Touch</h1>
          <p className="bold caption">
            Our friendly team would love to hear from you
          </p>
        </div>
        <div className="items">
          <input
            className="inputs"
            type="text"
            name="fname"
            placeholder="First Name"
          />
        </div>
        <div className="items">
          <input
            className="inputs"
            type="text"
            name="lname"
            placeholder="Last Name"
          />
        </div>
        <div className="items">
          <input
            className="inputs"
            type="email"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <div className="items">
          <input
            className="inputs"
            type="number"
            name="phone"
            placeholder="Phone"
          />
        </div>
        <div className=" stretch">
          <input
            className="inputs"
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className="textarea">
          <textarea
            name="message"
            placeholder="I wanna know..."
            rows={4}
            cols={80}
          />
        </div>
        <div className="items consent">
          <label>
            <input type="checkbox" />
            Send me your <span className="bold">Newsletter</span>
          </label>
        </div>
        <div className="items">
          <button type="submit">Send Message</button>
        </div>
      </div>
    </>
  );
}

export default contactForm;
