import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import FadeIn from "../components/animations/FadeIn";

const HERO_CONTENT = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80",
    alt: "Elegant restaurant interior",
    subtitle: "Fine Dining Experience Since 2008",
    title: "Exceptional Cuisine\nRefined Elegance",
    description:
      "An unforgettable dining experience in the heart of London. Michelin-starred cuisine in a setting of understated elegance.",
    button: {
      text: "Book a Table",
      url: "/reservations",
    },
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    alt: "Chef preparing gourmet meal",
    poster:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Culinary Artistry",
    title: "Watch Our Chefs\nCreate Magic",
    description:
      "Witness the craftsmanship and passion behind every dish. Our executive chef brings decades of experience to create unforgettable flavors.",
    button: {
      text: "Meet Our Team",
      url: "/chefs",
    },
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Fine dining experience",
    subtitle: "Memorable Moments",
    title: "Perfect Setting\nFor Special Occasions",
    description:
      "Celebrate life's most precious moments in an atmosphere of sophistication and warmth. Private dining rooms available for intimate gatherings.",
    button: {
      text: "Private Events",
      url: "/events",
    },
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Gourmet dish presentation",
    subtitle: "Seasonal Selections",
    title: "Locally Sourced\nGlobally Inspired",
    description:
      "Our menu changes with the seasons, featuring the finest ingredients from local producers and influences from around the world.",
    button: {
      text: "Explore Menu",
      url: "/menu",
    },
  },
];

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [parallaxElements, setParallaxElements] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      setParallaxElements({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Auto rotate slides only when not on video slide or video is paused
    const intervalId = setInterval(() => {
      if (HERO_CONTENT[currentSlide].type !== "video" || isPaused) {
        goToNextSlide();
      }
    }, 6000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, [currentSlide, isPaused]);

  // Control video playback when slide changes
  useEffect(() => {
    if (HERO_CONTENT[currentSlide].type === "video") {
      if (videoRef.current) {
        if (isVideoPlaying) {
          videoRef.current
            .play()
            .catch((err) => console.log("Video autoplay prevented:", err));
          setIsPaused(false);
        } else {
          videoRef.current.pause();
          setIsPaused(true);
        }
      }
    }
  }, [currentSlide, isVideoPlaying]);

  const toggleVideoPlayback = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const goToNextSlide = () => {
    if (transitioning) return;

    setTransitioning(true);

    // Hide text first
    setTextVisible(false);

    // Wait for text to fade out, then change slide
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CONTENT.length);

      // Show text after slide changes
      setTimeout(() => {
        setTextVisible(true);
        setTransitioning(false);
      }, 300);
    }, 500);
  };

  const goToPrevSlide = () => {
    if (transitioning) return;

    setTransitioning(true);

    // Hide text first
    setTextVisible(false);

    // Wait for text to fade out, then change slide
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + HERO_CONTENT.length) % HERO_CONTENT.length
      );

      // Show text after slide changes
      setTimeout(() => {
        setTextVisible(true);
        setTransitioning(false);
      }, 300);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (transitioning || index === currentSlide) return;

    setTransitioning(true);

    // Hide text first
    setTextVisible(false);

    // Wait for text to fade out, then change slide
    setTimeout(() => {
      setCurrentSlide(index);

      // Show text after slide changes
      setTimeout(() => {
        setTextVisible(true);
        setTransitioning(false);
      }, 300);
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background with Enhanced Carousel Effect */}
      <div className="absolute inset-0 z-0">
        {HERO_CONTENT.map((content, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-1200",
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            style={{
              transform: `translate(${parallaxElements.x}px, ${parallaxElements.y}px)`,
              transition:
                "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.5s ease-in-out",
            }}
          >
            {content.type === "image" ? (
              <div
                className="absolute inset-0 bg-cover bg-center h-full w-full"
                style={{
                  backgroundImage: `url(${content.src})`,
                  transform: `scale(${currentSlide === index ? 1.05 : 1})`,
                  transition: "transform 7s ease-out",
                }}
                aria-label={content.alt}
              />
            ) : (
              <div className="absolute inset-0 h-full w-full overflow-hidden">
                <video
                  ref={videoRef}
                  src={content.src}
                  poster={content.poster}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                  aria-label={content.alt}
                />
                {currentSlide === index && (
                  <button
                    onClick={toggleVideoPlayback}
                    className="absolute bottom-32 right-6 md:bottom-36 md:right-10 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm hover:bg-black/70 transition-all z-50"
                    aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40 z-20" />
      </div>

      {/* Enhanced Carousel Controls */}
      <div className="absolute bottom-1/2 w-full flex justify-between px-4 md:px-8 z-30">
        <button
          onClick={goToPrevSlide}
          disabled={transitioning}
          className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/60 active:scale-95 transition-all duration-300 flex items-center justify-center transform hover:translate-x-[-5px]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNextSlide}
          disabled={transitioning}
          className="bg-black/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/60 active:scale-95 transition-all duration-300 flex items-center justify-center transform hover:translate-x-[5px]"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Improved Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {HERO_CONTENT.map((content, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={transitioning}
            className={cn(
              "transition-all duration-500 rounded-full outline-none focus:ring-2 focus:ring-gold/50",
              currentSlide === index
                ? "bg-gold w-8 h-2"
                : "bg-white/40 w-2 h-2 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}${
              content.type === "video" ? " (video)" : ""
            }`}
          >
            {content.type === "video" && <span className="sr-only">Video</span>}
          </button>
        ))}
      </div>

      {/* Enhanced Content with improved animations - positioned bottom center */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center transition-opacity duration-500",
            textVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {textVisible && (
            <>
              <FadeIn
                delay={0.3}
                direction="up"
                duration={1}
                initialOpacity={0}
                key={`subtitle-${currentSlide}`}
              >
                <p className="text-[#ac8d5b] uppercase tracking-[0.4em] mb-4 text-sm sm:text-base font-light">
                  {HERO_CONTENT[currentSlide].subtitle}
                </p>
              </FadeIn>

              <FadeIn
                delay={0.7}
                direction="up"
                duration={1}
                initialOpacity={0}
                springEffect
                key={`title-${currentSlide}`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl !text-white font-serif font-light leading-tight tracking-wide mb-4 reveal-text">
                  {HERO_CONTENT[currentSlide].title
                    .split("\n")
                    .map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i <
                          HERO_CONTENT[currentSlide].title.split("\n").length -
                            1 && <br />}
                      </React.Fragment>
                    ))}
                </h1>
              </FadeIn>

              <FadeIn
                delay={1.1}
                direction="up"
                duration={1}
                initialOpacity={0}
                key={`desc-${currentSlide}`}
              >
                <p className="text-white/80 !text-base mb-6 font-light max-w-2xl mx-auto">
                  {HERO_CONTENT[currentSlide].description}
                </p>
              </FadeIn>

              <FadeIn
                delay={1.5}
                direction="up"
                duration={1}
                initialOpacity={0}
                key={`button-${currentSlide}`}
              >
                <div className="flex justify-center">
                  <Link
                    to={HERO_CONTENT[currentSlide].button.url}
                    className="bg-gold hover:bg-gold-dark text-[#ac8d5b] hover:text-white py-3 px-6 rounded-none tracking-wider transition-all duration-300 uppercase text-sm flex items-center justify-center group"
                  >
                    {HERO_CONTENT[currentSlide].button.text}
                    <ArrowRight className="ml-2 w-4 h-4 text-[#ac8d5b] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>
            </>
          )}
        </div>
      </div>

      {/* Enhanced scroll indicator below carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className={cn(
            "flex flex-col items-center transition-opacity duration-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="text-white/70 text-xs tracking-[0.3em] mb-1 uppercase font-light">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
