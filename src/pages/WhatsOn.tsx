import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "../css/WhatsOn.module.css";
import four from "../chef/four.jpg";
import five from "../chef/five.jpg";
import six from "../chef/six.jpg";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: "mothers-day",
    title: "Mother's Day Celebration",
    date: "May 12, 2024",
    description:
      "Treat your mother to a special dining experience with our Mother's Day menu.",
    details:
      "Join us for a memorable Mother's Day celebration with a special menu, complimentary champagne for mothers, and a small gift to take home.",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    hasSpecialPage: true,
    linkTo: "/mothers-day"
  },
  {
    id: "wine-tasting",
    title: "Wine Tasting Dinner",
    date: "March 15, 2024",
    description:
      "Enjoy a curated selection of wines paired with a gourmet menu.",
    details:
      "Join us for a night of fine wines carefully paired with gourmet dishes. Experts will guide you through each tasting.",
    image: four,
    hasSpecialPage: false
  },
  {
    id: "jazz-night",
    title: "Live Jazz Night",
    date: "March 22, 2024",
    description: "Experience an evening of live jazz music and fine dining.",
    details:
      "Enjoy a sophisticated evening of live jazz performances while indulging in our signature gourmet dishes.",
    image: five,
    hasSpecialPage: false
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
    hasSpecialPage: false
  },
];

const WhatsOn = () => {
  // Create references for each event details section
  const mothersRef = useRef(null);
  const wineTastingRef = useRef(null);
  const jazzNightRef = useRef(null);
  const afghanWeekRef = useRef(null);
  const navigate = useNavigate();

  // Function to handle smooth scrolling to the correct section
  const handleScrollToDetails = (eventId: string) => {
    const section = document.getElementById(eventId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Function to handle navigation to event pages or scroll to details
  const handleEventAction = (event: any) => {
    if (event.hasSpecialPage && event.linkTo) {
      navigate(event.linkTo);
    } else {
      handleScrollToDetails(event.id);
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
                onClick={() => handleEventAction(event)} // Navigate or scroll to details
              >
                {event.hasSpecialPage ? "View Details" : "Learn More"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Event Details Sections */}
      <motion.div className={styles.detailsSection}>
        {events.filter(event => !event.hasSpecialPage).map((event) => (
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
