/**
 * ColecoesSection — Batalha Artigos Civis e Militares
 * Premium gallery of 6 military/security categories
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const categories = [
  {
    id: "civil",
    label: "Uso Civil",
    description: "Equipamentos táticos, mochilas, cintos e acessórios para uso civil e atividades outdoor.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753214044/mcWnmqHRzxVKnkC3dH9AFR/cat-civil-RTzhnJ6AEWFC4DYD2pUeWD.webp",
    whatsapp: "https://wa.me/5511986320811?text=Olá! Tenho interesse nos artigos de Uso Civil.",
  },
  {
    id: "bombeiros",
    label: "Bombeiros",
    description: "Uniformes, fardamentos e equipamentos para o Corpo de Bombeiros.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753214044/mcWnmqHRzxVKnkC3dH9AFR/cat-bombeiros-TVL9MZq92Uk5TrqBwXDYMF.webp",
    whatsapp: "https://wa.me/5511986320811?text=Olá! Tenho interesse em artigos para Bombeiros.",
  },
  {
    id: "escolta",
    label: "Escolta e Segurança",
    description: "Uniformes e equipamentos para segurança privada, vigilantes e escolta.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753214044/mcWnmqHRzxVKnkC3dH9AFR/cat-escolta-6Rp2RcHBx8PPXiVn8uP57v.webp",
    whatsapp: "https://wa.me/5511986320811?text=Olá! Tenho interesse em artigos para Escolta e Segurança.",
  },
  {
    id: "exercito",
    label: "Exército",
    description: "Fardamentos, acessórios e equipamentos para o Exército Brasileiro.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753214044/mcWnmqHRzxVKnkC3dH9AFR/cat-exercito-eRvBfaqzjcMz3BWKAYPs3E.webp",
    whatsapp: "https://wa.me/5511986320811?text=Olá! Tenho interesse em artigos para o Exército.",
  },
  {
    id: "gcm",
    label: "GCM",
    description: "Uniformes e equipamentos para a Guarda Civil Municipal.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753214044/mcWnmqHRzxVKnkC3dH9AFR/cat-gcm-BuuxLgZrKFFv9SPVprhBGH.webp",
    whatsapp: "https://wa.me/5511986320811?text=Olá! Tenho interesse em artigos para GCM.",
  },
  {
    id: "pm",
    label: "Polícia Militar",
    description: "Artigos, uniformes e equipamentos para a Polícia Militar.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663753214044/mcWnmqHRzxVKnkC3dH9AFR/cat-policia-militar-JTPnMrXojkoVciPUNjxmAG.webp",
    whatsapp: "https://wa.me/5511986320811?text=Olá! Tenho interesse em artigos para a Polícia Militar.",
  },
];

export default function ColecoesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="colecoes"
      className="py-16 md:py-24"
      style={{ background: "#161612" }}
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
              03 / Coleções
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
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
              Nossas
              <br />
              <span style={{ color: "#9EAB54" }}>Coleções</span>
            </h2>

            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.85rem",
                color: "#808070",
                maxWidth: "300px",
                lineHeight: 1.6,
              }}
            >
              Produtos especializados para cada segmento profissional. Clique em uma categoria para solicitar via WhatsApp.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              style={{
                border: hoveredId === cat.id
                  ? "1px solid rgba(158,171,84,0.6)"
                  : "1px solid rgba(93,101,50,0.25)",
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "280px" }}>
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredId === cat.id ? "scale(1.05)" : "scale(1)",
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(14,14,10,0.95) 0%, rgba(14,14,10,0.4) 50%, rgba(14,14,10,0.1) 100%)",
                    opacity: hoveredId === cat.id ? 1 : 0.85,
                  }}
                />

                {/* Category number */}
                <div
                  className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-sm"
                  style={{
                    background: "rgba(93,101,50,0.3)",
                    border: "1px solid rgba(158,171,84,0.3)",
                    fontFamily: "Oswald, sans-serif",
                    fontSize: "0.65rem",
                    color: "#9EAB54",
                    letterSpacing: "0.05em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
              >
                <h3
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#F5F5F5",
                    marginBottom: "0.4rem",
                  }}
                >
                  {cat.label}
                </h3>

                <p
                  className="transition-all duration-300"
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontSize: "0.78rem",
                    color: "#A0A090",
                    lineHeight: 1.5,
                    marginBottom: "0.75rem",
                    maxHeight: hoveredId === cat.id ? "60px" : "0px",
                    overflow: "hidden",
                    opacity: hoveredId === cat.id ? 1 : 0,
                  }}
                >
                  {cat.description}
                </p>

                <a
                  href={cat.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full py-2.5 px-3 rounded-sm text-xs font-medium transition-all duration-200"
                  style={{
                    background: hoveredId === cat.id ? "#25D366" : "rgba(37,211,102,0.15)",
                    color: "#fff",
                    border: "1px solid rgba(37,211,102,0.3)",
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    justifyContent: "center",
                  }}
                >
                  <MessageCircle size={13} />
                  Solicitar via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
