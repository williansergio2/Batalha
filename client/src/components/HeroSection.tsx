/**
 * HeroSection — Batalha Artigos Civis e Militares
 * Design: Full-viewport dark tactical hero with cinematic overlay
 * Image: Military soldier with green accent lighting
 */

import { motion } from "framer-motion";
import { MessageCircle, Instagram, ChevronDown, Shield, Award, Clock } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753214044/mcWnmqHRzxVKnkC3dH9AFR/hero-banner-new-cBwfo4UvQDn9kcG6pcSiiz.webp";

const stats = [
  { icon: Clock, value: "+28", label: "Anos de Tradição" },
  { icon: Shield, value: "6", label: "Segmentos Atendidos" },
  { icon: Award, value: "100%", label: "Qualidade Garantida" },
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh", maxWidth: "100vw" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Layered overlays for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(14,14,10,0.92) 0%, rgba(14,14,10,0.75) 50%, rgba(14,14,10,0.4) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,14,10,0.9) 0%, transparent 50%)",
        }}
      />

      {/* Tactical grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(158,171,84,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(158,171,84,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative container flex flex-col justify-center" style={{ minHeight: "100svh", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="max-w-2xl">
          {/* Section badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div
              className="h-px w-8"
              style={{ background: "#9EAB54" }}
            />
            <span
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                color: "#9EAB54",
                textTransform: "uppercase",
              }}
            >
              Desde 1996 — Osasco / SP
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.0,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#F5F5F5",
            }}
          >
            BATALHA
            <br />
            <span style={{ color: "#9EAB54" }}>ARTIGOS</span>
            <br />
            CIVIS E MILITARES
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="my-5"
            style={{
              height: "2px",
              width: "80px",
              background: "linear-gradient(90deg, #5D6532, #9EAB54)",
              transformOrigin: "left",
            }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "#B0B5A0",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Desde 1996 fornecendo artigos militares, uniformes, equipamentos táticos e acessórios para profissionais de todo o Brasil.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <a
              href="https://wa.me/5511986320811"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-military flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>

            <a
              href="https://instagram.com/batalhaartigosmilitares"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-military-outline flex items-center gap-2"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-wrap gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(93,101,50,0.3)" }}
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <Icon size={16} style={{ color: "#9EAB54" }} />
                  <div>
                    <div
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        color: "#F5F5F5",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        color: "#808070",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: "Oswald, sans-serif",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#destaques")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "#9EAB54" }}
      >
        <span
          style={{
            fontFamily: "Oswald, sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
