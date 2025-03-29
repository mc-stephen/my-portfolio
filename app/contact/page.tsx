import styles from "./style.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>

      {/*============================*/}
      {/*  */}
      {/*============================*/}
      <section className={styles.mapSection}>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      {/*============================*/}
      {/*  */}
      {/*============================*/}
      <section className={styles.formSection}>
        <h3>Contact Form</h3>
        <form action="">
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
        <button disabled>
          <i className="fa-solid fa-paper-plane"></i>
          <span>Send Message</span>
        </button>
      </section>
    </div>
  );
}
