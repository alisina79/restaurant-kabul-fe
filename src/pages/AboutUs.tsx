import styles from "../css/AboutUs.module.css";
import { FaLeaf, FaUtensils, FaAward } from "react-icons/fa";
import { useNavigate } from "react-router";
import French from "../assets/French.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <img
            src={French}
            alt="Authentic Afghan Cuisine"
            className={styles.aboutImage}
          />
        </div>

        {/* Text Section */}
        <div className={styles.textContent}>
          <h1>Experience the True Essence of Afghan Cuisine</h1>
          <p>
            At <strong>Bamyan Gourmet</strong>, we don’t just serve food; we
            offer a cultural journey. Our dishes, crafted with passion, bring
            together centuries of Afghan culinary tradition infused with a
            modern touch.
          </p>

          {/* Feature Section */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <FaUtensils className={styles.featureIcon} />
              <h3>Timeless Heritage</h3>
              <p>
                Every dish is made using{" "}
                <strong>authentic family recipes</strong>, passed down for
                generations.
              </p>
            </div>

            <div className={styles.feature}>
              <FaLeaf className={styles.featureIcon} />
              <h3>Farm-to-Table Freshness</h3>
              <p>
                We source <strong>fresh, organic ingredients</strong> to ensure
                vibrant flavors and unmatched quality.
              </p>
            </div>

            <div className={styles.feature}>
              <FaAward className={styles.featureIcon} />
              <h3>Award-Winning Excellence</h3>
              <p>
                Recognized among the <strong>finest Afghan restaurants</strong>
                in France for an exquisite dining experience.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <button
            className={styles.ctaButton}
            onClick={() => navigate("/menu")}
          >
            Discover Our Menu 🍽️
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
