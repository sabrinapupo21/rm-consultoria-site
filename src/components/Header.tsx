import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoRM from "../assets/logos/logo-rm-consultoria.svg";
import logoCaixaAqui from "../assets/logos/logo-caixa-aqui.svg";

const WHATSAPP =
  "https://wa.me/5518999999999?text=Olá%2C%20Renata!%20Quero%20saber%20mais%20sobre%20as%20soluções%20da%20RM%20Consultoria.";

const navLinks = [
  { label: "Início", to: "/" },
  { label: "Consórcio", to: "/consorcio-imobiliario" },
  { label: "Financiamento", to: "/financiamento-imobiliario" },
  { label: "Construção", to: "/financiamento-construcao" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#F3F5F7",
        transition: "box-shadow 0.3s ease",
        boxShadow: scrolled
          ? "0 2px 24px rgba(13,69,131,0.15)"
          : "0 1px 8px rgba(13,69,131,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <RMLogo />
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: location.pathname === link.to ? "#e8960a" : "#0d4583",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  textDecoration: "none",
                  padding: "8px 14px",
                  borderRadius: 6,
                  transition: "color 0.2s, background 0.2s",
                  backgroundColor:
                    location.pathname === link.to
                      ? "rgba(232,150,10,0.10)"
                      : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.to) {
                    (e.target as HTMLElement).style.color = "#0a3870";
                    (e.target as HTMLElement).style.backgroundColor =
                      "rgba(13,69,131,0.07)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.to) {
                    (e.target as HTMLElement).style.color = "#0d4583";
                    (e.target as HTMLElement).style.backgroundColor =
                      "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: 8,
                backgroundColor: "#0d4583",
                color: "#ffffff",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                padding: "9px 20px",
                borderRadius: 6,
                transition:
                  "background-color 0.2s, transform 0.15s, box-shadow 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#0a3870";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
                (e.target as HTMLElement).style.boxShadow =
                  "0 4px 12px rgba(13,69,131,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#0d4583";
                (e.target as HTMLElement).style.transform = "translateY(0)";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}
            >
              Falar com a RM
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "none",
            }}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "#F3F5F7",
            borderTop: "1px solid rgba(13,69,131,0.12)",
            padding: "16px 24px 24px",
            boxShadow: "0 8px 20px rgba(13,69,131,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: "block",
                color: location.pathname === link.to ? "#e8960a" : "#0d4583",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 500,
                fontSize: 17,
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(13,69,131,0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: 16,
              backgroundColor: "#0d4583",
              color: "#ffffff",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              padding: "12px 20px",
              borderRadius: 6,
              textAlign: "center",
            }}
          >
            Falar com a RM
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }

          .show-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

function RMLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 120,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logoRM}
          alt="RM Consultoria Imobiliária"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          width: 1,
          height: 28,
          margin: "0 12px",
          backgroundColor: "rgba(13, 69, 131, 0.2)",
        }}
      />

      <div
        style={{
          width: 120,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logoCaixaAqui}
          alt="Caixa Aqui"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {open ? (
        <>
          <line
            x1="5"
            y1="5"
            x2="19"
            y2="19"
            stroke="#0d4583"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="19"
            y1="5"
            x2="5"
            y2="19"
            stroke="#0d4583"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <line
            x1="4"
            y1="7"
            x2="20"
            y2="7"
            stroke="#0d4583"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            stroke="#0d4583"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="17"
            x2="20"
            y2="17"
            stroke="#0d4583"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
