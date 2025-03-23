import React from "react";

import FadeIn from "../components/animations/FadeIn";
import { useNavigate } from "react-router";


const kSvgPath = `
    M909 1356V1411H1507V1356Q1440 1347 1370.5 1316.0Q1301 1285 1233.0 1236.5Q1165 1188 1079 1114L838 901L1368 238Q1427 164 1462.0 130.0Q1497 96 1533.5 78.5Q1570 61 1618 55V0H946V55Q1106 55 1106 127Q1106 152 1090.0 178.5Q1074 205 1047 238L651 733L526 621V238Q526 156 550.5 113.0Q575 70 639 63Q672 61 693.5 58.5Q715 56 731 55V0H49V55H80Q168 55 210.0 76.0Q252 97 264.0 136.5Q276 176 276 242V1182Q276 1249 261.0 1284.5Q246 1320 197.5 1338.0Q149 1356 49 1356V1411H731V1356H717Q600 1356 563.0 1319.0Q526 1282 526 1194V696L932 1059Q1000 1120 1034.5 1166.5Q1069 1213 1069 1255Q1069 1300 1037.5 1328.0Q1006 1356 948 1356ZM1290 1356H1055Q1102 1317 1102 1270Q1102 1240 1087 1208Q1155 1270 1194.0 1300.5Q1233 1331 1290 1356ZM1128 289 723 797 678 756 1055 276Q1098 224 1118.5 190.0Q1139 156 1139 123Q1139 80 1090 55H1116Q1156 55 1181.0 79.0Q1206 103 1206 135Q1206 192 1128 289ZM373 229V1174Q373 1284 349.0 1320.5Q325 1357 233 1356Q282 1334 295.5 1302.0Q309 1270 309 1157V213Q309 138 292.5 107.0Q276 76 225 55H250Q311 55 337.0 74.5Q363 94 368.0 127.5Q373 161 373 229Z
  `.trim();

const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500">
  <g transform="translate(500,400) rotate(-8) scale(1,-1)  translate(-350,-1000) ">
    <path d="${kSvgPath}" fill="#af905c" />
  </g>
</svg>
  `;

const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgString)}`;

const OurStory: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section
        className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-[#121620] mt-20"
        style={{
          backgroundImage: `url("${svgDataUrl}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "500px 500px",
          backgroundPosition: "right 10px top 10px", // Ensuring small spacing from top and right
        }}
      >
        <div className="container mx-auto px-6 ">
          {/* Ensure both columns have equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch overflow-hidden">
            <div className="relative overflow-hidden flex flex-col h-full order-2 lg:order-1">
              <FadeIn
                delay={0.4}
                direction="up"
                duration={1.2}
                once={true}
                className="h-full"
              >
                <div className="h-full overflow-hidden group">
                  <img
                    src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2025/02/restaurant-michelin-star-french-city-london-galvin-la-chapelle-our-story-chef-2-888x1333.jpg.webp"
                    alt="Galvin La Chapelle Restaurant Interior"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right Side (Content) */}
            <div className="bg-white flex flex-col h-full order-1 lg:order-2">
              <div className="p-4 md:p-8 lg:p-12 items-center">
                <FadeIn delay={0.2} direction="up" duration={0.8} once={true}>
                  <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4 uppercase">
                    OUR STORY
                  </h2>
                </FadeIn>
                <FadeIn
                  delay={0.3}
                  direction="left"
                  duration={1}
                  once={false}
                  size="large"
                  initialOpacity={1}
                >
                  <div className="w-40 h-1 bg-gold mb-4"></div>
                </FadeIn>

                <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
                  <p className="text-black text-lg md:text-xl mb-4 leading-relaxed">
                    Galvin La Chapelle, a unique venue in the heart of the city
                    of London, where old meets new.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
                  <p className="text-black mb-4 leading-relaxed text-sm">
                    Our Michelin Star venue offers modern French fine dining
                    with a European influence. Our unique venue boasts beautiful
                    high stone ceilings, with large arched windows, creating the
                    perfect backdrop for all occasions.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5} direction="up" duration={0.8} once={true}>
                  <p className="text-black mb-4 leading-relaxed text-sm">
                    Our grade 2 listed former school, takes pride of place
                    amongst the modern buildings of Spitalfields and London
                    City. Our glamourous venue has an effortless buzz that
                    transports you to a world of fantastic food, fine wine and
                    unmatched service.
                  </p>
                </FadeIn>
                <FadeIn delay={0.6} direction="up" duration={0.8} once={true}>
                  <p className="text-black mb-4 leading-relaxed text-sm">
                    Our kitchen ensures a seasonal and sustainable menu
                    continues to be on offered to our guests using fresh and
                    local produce. Our Executive Chef, Arturo Granato works
                    closely with Head Chef, Gabriele Caucci to boast a menu with
                    an emphasis on bold flavours, a balance of textures and a
                    continued focus on all Galvin Restaurant’s core values.
                  </p>
                </FadeIn>

                <div className="flex flex-col sm:flex-row gap-4 ">
                  <FadeIn delay={0.7} direction="up" duration={0.8} once={true}>
                    <div className="text-center">
                      <button
                        className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
                        onClick={() => navigate("/menu")}
                      >
                        Discover More
                      </button>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.8} direction="up" duration={0.8} once={true}>
                    <div className=" text-center">
                      <button
                        className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
                        onClick={() => navigate("/menu")}
                      >
                        Subscribe
                      </button>
                    </div>
                  </FadeIn>
                </div>
              </div>

              <FadeIn delay={0.8} direction="up" once={true}>
                <div className="overflow-hidden group">
                  <img
                    src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2025/02/restaurant-michelin-star-french-city-london-galvin-la-chapelle-chef-gabriele2-960x640.jpg.webp"
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
