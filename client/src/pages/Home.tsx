/**
 * Home Page — Batalha Artigos Civis e Militares
 * Assembles all sections in order:
 * Hero → Destaques → QuemSomos → Coleções → Localização → Contato → Footer
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestaquesSection from "@/components/DestaquesSection";
import MarcaBatalhaSection from "@/components/MarcaBatalhaSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import ColecoesSection from "@/components/ColecoesSection";
import LocalizacaoSection from "@/components/LocalizacaoSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#1E1E1E", color: "#F5F5F5" }}
    >
      {/* Announcement Bar */}
      <div
        className="w-full text-center py-2 px-4 text-xs font-medium"
        style={{
          background: "linear-gradient(90deg, #494F27 0%, #5D6532 50%, #494F27 100%)",
          color: "#F5F5F5",
          letterSpacing: "0.12em",
          position: "relative",
          zIndex: 60,
        }}
      >
        <span style={{ color: "#9EAB54", fontFamily: "Oswald, sans-serif", fontWeight: 600, textTransform: "uppercase" }}>
          BEM-VINDOS À BATALHA
        </span>
        <span className="mx-3" style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
        <span style={{ color: "#D0D5B0", fontFamily: "Nunito Sans, sans-serif", fontSize: "0.75rem" }}>
          Expediente: Segunda a Sexta-feira das 09:00 às 18:00
        </span>
      </div>
      <Header />
      <main>
        <HeroSection />
        <DestaquesSection />
        <MarcaBatalhaSection />
        <QuemSomosSection />
        <ColecoesSection />
        <LocalizacaoSection />
        <ContatoSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
