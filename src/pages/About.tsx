import { useEffect } from "react";
import styles from "../css/about.module.css";
import special from "../chef/special.jpg";
function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    });

    document
      .querySelectorAll(`.${styles.description}, .${styles.title}`)
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={`${styles.title} ${styles.animated}`}>
            Welcome to Kaboul Gourmet
          </h2>
          <p className={`${styles.description} ${styles.animated}`}>
            Where tradition meets sophistication. Experience the perfect blend
            of authentic Afghan cuisine and modern elegance in an ambiance
            designed for comfort and charm. Indulge in our signature dishes,
            each crafted with passion, time-honored recipes, and the finest
            ingredients.
          </p>
          <div className={styles.featureBoxes}>
            <div className={styles.featureBox}>
              <h4>Authentic Cuisine</h4>
              <p>Delight in the rich flavors of Afghan tradition.</p>
            </div>
            <div className={styles.featureBox}>
              <h4>Romantic Ambiance</h4>
              <p>A perfect setting for intimate dinners and celebrations.</p>
            </div>
            <div className={styles.featureBox}>
              <h4>Award-Winning Chef</h4>
              <p>
                Crafting culinary masterpieces for an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img
            src={special}
            alt="KaboulGourmet"
            className={styles.aboutImage}
          />
          <div className={styles.imageOverlay}>
            <p className={styles.imageCaption}>Authenticity in Every Bite</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
