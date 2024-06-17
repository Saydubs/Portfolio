import "./FormStyles.css"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from "react-i18next";

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

  const{t} = useTranslation();

  return (
        <form className="form" ref={form} onSubmit={sendEmail}>
            <label>{t("yourName")}</label>
            <input type="text" name="user_name"/>
            <label>E-Mail</label>
            <input type="email" name="user_email"/>
            <label>{t("message")}</label>
            <textarea name="message" rows="6" placeholder={t("textareaText")}/>
            <button className="btn" type="submit">{t("submit")}</button>
        </form>
  )
}

export default Form