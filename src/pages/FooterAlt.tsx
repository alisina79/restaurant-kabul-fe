import { FooterAltNameSVG } from "../component/SVGS";
import FadeIn from "../components/animations/FadeIn";
import Logo from "../components/logo";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const FooterAlt = () => {
  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=Galvin+La+Chapelle+35+Spital+Square+London+E1+6DY",
      "_blank"
    );
  };

  return (
    <section className="bg-[#af905c] py-8 md:py-12 lg:py-16 text-white relative">
      <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
        <Logo color="white" />
      </FadeIn>

      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {/* Column 1: Logo and Contact */}
          <div>
            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <h1 style={{fontFamily: "'Brush Script MT', cursive"}} className="text-white font-serif text-5xl italic mb-4  cursor-pointer">Kaboul Gourmet</h1>
                <span style={{fontFamily: "'Segoe UI Symbol', sans-serif"}} className="text-white font-serif text-3xl italic mb-4  cursor-pointer">❀</span>
              </div>
            </div>

            <h3 className="font-medium uppercase text-sm tracking-wider mb-3">
              CONTACT
            </h3>

            <p className="text-sm mb-4 leading-relaxed">
              Call{" "}
              <a
                href="tel:02072990400"
                className="underline hover:no-underline"
              >
                020 7299 0400
              </a>{" "}
              to speak with us about an existing booking, or for any general
              enquiry.
              <br />
              Alternatively email{" "}
              <a
                href="mailto:elise@galvinrestaurants.com"
                className="underline hover:no-underline"
              >
                elise@galvinrestaurants.com
              </a>
              .
            </p>

            <p className="text-sm mb-4 leading-relaxed">
              For all private dining enquiries please email
              <a
                href="mailto:privatedining.city@galvinrestaurants.com"
                className="underline hover:no-underline"
              >
                {" "}
                privatedining.city@galvinrestaurants.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:02072990400"
                className="underline hover:no-underline"
              >
                020 7299 0400
              </a>{" "}
              opt 2
            </p>

            <p className="text-sm mb-4 underline hover:no-underline cursor-pointer">
              Frequently Asked Questions
            </p>

            <div className="mt-8">
              <h3 className="font-medium uppercase text-sm tracking-wider mb-3">
                NEWSLETTER SIGNUP
              </h3>

              <div className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                />
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white uppercase tracking-widest font-medium
                  px-6 py-2.5 hover:bg-white hover:text-[#af905c] focus:bg-white/10 active:bg-white/20
                  transition-all duration-300 ease-out focus:ring-1 focus:ring-white/70
                  active:scale-98 rounded-md"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: Address with Interactive Map */}
          <div>
            <h3 className="font-medium uppercase text-sm tracking-wider mb-3">
              ADDRESS
            </h3>

            <div className="flex flex-col sm:flex-row mb-3 gap-4">
              <div className="flex-1">
                <p className="text-sm mb-2 leading-relaxed">
                  Galvin La Chapelle
                  <br />
                  35 Spital Square
                  <br />
                  Spitalfields
                  <br />
                  London E1 6DY
                </p>

                <p
                  className="cursor-pointer text-sm inline-block"
                  onClick={handleMapClick}
                >
                  <span className="relative group">
                    Get Directions
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full"></span>
                  </span>
                </p>
                <p className="cursor-pointer text-sm inline-block">
                  <span className="relative group">
                    Entrance View
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full"></span>
                  </span>
                </p>
              </div>

              {/* Interactive Map - Smaller on mobile, side-by-side on larger screens */}
              <div
                className="cursor-pointer relative group overflow-hidden rounded-md shadow-md sm:w-32 sm:h-32 shrink-0"
                onClick={handleMapClick}
              >
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <span className="bg-white/90 text-[#af905c] px-2 py-0.5 rounded-full text-xs font-medium">
                    Open Map
                  </span>
                </div>
                <img
                  src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2023/12/best-restaurant-london-front-entrance-spitalfeilds-640x677.jpg"
                  alt="Map of Galvin La Chapelle"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <p className="text-sm mb-6 leading-relaxed">
              When visiting us at Galvin La Chapelle, although we share a
              building with our sister restaurant Galvin Bistrot & Bar – you can
              find the entrance to our restaurant on Spital Square. Our large
              arched door is tucked within our historical red brick building
              with a few steps leading you into the restaurant. Please note, if
              you require step free access to our restaurant, you can use the
              entrance on the other side of the building via Galvin Bistrot &
              Bar. Our Bistrot is step free & can be spotted by our red Galvin
              umbrellas or outdoor terrace.
            </p>
          </div>

          {/* Column 3: Opening Hours */}
          <div>
            <h3 className="font-medium uppercase text-sm tracking-wider mb-4">
              OPENING HOURS
            </h3>

            <div className="grid grid-cols-2 gap-x-4 mb-8">
              <div>
                <p className="font-medium text-sm mb-2 border-b border-white/20 pb-1">
                  Lunch Hours
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Monday to Saturday</p>
                    <p className="text-sm opacity-90">11.45am – 2.15pm</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sunday</p>
                    <p className="text-sm opacity-90">11.45am – 3pm</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-medium text-sm mb-2 border-b border-white/20 pb-1">
                  Dinner Hours
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Monday</p>
                    <p className="text-sm opacity-90">5:30pm – 9pm</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Tuesday to Friday</p>
                    <p className="text-sm opacity-90">5:30pm – 9:30pm</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Saturday</p>
                    <p className="text-sm opacity-90">6pm – 9:30pm</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sunday</p>
                    <p className="text-sm opacity-90">6pm – 9pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-md">
              <h4 className="text-sm font-medium uppercase tracking-wider mb-2">
                BOOK A TABLE
              </h4>
              <p className="text-sm mb-3">
                Reserve your dining experience today
              </p>
              <Button className="w-full bg-white text-[#af905c] hover:bg-white/90 transition-colors">
                RESERVE NOW
              </Button>
            </div>
          </div>

          {/* Column 4: FAQ */}
          <div>
            <h3 className="font-medium uppercase text-sm tracking-wider mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h3>

            <div className="space-y-6">
              <div className="pb-3 border-b border-white/20">
                <p className="text-sm font-medium mb-1">
                  Do you have a dress code?
                </p>
                <p className="text-sm opacity-90">
                  Our dress code is smart casual.
                </p>
              </div>

              <div className="pb-3 border-b border-white/20">
                <p className="text-sm font-medium mb-1">
                  What is the closest station?
                </p>
                <p className="text-sm opacity-90">
                  Galvin La Chapelle is a five minute walk from Liverpool Street
                  station as well as Shoreditch High Street overground.
                </p>
              </div>

              <div className="pb-3 border-b border-white/20">
                <p className="text-sm font-medium mb-1">
                  Can I BYO wine or Champagne?
                </p>
                <p className="text-sm opacity-90">
                  Yes, we welcome you to bring up to two bottles of your own
                  wine or champagne per reservation for a minimum of £65 per
                  bottle, this can increase based on the wine and on the size of
                  the bottle.
                </p>
              </div>

              <div>
                <p className="text-sm mb-3 opacity-90">
                  BYO only applies to main dining room reservations and not
                  applicable to private dining reservations.
                </p>
              </div>

              <div>
                <p className="text-sm cursor-pointer inline-block">
                  <span className="relative group inline-flex items-center">
                    View more FAQs
                    <svg
                      className="w-3 h-3 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full"></span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FadeIn delay={0.1} direction="up" duration={0.8} once={true}>
        <Logo color="white" />
      </FadeIn>
    </section>
  );
};

export default FooterAlt;
