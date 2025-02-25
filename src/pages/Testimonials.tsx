import { useEffect, useRef } from "react";
import styles from "../css/testimonials.module.css";

function Testimonials() {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Explicitly define type

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current instanceof HTMLElement) {
          sectionRef.current.style.opacity = "1";
          sectionRef.current.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.testimonials}>
      <h2>What Our Customers Say</h2>
      <div className={styles.testimonialList}>
        <div className={`${styles.testimonial} ${styles.stagger1}`}>
          <p>
            "The food was absolutely amazing! Authentic Afghan flavors with a
            modern twist."
          </p>
          <h4>- Sarah J.</h4>
        </div>
        <div className={`${styles.testimonial} ${styles.stagger2}`}>
          <p>
            "A beautiful dining experience! The ambiance and service were
            top-notch."
          </p>
          <h4>- Michael R.</h4>
        </div>
        <div className={`${styles.testimonial} ${styles.stagger3}`}>
          <p>
            "Best restaurant in town! Fresh ingredients and great hospitality."
          </p>
          <h4>- Aisha K.</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
