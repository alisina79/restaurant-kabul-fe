import { useState } from "react";

import { Carousel, 
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, 
} from "../components/ui/carousel";
import FadeIn from "../components/animations/FadeIn";
import { Button } from "../components/ui/button";


interface DiningRoom {
  id: number;
  title: string;
  location: string;
  image: string;
  getInTouchLink: string;
  exploreLink: string;
}

const diningRooms: DiningRoom[] = [
  {
    id: 1,
    title: "EXCLUSIVE HIRE",
    location: "The City, London",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    getInTouchLink: "#",
    exploreLink: "#",
  },
  {
    id: 2,
    title: "THE GALLERY",
    location: "The City, London",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    getInTouchLink: "#",
    exploreLink: "#",
  },
  {
    id: 3,
    title: "PRIVATE ROOM",
    location: "The City, London",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    getInTouchLink: "#",
    exploreLink: "#",
  },
];

const PrivateDiningCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#af905c] text-white mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white uppercase">
            PRIVATE DINING IN THE CITY OF LONDON
          </h2>
          <FadeIn delay={0.3} direction="up" duration={0.8} once={true}>
            <h3 className="text-lg md:text-xl font-serif text-black">
              Unforgettable Experiences at Galvin La Chapelle
            </h3>
          </FadeIn>
          <FadeIn delay={0.4} direction="up" duration={0.8} once={true}>
            <p className="mt-4 text-sm md:text-base text-black max-w-2xl mx-auto text-center">
              Unforgettable experiences for any event from intimate private
              dining to exclusive use events up to 150 guests.
            </p>
          </FadeIn>
          <div className="flex justify-center mt-8">
            <a
              href="/private-dining-arch"
              className="px-8 py-3 font-serif text-sm font-medium uppercase tracking-wider bg-white text-black 
      hover:bg-black hover:text-white transition-all duration-500 ease-in-out transform"
            >
              Check it out
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden px-8 md:px-12">
          <Carousel
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              breakpoints: {
                "(min-width: 768px)": {
                  slidesToScroll: 1,
                },
              },
            }}
            setApi={(api) => {
              api?.on("select", () => {
                setActiveIndex(api.selectedScrollSnap());
              });
            }}
          >
            <CarouselContent className="-ml-4">
              {diningRooms.map((room) => (
                <CarouselItem key={room.id} className=" lg:basis-1/2 pl-4">
                  <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                      <h3 className="text-2xl md:text-3xl font-serif mb-2">
                        {room.title}
                      </h3>
                      <p className="text-sm mb-8">{room.location}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          variant="outline"
                          className="border-white text-white bg-transparent hover:bg-white hover:text-[#c6a87a] uppercase tracking-wider"
                        >
                          GET IN TOUCH
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white text-white bg-transparent hover:bg-white hover:text-[#c6a87a] uppercase tracking-wider"
                        >
                          EXPLORE
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#c6a87a] z-10" />
            <CarouselNext className="absolute -right-2 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#c6a87a] z-10" />
          </Carousel>
        </div>

        <div className="mt-5 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 660.81 50.03"
            width="2211"
            height="163"
            className="uk-visible uk-width-expand uk-svg"
          >
            <g>
              <path
                d="m67.64,43.01c1.13-.24,2.28-.51,3.45-.83,1.16-.34,2.34-.69,3.55-1.05,2.42-.65,4.86-1.65,7.4-2.52,1.27-.43,2.54-1,3.84-1.5,1.29-.53,2.62-.99,3.94-1.57,2.67-1.11,5.4-2.25,8.21-3.41,14.84-6.36,29.22-14.11,44.79-19.52,7.77-2.68,15.84-4.71,24.04-5.7,4.08-.62,8.24-.78,12.34-.77,4.11.03,8.21.33,12.27.88,8.11,1.11,16.06,3.22,23.57,6.47,7.52,3.26,14.22,7.54,20.7,11.46,3.24,1.97,6.45,3.84,9.7,5.51,3.24,1.68,6.59,3.06,10,4.37,6.87,2.48,14.04,4.26,21.34,5.53,14.64,2.48,29.65,3.03,44.8,3,15.2.04,30.44-.02,45.77-.3,30.67-.54,61.73-1.77,93.64-4.21,35.48-2.9,68.79-6.98,101.59-13.15C615.99,15.65,660.71-.36,660.81,0c.02.09-4.59,1.59-13.82,4.6-2.59.84-4.92,1.6-6.94,2.25l-7,2.05-7,2.06c-2.34.67-4.65,1.44-7.01,2.03-4.7,1.26-9.4,2.54-14.09,3.87-4.68,1.4-9.38,2.47-14.02,3.66-2.32.58-4.63,1.16-6.93,1.74-2.3.58-4.59,1.17-6.89,1.65-9.2,2.01-18.26,4.17-27.42,5.85-4.57.88-9.14,1.82-13.74,2.66-4.61.79-9.24,1.59-13.9,2.39-2.33.4-4.67.8-7.02,1.19-2.36.35-4.72.71-7.1,1.06-4.76.71-9.56,1.44-14.43,2.17-35.18,4.83-78.45,9.46-118.75,10.18-12.66.32-24.43.41-35.29.55-5.43.02-10.63.04-15.6.05-4.96.02-9.72.05-14.26-.05-9.07-.16-17.22-.66-24.39-1.43-7.17-.77-13.36-1.83-18.52-2.98-10.33-2.33-16.51-4.89-18.75-5.72-1.12-.45-1.26-.48-.41-.08.84.43,2.73,1.16,5.65,2.26-3.94-1.45-7.6-2.88-11.03-4.48-3.42-1.59-6.61-3.23-9.74-4.89-6.26-3.3-12.24-6.73-19.24-9.78-6.99-3.1-14.26-5.15-21.56-6.29-7.29-1.13-14.59-1.43-21.71-.8-1.78.19-3.56.38-5.33.57-1.76.31-3.52.61-5.27.91-.44.08-.88.15-1.31.24l-1.3.31-2.6.62c-.86.22-1.74.39-2.59.64l-2.57.76c-6.84,2.01-13.53,4.54-20.14,7.4-3.58,1.77-14.63,7.18-18.56,8.82-8.74,3.71-17.48,7.11-26.54,9.61-4.53,1.26-9.14,2.24-13.81,3.02-4.68.72-9.43,1.15-14.25,1.28-9.63.25-19.52-.57-29.63-2.96-5.04-1.23-10.17-2.93-14.99-5.7-2.4-1.4-4.69-3.1-6.7-5.22-1.95-2.16-3.54-4.75-4.33-7.7.68,2.1,1.81,3.97,2.79,5.24.51.62.92,1.14,1.26,1.47.32.34.5.53.5.53-2.77-3.3-3.94-6.49-4.2-9.63-.23-3.12.56-6.52,3.49-9.46-1.97,2.34-3.07,5.47-2.74,8.64.32,3.16,1.85,6.22,4.08,8.69,1.1,1.24,2.42,2.32,3.85,3.3,1.43.97,2.96,1.83,4.55,2.58,3.22,1.48,6.68,2.59,10.26,3.4,14.4,3.13,30.05,2.85,43.8-.09Z"
                fill="#1a1e25"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PrivateDiningCarousel;
