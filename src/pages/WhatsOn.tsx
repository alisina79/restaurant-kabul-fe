import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "../css/WhatsOn.module.css";
import four from "../chef/four.jpg";
import five from "../chef/five.jpg";
import six from "../chef/six.jpg";

const events = [
  {
    id: "wine-tasting",
    title: "Wine Tasting Dinner",
    date: "March 15, 2024",
    description:
      "Enjoy a curated selection of wines paired with a gourmet menu.",
    details:
      "Join us for a night of fine wines carefully paired with gourmet dishes. Experts will guide you through each tasting.",
    image: four,
  },
  {
    id: "jazz-night",
    title: "Live Jazz Night",
    date: "March 22, 2024",
    description: "Experience an evening of live jazz music and fine dining.",
    details:
      "Enjoy a sophisticated evening of live jazz performances while indulging in our signature gourmet dishes.",
    image: five,
  },
  {
    id: "afghan-week",
    title: "Afghan Cuisine Week",
    date: "April 5 - April 12, 2024",
    description:
      "Celebrate the rich flavors of Afghan cuisine with our special menu.",
    details:
      "Explore the taste of Afghanistan with a week-long special menu featuring traditional Afghan dishes.",
    image: six,
  },
];

const WhatsOn = () => {
  // Create references for each event details section
  const wineTastingRef = useRef(null);
  const jazzNightRef = useRef(null);
  const afghanWeekRef = useRef(null);

  // Function to handle smooth scrolling to the correct section
  const handleScrollToDetails = (eventId: string) => {
    const section = document.getElementById(eventId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.section className={styles.whatsOnSection}>
      <motion.div className={styles.eventsGrid}>
        {events.map((event) => (
          <motion.div key={event.id} className={styles.eventCard}>
            <img
              src={event.image}
              alt={event.title}
              className={styles.eventImage}
            />
            <div className={styles.eventContent}>
              <h3>{event.title}</h3>
              <p className={styles.date}>{event.date}</p>
              <p>{event.description}</p>
              <motion.button
                className={styles.detailsButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollToDetails(event.id)} // Scrolls to details section
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Event Details Sections */}
      <motion.div className={styles.detailsSection}>
        {events.map((event) => (
          <motion.div
            key={event.id}
            id={event.id}
            className={styles.eventDetails}
            ref={
              event.id === "wine-tasting"
                ? wineTastingRef
                : event.id === "jazz-night"
                ? jazzNightRef
                : afghanWeekRef
            }
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2>{event.title}</h2>
            <p className={styles.date}>{event.date}</p>
            <img
              src={event.image}
              alt={event.title}
              className={styles.eventImage}
            />
            <p>{event.details}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhatsOn;
