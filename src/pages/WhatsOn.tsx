import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/WhatsOn.module.css";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: "mothers-day",
    title: "Mother's Day Celebration",
    date: "May 12, 2024",
    description: "Treat your mother to a special dining experience with our Mother's Day menu.",
    details: "Join us for a memorable Mother's Day celebration with a special menu, complimentary champagne for mothers, and a small gift to take home.",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    hasSpecialPage: true,
    linkTo: "/mothers-day",
    category: "Special Occasion"
  },
  {
    id: "valentine-day",
    title: "Valentine's Day Special",
    date: "February 14, 2024",
    description: "Romantic dinner for two with special Valentine's Day menu and ambiance.",
    details: "Experience an intimate evening with your loved one featuring a romantic candlelit dinner, special Valentine's menu, and complimentary dessert for couples.",
    image: "https://images.unsplash.com/photo-1511795409834-432f31fbc916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    hasSpecialPage: true,
    linkTo: "/valentine-day",
    category: "Special Occasion"
  },
  {
    id: "anniversary",
    title: "Anniversary Celebration",
    date: "Ongoing",
    description: "Make your anniversary memorable with our special celebration package.",
    details: "Celebrate your special day with a personalized anniversary package including a special menu, complimentary champagne, and a custom dessert.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    hasSpecialPage: true,
    linkTo: "/anniversary",
    category: "Special Occasion"
  },
  {
    id: "sunday-lunch",
    title: "Sunday Lunch Special",
    date: "Every Sunday",
    description: "Enjoy our special Sunday lunch menu with family and friends.",
    details: "Join us every Sunday for our special lunch menu featuring traditional favorites, live music, and a relaxed atmosphere perfect for family gatherings.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    hasSpecialPage: true,
    linkTo: "/sunday-lunch",
    category: "Regular Event"
  }
];

const filterOptions = [
  { id: 'all', label: 'All Events' },
  { id: 'special', label: 'Special Occasions' },
  { id: 'regular', label: 'Regular Events' },
  { id: 'upcoming', label: 'Upcoming Events' }
];

const WhatsOn = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleEventAction = (event: any) => {
    if (event.hasSpecialPage && event.linkTo) {
      navigate(event.linkTo);
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesFilter = activeFilter === 'all' || 
      (activeFilter === 'special' && event.category === 'Special Occasion') ||
      (activeFilter === 'regular' && event.category === 'Regular Event') ||
      (activeFilter === 'upcoming' && new Date(event.date) > new Date());

    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <motion.section className={styles.whatsOnSection}>
      <motion.h1 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Special Events & Occasions
      </motion.h1>

      <div className={styles.filterContainer}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.filterButtons}>
          {filterOptions.map((filter) => (
            <motion.button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          className={styles.eventsGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredEvents.map((event, index) => (
            <motion.div 
              key={event.id} 
              className={styles.eventCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.eventImageContainer}>
                <img
                  src={event.image}
                  alt={event.title}
                  className={styles.eventImage}
                />
                <div className={styles.eventCategory}>{event.category}</div>
                <div className={styles.eventDateBadge}>{event.date}</div>
              </div>
              <div className={styles.eventContent}>
                <h3>{event.title}</h3>
                <p className={styles.description}>{event.description}</p>
                <motion.button
                  className={styles.detailsButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEventAction(event)}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default WhatsOn;
