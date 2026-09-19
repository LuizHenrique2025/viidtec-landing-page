import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-800 py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <Logo className="h-6 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-mist-400">
            Suporte de TI, consultoria e desenvolvimento de software para
            empresas que precisam de tecnologia confiável.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:flex sm:flex-col">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-mist-400 transition-colors hover:text-mist-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-mist-400">
          <a href="mailto:henriquearaujosco@gmail.com">henriquearaujosco@gmail.com</a>
          <p className="mt-2"><a href="https://wa.me/5545999759770" target="_blank" rel="noopener noreferrer">(45) 99975-9770</a></p><p className="mt-2"><a href="https://www.instagram.com/viidtec" target="_blank" rel="noopener noreferrer">Instagram · @viidtec ↗</a></p>
          <p className="mt-6 text-mist-500">
            © {new Date().getFullYear()} VIIDTEC. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

