import { Link } from "react-router-dom";

const WHATSAPP =
  "https://wa.me/5518999999999?text=Olá%2C%20Renata!%20Quero%20saber%20mais%20sobre%20as%20soluções%20da%20RM%20Consultoria.";
const INSTAGRAM = "https://instagram.com/rmconsultoriaimobiliaria";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#080f1e",
        color: "rgba(255,255,255,0.75)",
        fontFamily: "Outfit, sans-serif",
      }}
    >
      {/* Main footer */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "56px 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px 48px",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 700,
              fontSize: 22,
              color: "#ffffff",
              marginBottom: 8,
            }}
          >
            RM Consultoria Imobiliária
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
            Orientação especializada em crédito imobiliário — consórcio,
            financiamento e construção. Sediada em Araçatuba (SP), atendendo
            clientes em todo o Brasil.
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              style={socialBtn}
              aria-label="Instagram da RM Consultoria"
            >
              <InstagramIcon />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={socialBtn}
              aria-label="WhatsApp da RM Consultoria"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Soluções */}
        <div>
          <div style={footerHeading}>Soluções</div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link to="/consorcio-imobiliario" style={footerLink}>
              Consórcio Imobiliário
            </Link>
            <Link to="/financiamento-imobiliario" style={footerLink}>
              Financiamento Imobiliário
            </Link>
            <Link to="/financiamento-construcao" style={footerLink}>
              Financiamento para Construção
            </Link>
          </nav>
        </div>

        {/* Contato */}
        <div>
          <div style={footerHeading}>Contato</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14,
            }}
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={footerLink}
            >
              WhatsApp
            </a>
            <span>Araçatuba — SP</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
              Atendimento em todo o Brasil
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "20px 24px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <span>
          © 2025 RM Consultoria Imobiliária — Renata Maia. Todos os direitos
          reservados.
        </span>
        <span>Correspondente bancária CAIXA | Crédito imobiliário</span>
      </div>
    </footer>
  );
}

const footerHeading: React.CSSProperties = {
  fontFamily: "Fraunces, serif",
  fontWeight: 600,
  fontSize: 15,
  color: "#ffffff",
  marginBottom: 16,
  letterSpacing: "0.3px",
};

const footerLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  fontSize: 14,
  transition: "color 0.2s",
};

const socialBtn: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 8,
  backgroundColor: "rgba(255,255,255,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.2s",
  textDecoration: "none",
};

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
