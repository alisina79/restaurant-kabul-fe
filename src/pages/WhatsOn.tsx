import React from "react";

import { useNavigate } from "react-router-dom";
import { KPatternBackground } from "../components/PatternBackground";
import FadeIn from "../components/animations/FadeIn";
import Logo from "../components/logo";
import what from "../../public/images/what.jpg";
const Weddings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <KPatternBackground
      strokeColor="#ac8d5b"
      fillColor="#ac8d5b"
      backgroundColor="bg-[#1a1e25]"
      patternSize="50px"
      className="
      "
    >
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-pattern mb-20 ">
        <div className="container mx-auto px-6">
          {/* Ensure both columns have equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch overflow-hidden">
            <div className="bg-[#1a1e25] flex flex-col h-full">
              <div className="p-4 md:p-6 lg:p-8 items-center text-center">
                <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
                  <Logo color="#ac8d5b" />
                </FadeIn>
                <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-[#ffffff] uppercase">
                    What's On at Kaboul Gourmet
                  </h3>
                </FadeIn>
                <FadeIn
                  delay={0.3}
                  direction="up"
                  duration={0.8}
                  once={false}
                  size="small"
                  initialOpacity={1}
                >
                  <div className="w-36 h-[3px] bg-white mx-auto my-2"></div>
                </FadeIn>
                <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
                  <h3 className="text-lg md:text-xl font-serif text-[#ffffff]">
                    Celebrating moments that matter
                  </h3>
                </FadeIn>
                <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
                  <p className="mt-2 text-sm md:text-base text-white max-w-2xl">
                  We believe great food is even better when shared on special occasions. That's why we're celebrating moments that matter—like Valentine's Day, Mother's Day, anniversaries, and more. We're also making Sundays something to savor with comforting, well-crafted lunches perfect for gathering with friends or family.
                    <br />
                    <br />
                    Throughout the year, we'll highlight key dates with thoughtful menus, warm hospitality, and just the right atmosphere to make each event feel special.

Keep an eye on this space for updates on upcoming celebrations and seasonal offerings.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
                  <div className="flex flex-wrap justify-center gap-4 mb-6 text-center mt-6">
                    <button
                      className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider border border-[#ac8d5b] bg-[#ac8d5b] text-[#ffffff] 
                 hover:bg-[#1a1e25] hover:text-[#ac8d5b] transition-all duration-500 ease-in-out transform"
                      onClick={() => navigate("/menu")}
                    >
                      Make a Booking
                    </button>
                    <button
                      className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider border border-[#ac8d5b] bg-[#ac8d5b] text-[#ffffff] 
                 hover:bg-[#1a1e25] hover:text-[#ac8d5b] transition-all duration-500 ease-in-out transform"
                      onClick={() => navigate("/events")}
                    >
                      WHAT'S ON
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
                    src="/images/what.jpg"
                    alt="Kaboul Gourmet Restaurant Interior"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </KPatternBackground>
  );
};

export default Weddings;
