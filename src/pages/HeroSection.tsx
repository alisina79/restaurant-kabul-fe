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
    subtitle: "Every plate is a canvas. Every flavor tells a story",
    title: "Exceptional Cuisine. Effortless Elegance",
    description:
      "Reserve your table and discover a unique Afghan dining experience in the heart of Grenoble. Bold flavors, elegant ambiance, and warm hospitality await.",
    button: {
      text: "Book a Table",
      url: "/reservations",
    },
  },
  {
    type: "video",
    src: "https://youtu.be/xPPLbEFbCAo?si=YSQrHCJV9KR4wDpU.mp4",
    alt: "Chef preparing gourmet meal",
    poster:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    subtitle: "Celebrate with Elegant Flavors, Crafted with Love",
    title: "A Mother's Day to Remember",
    description:
      "Celebrate Mother’s Day with a thoughtfully crafted menu and a heartfelt gift for every mom — a small gesture to make her feel truly special.",
    button: {
      text: "Discover More",
      url: "/mothers-day",
    },
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Fine dining experience",
    subtitle: "Déjeuner du Dimanche",
    title: "Ambiance Parfaite – Pour Occasions Spéciales",
    description:
      "Celebrate life’s special moments in a setting of elegance and comfort. Private dining available for your most intimate occasions.",
    button: {
      text: "Sunday Lunch",
      url: "/sunday",
    },
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Gourmet dish presentation",
    subtitle: "Saison Spéciale",
    title: "A Spéciale Evening to Remember",
    description:
      "Celebrate l’amour with a menu spéciale Saint-Valentin — seasonal flavors, crafted with passion, for an unforgettable soirée.",
    button: {
      text: "Valentine's Day",
      url: "/valentineday",
    },
  },

  {
    type: "image",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Gourmet dish presentation",
    subtitle: "Savoir-Faire",
    title: "A Toast to Amour",
    description:
      "Celebrate your anniversaire with refined flavors, warm ambiance, and moments to remember.",
    button: {
      text: "Anniversary",
      url: "/anniversary",
    },
  },
];

// Custom particle styles that don't rely on keyframe animations
const particleStyle = (index: number) => {
  const size = Math.floor(Math.random() * 8) + 2;
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    opacity: (Math.random() * 0.5).toFixed(2),
    transform: 'translateY(0)',
    transition: `transform ${Math.floor(Math.random() * 10) + 10}s ease-in-out infinite`,
  };
};

// Create a CSS animation with inline animation using different approach
const scrollDotAnimation = {
  animation: "2s ease-in-out infinite",
  animationTimingFunction: "ease-in-out",
  animationName: "scrollBounce",
  // Use transformOrigin instead of hardcoded transform with translateX
  transformOrigin: "center",
  animationKeyframes: [
    { 
      transform: "translateY(0)", 
      offset: 0 
    },
    { 
      transform: "translateY(10px)", 
      offset: 0.5 
    },
    { 
      transform: "translateY(0)", 
      offset: 1 
    }
  ]
};

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [parallaxElements, setParallaxElements] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Enhanced parallax effect with more responsiveness
      const x = (window.innerWidth / 2 - e.clientX) / 30;
      const y = (window.innerHeight / 2 - e.clientY) / 30;
      setParallaxElements({ x, y });
      
      // Track mouse position for spotlight effect
      setMousePosition({ 
        x: e.clientX / window.innerWidth, 
        y: e.clientY / window.innerHeight 
      });
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
                "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {content.type === "image" ? (
              <div
                className="absolute inset-0 bg-cover bg-center h-full w-full"
                style={{
                  backgroundImage: `url(${content.src})`,
                  transform: `scale(${currentSlide === index ? 1.05 : 1})`,
                  transition: "transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
                    className="absolute bottom-32 right-6 md:bottom-36 md:right-10 bg-black/40 text-white p-3 rounded-full backdrop-blur-sm hover:bg-black/70 transition-all z-50 group shadow-lg transform hover:scale-105 active:scale-95 duration-300"
                    aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-5 h-5 group-hover:text-gold" />
                    ) : (
                      <Play className="w-5 h-5 group-hover:text-gold" />
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40 z-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.8) 80%)`,
          }}
        />
        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.4)_80%)]"></div>
      </div>

      {/* Enhanced Carousel Controls */}
      <div className="absolute bottom-1/2 w-full flex justify-between px-4 md:px-8 z-30">
        <button
          onClick={goToPrevSlide}
          disabled={transitioning}
          className="bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gold/80 active:scale-95 transition-all duration-300 flex items-center justify-center transform hover:translate-x-[-5px] shadow-[0_0_15px_rgba(0,0,0,0.2)] group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 group-hover:text-black" />
        </button>
        <button
          onClick={goToNextSlide}
          disabled={transitioning}
          className="bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gold/80 active:scale-95 transition-all duration-300 flex items-center justify-center transform hover:translate-x-[5px] shadow-[0_0_15px_rgba(0,0,0,0.2)] group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 group-hover:text-black" />
        </button>
      </div>

      {/* Improved Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {HERO_CONTENT.map((content, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={transitioning}
            className={cn(
              "transition-all duration-500 rounded-full outline-none focus:ring-2 focus:ring-gold/50",
              currentSlide === index
                ? "bg-gold w-10 h-2 shadow-[0_0_10px_rgba(172,141,91,0.5)]"
                : "bg-white/30 w-2 h-2 hover:bg-white/70 hover:w-4"
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
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20  px-4 sm:px-6 lg:px-8 w-full">
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
                <p className="text-white uppercase tracking-[0.4em] mb-4 text-sm sm:text-base font-light relative inline-block after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gold/30 after:bottom-[-5px] after:left-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:hover:scale-x-100">
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl !text-white font-serif font-light leading-tight tracking-wide mb-6 reveal-text" style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}>
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
                <p className="text-white/90 !text-base sm:text-lg mb-8 font-light max-w-2xl mx-auto leading-relaxed">
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
                    className="bg-transparent text-[#ac8d5b] hover:text-white py-3 px-8 tracking-wider transition-all duration-500 uppercase text-sm flex items-center group no-underline"
                  >
                    {HERO_CONTENT[currentSlide].button.text}
                    <ArrowRight className="ml-2 w-4 h-4 text-[#ac8d5b] group-hover:text-white transition-transform duration-500 group-hover:translate-x-1" />
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
          <span className="text-gold/80 text-xs tracking-[0.3em] mb-2 uppercase font-light">
            Scroll
          </span>
          <div className="w-[1px] h-12 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/0 via-gold/80 to-gold/0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gold/0 via-gold to-gold/0 animate-pulse"></div>
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold rounded-full animate-bounce"
            ></div>
          </div>
        </div>
      </div>

      {/* Add subtle floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle absolute bg-white/10 rounded-full"
              style={particleStyle(i)}
            />
          ))}
        </div>
      </div>

      {/* Add a subtle grain texture */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
        }}
      ></div>
    </section>
  );
};

export default Hero;
