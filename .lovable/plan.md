# Landing Page Premium — Ronaldo Leão (Nutrição e Bem-estar)

Landing page única, editorial e minimalista, com estética de clínica premium (Aesop + Apple + Linear). Todo CTA leva para o WhatsApp `https://wa.me/5581988244393?text=...`.

## Identidade visual

- **Paleta** (tokens em `src/styles.css`, oklch):
  - `--primary`: verde escuro da marca (extraído da logo, ~#1E3A2B)
  - `--background`: off-white cremoso (~#F5F2EA, tom da logo)
  - `--foreground`: verde-quase-preto
  - `--muted`: cinza muito claro
  - `--accent`: dourado discreto (~#B8A46A), usado só em detalhes finos (linhas, numerais, separadores)
- **Tipografia** (via `<link>` no `__root.tsx`, Google Fonts):
  - Títulos: **Cormorant Garamond** (400/500, itálico para acentos editoriais)
  - Corpo: **Inter** (400/500)
- **Superfícies**: cards com raio suave, borda 1px sutil, sombra muito leve, glassmorphism apenas no header sticky.

## Assets

- Logo oficial + 2 retratos do Ronaldo → publicados via `lovable-assets` a partir de `/mnt/user-uploads/` (sem copiar binário para o repo).
- Placeholders internos elegantes (SVG/CSS, sem stock): moldura fina dourada + label "Imagem do atendimento" / "Resultado do paciente" / "Foto do atendimento".

## Estrutura da página (rota `/`)

Uma única rota `src/routes/index.tsx` composta por seções em componentes isolados sob `src/components/landing/`:

1. **Header** — logo à esquerda, nav discreto (Sobre · Especialidades · Como funciona · FAQ), CTA "Agendar" à direita. Sticky com glass sutil ao rolar.
2. **Hero** — split 2 colunas. Esquerda: eyebrow "Nutricionista · Recife/PE", headline serifada grande, subheadline, dois CTAs (primary + ghost). Direita: retrato P&B do Ronaldo (a imagem clara, `WhatsApp_Image_..._18.30.08.jpeg`), com moldura fina dourada e pequeno selo "CRN".
3. **Stats** — 4 indicadores em linha, numerais serifados grandes + label fino uppercase, separadores verticais dourados.
4. **Sobre — "Muito além de uma dieta"** — split. Texto editorial à esquerda; à direita placeholder premium "Imagem do atendimento".
5. **Especialidades** — 4 cards (Emagrecimento, Esportiva, Funcional, Estética) com ícone Lucide fino monocromático (sem cor), título serifado, 1–2 linhas de copy, hover: card sobe 2–4px, borda ganha tom dourado.
6. **Como funciona** — timeline horizontal (4 passos) desktop / vertical mobile. Números romanos ou 01–04 em dourado, linha fina conectando.
7. **Diferenciais** — 6 mini-cards em grid 3×2.
8. **Resultados** — grid 3×2 de 6 placeholders "Resultado do paciente" (aspect 4/5, moldura fina).
9. **Galeria** — grid 4 colunas de placeholders "Foto do atendimento".
10. **Depoimentos** — slider premium (embla-carousel), cards com aspas grandes serifadas em dourado, texto placeholder cinza, avatar circular vazio.
11. **FAQ** — accordion shadcn com as 5 perguntas listadas, tipografia editorial.
12. **CTA Final** — banda off-white com título serifado grande centralizado + botão WhatsApp grande.
13. **Rodapé** — logo, nome/tagline, Instagram, WhatsApp, © ano.

Segundo retrato (escuro) usado como composição decorativa discreta na seção Sobre ou CTA final.

## Interações / motion

- Framer Motion (`motion` package) para fade-up / fade-left / fade-right no viewport (`whileInView`, once: true, stagger curto).
- Hover: `transition-transform` + `hover:-translate-y-0.5` em cards e botões.
- Header ganha `backdrop-blur` + borda inferior sutil após 20px de scroll.
- Sem parallax, sem gradientes fortes, sem confetti.

## SEO / técnico

- `head()` em `src/routes/index.tsx`:
  - title: "Ronaldo Leão — Nutricionista | Nutrição e Bem-estar"
  - description focada em consulta / emagrecimento / Recife
  - og:title, og:description, og:type=website, og:image (retrato claro), twitter:card=summary_large_image
  - JSON-LD `@type: "Nutritionist"` com nome, telefone, sameAs Instagram, areaServed.
- `__root.tsx`: adicionar `<link>` do Google Fonts (Cormorant Garamond + Inter) no head; atualizar meta defaults.
- Imagens com `loading="lazy"` (exceto hero) e `decoding="async"`.
- Um único `<h1>` (hero). HTML semântico (`section`, `nav`, `footer`, `article`).
- Responsivo: mobile-first, breakpoints `sm md lg`, grids colapsam para 1 coluna, timeline vira vertical, hero empilha (imagem primeiro no mobile? — imagem depois do headline para manter H1 acima).

## Detalhes técnicos

- Stack: **TanStack Start + React 19 + Tailwind v4** já configurado. Nada de Next.js apesar do brief mencionar — mantemos a stack do template (equivalente em performance/SEO).
- Nova dep: `motion` (Framer Motion moderno) e `embla-carousel-react` (para depoimentos) via `bun add`.
- Tokens novos em `src/styles.css` (light-only; sem dark mode nesta LP).
- Componentes shadcn reutilizados: `button`, `accordion`, `card` conforme necessário.
- Ícones: `lucide-react` (stroke fino, cor `currentColor` no tom foreground/accent).
- Todos os CTAs = `<a href="https://wa.me/5581988244393?text=Ol%C3%A1%20Ronaldo!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener">`.

## Arquivos a criar/editar

```text
src/styles.css                          (tokens: verde marca, dourado, off-white, fontes)
src/routes/__root.tsx                   (fonts link, meta defaults)
src/routes/index.tsx                    (composição + head SEO + JSON-LD)
src/components/landing/Header.tsx
src/components/landing/Hero.tsx
src/components/landing/Stats.tsx
src/components/landing/About.tsx
src/components/landing/Specialties.tsx
src/components/landing/HowItWorks.tsx
src/components/landing/Differentiators.tsx
src/components/landing/Results.tsx
src/components/landing/Gallery.tsx
src/components/landing/Testimonials.tsx
src/components/landing/Faq.tsx
src/components/landing/FinalCta.tsx
src/components/landing/Footer.tsx
src/components/landing/WhatsAppButton.tsx     (link + tracking-friendly)
src/components/landing/Placeholder.tsx        (moldura elegante reutilizável)
src/lib/constants.ts                          (WHATSAPP_URL, INSTAGRAM, PHONE)
src/assets/logo.png.asset.json                (lovable-assets)
src/assets/ronaldo-light.jpg.asset.json
src/assets/ronaldo-dark.jpg.asset.json
```

## Fora de escopo (para confirmar depois se desejar)

- Formulário de contato / backend (Lovable Cloud) — não pedido; CTAs vão direto ao WhatsApp.
- Blog / múltiplas rotas.
- Dark mode.
- Substituição de placeholders por fotos reais de pacientes/atendimento (aguardando material).
