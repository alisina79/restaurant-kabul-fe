import styles from "../css/chefPage.module.css";
import chef from "../chef/chef.jpg"; // Ensure the correct image is used
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

const Chef = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
  }, []);

  return (
    <section
      className={`${styles.chefContainer} ${showContent ? styles.fadeIn : ""}`}
    >
      {/* Left Container: Chef Image */}
      <div className={styles.chefImageContainer}>
        <img src={chef} alt="Chef" className={styles.chefImage} />
      </div>

      {/* Right Container: Chef Info */}
      <div className={styles.chefInfoContainer}>
        <h1 className={styles.chefTitle}>Meet Our Executive Chef</h1>
        <p className={styles.chefDescription}>
          With over 20 years of culinary experience, Chef John Doe brings
          passion, creativity, and authenticity to every dish. His expertise in
          fusion cuisine blends traditional flavors with modern techniques,
          creating an unforgettable dining experience.
        </p>
        <p className={styles.chefQuote}>
          "Cooking is an art, but the greatest masterpiece is the joy it brings
          to others."
        </p>
        <button className={styles.menuButton} onClick={() => navigate("/menu")}>
          <FaUtensils className={styles.icon} /> Explore the Menu
        </button>
      </div>
    </section>
  );
};

export default Chef;
