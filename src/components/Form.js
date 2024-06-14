import "./FormStyles.css"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z8099zu', 'template_yjzvfn5', form.current, {
        publicKey: 'Si6tjz6jabeKhuLm2',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
        <form className="form" ref={form} onSubmit={sendEmail}>
            <label>Your name</label>
            <input type="text" name="user_name"/>
            <label>E-Mail</label>
            <input type="email" name="user_email"/>
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Type your message here"/>
            <button className="btn" type="submit">Submit</button>
        </form>
  )
}

export default Form