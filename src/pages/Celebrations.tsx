import React from "react";
import { useNavigate } from "react-router-dom";
import { KPatternBackground } from "../components/PatternBackground";
import FadeIn from "../components/animations/FadeIn";
import Logo from "../components/logo";

const Celebrations: React.FC = () => {
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
      fillColor="#7a613c"
      backgroundColor="bg-[#1a1e25]"
      patternSize="50px"
      className="mt-20"
    >
      <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-pattern">
        <div className="container mx-auto px-6">
          {/* Ensure both columns have equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch overflow-hidden">
            <div className="bg-[#af905c] flex flex-col h-full">
              <div className="p-4 md:p-8 lg:p-12 items-center text-center">
                <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
                  <Logo color="black" />
                </FadeIn>
                <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-gray-900 uppercase">
                    Celebrations
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
                    Celebrate with us.
                  </h3>
                </FadeIn>
                <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
                  <p className="mt-4 text-sm md:text-base text-black max-w-2xl">
                    Join us to celebrate the milestones in your life. Whether
                    that be a wedding reception, birthday, graduation or perhaps
                    securing that new job, we are the perfect location to
                    celebrate.
                    <br />
                    <br />
                    Galvin la Chapelle can be the perfect backdrop for an
                    intimate wedding reception, from securing one of our private
                    dining rooms or exclusively hiring our restaurants for your
                    big day. Small or larger private tables can be reserved to
                    make your special occasion.
                    <br />
                    <br />
                    We welcome special requests, from a bouquet of flowers to a
                    small celebration cake please talk to our team and they will
                    try their best to meet your needs and wants of your special
                    day. Our team are on hand for all those pre-ordered bottles
                    of Galvin champagne, a signed menu or even a Galvin
                    cook-book amongst a handful of options to mark the special
                    occasion
                  </p>
                </FadeIn>
                <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
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
                className="h-full"
              >
                <div className="h-full overflow-hidden group">
                  <img
                    src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2024/04/restaurants-spitalfields-market-city-london-fine-dining-celebrations-012-960x960.jpg.webp"
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
