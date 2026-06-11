/**
 * Footer — Batalha Artigos Civis e Militares
 * Premium footer with logo, contact, social, quick links
 */

import { MessageCircle, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#0D0D0A",
        borderTop: "1px solid rgba(93,101,50,0.3)",
      }}
    >
      {/* Main footer content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <img
              src="/manus-storage/logo-batalha_5edfdc01.webp"
              alt="Batalha Artigos Civis e Militares Logo"
              style={{ height: "50px", width: "auto", objectFit: "contain", marginBottom: "1rem" }}
            />

            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.85rem",
                color: "#606050",
                lineHeight: 1.7,
                maxWidth: "320px",
                marginBottom: "1.25rem",
              }}
            >
              Desde 1996 no mercado, loja especializada no fornecimento de artigos civis e militares, conta com equipe capacitada para confecção de uniformes, fardamentos, mochilas, cintos e bordados.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/5511986320811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-200"
                style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.25)", color: "#25D366" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#25D366"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.12)"; (e.currentTarget as HTMLElement).style.color = "#25D366"; }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="https://instagram.com/batalhaartigosmilitares"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-200"
                style={{ background: "rgba(131,58,180,0.12)", border: "1px solid rgba(131,58,180,0.25)", color: "#c77dff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #833ab4, #fd1d1d)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(131,58,180,0.12)"; (e.currentTarget as HTMLElement).style.color = "#c77dff"; }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="tel:+551136071415"
                className="w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-200"
                style={{ background: "rgba(93,101,50,0.12)", border: "1px solid rgba(93,101,50,0.25)", color: "#9EAB54" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#5D6532"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(93,101,50,0.12)"; (e.currentTarget as HTMLElement).style.color = "#9EAB54"; }}
                aria-label="Telefone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color: "#9EAB54",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Links Rápidos
            </div>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Coleções", href: "#colecoes" },
                { label: "Quem Somos", href: "#quem-somos" },
                { label: "Como Chegar", href: "#localizacao" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left transition-colors duration-150"
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontSize: "0.85rem",
                    color: "#606050",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#9EAB54"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#606050"; }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <div
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color: "#9EAB54",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Contato
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Phone size={13} style={{ color: "#9EAB54", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <a
                    href="tel:+551136071415"
                    style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "0.85rem", color: "#808070" }}
                  >
                    (11) 3607-1415
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle size={13} style={{ color: "#25D366", flexShrink: 0, marginTop: "3px" }} />
                <a
                  href="https://wa.me/5511986320811"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "0.85rem", color: "#808070" }}
                >
                  +55 (11) 98632-0811
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Instagram size={13} style={{ color: "#c77dff", flexShrink: 0, marginTop: "3px" }} />
                <a
                  href="https://instagram.com/batalhaartigosmilitares"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "0.85rem", color: "#808070" }}
                >
                  @batalhaartigosmilitares
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={13} style={{ color: "#9EAB54", flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "0.85rem", color: "#808070" }}>
                  Osasco — SP
                </span>
              </div>
            </div>

            {/* CNPJ */}
            <div
              className="mt-4 pt-4"
              style={{ borderTop: "1px solid rgba(93,101,50,0.15)" }}
            >
              <div
                style={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: "#404035",
                  textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                CNPJ
              </div>
              <div style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "0.8rem", color: "#505045" }}>
                XX.XXX.XXX/0001-XX
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(93,101,50,0.15)",
          padding: "1rem 0",
        }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-center md:justify-center gap-1 md:gap-2">
          <div
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "0.75rem",
              color: "#404035",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
            }}
          >
            <span>© 2026 Batalha Artigos Civis e Militares. Todos os direitos reservados.</span>
            <span style={{ color: "#303028" }}>|</span>
            <span>Website desenvolvido por</span>
            <a
              href="https://wa.me/5511975307066"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9EAB54",
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.2s ease",
                borderBottom: "1px solid transparent",
                paddingBottom: "1px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#B8C86F";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "#9EAB54";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#9EAB54";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
              }}
            >
              Willian Sergio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
