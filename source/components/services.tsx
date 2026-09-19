"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { services } from "@/lib/content";

export function Services() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const element = root.current!;
    const media = matchMedia("(prefers-reduced-motion: no-preference)");
    const cards = Array.from(element.querySelectorAll<HTMLElement>(".service-card"));
    let frame = 0;
    const render = () => {
      frame = 0;
      if (!media.matches) return;
      const bounds = element.getBoundingClientRect();
      const distance = element.offsetHeight - innerHeight;
      const progress = Math.max(0, Math.min(1, -bounds.top / distance));
      const position = progress * (cards.length - 1);
      setActive(Math.round(position));
      const compact = element.clientWidth < 900;
      const step = compact ? Math.min(26, element.clientWidth * .06) : Math.min(150, element.clientWidth * .11);
      cards.forEach((card, i) => {
        const offset = i - position;
        const passed = Math.max(0, -offset);
        const ahead = Math.max(0, offset);
        card.style.transform = `translate3d(${Math.min(ahead, 4) * step - Math.min(passed, 5) * (compact ? 5 : 15)}px, ${-Math.min(ahead, 4) * (compact ? 9 : 40) + Math.min(passed, 5) * 5}px, ${-ahead * (compact ? 65 : 105) - passed * 28}px) rotateY(${-Math.min(ahead, 3) * 7}deg) rotateZ(${Math.min(ahead, 3) * -2 - Math.min(passed, 6)}deg)`;
        card.style.opacity = "1";
        card.style.zIndex = String(100 - Math.round(Math.abs(offset) * 10));
        card.style.pointerEvents = Math.abs(offset) < .6 ? "auto" : "none";
      });
      element.style.setProperty("--service-progress", String(progress));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    const configure = () => {
      element.classList.toggle("services-perspective", media.matches);
      if (media.matches) render();
      else cards.forEach(card => { card.removeAttribute("style"); });
    };
    configure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", configure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", configure);
      element.classList.remove("services-perspective");
      cards.forEach(card => card.removeAttribute("style"));
    };
  }, []);
  return <section ref={root} id="servicos" className="services-showcase border-t border-ink-800">
    <div className="services-sticky">
      <Container className="services-layout">
        <div className="services-intro">
          <p className="services-eyebrow">O QUE FAZEMOS / 07 SOLUÇÕES</p>
          <h2>Tecnologia que <br />move sua <br /><span>empresa.</span></h2>
          <p className="services-description">Da infraestrutura ao software. Conheça as soluções que conectam cada parte do seu negócio.</p>
          <div className="services-scroll-hint"><ArrowDown size={16} /><span>Role para explorar</span></div>
          <div className="services-progress" aria-hidden="true"><span /></div>
          <p className="services-counter" aria-hidden="true">0{active + 1} <span>/ 07</span></p>
        </div>
        <div className="service-deck">
          {services.map((service, i) => <article key={service.title} className="service-card">
            <div className="service-card-top"><service.icon size={27} strokeWidth={1.4} /><span>0{i + 1}</span></div>
            <p className="service-card-label">SOLUÇÕES VIIDTEC</p>
            <h3>{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <ul>{service.points.map(point => <li key={point}><span />{point}</li>)}</ul>
            <div className="service-card-bottom">Tecnologia para simplificar <span>↗</span></div>
          </article>)}
        </div>
      </Container>
    </div>
  </section>;
}




