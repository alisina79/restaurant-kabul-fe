import React from "react";
import FadeIn from "../components/animations/FadeIn";
import { KPatternBackground } from "../components/PatternBackground";
import { useNavigate } from "react-router-dom";
import { Testimonial } from "../components/Testimonial";
import Logo from "../components/logo";

const About: React.FC = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      boldText: "The best of 2020's",
      regularText: " eating out (and in).",
      attribution: "– The Hot Dinners Awards",
    },
    {
      boldText: "Unlike many City restaurants,",
      regularText: " La Chapelle is a great bet on the weekend.",
      attribution: "– Great British Chefs",
    },
    {
      boldText: "The epitome of fine dining,",
      regularText: " with exceptional service and stunning surroundings.",
      attribution: "– Food & Travel Magazine",
    },
  ];

  return (
    <KPatternBackground
      strokeColor="#af905c"
      fillColor="#645741"
      backgroundColor="bg-[#af905c]"
      patternSize="50px"
    >
      <div className="w-full min-h-screen overflow-hidden max-w-[1800px] mx-auto mt-[50px] px-[30px] py-[30px] flex flex-col lg:flex-row gap-[30px]" style={{marginTop: '50px',}}> 
        {/* Left Side (Image) - Similar to Celebration's imageColumn */}
        <div className="w-full lg:w-1/2 relative overflow-hidden flex items-center justify-center rounded shadow-lg order-2 lg:order-1 perspective-1000 transform-style-preserve-3d transition-transform">
          <FadeIn
            delay={0.5}
            direction="up"
            duration={1.2}
            once={true}
            className="h-full w-full"
          >
            <div className="h-full w-full overflow-hidden group">
              <img
                src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2024/04/best-restaurants-london-city-spitalfields-market-liverpool-street-bishopsgate-private-dining-rooms-event-space-michelin-011-888x1333.jpg.webp"
                alt="Galvin La Chapelle Restaurant Interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/5 pointer-events-none transition-background duration-500"></div>
            </div>
          </FadeIn>
        </div>

        {/* Right Side (Content) - Similar to Celebration's textColumn */}
        <div className="w-full lg:w-1/2 bg-[#af905c] flex flex-col order-1  lg:order-2 rounded shadow-lg p-[40px] md:p-[60px] lg:p-[80px] justify-center z-[1]">
          <div className="flex flex-col items-center text-center ">
            <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
              <Logo color="black" />
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-gray-900 uppercase mb-[30px] relative">
                SEASONAL FRESH
                <span className="absolute left-1/2 bottom-[-15px] w-[60px] h-[2px] bg-white transform translate-x-[-50%]"></span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
              <h3 className="text-lg md:text-xl font-serif text-gray-800 my-[15px]">
                Only the very best ingredients
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
              <div className="mt-4 text-sm md:text-base text-black max-w-[700px] mx-auto mb-[60px]">
                <p className="mb-[18px] text-center">
                  Our menus at La Chapelle celebrate only the best in produce
                  of the season. With frequently changing menus, our Head Chef
                  continues to adapt our offering to ensure we only serve our
                  guests the very best.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
              <div className="flex justify-center items-center mb-[30px] max-w-[580px] mx-auto">
                <button
                  className="min-w-[200px] px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black border-2 border-[#af905c] hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:translate-y-[-10px]"
                  onClick={() => navigate("/menu")}
                >
                  MENUS
                </button>
              </div>
            </FadeIn>
            
            <Testimonial testimonials={testimonials} />
          </div>
          
          <FadeIn
            delay={0.5}
            direction="up"
            duration={1.2}
            once={true}
            className="h-full w-full mt-[30px] overflow-hidden rounded shadow-lg"
          >
            <div className="h-full w-full overflow-hidden group">
              <img
                src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2024/04/restaurant-michelin-star-french-city-london-galvin-la-chapelle-fish-04-960x640.jpg.webp"
                alt="Galvin La Chapelle Restaurant Interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/5 pointer-events-none transition-background duration-500"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </KPatternBackground>
  );
};

export default About;
