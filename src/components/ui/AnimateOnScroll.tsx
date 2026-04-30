"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: "fade-in" | "slide-up" | "slide-down" | "scale-in";
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = "slide-up",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (animation) {
      case "slide-up":
        return "translateY(30px)";
      case "slide-down":
        return "translateY(-20px)";
      case "scale-in":
        return "scale(0.9)";
      case "fade-in":
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : getInitialTransform(),
        transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
