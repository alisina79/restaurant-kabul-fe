import styles from "../css/contact.module.css";
import { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaPaperPlane, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  // Trigger subtle animation on page load
  useEffect(() => {
    const contactSection = document.querySelector(`.${styles.contact}`);
    if (contactSection) {
      contactSection.classList.add(styles.fadeIn);
    }
  }, []);

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        {/* Contact Information Card */}
        <div className={styles.card}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subTitle}>
            Have questions or want to make a reservation? We'd love to hear from you!
          </p>

          <div className={styles.info}>
            <p>
              <FaMapMarkerAlt size={18} color="#ac8d5b" />
              <strong>Address:</strong> Grenoble 38000, France
            </p>
            <p>
              <FaPhone size={18} color="#ac8d5b" />
              <strong>Phone:</strong> +33613139148
            </p>
            <p>
              <FaEnvelope size={18} color="#ac8d5b" />
              <strong>Email:</strong> contact@KaboulGourmet.com
            </p>
          </div>

          <div className={styles.hours}>
            <h3>Business Hours</h3>
            <div className={styles.hoursItem}>
              <span>Monday - Thursday</span>
              <span>11:00 AM - 10:00 PM</span>
            </div>
            <div className={styles.hoursItem}>
              <span>Friday - Saturday</span>
              <span>11:00 AM - 11:00 PM</span>
            </div>
            <div className={styles.hoursItem}>
              <span>Sunday</span>
              <span>12:00 PM - 9:00 PM</span>
            </div>
          </div>

          <div className={styles.social}>
            <div className={styles.socialIcon}>
              <FaFacebookF size={16} color="#ffffff" />
            </div>
            <div className={styles.socialIcon}>
              <FaInstagram size={16} color="#ffffff" />
            </div>
            <div className={styles.socialIcon}>
              <FaXTwitter size={16} color="#ffffff" />
            </div>
            <div className={styles.socialIcon}>
              <FaLinkedinIn size={16} color="#ffffff" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h2 className={styles.title}>Send a Message</h2>
          <p className={styles.subTitle}>
            We'll get back to you as soon as possible
          </p>

          {submitted ? (
            <div className={styles.successMessage}>
              Thank you for your message! We'll be in touch with you shortly.
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"} 
                {!loading && <FaPaperPlane size={14} />}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className={styles.mapContainer}>
        <h2 className={styles.mapTitle}>Find Us</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.838104456789!2d5.724509315720789!3d45.188979979999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478a7b7c1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2sGrenoble%2C%2038000%20France!5e0!3m2!1sfr!2sfr!4v1641234567890!5m2!1sfr!2sfr"
          allowFullScreen={true}
          loading="lazy"
          className={styles.map}
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
