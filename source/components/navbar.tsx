"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-ink-700 bg-ink-950/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-[72px]">
        <a
          href="#topo"
          className="flex items-center gap-2 rounded-sm"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-6 w-auto sm:h-7" />
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-mist-300 transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button href="#contato" variant="secondary" className="px-4 py-2.5">
            Falar com um especialista
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-md text-mist-100 xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open ? (
        <div className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-ink-700 bg-ink-950 xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-mist-200 transition-colors hover:bg-ink-800 hover:text-signal"
              >
                {item.label}
              </a>
            ))}
            <Button href="#contato" onClick={() => setOpen(false)} className="mt-3">
              Falar com um especialista
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}


