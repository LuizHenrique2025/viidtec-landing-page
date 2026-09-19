import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="border-t border-ink-800 py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-xl border border-ink-600 bg-ink-900 px-8 py-14 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-fade opacity-70"
          />
          <div className="relative">
            <h2 className="text-balance text-3xl leading-[1.1] sm:text-4xl">
              Vamos organizar a tecnologia da sua empresa?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-mist-300 sm:text-lg">
              Conte o que está acontecendo hoje e retornamos com um diagnóstico
              claro sobre como podemos ajudar.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#contato">
                Falar com um especialista
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href="#servicos" variant="secondary">
                Conhecer os serviços
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
