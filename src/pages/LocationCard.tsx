import React from "react";
import styles from "../css/LocationCard.module.css"; // Import your styles

// Define props interface
interface LocationCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <a href={link} className={styles.exploreButton}>
          Explore
        </a>
      </div>
    </div>
  );
};

export default LocationCard;
