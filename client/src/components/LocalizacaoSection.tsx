/**
 * LocalizacaoSection — Batalha Artigos Civis e Militares
 * Google Maps embed + location info + route button
 */

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { MapView } from "@/components/Map";

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
                    Osasco — SP
                    <br />
                    <span style={{ color: "#808070", fontSize: "0.8rem" }}>
                      Região Metropolitana de São Paulo
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
                  Estamos localizados a aproximadamente{" "}
                  <strong style={{ color: "#9EAB54" }}>700 metros</strong> da{" "}
                  <strong style={{ color: "#D0D5B0" }}>Estação Comandante Sampaio</strong>.
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

          {/* Map */}
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
            <MapView
              initialCenter={{ lat: -23.5322, lng: -46.7919 }}
              initialZoom={15}
              onMapReady={(map) => {
                map.setOptions({
                  styles: [
                    { elementType: "geometry", stylers: [{ color: "#1a1a14" }] },
                    { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a14" }] },
                    { elementType: "labels.text.fill", stylers: [{ color: "#9EAB54" }] },
                    { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a20" }] },
                    { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#808070" }] },
                    { featureType: "water", elementType: "geometry", stylers: [{ color: "#0d0d0a" }] },
                    { featureType: "poi", elementType: "geometry", stylers: [{ color: "#1e1e16" }] },
                    { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2a2a20" }] },
                  ],
                });
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode(
                  { address: "Batalha Artigos Militares Osasco SP Brasil" },
                  (results, status) => {
                    if (status === "OK" && results && results[0]) {
                      const location = results[0].geometry.location;
                      map.setCenter(location);
                      map.setZoom(16);
                      new google.maps.Marker({
                        position: location,
                        map,
                        title: "Batalha Artigos Civis e Militares",
                        icon: {
                          path: google.maps.SymbolPath.CIRCLE,
                          scale: 10,
                          fillColor: "#9EAB54",
                          fillOpacity: 1,
                          strokeColor: "#5D6532",
                          strokeWeight: 2,
                        },
                      });
                    }
                  }
                );
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
