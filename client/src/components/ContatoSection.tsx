/**
 * ContatoSection — Batalha Artigos Civis e Militares
 * Contact form + social media + phone info
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, Phone, Send, CheckCircle } from "lucide-react";

export default function ContatoSection() {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}.\nTelefone: ${form.telefone}\n\n${form.mensagem}`
    );
    window.open(`https://wa.me/5511986320811?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ nome: "", telefone: "", mensagem: "" });
    }, 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(37,37,32,0.8)",
    border: "1px solid rgba(93,101,50,0.3)",
    borderRadius: "2px",
    padding: "0.75rem 1rem",
    color: "#F5F5F5",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contato"
      className="py-16 md:py-24"
      style={{ background: "#1E1E1E" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
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
              05 / Contato
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
            Fale
            <br />
            <span style={{ color: "#9EAB54" }}>Conosco</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.95rem",
                color: "#A0A090",
                lineHeight: 1.7,
                marginBottom: "0.5rem",
              }}
            >
              Entre em contato conosco pelo WhatsApp, Instagram ou telefone. Nossa equipe está pronta para atendê-lo com excelência.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5511986320811"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-sm group transition-all duration-200"
              style={{
                background: "rgba(37,211,102,0.06)",
                border: "1px solid rgba(37,211,102,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.2)";
              }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-sm flex-shrink-0"
                style={{ background: "#25D366" }}
              >
                <MessageCircle size={20} style={{ color: "#fff" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "#25D366",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  WhatsApp
                </div>
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "1rem", color: "#F5F5F5", letterSpacing: "0.05em" }}>
                  +55 (11) 98632-0811
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/batalhaartigosmilitares"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-sm group transition-all duration-200"
              style={{
                background: "rgba(131,58,180,0.06)",
                border: "1px solid rgba(131,58,180,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(131,58,180,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(131,58,180,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(131,58,180,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(131,58,180,0.2)";
              }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-sm flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                }}
              >
                <Instagram size={20} style={{ color: "#fff" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "#c77dff",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  Instagram
                </div>
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "1rem", color: "#F5F5F5", letterSpacing: "0.05em" }}>
                  @batalhaartigosmilitares
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+551136071415"
              className="flex items-center gap-4 p-4 rounded-sm group transition-all duration-200"
              style={{
                background: "rgba(93,101,50,0.08)",
                border: "1px solid rgba(93,101,50,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(93,101,50,0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(93,101,50,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(93,101,50,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(93,101,50,0.25)";
              }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-sm flex-shrink-0"
                style={{ background: "rgba(93,101,50,0.3)", border: "1px solid rgba(93,101,50,0.4)" }}
              >
                <Phone size={20} style={{ color: "#9EAB54" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "#9EAB54",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  Telefone
                </div>
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "1rem", color: "#F5F5F5", letterSpacing: "0.05em" }}>
                  (11) 3607-1415
                </div>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="p-6 rounded-sm"
              style={{
                background: "rgba(25,25,20,0.8)",
                border: "1px solid rgba(93,101,50,0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "#9EAB54",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                Enviar Mensagem via WhatsApp
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-3"
                >
                  <CheckCircle size={40} style={{ color: "#25D366" }} />
                  <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "1rem", color: "#F5F5F5", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Mensagem Enviada!
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#808070", textAlign: "center" }}>
                    Você foi redirecionado para o WhatsApp. Em breve entraremos em contato.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="nome"
                      style={{
                        display: "block",
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        color: "#808070",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Nome *
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(158,171,84,0.6)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(93,101,50,0.3)"; }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      style={{
                        display: "block",
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        color: "#808070",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Telefone *
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(158,171,84,0.6)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(93,101,50,0.3)"; }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      style={{
                        display: "block",
                        fontFamily: "Oswald, sans-serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        color: "#808070",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      value={form.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva o que você precisa..."
                      style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(158,171,84,0.6)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(93,101,50,0.3)"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-sm text-sm font-medium transition-all duration-200"
                    style={{
                      background: "#25D366",
                      color: "#fff",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#1ebe5d";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#25D366";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <Send size={16} />
                    Enviar via WhatsApp
                  </button>

                  <p style={{ fontSize: "0.7rem", color: "#606050", textAlign: "center" }}>
                    Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
