/**
 * MarcaBatalhaSection — Batalha Artigos Civis e Militares
 * Brand identity section with enhanced logo and brand story
 */

import { motion } from "framer-motion";
import { Shield, Award, Zap } from "lucide-react";

const LOGO_BG = "/logo-batalha-background.png";

const brandValues = [
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Produtos de qualidade comprovada para profissionais que dependem de equipamentos confiáveis.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Padrão premium em uniformes, fardamentos e acessórios militares desde 1996.",
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Constantemente atualizados com as melhores tecnologias e tendências do mercado.",
  },
];

export default function MarcaBatalhaSection() {
  return (
    <section
      id="marca-batalha"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: "#1E1E1E" }}
    >
      {/* Background decorativo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('${LOGO_BG}')`,
          backgroundPosition: "center",
          backgroundSize: "600px",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Logo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className="relative p-8 rounded-sm"
              style={{
                background: "linear-gradient(135deg, rgba(93,101,50,0.1), rgba(158,171,84,0.05))",
                border: "1px solid rgba(93,101,50,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <img
                src="/logo-batalha-enhanced.webp"
                alt="Batalha Artigos Civis e Militares - Logo Oficial"
                style={{
                  width: "300px",
                  height: "auto",
                  display: "block",
                }}
              />

              {/* Decorative corners */}
              <div
                className="absolute top-2 left-2 w-6 h-6"
                style={{ borderTop: "2px solid #9EAB54", borderLeft: "2px solid #9EAB54" }}
              />
              <div
                className="absolute bottom-2 right-2 w-6 h-6"
                style={{ borderBottom: "2px solid #9EAB54", borderRight: "2px solid #9EAB54" }}
              />
            </div>
          </motion.div>

          {/* Content side */}
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
                Nossa Marca
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
              Batalha
              <br />
              <span style={{ color: "#9EAB54" }}>Identidade & Valores</span>
            </h2>

            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.95rem",
                color: "#A0A090",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              A marca Batalha representa mais que um nome. É o compromisso com a qualidade, a dedicação ao atendimento e a paixão por servir profissionais que protegem e defendem. Cada produto que sai de nossas mãos carrega a responsabilidade de estar ao lado de quem mais precisa.
            </p>

            {/* Brand values */}
            <div className="grid gap-4">
              {brandValues.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-sm group transition-all duration-200"
                    style={{
                      background: "rgba(37,37,32,0.6)",
                      border: "1px solid rgba(93,101,50,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(93,101,50,0.15)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(93,101,50,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(37,37,32,0.6)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(93,101,50,0.2)";
                    }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0 transition-all duration-200"
                      style={{
                        background: "rgba(93,101,50,0.2)",
                        border: "1px solid rgba(93,101,50,0.3)",
                      }}
                    >
                      <Icon size={18} style={{ color: "#9EAB54" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "Oswald, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#F5F5F5",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {value.title}
                      </div>
                      <p style={{ fontSize: "0.8rem", color: "#909080", lineHeight: 1.5 }}>
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Brand statement */}
            <div
              className="mt-6 p-4 rounded-sm border-l-4"
              style={{
                background: "rgba(93,101,50,0.08)",
                borderLeftColor: "#9EAB54",
              }}
            >
              <p
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  color: "#9EAB54",
                  fontStyle: "italic",
                }}
              >
                "Batalha: Onde a qualidade encontra a dedicação, e o profissional encontra a confiança."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
