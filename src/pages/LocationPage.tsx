import LocationCard from "./LocationCard.js"; // Adjust the path as needed
import styles from "../css/LocationPage.module.css"; // Create a separate CSS module for the locations page

const LocationsPage = () => {
  const locations = [
    {
      id: 1,
      image: "/paris.jpg", // Make sure to replace with actual image paths
      title: "Main Branch",
      description:
        "Located in the heart of the city, offering a cozy atmosphere and signature dishes.",
      link: "/explore/main-branch",
    },
    {
      id: 2,
      image: "/lyon.jpg", // Make sure to replace with actual image paths
      title: "Downtown Branch",
      description:
        "A modern, bustling spot with great views and exclusive menu items.",
      link: "/explore/downtown-branch",
    },
    {
      id: 3,
      image: "/grenoble.jpeg", // Make sure to replace with actual image paths
      title: "Suburban Branch",
      description:
        "A quiet and charming place perfect for family gatherings and casual dining.",
      link: "/explore/suburban-branch",
    },
  ];

  return (
    <div className={styles.locationsContainer}>
      <h2 className={styles.pageTitle}>Our Locations</h2>
      <div className={styles.cardsContainer}>
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            image={location.image}
            title={location.title}
            description={location.description}
            link={location.link}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
