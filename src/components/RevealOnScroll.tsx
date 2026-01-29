"use client";

 import { useEffect } from "react";

 export function RevealOnScroll() {
   useEffect(() => {
     const root = document.documentElement;
     root.classList.add("js-enabled");

     const prefersReducedMotion = window.matchMedia(
       "(prefers-reduced-motion: reduce)"
     ).matches;

     const elements = Array.from(
       document.querySelectorAll<HTMLElement>("[data-reveal]")
     );

     if (prefersReducedMotion) {
       elements.forEach((el) => el.classList.add("reveal-visible"));
       return;
     }

     const canStore = (() => {
       try {
         const testKey = "reveal-test";
         sessionStorage.setItem(testKey, "1");
         sessionStorage.removeItem(testKey);
         return true;
       } catch {
         return false;
       }
     })();

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.classList.add("reveal-visible");
          observer.unobserve(target);

          if (!canStore) return;
          const key = target.dataset.revealId;
          if (key) {
            sessionStorage.setItem(`reveal:${key}`, "1");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el, index) => {
       const key = el.dataset.revealId || `auto-${index}`;
       if (canStore && sessionStorage.getItem(`reveal:${key}`)) {
         el.classList.add("reveal-visible");
         return;
       }
       el.dataset.revealId = key;
       observer.observe(el);
     });

    const fallbackTimer = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add("reveal-visible"));
    }, 1200);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
   }, []);

   return null;
 }
