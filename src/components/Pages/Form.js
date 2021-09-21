import React from 'react';
import emailjs from 'emailjs-com'
import './Careers.css'

export default function App() {

  function sendEmail(e) {
    // form value name attribute should match template parameter
    e.preventDefault();
    emailjs.init("user_KTbQlxNPkx11dhJ0XLQBG");
    emailjs.sendForm('service_cz6mk28', 'template_6rvkjhh', e.target)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="career-form" onSubmit={sendEmail}>
      <div className="career-form-group">
      <label className="career-form-label">Name</label>
      <input className="career-form-text" type="text" name="name" />
      </div>
      <div className="career-form-group">
      <label className="career-form-label">Email</label>
      <input className="career-form-text" type="email" name="email" />
      </div>
      <div className="career-form-group">
      <label className="career-form-label">Subject</label>
      <input className="career-form-text" type="text" name="subject" />
      </div>
      <div className="career-form-group">
      <label className="career-form-label">Message</label>
      <textarea className="career-form-text" name="message" />
      </div>
      <input className="career-form-button" type="submit" value="Send" />
    </form>
  );
}