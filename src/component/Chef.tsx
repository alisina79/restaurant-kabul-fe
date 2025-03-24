import { useNavigate } from "react-router-dom";
 import FadeIn from "../components/animations/FadeIn";
import { Testimonial } from "../components/Testimonial";
import { KPatternBackground } from "../components/PatternBackground";

const Chef = () => {
  const navigate = useNavigate();

  // Testimonial data
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
    <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-pattern">
      <div className="container mx-auto px-6 "style={{marginTop: '50px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
          <div className="px-0 md:px-12 lg:px-20">
            <div>
              {/* Main Heading */}
              <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                <h1 className="text-center font-serif text-lg md:text-xl lg:text-3xl leading-relaxed font-medium mb-8 tracking-wide text-primary">
                  A Family–run Collection Of Restaurants Founded In 2005 By
                  Michelin Star Brothers, Chris & Jeff Galvin Galvin La
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
                <h1 className="text-center font-serif text-lg md:text-xl lg:text-3xl leading-relaxed font-medium mb-8 tracking-wide text-primary">
                  'Proudly Independent & Family Owned'
                </h1>
              </FadeIn>

              {/* Buttons */}
              <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-center">
                  <button
                    className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-primary text-white hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary transition-all duration-300"
                    onClick={() => navigate("/reservations")}
                  >
                    BOOK A TABLE
                  </button>
                  <button
                    className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-primary border-2 border-primary text-white hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary transition-all duration-300"
                    onClick={() => navigate("/menu")}
                  >
                    MENUS
                  </button>
                </div>
              </FadeIn>

              <Testimonial testimonials={testimonials} />
              <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
                <div className="flex justify-center items-center mt-14">
                  <KPatternBackground
                    strokeColor="#ac8d5b"
                    fillColor="#ac8d5b"
                    backgroundColor="bg-[transparent]"
                    patternSize="50px"
                    className="w-[200px] h-[50px]"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="relative overflow-hidden ">
            <FadeIn
              delay={0.5}
              direction="up"
              duration={1.2}
              once={true}
              className="h-full"
            >
              <div className="lg:h-[700px] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1977&q=80"
                  alt="Galvin La Chapelle Restaurant Interior"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-125"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
