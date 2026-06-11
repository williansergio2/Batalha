/**
 * Header Component — Batalha Artigos Civis e Militares
 * Design: Tático Moderno — fixed header, mega menu, mobile drawer
 * Colors: #1E1E1E bg, #5D6532 primary, #9EAB54 accent
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Flame,
  Star,
  Users,
  BadgeCheck,
  Sword,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

const categories = [
  {
    id: "civil",
    label: "Uso Civil",
    icon: Users,
    description: "Equipamentos táticos para uso civil e outdoor",
    href: "#colecoes",
  },
  {
    id: "bombeiros",
    label: "Bombeiros",
    icon: Flame,
    description: "Uniformes e equipamentos para Corpo de Bombeiros",
    href: "#colecoes",
  },
  {
    id: "escolta",
    label: "Escolta e Segurança",
    icon: Shield,
    description: "Artigos para segurança privada e escolta",
    href: "#colecoes",
  },
  {
    id: "exercito",
    label: "Exército",
    icon: Sword,
    description: "Fardamentos e acessórios para Exército Brasileiro",
    href: "#colecoes",
  },
  {
    id: "gcm",
    label: "GCM",
    icon: BadgeCheck,
    description: "Uniformes e equipamentos para Guarda Civil Municipal",
    href: "#colecoes",
  },
  {
    id: "pm",
    label: "Polícia Militar",
    icon: Star,
    description: "Artigos e uniformes para Polícia Militar",
    href: "#colecoes",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileColOpen, setMobileColOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setMegaOpen(false);
    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Main Header */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(20, 20, 16, 0.97)"
            : "rgba(20, 20, 16, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(93, 101, 50, 0.4)"
            : "1px solid rgba(93, 101, 50, 0.15)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
              className="flex items-center gap-3 group"
            >
              <img
                src="/manus-storage/logo-batalha_5edfdc01.webp"
                alt="Batalha Artigos Civis e Militares Logo"
                style={{ height: "40px", width: "auto", objectFit: "contain" }}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" ref={megaRef}>
              {/* Coleções with Mega Menu */}
              <div className="relative">
                <button
                  onClick={() => setMegaOpen(!megaOpen)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: megaOpen ? "#9EAB54" : "#D0D5B0",
                    background: megaOpen ? "rgba(93,101,50,0.15)" : "transparent",
                    fontSize: "0.8rem",
                  }}
                >
                  Coleções
                  <motion.div
                    animate={{ rotate: megaOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] rounded-sm overflow-hidden"
                      style={{
                        background: "rgba(20, 20, 16, 0.98)",
                        border: "1px solid rgba(93, 101, 50, 0.4)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                        backdropFilter: "blur(16px)",
                      }}
                    >
                      <div className="p-2">
                        <div
                          className="px-3 py-2 mb-1 text-xs uppercase tracking-widest"
                          style={{ color: "#9EAB54", fontFamily: "Oswald, sans-serif", letterSpacing: "0.2em" }}
                        >
                          Nossas Coleções
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                              <a
                                key={cat.id}
                                href={cat.href}
                                onClick={(e) => { e.preventDefault(); scrollTo(cat.href); }}
                                className="flex items-start gap-3 p-3 rounded-sm group transition-all duration-150"
                                style={{ color: "#D0D5B0" }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLElement).style.background = "rgba(93,101,50,0.15)";
                                  (e.currentTarget as HTMLElement).style.color = "#F5F5F5";
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.background = "transparent";
                                  (e.currentTarget as HTMLElement).style.color = "#D0D5B0";
                                }}
                              >
                                <div
                                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm mt-0.5"
                                  style={{ background: "rgba(93,101,50,0.2)", color: "#9EAB54" }}
                                >
                                  <Icon size={16} />
                                </div>
                                <div>
                                  <div
                                    style={{
                                      fontFamily: "Oswald, sans-serif",
                                      fontWeight: 500,
                                      fontSize: "0.85rem",
                                      letterSpacing: "0.05em",
                                      textTransform: "uppercase",
                                    }}
                                  >
                                    {cat.label}
                                  </div>
                                  <div style={{ fontSize: "0.7rem", color: "#808070", marginTop: "2px" }}>
                                    {cat.description}
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                      <div
                        className="px-4 py-3 flex items-center justify-between"
                        style={{ borderTop: "1px solid rgba(93,101,50,0.2)", background: "rgba(93,101,50,0.05)" }}
                      >
                        <span style={{ fontSize: "0.7rem", color: "#808070" }}>
                          Atendimento via WhatsApp para pedidos especiais
                        </span>
                        <a
                          href="https://wa.me/5511986320811"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs transition-all"
                          style={{
                            background: "#25D366",
                            color: "#fff",
                            fontFamily: "Oswald, sans-serif",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          <MessageCircle size={12} />
                          WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { label: "Como Chegar", href: "#localizacao", icon: MapPin },
                { label: "Contato", href: "#contato", icon: Phone },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-sm text-sm transition-all duration-200"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#D0D5B0",
                    fontSize: "0.8rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#9EAB54";
                    (e.currentTarget as HTMLElement).style.background = "rgba(93,101,50,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#D0D5B0";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {item.label}
                </a>
              ))}

              {/* CTA WhatsApp */}
              <a
                href="https://wa.me/5511986320811"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-medium transition-all duration-200"
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
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#25D366";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-sm transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "#9EAB54" }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden overflow-hidden"
              style={{
                background: "rgba(14, 14, 12, 0.98)",
                borderTop: "1px solid rgba(93,101,50,0.3)",
              }}
            >
              <div className="container py-4 flex flex-col gap-1">
                {/* Coleções accordion */}
                <button
                  onClick={() => setMobileColOpen(!mobileColOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-sm text-left transition-colors"
                  style={{
                    fontFamily: "Oswald, sans-serif",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#D0D5B0",
                    fontSize: "0.9rem",
                    background: mobileColOpen ? "rgba(93,101,50,0.1)" : "transparent",
                  }}
                >
                  Coleções
                  <motion.div animate={{ rotate: mobileColOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {mobileColOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <a
                            key={cat.id}
                            href={cat.href}
                            onClick={(e) => { e.preventDefault(); scrollTo(cat.href); }}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-sm transition-colors"
                            style={{ color: "#A0A090", fontSize: "0.85rem" }}
                          >
                            <Icon size={14} style={{ color: "#9EAB54" }} />
                            <span style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                              {cat.label}
                            </span>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>

                {[
                  { label: "Como Chegar", href: "#localizacao" },
                  { label: "Contato", href: "#contato" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    className="px-4 py-3 rounded-sm transition-colors"
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#D0D5B0",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-2 flex gap-2">
                  <a
                    href="https://wa.me/5511986320811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-medium"
                    style={{
                      background: "#25D366",
                      color: "#fff",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+551136071415"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-medium"
                    style={{
                      background: "rgba(93,101,50,0.2)",
                      color: "#9EAB54",
                      border: "1px solid rgba(93,101,50,0.4)",
                      fontFamily: "Oswald, sans-serif",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    <Phone size={16} />
                    Ligar
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
