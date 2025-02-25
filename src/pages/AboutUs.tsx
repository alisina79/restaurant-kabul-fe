import styles from "../css/AboutUs.module.css";
import { FaLeaf, FaUtensils, FaAward } from "react-icons/fa";
import { useNavigate } from "react-router";
import French from "../assets/French.jpg";

const About = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <img
            src={French}
            alt="Delicious Afghan Cuisine"
            className={styles.aboutImage}
          />
        </div>

        {/* Text Section */}
        <div className={styles.textContent}>
          <h1>Our Passion for Authentic Afghan Cuisine</h1>
          <p>
            At <strong>Bamyan Gourmet</strong>, we bring the essence of
            Afghanistan to your table. From traditional family recipes to
            innovative modern dishes, we are passionate about offering an
            unforgettable dining experience.
          </p>

          {/* Feature Section */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <FaUtensils className={styles.featureIcon} />
              <h3>Traditional Recipes</h3>
              <p>
                Our dishes are made from{" "}
                <strong>authentic Afghan recipes</strong>, passed down through
                generations.
              </p>
            </div>

            <div className={styles.feature}>
              <FaLeaf className={styles.featureIcon} />
              <h3>Fresh & Organic Ingredients</h3>
              <p>
                We use <strong>locally sourced, organic ingredients</strong> to
                ensure the highest quality and taste.
              </p>
            </div>

            <div className={styles.feature}>
              <FaAward className={styles.featureIcon} />
              <h3>Award-Winning Dining</h3>
              <p>
                Recognized as{" "}
                <strong>one of the best Afghan restaurants</strong> in France
                with top-rated reviews.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <button
            className={styles.ctaButton}
            onClick={() => navigate("/menu")}
          >
            Explore Our Menu 🍽️
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
