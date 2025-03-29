import { useNavigate } from "react-router-dom";
 import FadeIn from "../components/animations/FadeIn";
import { Testimonial } from "../components/Testimonial";
import { KPatternBackground } from "../components/PatternBackground";
import chee from "/images/chee.jpg";
const Chef = () => {
  const navigate = useNavigate();

  // Testimonial data
  const testimonials = [
    {
      boldText: "The essence of timeless flavor,",
      regularText: " crafted for both comforting meals and memorable moments.",
      attribution: " — Where tradition meets taste",
    },
    {
      boldText: "Unlike typical dining spots,",
      regularText: " KABOUL GOURMET offers a warm, soulful experience every day of the week.",
      attribution: "— Hospitality is our heritage",
    },
    {
      boldText: " A fresh take on Afghan cuisine",
      regularText: " crafted with care and served in a welcoming space.",
      attribution: "— A new tradition begins",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-pattern ">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
          <div className="px-0 md:px-12 lg:px-20">
            <div>
              {/* Main Heading */}
              <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                <h2 className="text-center font-serif text-lg md:text-xl lg:text-3xl leading-relaxed font-medium mb-8 tracking-wide text-primary">
                A family-run restaurant serving authentic Afghan cuisine made with care. Rooted in tradition and hospitality, we share recipes passed down through generations — bringing the warmth of home to every plate.
                </h2>
              </FadeIn>
              <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
                <h1 className="text-center font-serif text-lg md:text-xl lg:text-3xl leading-relaxed font-medium mb-8 tracking-wide text-primary">
                Family-Owned. Independent. Always Authentic
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
                  src={chee}
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
