"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  duration?: number;
}

export default function StatCounter({
  end,
  suffix = "",
  label,
  icon,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      className="text-center group"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 mb-4 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <div className="font-heading text-4xl font-bold text-slate-900 mb-1">
        {isVisible ? count.toLocaleString() : "0"}
        <span className="text-primary-500">{suffix}</span>
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  );
}
