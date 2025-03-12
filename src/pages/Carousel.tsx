import { useState, useEffect, SetStateAction } from "react";
import styles from "../css/Carousel.module.css";
import "../css/CarouselBackground.css"; // Import the background styles
import first from "/src/photo/first.jpg";
import second from "/src/photo/second.jpg";
import third from "/src/photo/third.jpg";
import four from "/src/photo/four.jpg";
import five from "/src/photo/five.jpg";
import six from "/src/photo/six.jpg";

// Define video URL - This is a placeholder URL for a restaurant promo video
const VIDEO_URL = "/src/video/video.mp4"; 

// Updated to include a video item at the beginning
const items = [
  { type: "video", url: VIDEO_URL, caption: "Welcome to Kaboul Gourmet Restaurant" },
  {
    type: "image",
    src: first,
    caption: "Experience a luxurious dining experience at Kaboul Gourmet.",
  },
  { type: "image", src: second, caption: "Indulge in our chef's special creations." },
  { type: "image", src: third, caption: "Savor authentic flavors from our renowned chefs." },
  { type: "image", src: four, caption: "Relax in a cozy and romantic atmosphere." },
  { type: "image", src: five, caption: "Enjoy the perfect blend of tradition and modernity." },
  { type: "image", src: six, caption: "Create memorable moments with every meal." },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    // Only auto-advance if not on video slide
    if (isPlaying && currentSlide !== 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSlide]);

  // These handlers are simplified since the video will always be playing
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnded = () => {
    // The video will loop, but we'll keep this handler for completeness
    setIsVideoPlaying(true);
  };

  const handlePrev = () => {
    // Move to the previous slide
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };
    
  const handleNext = () => {
    // Move to the next slide
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };
    
  const handleDotClick = (index: SetStateAction<number>) => {
    // Set the current slide directly
    setCurrentSlide(index);
  };

  return (
    <section className={`${styles.carouselSection} carouselSection`}>
      {/* K Wallpaper Background Elements */}
      <div className="carousel-background-pattern"></div>
      <div className="carousel-background-k">K</div>
      <div className="carousel-background-circle carousel-background-circle-1"></div>
      <div className="carousel-background-circle carousel-background-circle-2"></div>
      <div className="carousel-background-corner carousel-background-top-left"></div>
      <div className="carousel-background-corner carousel-background-top-right"></div>
      <div className="carousel-background-corner carousel-background-bottom-left"></div>
      <div className="carousel-background-corner carousel-background-bottom-right"></div>
      
      <div className={styles.carouselContainer}>
        {/* Render video for the first item (index 0) */}
        {currentSlide === 0 ? (
          <div className={styles.videoContainer}>
            <video
              id="carouselVideo"
              className={styles.carouselVideo}
              src={items[0].url}
              onPlay={handleVideoPlay}
              onEnded={handleVideoEnded}
              onPause={() => setIsVideoPlaying(false)}
              loop={true} // Set loop to true to make it play continuously
              muted={true} // Mute the video to ensure autoplay works in all browsers
              autoPlay={true} // Add autoplay attribute
              playsInline={true} // Ensure it plays inline on mobile devices
              controls={false}
            />
            {/* Remove the play button overlay since the video will autoplay */}
            <div className={styles.gradientOverlay}>
              <h2 className={styles.carouselCaption}>
                {items[0].caption}
              </h2>
              <p className={styles.carouselSubtitle}>
                Discover the best Afghan cuisine in town
              </p>
              <p className={styles.carouselDescription}>
                Experience traditional flavors with modern presentation
              </p>
              <button className={styles.carouselButton}>View Our Menu</button>
            </div>
          </div>
        ) : (
          // Render image slides for all other indices
          <div
            className={styles.carouselSlide}
            style={{ backgroundImage: `url(${items[currentSlide].src})` }}
          >
            <div className={styles.gradientOverlay}>
              <h2 className={styles.carouselCaption}>
                {items[currentSlide].caption}
              </h2>
              <p className={styles.carouselSubtitle}>
                Afghan cuisine with a modern twist
              </p>
              <p className={styles.carouselDescription}>
                Using the finest ingredients and traditional recipes
              </p>
              <button className={styles.carouselButton}>View Our Menu</button>
            </div>
          </div>
        )}

        <div className={styles.controls}>
          <button className={styles.arrow} onClick={handlePrev}>
            ❮
          </button>
          <button className={styles.arrow} onClick={handleNext}>
            ❯
          </button>
          <button
            className={styles.playPause}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? "⏸" : "▶️"}
          </button>
        </div>

        <div className={styles.indicatorDots}>
          {items.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
