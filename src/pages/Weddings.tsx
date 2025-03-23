import React from "react";

import { useNavigate } from "react-router-dom";
import { KPatternBackground } from "../components/PatternBackground";
import FadeIn from "../components/animations/FadeIn";
import Logo from "../components/logo";

const Weddings: React.FC = () => {
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
              <div className="p-0 md:p-8 lg:p-12 items-center text-center">
                <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
                  <Logo color="black" />
                </FadeIn>
                <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-gray-900 uppercase">
                    Weddings by Galvin
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
                    Your wedding day deserves to be as unique and special as
                    your love story.
                  </h3>
                </FadeIn>
                <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
                  <p className="mt-4 text-sm md:text-base text-black max-w-2xl">
                    Weddings by Galvin offers the perfect combination of
                    elegance, attention to detail, and a personalised service to
                    bring your dream day to life.
                    <br />
                    <br />
                    Our stunning venue features a variety of spaces to suit your
                    needs. From intimate wedding breakfasts to grand
                    celebrations, our versatile areas create the perfect setting
                    for every moment. For a truly unforgettable experience,
                    exclusive hires allow complete personalisation for your
                    special day.
                    <br />
                    <br />
                    During the warmer months, enjoy the charm of Le Jardin,
                    where you and your guests can sip drinks and indulge in
                    welcome canapés while surrounded by the beauty of our garden
                    before starting your culinary experience within La
                    Chapelle’s main dining room.
                    <br />
                    <br />
                    For smaller wedding breakfasts, the Gallery or the Arch are
                    ideal for private dining, offering an intimate yet luxurious
                    setting. You’ll still have access to all our premium
                    services, including bespoke floral arrangements and elegant
                    touches to enhance your celebration.
                    <br />
                    <br />
                    Our dedicated event planners will guide you every step of
                    the way, ensuring your day is thoughtfully curated and
                    flawlessly executed.
                    <br />
                    <br />
                    Let us make your wedding day a celebration you and your
                    guests will cherish forever.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
                  <div className="flex flex-wrap justify-center gap-4 mb-10 text-center mt-4">
                    <button
                      className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
                 hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
                      onClick={() => navigate("/menu")}
                    >
                      Make a Booking
                    </button>
                    <button
                      className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
                 hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
                      onClick={() => navigate("/menu")}
                    >
                      Talk to our team
                    </button>
                    <button
                      className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
                 hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
                      onClick={() => navigate("/menu")}
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
                    src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2025/02/wedding-reception-venues-city-of-london-restaurant.jpg.webp"
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

export default Weddings;
