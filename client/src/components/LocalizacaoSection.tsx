/**
 * LocalizacaoSection — Batalha Artigos Civis e Militares
 * Static Google Maps embed + location info + route button
 */

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export default function LocalizacaoSection() {
  return (
    <section
      id="localizacao"
      className="py-16 md:py-24"
      style={{ background: "#1A1A16" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
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
              04 / Como Chegar
            </span>
          </div>

          <h2
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#F5F5F5",
              lineHeight: 1.1,
            }}
          >
            Nossa
            <br />
            <span style={{ color: "#9EAB54" }}>Localização</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Address card */}
            <div
              className="p-5 rounded-sm"
              style={{
                background: "rgba(37,37,32,0.8)",
                border: "1px solid rgba(93,101,50,0.3)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{ background: "rgba(93,101,50,0.2)", border: "1px solid rgba(93,101,50,0.3)" }}
                >
                  <MapPin size={16} style={{ color: "#9EAB54" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: "#9EAB54",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Endereço
                  </div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "0.9rem", color: "#D0D5B0", lineHeight: 1.5 }}>
                    Av. Cmte. Sampaio, 918
                    <br />
                    <span style={{ color: "#808070", fontSize: "0.8rem" }}>
                      Km 18 — Osasco — SP — 06192-000
                    </span>
                  </p>
                </div>
              </div>

              {/* Proximity highlight */}
              <div
                className="flex items-start gap-3 p-3 rounded-sm"
                style={{ background: "rgba(93,101,50,0.1)", border: "1px solid rgba(93,101,50,0.2)" }}
              >
                <Navigation size={14} style={{ color: "#9EAB54", flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontSize: "0.8rem", color: "#A0A090", lineHeight: 1.5 }}>
                  Localizado na{" "}
                  <strong style={{ color: "#9EAB54" }}>Avenida Comandante Sampaio</strong>, próximo à{" "}
                  <strong style={{ color: "#D0D5B0" }}>Estação Comandante Sampaio</strong> do metrô.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div
              className="p-5 rounded-sm"
              style={{
                background: "rgba(37,37,32,0.8)",
                border: "1px solid rgba(93,101,50,0.3)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock size={16} style={{ color: "#9EAB54" }} />
                <span
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    color: "#9EAB54",
                    textTransform: "uppercase",
                  }}
                >
                  Horário de Funcionamento
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: "0.85rem", color: "#D0D5B0", fontFamily: "Nunito Sans, sans-serif" }}>
                    Segunda a Sexta-feira
                  </span>
                  <span
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "0.85rem",
                      color: "#9EAB54",
                      letterSpacing: "0.05em",
                    }}
                  >
                    09:00 – 18:00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: "0.85rem", color: "#606050", fontFamily: "Nunito Sans, sans-serif" }}>
                    Sábado e Domingo
                  </span>
                  <span
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "0.85rem",
                      color: "#606050",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Fechado
                  </span>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div
              className="p-5 rounded-sm"
              style={{
                background: "rgba(37,37,32,0.8)",
                border: "1px solid rgba(93,101,50,0.3)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Phone size={16} style={{ color: "#9EAB54" }} />
                <span
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    color: "#9EAB54",
                    textTransform: "uppercase",
                  }}
                >
                  Telefone
                </span>
              </div>
              <a
                href="tel:+551136071415"
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  color: "#F5F5F5",
                  letterSpacing: "0.05em",
                }}
              >
                (11) 3607-1415
              </a>
            </div>

            {/* Route button */}
            <a
              href="https://maps.google.com/?q=Batalha+Artigos+Militares+Osasco+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-sm text-sm font-medium transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #5D6532, #9EAB54)",
                color: "#F5F5F5",
                fontFamily: "Oswald, sans-serif",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <Navigation size={16} />
              Traçar Rota
            </a>
          </motion.div>

          {/* Static Map Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 overflow-hidden rounded-sm"
            style={{
              border: "1px solid rgba(93,101,50,0.3)",
              height: "420px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.4789!2d-46.7938!3d-23.5322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf5d1c5c5c5c5d%3A0x5d6532918!2sAv.%20Cmte.%20Sampaio%2C%20918%2C%20Osasco%2C%20SP%2006192-000!5e0!3m2!1spt-BR!2sbr!4v1686000000000"
              width="100%"
              height="100%"
              style={{ border: "none", display: "block" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Batalha Artigos Civis e Militares - Av. Cmte. Sampaio, 918 - Osasco SP"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
