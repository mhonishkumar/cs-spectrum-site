import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number; // in milliseconds
  threshold?: number;
  once?: boolean;
  scale?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.2,
  once = true,
  scale = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it hits the threshold for better feel
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once, threshold]);

  const getTransform = () => {
    let transform = "";
    if (!isVisible) {
      switch (direction) {
        case "up":
          transform += "translateY(30px)";
          break;
        case "down":
          transform += "translateY(-30px)";
          break;
        case "left":
          transform += "translateX(30px)";
          break;
        case "right":
          transform += "translateX(-30px)";
          break;
        default:
          break;
      }
      
      if (scale) {
        transform += transform ? " scale(0.97)" : "scale(0.97)";
      }
    } else {
      transform = "translate(0, 0) scale(1)";
    }
    
    return transform || "none";
  };

  return (
    <div
      ref={ref}
      className={cn("transition-all", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
