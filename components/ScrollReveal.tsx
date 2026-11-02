"use client";

import { useEffect } from "react";

/**
 * Scroll animation for the whole page.
 * - Any element with `data-reveal` animates IN when it enters the viewport
 *   and resets when it leaves, so it animates again every time you scroll to it
 *   (down or up).
 * - The hero text replays its entrance whenever you scroll back to the top.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    // Elements already on screen at load are visible immediately (no flash).
    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add("in");
    });
    document.documentElement.classList.add("rv");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, intersectionRatio }) => {
          if (intersectionRatio >= 0.12) target.classList.add("in");
          else if (intersectionRatio === 0) target.classList.remove("in"); // fully out -> reset
        });
      },
      { threshold: [0, 0.12], rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    // Replay the hero entrance when returning to the top.
    const hero = document.querySelector<HTMLElement>(".hero");
    let heroOut = false;
    const heroIo = hero
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.intersectionRatio < 0.35) {
              heroOut = true;
            } else if (heroOut) {
              heroOut = false;
              hero
                .querySelectorAll<HTMLElement>("[data-hero]")
                .forEach((el) => {
                  el.style.animation = "none";
                  void el.offsetWidth; // force reflow so the animation restarts
                  el.style.animation = "";
                });
            }
          },
          { threshold: [0, 0.35, 1] },
        )
      : null;
    if (hero && heroIo) heroIo.observe(hero);

    return () => {
      io.disconnect();
      heroIo?.disconnect();
      document.documentElement.classList.remove("rv");
    };
  }, []);

  return null;
}
