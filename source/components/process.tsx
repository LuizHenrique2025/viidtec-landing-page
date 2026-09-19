import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="processo" className="border-t border-ink-800 py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="Como funciona"
          title="Do primeiro contato à solução, sem ruído."
          description="Um processo direto, pensado para que você saiba exatamente em que etapa cada demanda está."
        />

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {process.map((step, index) => (
            <li key={step.title} className="relative pl-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-mist-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-ink-700" aria-hidden />
              </div>
              <step.icon
                className="mt-4 h-5 w-5 text-signal-300"
                strokeWidth={1.6}
              />
              <h3 className="mt-3 text-base text-mist-50">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-300">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
