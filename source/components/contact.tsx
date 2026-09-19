"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Clock, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Contact() {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Olá! Sou ${data.get("name")}${data.get("company") ? `, da empresa ${data.get("company")}` : ""}.\nE-mail: ${data.get("email")}\nInteresse: ${data.get("service")}\n\n${data.get("message")}`;
    window.open(`https://wa.me/5545999759770?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setPrepared(true);
  }
  return <section id="contato" className="contact-section py-24 sm:py-32">
    <Container>
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">VAMOS CONVERSAR</p>
          <h2>Seu próximo passo <br />começa com uma <br /><span>boa conversa.</span></h2>
          <p className="contact-intro">Conte o que sua empresa precisa. Vamos entender o cenário e encontrar a solução certa, juntos.</p>
          <a className="direct-whatsapp" href="https://wa.me/5545999759770" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /><span>Falar direto no WhatsApp<small>(45) 99975-9770</small></span><ArrowUpRight size={20} /></a>
          <div className="contact-details">
            <a href="mailto:henriquearaujosco@gmail.com"><Mail size={19} /><span><small>E-MAIL</small>henriquearaujosco@gmail.com</span></a>
            <a href="https://www.instagram.com/viidtec" target="_blank" rel="noopener noreferrer"><Instagram size={19} /><span><small>INSTAGRAM</small>@viidtec</span><ArrowUpRight size={16} /></a>
            <div><Clock size={19} /><span><small>ATENDIMENTO</small>Todos os dias, das 12h às 21h</span></div>
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+432+Morretes+Itapema+SC+88220-000" target="_blank" rel="noopener noreferrer"><MapPin size={19} /><span><small>ONDE ESTAMOS</small>Rua 432, Morretes, Itapema – SC<br />CEP 88220-000</span></a>
          </div>
        </div>
        <form onSubmit={submit} className="contact-form">
          <span className="form-overline">FALE SOBRE SUA IDEIA</span><h3>Como podemos ajudar?</h3><p>Um pouco de contexto faz toda a diferença.</p>
          <div className="form-row"><label htmlFor="name">Seu nome<input id="name" name="name" autoComplete="name" placeholder="Como você se chama?" required maxLength={100} /></label><label htmlFor="company">Empresa <span>(opcional)</span><input id="company" name="company" autoComplete="organization" placeholder="Nome da empresa" maxLength={150} /></label></div>
          <label htmlFor="email">E-mail<input id="email" name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" required maxLength={200} /></label>
          <label htmlFor="service">O que você procura?<select id="service" name="service" defaultValue="" required><option value="" disabled>Selecione uma opção</option><option>Suporte e infraestrutura de TI</option><option>Site ou sistema sob medida</option><option>Automação e integrações</option><option>Consultoria tecnológica</option><option>Quero entender as possibilidades</option></select></label>
          <label htmlFor="message">Conte um pouco sobre o projeto<textarea id="message" name="message" rows={4} placeholder="Qual desafio você gostaria de resolver?" required minLength={10} maxLength={2000} /></label>
          <button type="submit">Continuar no WhatsApp <ArrowUpRight size={19} /></button>
          <p className="form-note">Você poderá revisar a mensagem no WhatsApp antes de enviar.</p>
          {prepared && <p role="status" className="form-status">Mensagem preparada. Conclua o envio na janela do WhatsApp.</p>}
        </form>
      </div>
    </Container>
  </section>;
}


