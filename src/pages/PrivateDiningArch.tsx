import React, { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { KPatternBackground } from "../components/PatternBackground";
import FadeIn from "../components/animations/FadeIn";
import Logo from "../components/logo";

const PrivateDiningArch: React.FC = () => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 3D tilt effect on mouse movement - from Celebration component
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const { left, top, width, height } = rect;
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Calculate rotation values based on mouse position
    const rotateY = 10 * (0.5 - x);
    const rotateX = 10 * (y - 0.5);
    
    // Apply the transformations with perspective for 3D effect
    imageRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale3d(1.05, 1.05, 1.05)
    `;
  }, []);
  
  // Reset transformations when mouse leaves
  const handleMouseLeave = useCallback(() => {
    if (!imageRef.current) return;
    
    // Reset with smooth transition
    imageRef.current.style.transform = 
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  // Carousel data
  const carouselItems = [
    {
      image: "/hall.jpg",
      title: "The Arch",
      description: "Up to 20 guests",
      content: "Perfect for intimate gatherings and corporate events in an exclusive setting."
    },
    {
      image: "https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2024/04/galvin-la-chapelle-spitalfields-market-london-city-french-restaurant-fine-dining-michelin-star-016-960x960.jpg.webp",
      title: "Elegant Dining Experience",
      description: "Exceptional Service",
      content: "Exquisite atmosphere with personalized service and bespoke menus created by our chefs."
    },
    {
      image: "https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2024/04/private-dining-room-restaurant-london-galvin-la-chapelle-04-960x960.jpg.webp",
      title: "Exceptional Occasions",
      description: "Memorable Events",
      content: "Create memorable celebrations with our award-winning culinary team for any special occasion."
    }
  ];

  // Navigate carousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 2: Full-screen Carousel with Hall Images - Galvin Style */}
      <div className="w-full bg-white mb-16 md:mb-24">
        {/* Full-screen Carousel Container with Navbar Header */}
        <div className="relative w-full h-screen overflow-hidden">
          {/* Navbar-style Header that overlaps the carousel */}
          <div className="absolute top-4 left-0 w-full z-30 bg-white/85 flex items-center py-4">
            <div className="container mx-auto px-6 flex flex-col items-start">
              <div className="w-16 h-[2px] bg-[#ac8d5b] my-2"></div>
              <p className="text-2xl md:text-3xl font-serif text-primary mt-10">
                Private Dining
              </p>
            </div>
          </div>
          
          {/* Carousel Images */}
          {carouselItems.map((item, index) => (
            <div 
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Center-positioned Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex items-center justify-center">
                <div className="text-center px-4 md:px-8 max-w-3xl">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
                    {item.title}
                  </h3>
                  <div className="w-16 h-[2px] bg-[#ac8d5b] mx-auto my-4"></div>
                  <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-3">
                    {item.description}
                  </p>
                  <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8">
                    {item.content}
                  </p>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="px-8 py-3  text-[#ffffff] border-2 border-[#ffffff] text-sm uppercase tracking-wider font-medium hover:bg-[#ac8d5b] hover:text-[#ffffff] hover:border-[#ac8d5b] transition-colors duration-300 mx-auto"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {carouselItems.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Scroll Down Indicator
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div> */}
        </div>
      </div>

      {/* Section 3: From Seasonal Page (Left Image, Right Content) */}
      <div className="mb-16 md:mb-24">
        <KPatternBackground
          strokeColor="#af905c"
          fillColor="#645741"
          backgroundColor="bg-[#af905c]"
          patternSize="50px"
        >
          <section className="w-full py-16 md:py-24 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
              {/* Ensure both columns have equal height */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch overflow-hidden">
                {/* Left Side (Image) */}
                <div className="relative overflow-hidden flex flex-col h-full">
                  <FadeIn
                    delay={0.5}
                    direction="up"
                    duration={1.2}
                    once={true}
                    className="h-full"
                  >
                    <div className="h-full overflow-hidden group">
                      <img
                        src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2024/04/best-restaurants-london-city-spitalfields-market-liverpool-street-bishopsgate-private-dining-rooms-event-space-michelin-011-888x1333.jpg.webp"
                        alt="Private Dining Space"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* Right Side (Content) */}
                <div className="bg-[#af905c] flex flex-col h-full">
                  <div className="p-4 md:p-8 lg:p-12 items-center text-center">
                    <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
                      <Logo color="black" />
                    </FadeIn>
                    <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-gray-900 uppercase">
                        EXCLUSIVE EXPERIENCE
                      </h2>
                    </FadeIn>
                    <FadeIn
                      delay={0.3}
                      direction="up"
                      duration={1}
                      once={false}
                      size="small"
                      initialOpacity={1}
                    >
                      <div className="w-36 h-[3px] bg-white mx-auto my-3"></div>
                    </FadeIn>
                    <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
                      <h3 className="text-lg md:text-xl font-serif text-gray-800">
                        Unforgettable private dining
                      </h3>
                    </FadeIn>
                    <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
                      <p className="mt-4 text-sm md:text-base text-black max-w-2xl">
                        The Arch private dining room is thoughtfully set within the main restaurant, 
                        offering the perfect balance of privacy for your event while still allowing your guests 
                        to enjoy the lively ambiance. The elegant interior of The Arch features luxurious touches, 
                        including fine furnishings, ambient lighting, and a sophisticated atmosphere.
                      </p>
                      <p className="mt-4 text-sm md:text-base text-black max-w-2xl">
                        Your event can be further elevated by our optional add-on bespoke services, designed to cater 
                        to your every need. We offer personalized floral arrangements, complimentary menu printing, 
                        and additional elegant touches that add a special atmosphere to your gathering.
                      </p>
                      <p className="mt-4 text-sm md:text-base text-black max-w-2xl">
                        Your event can be further elevated by our optional add-on bespoke services, designed to cater 
                        to your every need. We offer personalized floral arrangements, complimentary menu printing, 
                        and additional elegant touches that add a special atmosphere to your gathering.
                      </p>
                      <p className="mt-4 text-sm md:text-base text-black max-w-2xl">
                        Your event can be further elevated by our optional add-on bespoke services, designed to cater 
                        to your every need. We offer personalized floral arrangements, complimentary menu printing, 
                        and additional elegant touches that add a special atmosphere to your gathering.
                      </p>
                      
                    </FadeIn>
                    <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
                      <div className="my-5 text-center">
                        <button
                          className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
                          onClick={() => navigate("/reservations")}
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </FadeIn>
                  </div>
               
                </div>
              </div>
            </div>
          </section>
        </KPatternBackground>
      </div>

      {/* Section 4: Menu with Celebration Page Background */}
      <div 
        className="w-full py-20 md:py-28 lg:py-32 relative mb-16"
        style={{
          backgroundImage: "url('/texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center uppercase text-[#1a1e25] mb-8">
                PRIVATE DINING MENUS
              </h2>
              <div className="w-24 h-[2px] bg-[#ac8d5b] mx-auto mb-12"></div>
            </FadeIn>
            
            {/* Description Text */}
            <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
              <div className="text-center mb-12">
                <p className="text-lg text-gray-800 mb-4">
                  We offer a range of carefully crafted menus for private dining events, featuring our signature Afghan cuisine.
                </p>
                <p className="text-lg text-gray-800">
                  From intimate lunches to lavish dinner celebrations, our culinary team creates exceptional dining experiences for all occasions.
                </p>
              </div>
            </FadeIn>
            
            {/* CTA Button */}
            <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
              <div className="text-center mt-12">
                <div className="flex justify-center"><button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center h-12 px-8 bg-[#ac8d5b] text-white text-sm uppercase tracking-wider font-medium hover:bg-[#1a1e25] transition-colors duration-300 mr-4"
                >
                  REQUEST MENUS
                </button>
                <a 
                  href="/menus/private-dining-menu.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-8 bg-white border border-[#ac8d5b] text-[#ac8d5b] text-sm uppercase tracking-wider font-medium hover:bg-[#ac8d5b] hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  VIEW MENU PDF
                </a></div>
                <p className="mt-4 text-sm text-gray-600">
                  Custom menus available upon request for your special event
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateDiningArch; 