import { assetPath } from "@/lib/assets";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Projects() {
  return <section id="projetos" className="project-section py-24 sm:py-32">
    <Container>
      <div className="project-heading">
        <div><p className="eyebrow">PROJETOS / NA PRÁTICA</p><h2>De uma necessidade real.<br />Para uma solução em uso.</h2></div>
        <p>Conheça um sistema desenvolvido pela VIIDTEC para simplificar a rotina de uma operação de saúde.</p>
      </div>
      <article className="project-case" data-reveal>
        <a href={assetPath("/images/projeto-central-ti.png")} target="_blank" rel="noopener noreferrer" className="project-preview" aria-label="Ampliar painel da Central TI em nova aba">
          <div className="preview-bar"><span /><span /><span /><p>Central TI — Visão geral</p><ArrowUpRight size={18} /></div>
          <Image src={assetPath("/images/projeto-central-ti.png")} alt="Painel real da Central TI com gestão de demandas do Hospital Dia Revitalite" width={1600} height={809} sizes="(max-width: 900px) 100vw, 65vw" />
          <span className="preview-caption">Explorar o painel <ArrowUpRight size={15} /></span>
        </a>
        <div className="project-story"><span className="case-label">SISTEMA SOB MEDIDA</span><h3>Central TI</h3><p className="case-client">Hospital Dia Revitalite</p><p>Demandas, equipamentos e informações da operação reunidos em uma plataforma de gestão interna.</p>
          <ul>{["Chamados por status e prioridade", "Gestão de equipamentos e patrimônio", "Comunicados e e-mail integrado"].map(text => <li key={text}><Check size={17} />{text}</li>)}</ul>
          <a href="#contato">Quero uma solução para minha empresa <ArrowUpRight size={17} /></a>
        </div>
      </article>
    </Container>
  </section>;
}

