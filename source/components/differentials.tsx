import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentials } from "@/lib/content";

export function Differentials() {
  return (
    <section id="diferenciais" className="border-t border-ink-800 py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="Por que a VIIDTEC"
          title="O que muda quando a tecnologia tem dono."
          description="Empresas que trocam suporte fragmentado por uma equipe dedicada sentem a diferença rápido."
        />

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {differentials.map((item) => (
            <div key={item.title} className="flex gap-5">
              <item.icon
                className="mt-1 h-6 w-6 shrink-0 text-current2"
                strokeWidth={1.6}
              />
              <div>
                <h3 className="text-lg text-mist-50">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
