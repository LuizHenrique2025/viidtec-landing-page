import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://luizhenrique2025.github.io/viidtec-landing-page/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VIIDTEC — Suporte de TI, Consultoria e Desenvolvimento de Software",
    template: "%s | VIIDTEC",
  },
  description:
    "A VIIDTEC cuida da tecnologia da sua empresa: suporte de TI, consultoria tecnológica, desenvolvimento de sites e aplicações web, automações e infraestrutura de redes. Tecnologia que sustenta o seu negócio.",
  keywords: [
    "suporte de TI",
    "consultoria tecnológica",
    "desenvolvimento de sites",
    "aplicações web",
    "automações",
    "infraestrutura de redes",
    "manutenção de computadores",
    "VIIDTEC",
  ],
  authors: [{ name: "VIIDTEC" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    images: [{ url: "https://luizhenrique2025.github.io/viidtec-landing-page/og.png", width: 1731, height: 909, alt: "VIIDTEC — Tecnologia que simplifica o seu negócio" }],
    url: siteUrl,
    siteName: "VIIDTEC",
    title: "VIIDTEC — Tecnologia que sustenta o seu negócio",
    description:
      "Suporte de TI, consultoria tecnológica, desenvolvimento de sites, aplicações web e automações para empresas que não podem parar.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://luizhenrique2025.github.io/viidtec-landing-page/og.png"],
    title: "VIIDTEC — Tecnologia que sustenta o seu negócio",
    description:
      "Suporte de TI, consultoria, desenvolvimento web e automações para empresas que não podem parar.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" >
      <body>{children}</body>
    </html>
  );
}



