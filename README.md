# VIIDTEC

Site público: https://luizhenrique2025.github.io/viidtec-landing-page/

A raiz contém a exportação estática publicada pelo GitHub Pages. O projeto Next.js editável está em `source/`.

## Desenvolvimento

```powershell
cd source
npm ci
npm run dev
```

## Gerar versão para GitHub Pages

```powershell
cd source
$env:VIIDTEC_EXPORT='1'
$env:NEXT_PUBLIC_BASE_PATH='/viidtec-landing-page'
$env:VIIDTEC_BUILD_DIR='.next-export'
npm run build
Copy-Item -Path .next-export/* -Destination .. -Recurse -Force
```

Mantenha `.nojekyll` na raiz. O formulário prepara uma mensagem no WhatsApp; o visitante confirma o envio.

