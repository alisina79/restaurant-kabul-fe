import React, { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  size?: "small" | "medium" | "large";
  initialOpacity?: number;
  easing?: string;
  springEffect?: boolean;
  staggerChildren?: boolean;
  childrenDelay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.9,
  className = "",
  threshold = 0.1,
  once = true,
  size = "medium",
  initialOpacity = 0,
  easing = "cubic-bezier(0.215, 0.61, 0.355, 1)",
  springEffect = false,
  staggerChildren = false,
  childrenDelay = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  // Map size to distance values
  const getDistanceValue = () => {
    switch (size) {
      case "small":
        return 30;
      case "medium":
        return 60;
      case "large":
        return 120;
      default:
        return 40;
    }
  };

  const distance = getDistanceValue();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once, threshold]);

  const getTransformStyle = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translateY(${distance}px)`;
        case "down":
          return `translateY(-${distance}px)`;
        case "left":
          return `translateX(${distance}px)`;
        case "right":
          return `translateX(-${distance}px)`;
        case "none":
          return "";
        default:
          return `translateY(${distance}px)`;
      }
    }
    return "";
  };

  const getTransitionStyle = () => {
    let transitionTiming = easing;
    if (springEffect) {
      transitionTiming = "cubic-bezier(0.34, 1.56, 0.64, 1)";
    }
    return `opacity ${duration}s ${delay}s ${transitionTiming}, transform ${duration}s ${delay}s ${transitionTiming}`;
  };

  // Apply staggered animations to children if needed
  const childrenWithStagger = React.Children.map(children, (child, index) => {
    if (!staggerChildren || !React.isValidElement(child)) return child;

    return React.cloneElement(child as React.ReactElement, {
      style: {
        ...(child as React.ReactElement).props.style,
        opacity: isVisible ? 1 : initialOpacity / 100,
        transform: isVisible ? "translate(0, 0)" : getTransformStyle(),
        transition: `opacity ${duration}s ${
          delay + index * childrenDelay
        }s ${easing}, transform ${duration}s ${
          delay + index * childrenDelay
        }s ${easing}`,
      },
    });
  });

  return (
    <div
      ref={domRef}
      className={className}
      style={
        !staggerChildren
          ? {
              opacity: isVisible ? 1 : initialOpacity / 100,
              transform: isVisible ? "translate(0, 0)" : getTransformStyle(),
              transition: getTransitionStyle(),
            }
          : undefined
      }
    >
      {staggerChildren ? childrenWithStagger : children}
    </div>
  );
};

export default FadeIn;
