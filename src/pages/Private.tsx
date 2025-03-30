import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import styles from '../css/Private.module.css';
import { useEffect } from 'react';

export default function Private() {
    const navigate = useNavigate();
    const buttonControls = useAnimation();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.3,
                delayChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Button animation sequence
    useEffect(() => {
        const sequence = async () => {
            // Initial button appearance with a slide-in from bottom-right
            await buttonControls.start({
                opacity: [0, 1],
                x: [50, 0],
                y: [30, 0],
                scale: [0.9, 1.05, 1],
                transition: { duration: 1, delay: 1.8, ease: "easeOut" }
            });
            
            // Subtle continuous pulse animation
            buttonControls.start({
                boxShadow: [
                    "0 10px 30px rgba(0, 0, 0, 0.25), 0 8px 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 8px rgba(255, 255, 255, 0.5)",
                    "0 12px 35px rgba(0, 0, 0, 0.25), 0 8px 15px rgba(0, 0, 0, 0.2), 0 0 25px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.6)",
                    "0 10px 30px rgba(0, 0, 0, 0.25), 0 8px 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 8px rgba(255, 255, 255, 0.5)"
                ],
                scale: [1, 1.02, 1],
                transition: {
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            });
        };
        
        sequence();
    }, [buttonControls]);

    return (
        <div className={styles.privateContainer}>
            <motion.div 
                className={styles.heroSection}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 
                    className={styles.mainTitle}
                    variants={itemVariants}
                >
                    PRIVATE DINING IN THE CITY OF PARIS
                </motion.h1>
                
                <motion.h2 
                    className={styles.subtitle}
                    variants={itemVariants}
                >
                    Unforgettable Experiences at Kaboul Gourmet
                </motion.h2>
                
                <motion.p 
                    className={styles.description}
                    variants={itemVariants}
                >
                    Unforgettable experiences for any event from intimate private dining to exclusive use events upto 150 guests.
                </motion.p>
                
                <div className={styles.buttonGroup}>
                    <motion.button 
                        className={styles.bookButton}
                        onClick={() => navigate('/reservations')}
                        animate={buttonControls}
                        whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            x: -5,
                            letterSpacing: "2.5px",
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        whileTap={{ 
                            scale: 0.98,
                            y: 2,
                            x: -2,
                            transition: { duration: 0.1 }
                        }}
                        variants={itemVariants}
                    >
                        <motion.span
                            initial={{ opacity: 1 }}
                            animate={{
                                opacity: [1, 0.8, 1],
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }
                            }}
                        >
                            Book Now
                        </motion.span>
                    </motion.button>
                    
                    <motion.button 
                        className={styles.privateRoomButton}
                        onClick={() => navigate('/private-dining-arch')}
                        whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            x: -5,
                            letterSpacing: "2.5px",
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        whileTap={{ 
                            scale: 0.98,
                            y: 2,
                            x: -2,
                            transition: { duration: 0.1 }
                        }}
                        variants={itemVariants}
                    >
                        <motion.span>
                            View The Arch
                        </motion.span>
                    </motion.button>
                </div>
            </motion.div>

            <motion.div 
                className={styles.videoWrapper}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <video 
                    className={styles.videoPlayer} 
                    src="/kabouli.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
                
                <div className={styles.overlay}>
                    
                </div>
            </motion.div>
            
            {/* Featured Private Dining Rooms */}
            <motion.div 
                className={styles.featuredRooms}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <h2 className={styles.roomsTitle}>Our Private Dining Spaces</h2>
                <div className={styles.roomsGrid}>
                    <div className={styles.roomCard} onClick={() => navigate('/private-dining-arch')}>
                        <div className={styles.roomImageWrapper}>
                            <img src="/hall.jpg" alt="The Private Dining Garden Room" className={styles.roomImage} />
                        </div>
                        <div className={styles.roomInfo}>
                            <h3 className={styles.roomName}>The Garden Room</h3>
                            <p className={styles.roomCapacity}>Up to 20 guests</p>
                            <button className={styles.viewRoomButton}>View Details</button>
                        </div>
                    </div>
                    {/* You can add more room cards here as you create more pages */}
                </div>
            </motion.div>
        </div>
    );
}

