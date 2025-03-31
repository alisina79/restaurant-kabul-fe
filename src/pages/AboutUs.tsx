import React from "react";
import { useNavigate } from "react-router-dom";
import FadeIn from "../components/animations/FadeIn";
import { FaLeaf, FaUtensils, FaAward } from "react-icons/fa";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-20">
      {/* Full-width hero with content that will be overlapped */}
      <div className="relative">
        {/* Background image that extends full width */}
        <div className="absolute inset-0 h-[70vh] lg:h-[85vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content container that creates the asymmetric layout */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="min-h-[60vh] lg:min-h-[65vh] flex items-center">
            <div className="w-full  py-16">
              <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                  Our Story
                </h1>
                <div className="w-24 h-[3px] bg-[#af905c] mb-8"></div>
                <p className="text-lg text-white/80 mb-10 ">
                  A culinary journey through the rich traditions and flavors of Afghanistan.
                </p>
                <button
                  onClick={() => navigate("/reservations")}
                  className="px-8 py-3 bg-[#ac8d5b] text-white font-medium uppercase text-sm tracking-wider hover:bg-white hover:text-[#af905c] transition-all duration-300"
                >
                  Reserve a Table
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Content section that overlaps the hero - using higher z-index */}
      <div className="container mx-auto px-6 relative -mt-25 lg:mt-4 mb-24 z-30">
        <div className="bg-white shadow-xl rounded-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left content */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                  Experience the True Essence of Afghan Cuisine
                </h2>
                <div className="h-[2px] w-16 bg-[#af905c] mb-8"></div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At <span className="font-medium text-gray-900">Kabul Gourmet</span>, we don't just serve food; we offer a cultural journey. 
                  Our dishes, crafted with passion, bring together centuries of Afghan culinary tradition 
                  infused with a modern touch.
                </p>
                <p className="text-gray-700 leading-relaxed mb-10">
                  Founded in 2015, our restaurant has become a culinary landmark, drawing inspiration from 
                  Afghanistan's rich food heritage while embracing innovation. Every dish tells a story of 
                  tradition, family, and the vibrant tapestry of Afghan culture.
                </p>
              </FadeIn>
              
              {/* Core values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#af905c]/10 mb-4">
                      <FaUtensils className="text-xl text-[#af905c]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Timeless Heritage</h3>
                    <p className="text-sm text-gray-600 md:text-left text-center">
                      Authentic family recipes passed down for generations.
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#af905c]/10 mb-4">
                      <FaLeaf className="text-xl text-[#af905c]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Farm-to-Table</h3>
                    <p className="text-sm text-gray-600 md:text-left text-center">
                      Fresh, organic ingredients for vibrant flavors.
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#af905c]/10 mb-4">
                      <FaAward className="text-xl text-[#af905c]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Award-Winning</h3>
                    <p className="text-sm text-gray-600 md:text-left text-center">
                      Recognized for our exquisite dining experience.
                    </p>
                  </div>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.6} direction="up" duration={0.8} once={true}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate("/menu")}
                    className="px-8 py-3 bg-[#ac8d5b] text-white font-medium uppercase text-sm tracking-wider hover:bg-[#1a1e25] transition-colors"
                  >
                    Discover Our Menu
                  </button>
                  <button
                    onClick={() => navigate("/menu")}
                    className="px-8 py-3 bg-[#ac8d5b] text-white font-medium uppercase text-sm tracking-wider hover:bg-[#1a1e25] transition-colors"
                  >
                    <a href="/ourjourny" className="px-8 py-3 bg-[#ac8d5b] text-white font-medium uppercase text-sm tracking-wider hover:bg-[#1a1e25] transition-colors">Explore More</a>
                  </button>
                </div>
              </FadeIn>
            </div>
            
            {/* Right image - taller than content */}
            <div className="lg:col-span-5 min-h-full">
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Afghan cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
