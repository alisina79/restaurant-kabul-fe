import styles from "../css/TermsAndConditions.module.css"; // Import CSS module

const TermsAndConditions = () => {
  return (
    <section className={styles.termsContainer}>
      <div className={styles.termsContent}>
        <h1 className={styles.title}>Terms & Conditions</h1>
        <p className={styles.introText}>
          Welcome to Kaboul Gourmet. Please read our Terms & Conditions
          carefully before using our services.
        </p>

        <div className={styles.termsSection}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to comply with and be
            bound by these Terms & Conditions. If you do not agree, please do
            not use our services.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>2. Use of Our Services</h2>
          <p>
            Our services are intended for personal, non-commercial use. You may
            not use our website for any unlawful or prohibited activities.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>3. Reservations & Orders</h2>
          <p>
            All reservations and food orders made through our platform are
            subject to availability. Kaboul Gourmet reserves the right to cancel
            any order due to unforeseen circumstances.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, and images,
            is the property of Kaboul Gourmet and may not be reproduced without
            permission.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>5. Limitation of Liability</h2>
          <p>
            Kaboul Gourmet is not responsible for any direct, indirect, or
            incidental damages arising from the use of our services.
          </p>
        </div>

        <div className={styles.termsSection}>
          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms & Conditions at any time.
            Continued use of our services after changes constitutes acceptance
            of the updated terms.
          </p>
        </div>

        <div className={styles.termsFooter}>
          <p>Last updated: February 2025</p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
