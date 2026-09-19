import { Container } from "@/components/ui/container";

const stats = [
  { value: "360°", label: "Suporte, infraestrutura e software em um só lugar" },
  { value: "1", label: "Ponto de contato técnico para toda a operação" },
  { value: "24/7", label: "Monitoramento dos sistemas críticos" },
];

export function About() {
  return (
    <section id="empresa" className="border-t border-ink-800 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 font-mono text-sm text-signal-300">A empresa</p>
          <h2 className="text-balance text-3xl leading-[1.1] sm:text-4xl">
            Uma equipe de tecnologia para empresas que não podem parar.
          </h2>
        </div>
        <div className="space-y-5 text-balance text-base leading-relaxed text-mist-300 sm:text-lg">
          <p>
            A VIIDTEC nasceu para resolver um problema comum em empresas de
            todos os portes: tecnologia tratada como um apagador de incêndios,
            em vez de uma estrutura planejada. Reunimos suporte técnico,
            infraestrutura, desenvolvimento e automação em uma única equipe
            que conhece o negócio do cliente.
          </p>
          <p>
            Isso significa menos fornecedores para coordenar, menos tempo
            explicando o mesmo problema para pessoas diferentes e mais
            previsibilidade sobre o que está funcionando — e o que precisa de
            atenção.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-ink-700 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl text-mist-50">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-mist-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
