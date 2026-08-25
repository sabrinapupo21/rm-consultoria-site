import React, { useState } from "react";
import { Link } from "react-router-dom";

const WHATSAPP =
  "https://wa.me/5518999999999?text=Olá%2C%20Renata!%20Gostaria%20de%20saber%20mais%20sobre%20financiamento%20imobiliário.";

export default function FinanciamentoImobiliario() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: "#0d4583",
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 90% 40%, rgba(13,100,200,0.25) 0%, transparent 60%)",
          paddingTop: 68,
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "72px 24px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "Outfit, sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                marginBottom: 32,
              }}
            >
              ← Início
            </Link>

            <h1
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontWeight: 400,
                fontSize: "clamp(30px, 4.5vw, 52px)",
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                marginBottom: 20,
              }}
            >
              Financiamento Imobiliário com orientação de uma{" "}
              <em style={{ color: "#f5b832", fontStyle: "italic" }}>
                correspondente CAIXA
              </em>
            </h1>

            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 18,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              Renata Maia ajuda você a entender as linhas de crédito disponíveis
              e encontrar a condição mais adequada ao seu momento — com
              acompanhamento em todas as etapas até a aprovação.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={btnAmber}
              >
                Simular financiamento →
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={btnGhost}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE A RM FAZ ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px 80px",
              alignItems: "center",
            }}
            className="split-grid"
          >
            <div>
              <SectionLabel>Seu orientador de crédito</SectionLabel>
              <h2 style={sectionH2}>O que a RM faz por você</h2>
              <p
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: 17,
                  color: "#4b5563",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                Como correspondente bancária CAIXA, a RM realiza a análise do
                seu perfil de crédito, compara as linhas e condições
                disponíveis, e te acompanha em todas as etapas até a aprovação.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {[
                  "Análise do seu perfil de crédito",
                  "Comparação de linhas (ex: SAC, Price, Pró-Cotista)",
                  "Orientação sobre uso do FGTS",
                  "Acompanhamento da documentação",
                  "Suporte até a assinatura do contrato",
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        backgroundColor: "#0d4583",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      style={{
                        fontFamily: "Outfit, sans-serif",
                        fontSize: 16,
                        color: "#374151",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "#e8f0fa",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=520&fit=crop&auto=format"
                alt="Correspondente bancária CAIXA orientando cliente sobre financiamento imobiliário"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <style>{`
            .split-grid { grid-template-columns: 1fr 1fr !important; }
            @media (max-width: 900px) {
              .split-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── LINHAS DISPONÍVEIS ── */}
      <section style={{ backgroundColor: "#f8f7f4", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>Modalidades</SectionLabel>
            <h2 style={sectionH2}>Linhas de crédito disponíveis</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {[
              {
                icon: "🏦",
                title: "Financiamento CAIXA",
                desc: "A principal linha de financiamento habitacional do Brasil, com as melhores taxas do mercado para aquisição de imóveis residenciais.",
                tags: ["SBPE", "FGTS", "SFH"],
              },
              {
                icon: "⭐",
                title: "Pró-Cotista CAIXA",
                desc: "Condições especiais para quem é cotista do FGTS. Taxas diferenciadas e possibilidade de usar o saldo do FGTS como parte do pagamento.",
                tags: ["FGTS", "Cotista", "Taxas especiais"],
              },
              {
                icon: "📊",
                title: "SAC (Sistema de Amortização Constante)",
                desc: "Prestações decrescentes ao longo do tempo — parcelas maiores no início, menores no final. Mais comum no mercado imobiliário.",
                tags: ["Parcelas decrescentes"],
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(13,69,131,0.1)",
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 18 }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#111827",
                    marginBottom: 12,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: 15,
                    color: "#4b5563",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {card.desc}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "#e8f0fa",
                        color: "#0d4583",
                        fontFamily: "Outfit, sans-serif",
                        fontWeight: 500,
                        fontSize: 12,
                        padding: "4px 10px",
                        borderRadius: 100,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>Dúvidas sobre financiamento</SectionLabel>
            <h2 style={sectionH2}>Perguntas frequentes</h2>
          </div>

          <FaqList
            items={[
              {
                q: "Preciso de entrada para financiar?",
                a: "Geralmente sim, mas as condições variam por linha e perfil de crédito. A RM te mostra as opções disponíveis para o seu caso.",
              },
              {
                q: "Posso usar o FGTS no financiamento?",
                a: "Sim, dentro das regras vigentes do FGTS. O saldo pode ser usado como entrada, amortização ou quitação do saldo devedor.",
              },
              {
                q: "O que é o Pró-Cotista?",
                a: "É uma linha especial da CAIXA com condições diferenciadas para quem tem FGTS. Consulte a Renata para verificar se você se enquadra e conhecer as condições atuais.",
              },
              {
                q: "Quanto tempo leva a aprovação?",
                a: "Varia conforme documentação e instituição. A RM agiliza o processo orientando você desde o início, evitando erros comuns que atrasam a análise.",
              },
              {
                q: "Qual a diferença entre financiamento e consórcio?",
                a: "No financiamento, você recebe o crédito imediatamente após aprovação, mas paga juros. No consórcio, não há juros, mas você aguarda a contemplação. A RM te ajuda a decidir o melhor para o seu momento.",
              },
            ]}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "#0d4583",
          padding: "96px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 700,
              fontSize: "clamp(24px, 4vw, 38px)",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Pronto para dar o próximo passo?
          </h2>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.72)",
              marginBottom: 36,
            }}
          >
            Fale com a RM sobre financiamento imobiliário e receba orientação
            personalizada.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={btnAmber}
          >
            Falar com a RM sobre financiamento →
          </a>
          <div style={{ marginTop: 24 }}>
            <Link
              to="/"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
              }}
            >
              ← Voltar para início
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "Outfit, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#e8960a",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid rgba(13,69,131,0.1)" }}>
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "22px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              textAlign: "left",
            }}
          >
            <span
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 600,
                fontSize: 17,
                color: "#111827",
                lineHeight: 1.35,
              }}
            >
              {item.q}
            </span>
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: openIdx === i ? "#0d4583" : "#f1f0ec",
                color: openIdx === i ? "#ffffff" : "#0d4583",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: 18,
                fontWeight: 300,
                lineHeight: 1,
                transition: "background-color 0.2s",
              }}
            >
              {openIdx === i ? "−" : "+"}
            </span>
          </button>
          {openIdx === i && (
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 16,
                color: "#4b5563",
                lineHeight: 1.7,
                paddingBottom: 22,
              }}
            >
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

const sectionH2: React.CSSProperties = {
  fontFamily: "Fraunces, serif",
  fontWeight: 700,
  fontSize: "clamp(26px, 4vw, 40px)",
  color: "#111827",
  lineHeight: 1.15,
  letterSpacing: "-0.5px",
};

const btnAmber: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#e8960a",
  color: "#ffffff",
  fontFamily: "Outfit, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: 8,
};

const btnGhost: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "rgba(255,255,255,0.1)",
  color: "#ffffff",
  fontFamily: "Outfit, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.25)",
};
