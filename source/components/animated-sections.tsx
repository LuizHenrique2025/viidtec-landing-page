"use client";
import { useEffect, useRef, type ReactNode } from "react";

export function AnimatedSections({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const running = new Map<Element, Animation>();
    const sections = Array.from(root.current?.querySelectorAll<HTMLElement>("section:not(#topo):not(#servicos)") ?? []);
    const play = (element: HTMLElement, frames: Keyframe[], delay = 0) => {
      if (motion.matches) return;
      running.get(element)?.cancel();
      const animation = element.animate(frames, {
        duration: 1050,
        delay,
        easing: "cubic-bezier(.16,1,.3,1)",
        fill: "backwards",
      });
      running.set(element, animation);
      animation.onfinish = () => {
        if (running.get(element) === animation) running.delete(element);
      };
    };
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const section = entry.target as HTMLElement;
        const content = section.firstElementChild as HTMLElement | null;
        if (!content) return;
        const effect = sections.indexOf(section) % 3;
        const start = effect === 0 ? "translateX(-72px)" : effect === 1 ? "translateY(85px)" : "scale(.92) translateY(30px)";
        play(content, [
          { opacity: 0, transform: start },
          { opacity: 1, transform: "translate(0,0) scale(1)" },
        ]);
      });
    }, { threshold: 0, rootMargin: "-88px 0px -10% 0px" });
    sections.forEach(section => sectionObserver.observe(section));

    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        cardObserver.unobserve(entry.target);
        const element = entry.target as HTMLElement;
        const siblings = Array.from(element.parentElement?.children ?? []);
        const index = siblings.indexOf(element);
        play(element, [
          { opacity: 0, transform: "translateY(48px) scale(.97)" },
          { opacity: 1, transform: "translateY(0) scale(1)" },
        ], Math.max(0, index % 3) * 140);
      });
    }, { threshold: 0.08 });
    root.current?.querySelectorAll<HTMLElement>("[data-reveal]").forEach(element => cardObserver.observe(element));
    const stop = () => {
      if (motion.matches) { running.forEach(animation => animation.cancel()); running.clear(); }
    };
    motion.addEventListener("change", stop);
    return () => {
      sectionObserver.disconnect(); cardObserver.disconnect();
      running.forEach(animation => animation.cancel()); running.clear();
      motion.removeEventListener("change", stop);
    };
  }, []);
  return <div ref={root}>{children}</div>;
}


