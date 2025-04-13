import React from "react";
import { useNavigate } from "react-router-dom";
import { KPatternBackground } from "../components/PatternBackground";
import FadeIn from "../components/animations/FadeIn";
import Logo from "../components/logo";
import hah from "../images/hah.jpg";

const Celebrations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <KPatternBackground
      strokeColor="#af905c"
      fillColor="#bea47d"
      backgroundColor="bg-[#ffffff]"
      patternSize="50px"
      className="mt-20"
    >
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-pattern">
        <div className="container mx-auto px-6">
          {/* Ensure both columns have equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch overflow-hidden">
            <div className="bg-[#af905c] flex flex-col h-full">
              <div className="p-4 md:p-8 lg:p-12 items-center text-center">
                <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                  <Logo color="black" />
                </FadeIn>
                <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-gray-900 uppercase">
                    Celebrations
                  </h2>
                </FadeIn>
                <FadeIn
                  delay={0.4}
                  direction="up"
                  duration={0.8}
                  once={false}
                  size="small"
                  initialOpacity={1}
                >
                  <div className="w-36 h-[3px] bg-white mx-auto my-3"></div>
                </FadeIn>
                <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
                  <h3 className="text-lg md:text-xl font-serif text-gray-800">
                    Celebrate with us.
                  </h3>
                </FadeIn>
                <FadeIn delay={0.6} direction="up" duration={0.8} once={true}>
                  <p className="mt-4 text-sm md:text-base text-black max-w-2xl">
                    Celebrate life’s special moments with us at KABOUL GOURMET.
                    Whether it’s a birthday, graduation, wedding reception, or a
                    new job, our warm and welcoming space is the perfect place
                    to gather.
                  </p>
                </FadeIn>
                <br />
                <br />
                <FadeIn delay={0.7} direction="up" duration={0.8} once={true}>
                  <p className="text-sm md:text-base text-black max-w-2xl">
                    We offer private dining options for both small and larger
                    groups, and you can even reserve the entire restaurant for
                    exclusive events. Whatever the occasion, we’ll help make it
                    feel personal and memorable.
                  </p>
                </FadeIn>
                <br />
                <br />
                <FadeIn delay={0.8} direction="up" duration={0.8} once={true}>
                  <p className="text-sm md:text-base text-black max-w-2xl">
                    Have something special in mind? From flowers to a custom
                    cake, our team is here to help. We also offer pre-ordered
                    drinks, personalized menus, and thoughtful extras to make
                    your celebration unique.
                  </p>
                </FadeIn>
                <br />
                <br />
                <FadeIn delay={0.9} direction="up" duration={0.8} once={true}>
                  <div className="flex flex-wrap justify-center gap-4 mb-10 text-center mt-4">
                    <button
                      className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
                 hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
                      onClick={() => navigate("/reservations")}
                    >
                      Make a Booking
                    </button>
                    <button
                      className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
                 hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
                      onClick={() => navigate("/contact")}
                    >
                      Talk to our team
                    </button>
                    <button
                      className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
                 hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
                      onClick={() => navigate("/reservations")}
                    >
                      Private Dining Enquiry
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
                size="large"
                className="h-full"
              >
                <div className="h-full overflow-hidden group">
                  <img
                    src={hah}
                    alt="Galvin La Chapelle Restaurant Interior"
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

export default Celebrations;
