/**
 * QuemSomosSection — Batalha Artigos Civis e Militares
 * Institutional section with store image, mission/vision/values
 */

import { motion } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";

const ABOUT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663753214044/mcWnmqHRzxVKnkC3dH9AFR/about-section-VoejpZFGVYr2Xt8ripndfD.webp";

const pillars = [
  {
    icon: Eye,
    title: "Nossa Visão",
    text: "Tornar-se referência no comércio de acessórios, artigos civis e militares.",
  },
  {
    icon: Target,
    title: "Nossa Missão",
    text: "Excelência no atendimento aos clientes e qualidade de nossos produtos.",
  },
  {
    icon: Heart,
    title: "Nossos Valores",
    text: "Atenção aos nossos clientes, cumprimento dos compromissos e espírito de equipe.",
  },
];

export default function QuemSomosSection() {
  return (
    <section
      id="quem-somos"
      className="py-16 md:py-24 overflow-hidden"
      style={{ background: "#1E1E1E" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ border: "1px solid rgba(93,101,50,0.3)" }}
            >
              <img
                src={ABOUT_IMAGE}
                alt="Interior da Loja Batalha Artigos Militares"
                className="w-full object-cover"
                style={{ height: "420px" }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(20,20,16,0.6) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -bottom-5 -right-4 md:-right-6 p-4 rounded-sm"
              style={{
                background: "linear-gradient(135deg, #5D6532, #494F27)",
                border: "1px solid rgba(158,171,84,0.4)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#F5F5F5",
                  lineHeight: 1,
                }}
              >
                1996
              </div>
              <div
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: "0.65rem",
                  color: "#9EAB54",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Fundação
              </div>
            </motion.div>

            {/* Decorative corner lines */}
            <div
              className="absolute -top-3 -left-3 w-8 h-8"
              style={{ borderTop: "2px solid #9EAB54", borderLeft: "2px solid #9EAB54" }}
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8" style={{ background: "#9EAB54" }} />
              <span
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  color: "#9EAB54",
                  textTransform: "uppercase",
                }}
              >
                02 / Quem Somos
              </span>
            </div>

            <h2
              style={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                color: "#F5F5F5",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Tradição e Qualidade
              <br />
              <span style={{ color: "#9EAB54" }}>Desde 1996</span>
            </h2>

            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.95rem",
                color: "#A0A090",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              Desde 1996 no mercado, loja especializada no fornecimento de artigos civis e militares, conta com equipe capacitada para confecção de uniformes, fardamentos, mochilas, cintos e bordados.
            </p>

            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.95rem",
                color: "#A0A090",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              Trabalhamos com acessórios direcionados às Forças Armadas, Exército, Polícia Militar, Bombeiros, Polícia Civil, Guardas Municipais e Segurança Privada.
            </p>

            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.95rem",
                color: "#A0A090",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Confeccionamos logotipos bordados em uniformes, camisetas empresariais, agasalhos e uniformes escolares.
            </p>

            {/* Pillars */}
            <div className="grid gap-3">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-sm"
                    style={{
                      background: "rgba(37,37,32,0.6)",
                      border: "1px solid rgba(93,101,50,0.2)",
                    }}
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center rounded-sm flex-shrink-0"
                      style={{ background: "rgba(93,101,50,0.2)", border: "1px solid rgba(93,101,50,0.3)" }}
                    >
                      <Icon size={16} style={{ color: "#9EAB54" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "Oswald, sans-serif",
                          fontWeight: 500,
                          fontSize: "0.85rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#F5F5F5",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {pillar.title}
                      </div>
                      <p style={{ fontSize: "0.8rem", color: "#909080", lineHeight: 1.5 }}>
                        {pillar.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
