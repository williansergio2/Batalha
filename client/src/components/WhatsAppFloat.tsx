/**
 * WhatsAppFloat — Batalha Artigos Civis e Militares
 * Floating WhatsApp button with pulse animation
 * Hides when user is at the very top of the page
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="https://wa.me/5511986320811?text=Olá! Gostaria de mais informações sobre os produtos da Batalha Artigos Militares."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-200"
            style={{
              background: "#25D366",
              boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle size={26} style={{ color: "#fff" }} />
          </a>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-sm pointer-events-none"
            style={{
              background: "rgba(14,14,10,0.95)",
              border: "1px solid rgba(37,211,102,0.3)",
              fontFamily: "Oswald, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#25D366",
            }}
          >
            Fale Conosco
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
