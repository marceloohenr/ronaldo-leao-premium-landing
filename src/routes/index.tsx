import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { About } from "@/components/landing/About";
import { Specialties } from "@/components/landing/Specialties";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Differentiators } from "@/components/landing/Differentiators";
import { Gallery } from "@/components/landing/Gallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsAppButton } from "@/components/landing/FloatingWhatsAppButton";
import {
  INSTAGRAM_URL,
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_TITLE,
  SITE_URL,
  WHATSAPP_DISPLAY,
} from "@/lib/constants";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ronaldo Leão – Nutricionista | Emagrecimento, Funcional, Esportiva e Estética" },
      {
        name: "description",
        content:
          "Nutricionista Ronaldo Leão: consultas personalizadas em emagrecimento, nutrição funcional, esportiva e estética. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_TITLE },
      { property: "og:image", content: SITE_IMAGE },
      { property: "og:image:secure_url", content: SITE_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "600" },
      { property: "og:image:height", content: "600" },
      {
        property: "og:image:alt",
        content: "Logo Ronaldo Leão Nutrição e Bem-estar",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: SITE_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/png", href: "/ronaldo/logo-ronaldo-leao-transparent.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Nutritionist",
          name: "Ronaldo Leão",
          url: SITE_URL,
          image: SITE_IMAGE,
          description:
            "Nutricionista especializado em emagrecimento, nutrição funcional, esportiva e estética.",
          telephone: `+55${WHATSAPP_DISPLAY.replace(/\D/g, "")}`,
          areaServed: "Recife, PE, Brasil",
          sameAs: [INSTAGRAM_URL],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Recife",
            addressRegion: "PE",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Specialties />
        <HowItWorks />
        <Differentiators />
        <Gallery />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
