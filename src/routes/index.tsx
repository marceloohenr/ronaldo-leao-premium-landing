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
import { WHATSAPP_DISPLAY, INSTAGRAM_URL } from "@/lib/constants";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ronaldo Leão — Nutricionista | Emagrecimento, Funcional, Esportiva e Estética" },
      {
        name: "description",
        content:
          "Nutricionista Ronaldo Leão — consultas personalizadas em emagrecimento, nutrição funcional, esportiva e estética. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Ronaldo Leão — Nutrição e Bem-estar" },
      {
        property: "og:description",
        content:
          "Acompanhamento nutricional premium, personalizado e humanizado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Nutritionist",
          name: "Ronaldo Leão",
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
