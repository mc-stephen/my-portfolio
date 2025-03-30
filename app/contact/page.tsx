"use client";

import { useState } from "react";
import styles from "./style.module.css";
import LoadingComponent from "../shared/loading-component/loading-component";

export default function Contact() {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //============================
  //
  //============================
  function handleFormRequest() {
    // "Message sent successfully"
    alert(0);
  }

  return (
    <div className={styles.contact}>
      <h2>Contact</h2>

      {/*============================*/}
      {/*  */}
      {/*============================*/}
      <section className={styles.mapSection}>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.01084595696!2d3.3635289999999998!3d6.529535450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1743276915584!5m2!1sen!2sng"
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
            height="450"
            width="300"
          ></iframe>
        </figure>
      </section>

      {/*============================*/}
      {/*  */}
      {/*============================*/}
      <section className={styles.formSection}>
        <h3>Contact Form</h3>
        {isLoading ?? <LoadingComponent />}
        {message ?? <span className={styles.msg}>{message}</span>}
        <form>
          <input
            required
            type="text"
            name="full-name"
            placeholder="Full name"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
          />
          <textarea
            required
            name="message"
            placeholder="Your Message"
          ></textarea>
        </form>

        {/*============================*/}
        {/*  */}
        {/*============================*/}
        <button disabled onClick={handleFormRequest}>
          <i className="fa-solid fa-paper-plane"></i>
          <span>Send Message</span>
        </button>
      </section>
    </div>
  );
}
