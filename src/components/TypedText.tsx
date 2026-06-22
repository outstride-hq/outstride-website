"use client";

import { useEffect, useState } from "react";

type TypedTextProps = {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  className?: string;
};

export default function TypedText({
  strings,
  typeSpeed = 100,
  backSpeed = 50,
  backDelay = 5000,
  loop = true,
  className,
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (strings.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayText(strings[0]);
      return;
    }

    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId = 0;

    const schedule = (delay: number, fn: () => void) => {
      timeoutId = window.setTimeout(fn, delay);
    };

    const tick = () => {
      const current = strings[stringIndex] ?? "";

      if (!isDeleting) {
        charIndex += 1;
        setDisplayText(current.slice(0, charIndex));

        if (charIndex >= current.length) {
          const isLastString = stringIndex >= strings.length - 1;
          if (!loop && isLastString) return;

          schedule(backDelay, () => {
            isDeleting = true;
            tick();
          });
          return;
        }

        schedule(typeSpeed, tick);
        return;
      }

      charIndex -= 1;
      setDisplayText(current.slice(0, charIndex));

      if (charIndex <= 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        schedule(typeSpeed, tick);
        return;
      }

      schedule(backSpeed, tick);
    };

    schedule(typeSpeed, tick);

    return () => window.clearTimeout(timeoutId);
  }, [strings, typeSpeed, backSpeed, backDelay, loop]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const blinkInterval = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => window.clearInterval(blinkInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span
        className={`typed-cursor${showCursor ? " typed-cursor--blink" : ""}`}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
