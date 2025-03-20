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
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-pattern">
        <div className="container mx-auto px-6">
          {/* Ensure both columns have equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch overflow-hidden">
            {/* Left Side (Image) */}
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
                    src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2024/04/best-restaurants-london-city-spitalfields-market-liverpool-street-bishopsgate-private-dining-rooms-event-space-michelin-011-888x1333.jpg.webp"
                    alt="Galvin La Chapelle Restaurant Interior"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right Side (Content) */}
            <div className="bg-[#af905c] flex flex-col h-full order-1 lg:order-2">
              <div className="p-0 md:p-8 lg:p-12 items-center text-center">
                <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
                  <Logo color="black" />
                </FadeIn>
                <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-gray-900 uppercase">
                    SEASONAL FRESH
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
                    Only the very best ingredients
                  </h3>
                </FadeIn>
                <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
                  <p className="mt-4 text-sm md:text-base text-black max-w-2xl">
                    Our menus at La Chapelle celebrate only the best in produce
                    of the season. With frequently changing menus, our Head Chef
                    continues to adapt our offering to ensure we only serve our
                    guests the very best.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
                  <div className="my-5 text-center">
                    <button
                      className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
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
                className="h-full mt-4"
              >
                <div className="h-full overflow-hidden group">
                  <img
                    src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2024/04/restaurant-michelin-star-french-city-london-galvin-la-chapelle-fish-04-960x640.jpg.webp"
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

export default About;
