import styles from "../css/contact.module.css"; // Import CSS module

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        {/* Contact Left - Business Information */}
        <div className={styles.card}>
          <h2 className={styles.title}>Contact Us</h2>
          <p>Have questions or want to make a reservation? Reach out to us!</p>

          <div className={styles.info}>
            <p>
              <strong>Address:</strong>
              123 Paris Street, France
            </p>
            <p>
              <strong>Phone:</strong>
              +33 1 23 45 67 89
            </p>
            <p>
              <strong>Email Id:</strong>
              contact@KaboulGourmet.com
            </p>
          </div>
        </div>

        {/* Contact Right - Contact Form */}
        <div className={styles.contactForm}>
          <h2 className={styles.title}>Send a Message</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label>Your Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className={styles.formGroup}>
              <label>Your Email</label>
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className={styles.formGroup}>
              <label>Send Message</label>
              <textarea placeholder="Your Message" rows={5} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className={styles.mapContainer}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9996280457894!2d2.292292615674795!3d48.85884417928747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a8c5b1bce8e9d8!2zNDjCsDUxJzMxLjgiTiAywrAxNSc0My4zIkU!5e0!3m2!1sen!2sfr!4v1615560725345!5m2!1sen!2sfr"
          allowFullScreen={true}
          loading="lazy"
          className={styles.map}
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
