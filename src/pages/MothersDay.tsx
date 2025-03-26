import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KPatternBackground } from "../components/PatternBackground";
import FadeIn from "../components/animations/FadeIn";
import Logo from "../components/logo";
import mothersDay from "../../public/dish1.jpg";
import useScrollNavbarStyles from "../hooks/useScrollNavbarStyles";

const MothersDay: React.FC = () => {
    const scrollNavbarStyles = useScrollNavbarStyles();
    const navigate = useNavigate();
  

  const testimonials = [
    {
      boldText: "The perfect combination",
      regularText: " of flavors and hospitality.",
      attribution: "– The Dining Guide",
    },
    {
      boldText: "An authentic experience",
      regularText: " that transports you straight to Afghanistan.",
      attribution: "– Food Explorers",
    },
    {
      boldText: "Warm, inviting atmosphere",
      regularText: " with cuisine that speaks from the heart.",
      attribution: "– Culinary Travels",
    },
  ];

  return (
    // Main container with texture background
    <div 
      className="min-h-screen w-full"
      style={{ 
        backgroundImage: "url('/texture.png')", 
        backgroundRepeat: "repeat",
        backgroundSize: "auto"
      }}
    >
        <div className={`fixed top-4 left-0 w-full z-30 bg-white/85 flex items-center py-4 transition-transform duration-300 ease-in-out transform ${scrollNavbarStyles}`}>
            <div className="container mx-auto px-6 flex flex-col items-start">
              <div className="w-16 h-[2px] bg-[#ac8d5b] my-2"></div>
              <p className="text-2xl md:text-3xl font-serif text-primary mt-10">
                Mothers Day
              </p>
            </div>
          </div>
      {/* Hero Banner Section - Styled like Galvin */}
      <div className="relative w-full overflow-hidden">

        {/* Hero image */}
        <div className="w-full min-h-[100vh] relative">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/dish1.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Hero content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
              Mother's Day at Kaboul Gourmet
            </h1>
            <p className="text-xl md:text-sm text-white mb-4">
              March 30th 2025
            </p>
            <button
                        className="px-8 py-3 font-serif text-sm  font-medium uppercase tracking-wider bg-trasparent text-white border border-white 
                   hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform mt-4"
                        onClick={() => navigate("/reservations")}
                      >
                        Book Now
                      </button>
          </div>
        </div>
      </div>
      
      {/* Content Section - Pattern background container */}
      <section className="w-full overflow-hidden py-10">
        <KPatternBackground
          strokeColor="#af905c"
          fillColor="#7a613c"
          backgroundColor="bg-[#1a1e25]"
          patternSize="50px"
          className="p-6 md:p-12 lg:p-16 overflow-hidden w-full"
        >
          {/* Content wrapper to maintain proper width for content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
              <div className="bg-[#af905c] flex flex-col h-full">
                <div className="p-4 md:p-8 lg:p-12 items-center text-center">
                  <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
                    <Logo color="black" />
                  </FadeIn>
                  <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-gray-900 uppercase">
                      Mother's Day
                    </h2>
                  </FadeIn>
                  <FadeIn
                    delay={0.3}
                    direction="up"
                    duration={0.8}
                    once={false}
                    size="small"
                    initialOpacity={1}
                  >
                    <div className="w-36 h-[3px] bg-white mx-auto my-3"></div>
                  </FadeIn>
                  <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
                    <h3 className="text-lg md:text-xl font-serif text-gray-800">
                      Celebrate Mother's Day in Style at Kaboul Gourmet
                    </h3>
                  </FadeIn>
                  <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
                    <p className="mt-4 text-sm md:text-base text-black max-w-2xl">
                      This Mother's Day, treat the special women in your life to an unforgettable dining experience at Kaboul Gourmet. Our chefs have crafted a special menu that celebrates the warmth and love of mothers everywhere.
                      <br />
                      <br />
                      Our elegant Mother's Day Menu features traditional Afghan delicacies with contemporary twists, including a complimentary glass of champagne for all mothers. From our signature kabuli pulao to decadent desserts, every dish is prepared with care and the finest ingredients.
                      <br />
                      <br />
                      As a special touch, all mothers will receive a small gift to commemorate the occasion. Reserve your table now to secure your place for this popular celebration.
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
                    <div className="flex flex-wrap justify-center gap-4 mb-10 text-center mt-4">
                      <button
                        className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
                   hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
                        onClick={() => navigate("/reservations")}
                      >
                        Book Now
                      </button>
                       <button
                        className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
                   hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
                        onClick={() => navigate("/menu")}
                      >
                        View Menu
                      </button>
                      <button
                        className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
                   hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
                        onClick={() => navigate("/contact")}
                      >
                        Special Requests
                      </button>
                     
                    </div>
                  </FadeIn>
                </div>
              </div>
              <div className="relative overflow-hidden flex flex-col h-full order-2 lg:order-1">
                <FadeIn
                  delay={0.5}
                  direction="up"
                  duration={1.2}
                  once={true}
                  className="h-full"
                >
                  <div className="h-full overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Mother's Day at Kaboul Gourmet"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </KPatternBackground>
        
        {/* Elegant gold button placed at the bottom right */}
        <div className="relative max-w-7xl mx-auto px-4 mt-8">
          <div className="flex justify-end">
            <button 
              onClick={() => navigate("/sudanday")} 
              className="flex items-center justify-center px-6 py-3 text-[#b78c4c] border border-[#b78c4c] bg-transparent hover:bg-[#b78c4c] hover:text-white transition-all duration-300"
              style={{ 
                
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "0.5px"
              }}
            >
                
              <span className="inline-flex items-center justify-center">
                Sunday Lunch at Kaboul Gourmet
                <span className="ml-2" style={{ fontSize: "18px" }}>›</span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MothersDay; 