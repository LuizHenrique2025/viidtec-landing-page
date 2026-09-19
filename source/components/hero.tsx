import { assetPath } from "@/lib/assets";
import { Particles } from "@/components/particles";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-grid-fade"
      />
      <Container className="relative grid gap-14 pb-20 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <p className="mb-5 font-mono text-sm text-signal-300">
            suporte de TI &amp; desenvolvimento para empresas
          </p>
          <h1 className="text-balance text-[clamp(2rem,7vw,2.5rem)] leading-[1.08] sm:text-6xl">
            Tecnologia que simplifica o seu negócio.
          </h1>
          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-mist-300">
            A VIIDTEC cuida do suporte, da infraestrutura e dos sistemas da sua
            empresa para que uma falha técnica nunca vire um problema de
            negócio.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contato">
              Falar com um especialista
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="#servicos" variant="secondary">
              Ver serviços
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-5 min-[400px]:grid-cols-3 min-[400px]:gap-3 border-t border-ink-700 pt-8 sm:max-w-md">
            <div>
              <dt className="font-mono text-xs text-mist-400">Atendimento</dt>
              <dd className="mt-1 text-lg sm:text-xl text-mist-50">Remoto e in loco</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-mist-400">Escopo</dt>
              <dd className="mt-1 text-lg sm:text-xl text-mist-50">TI completa</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-mist-400">Contratos</dt>
              <dd className="mt-1 text-lg sm:text-xl text-mist-50">Sob medida</dd>
            </div>
          </dl>
        </div>

        <div className="hero-robot relative flex items-center justify-center">
          <Particles /><div aria-hidden="true" className="robot-glow" />
          <Image
            src={assetPath("/images/bot-viidtec-completo.png")}
            alt="Robozinho assistente da VIIDTEC"
            width={1254}
            height={1254}
            sizes="(max-width: 1023px) 90vw, 510px"
            priority
            className="robot-image relative h-auto w-full max-w-[510px] object-contain"
          />
        </div>
      </Container>
    </section>
  );
}




