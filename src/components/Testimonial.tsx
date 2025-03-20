 import { useState, useEffect, useRef, useCallback } from "react";
import FadeIn from "./animations/FadeIn";

// @ts-ignore
export const Testimonial = ({ testimonials }: any) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState("left");
  const prevTestimonialRef = useRef(currentTestimonial);
  const timerRef = useRef(null);

  // Function to start/reset the auto-rotation timer
  const resetTimer = useCallback(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Start a new timer
// @ts-ignore

    timerRef.current = setInterval(() => {
      setDirection("left");
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
  }, [testimonials.length]);

  // Initialize timer on component mount
  useEffect(() => {
    resetTimer();

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer, testimonials.length]);

  // Determine direction based on previous and current indices
  useEffect(() => {
    const prevIndex = prevTestimonialRef.current;

    if (prevIndex === testimonials.length - 1 && currentTestimonial === 0) {
      console.log("1");
      // Moving from last to first (forward/next)
      setDirection("right");
    } else {
      console.log("3");

      // Compare indices directly for normal cases
      setDirection(currentTestimonial > prevIndex ? "left" : "right");
    }

    // Update reference for next comparison
    prevTestimonialRef.current = currentTestimonial;
  }, [currentTestimonial, testimonials.length]);

// @ts-ignore

  const goToTestimonial = (index) => {
    // Determine direction for manual navigation
    const currentIndex = currentTestimonial;

    // Handle wrap-around cases explicitly
    if (currentIndex === testimonials.length - 1 && index === 0) {
      setDirection("left");
    } else if (currentIndex === 0 && index === testimonials.length - 1) {
      setDirection("right");
    } else {
      setDirection(index > currentIndex ? "left" : "right");
    }

    setCurrentTestimonial(index);
    resetTimer(); // Reset the timer when manually navigating
  };

  return (
    <div className="mt-8 flex flex-col items-center text-start">
      <div className="relative w-full max-w-2xl">
        <div className="overflow-hidden">
          <div
            className="transition-transform duration-700 ease-in-out flex"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial: any, index: any) => (
              <div
                key={index}
                className="w-full flex-shrink-0 rounded-md flex justify-center"
              >
                <div className="relative w-fit">
                  <span className="absolute top-0 left-0 text-amber-700 text-6xl font-serif leading-none">
                    &ldquo;
                  </span>
                  <div className="ml-8">
                    <p className="font-medium text-gray-800 mb-2">
                      {testimonial.boldText}
                    </p>
                    <FadeIn
                      delay={0.2}
// @ts-ignore

                      direction={direction}
                      duration={0.8}
                      once={true}
                      key={`regular-${currentTestimonial}-${direction}`}
                    >
                      <p className="text-gray-800">{testimonial.regularText}</p>
                    </FadeIn>
                    <FadeIn
                      delay={0.4}
// @ts-ignore

                      direction={direction}
                      duration={0.8}
                      once={true}
                      key={`attribution-${currentTestimonial}-${direction}`}
                    >
                      <p className="font-serif italic text-sm text-gray-800 mt-3">
                        {testimonial.attribution}
                      </p>
                    </FadeIn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-2">
            {testimonials.map((_: any, index: any) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial ? "bg-amber-700" : "bg-amber-300"
                }`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
