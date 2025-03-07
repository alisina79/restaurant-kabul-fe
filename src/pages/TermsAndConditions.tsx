import { useState } from "react";
import styles from "../css/TermsAndConditions.module.css"; // Import CSS module
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TermsAndConditions = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className={styles.termsContainer}>
      <div className={styles.termsContent}>
        <h1 className={styles.title}>Terms & Conditions</h1>
        <p className={styles.introText}>
          Welcome to Kaboul Gourmet. Please read our Terms & Conditions
          carefully before using our services.
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing or using our website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
          },
          {
            title: "2. Use of Our Services",
            content:
              "Our services are intended for personal, non-commercial use. You may not use our website for any unlawful or prohibited activities.",
          },
          {
            title: "3. Reservations & Orders",
            content:
              "All reservations and food orders made through our platform are subject to availability. Kaboul Gourmet reserves the right to cancel any order due to unforeseen circumstances.",
          },
          {
            title: "4. Intellectual Property",
            content:
              "All content on this website, including text, graphics, and images, is the property of Kaboul Gourmet and may not be reproduced without permission.",
          },
          {
            title: "5. Limitation of Liability",
            content:
              "Kaboul Gourmet is not responsible for any direct, indirect, or incidental damages arising from the use of our services.",
          },
          {
            title: "6. Changes to Terms",
            content:
              "We reserve the right to modify these Terms & Conditions at any time. Continued use of our services after changes constitutes acceptance of the updated terms.",
          },
        ].map((section, index) => (
          <div key={index} className={styles.termsSection}>
            <h2
              onClick={() => toggleSection(index)}
              className={styles.sectionTitle}
            >
              {section.title}
              {openSections.includes(index) ? (
                <FaChevronUp className={styles.icon} />
              ) : (
                <FaChevronDown className={styles.icon} />
              )}
            </h2>
            {openSections.includes(index) && (
              <p className={styles.sectionContent}>{section.content}</p>
            )}
          </div>
        ))}

        <div className={styles.termsFooter}>
          <p>Last updated: February 2025</p>
          <button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
