import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Seasonal.module.css';

// Import images from assets (using placeholders for now)
// You may want to replace these with appropriate food images from your assets
import mainImage from '../assets/Gourmet1.png';
import bottomImage from '../assets/Gourmet3.png';

const Seasonal: React.FC = () => {
  return (
    <div className={styles.seasonalContainer}>
      {/* Left Column - Main Image */}
      <div className={styles.leftColumn}>
        <div className={styles.imageWrapper}>
          <img 
            src={mainImage} 
            alt="Seasonal dish presentation" 
            className={styles.image}
          />
        </div>
      </div>

      {/* Right Column - Text Content and Bottom Image */}
      <div className={styles.rightColumn}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>SEASONAL FRESH</h1>
          <h2 className={styles.subtitle}>Only the very best ingredients</h2>
          <p className={styles.description}>
            At Restaurant Kabul, we believe in the power of fresh, seasonal ingredients. 
            Our menu changes with the seasons to showcase the finest produce at its peak flavor. 
            Every dish is carefully crafted by our chefs to highlight these exceptional ingredients 
            while honoring our culinary traditions and innovative techniques.
          </p>

          <Link to="/menu">
            <button className={styles.menuButton}>MENUS</button>
          </Link>

          <div className={styles.testimonialSection}>
            <p className={styles.quote}>
              "The best restaurants, in The City of London."
            </p>
            <p className={styles.attribution}>– Hot Dinners</p>
            
            <div className={styles.testimonialDots}>
              <div className={`${styles.dot} ${styles.activeDot}`}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className={styles.bottomImageContainer}>
          <div className={styles.imageWrapper}>
            <img 
              src={bottomImage} 
              alt="Seasonal ingredients" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seasonal;
