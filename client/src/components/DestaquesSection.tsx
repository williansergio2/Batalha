/**
 * DestaquesSection — Batalha Artigos Civis e Militares
 * Two premium side-by-side cards: WhatsApp purchase + Physical store
 */

import { motion } from "framer-motion";
import { MessageCircle, MapPin, CreditCard, Smartphone, Banknote, Truck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function DestaquesSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="destaques"
      className="py-16 md:py-20"
      style={{ background: "#1A1A16" }}
    >
      <div className="container">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
          variants={fadeUp}
          className="flex items-center gap-3 mb-10"
        >
          <span
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "#9EAB54",
              textTransform: "uppercase",
            }}
          >
            01 / Como Comprar
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(93,101,50,0.3)", maxWidth: "60px" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Card 1: WhatsApp */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={1}
            variants={fadeUp}
            className="corner-bracket relative overflow-hidden rounded-sm"
            style={{
              background: "linear-gradient(135deg, rgba(37,211,102,0.08) 0%, rgba(20,20,16,0.95) 60%)",
              border: "1px solid rgba(37,211,102,0.2)",
              padding: "2rem",
            }}
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-3xl"
              style={{ background: "#25D366" }}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-sm mb-5"
                style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)" }}
              >
                <MessageCircle size={22} style={{ color: "#25D366" }} />
              </div>

              <h3
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#F5F5F5",
                  marginBottom: "0.5rem",
                }}
              >
                Compre pelo WhatsApp
              </h3>

              <p
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: "0.9rem",
                  color: "#A0A090",
                  marginBottom: "1.25rem",
                  lineHeight: 1.6,
                }}
              >
                Atendimento rápido e personalizado. Tire suas dúvidas, faça pedidos e receba sua encomenda com comodidade.
              </p>

              {/* Payment methods */}
              <div className="mb-5">
                <div
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "#9EAB54",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Formas de Pagamento
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Smartphone, label: "PIX" },
                    { icon: CreditCard, label: "Débito" },
                    { icon: CreditCard, label: "Crédito" },
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.label}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs"
                        style={{
                          background: "rgba(37,211,102,0.1)",
                          border: "1px solid rgba(37,211,102,0.2)",
                          color: "#B0D5B8",
                          fontFamily: "Oswald, sans-serif",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          fontSize: "0.7rem",
                        }}
                      >
                        <Icon size={12} />
                        {method.label}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Delivery info */}
              <div
                className="flex items-start gap-3 p-3 rounded-sm mb-5"
                style={{ background: "rgba(37,211,102,0.06)", border: "1px solid rgba(37,211,102,0.12)" }}
              >
                <Truck size={16} style={{ color: "#25D366", flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontSize: "0.8rem", color: "#A0A090", lineHeight: 1.5 }}>
                  Entregas por <strong style={{ color: "#D0D5B0" }}>Moto Uber</strong> para toda a Região Metropolitana de São Paulo.
                </p>
              </div>

              <a
                href="https://wa.me/5511986320811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-sm text-sm font-medium transition-all duration-200"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  fontFamily: "Oswald, sans-serif",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#1ebe5d";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(37,211,102,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#25D366";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <MessageCircle size={16} />
                Iniciar Conversa
              </a>
            </div>
          </motion.div>

          {/* Card 2: Physical Store */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={2}
            variants={fadeUp}
            className="corner-bracket relative overflow-hidden rounded-sm"
            style={{
              background: "linear-gradient(135deg, rgba(93,101,50,0.12) 0%, rgba(20,20,16,0.95) 60%)",
              border: "1px solid rgba(93,101,50,0.3)",
              padding: "2rem",
            }}
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-3xl"
              style={{ background: "#9EAB54" }}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-sm mb-5"
                style={{ background: "rgba(93,101,50,0.2)", border: "1px solid rgba(93,101,50,0.4)" }}
              >
                <MapPin size={22} style={{ color: "#9EAB54" }} />
              </div>

              <h3
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#F5F5F5",
                  marginBottom: "0.5rem",
                }}
              >
                Visite Nossa Loja Física
              </h3>

              <p
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: "0.9rem",
                  color: "#A0A090",
                  marginBottom: "1.25rem",
                  lineHeight: 1.6,
                }}
              >
                Venha conhecer nossa loja em Osasco/SP. Nossa equipe está pronta para atendê-lo com excelência.
              </p>

              {/* Phone */}
              <div
                className="flex items-center gap-3 p-3 rounded-sm mb-4"
                style={{ background: "rgba(93,101,50,0.1)", border: "1px solid rgba(93,101,50,0.2)" }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{ background: "rgba(93,101,50,0.2)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9EAB54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "#808070", fontFamily: "Oswald, sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Telefone
                  </div>
                  <a
                    href="tel:+551136071415"
                    style={{ fontSize: "1rem", color: "#F5F5F5", fontFamily: "Oswald, sans-serif", fontWeight: 500, letterSpacing: "0.05em" }}
                  >
                    (11) 3607-1415
                  </a>
                </div>
              </div>

              {/* Payment info */}
              <div className="mb-5">
                <div className="flex flex-wrap gap-2 mb-2">
                  {[
                    { icon: CreditCard, label: "Débito" },
                    { icon: CreditCard, label: "Crédito" },
                    { icon: Banknote, label: "Parcelamento" },
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.label}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs"
                        style={{
                          background: "rgba(93,101,50,0.1)",
                          border: "1px solid rgba(93,101,50,0.25)",
                          color: "#B0C080",
                          fontFamily: "Oswald, sans-serif",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          fontSize: "0.7rem",
                        }}
                      >
                        <Icon size={12} />
                        {method.label}
                      </div>
                    );
                  })}
                </div>
                <p style={{ fontSize: "0.75rem", color: "#808070" }}>
                  Parcelamento disponível para compras acima de <strong style={{ color: "#9EAB54" }}>R$ 99,99</strong>
                </p>
              </div>

              <button
                onClick={() => scrollTo("#localizacao")}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-sm text-sm font-medium transition-all duration-200"
                style={{
                  background: "rgba(93,101,50,0.2)",
                  color: "#9EAB54",
                  border: "1px solid rgba(93,101,50,0.5)",
                  fontFamily: "Oswald, sans-serif",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#5D6532";
                  (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(93,101,50,0.2)";
                  (e.currentTarget as HTMLElement).style.color = "#9EAB54";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <MapPin size={16} />
                Como Chegar
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
