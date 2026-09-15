import React, { useState } from "react";

const WHATSAPP_CONSORCIO = "https://wa.me/5518997252891";

export default function Consorcio() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: "#0F1B33",
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 90% 40%, rgba(13,100,200,0.25) 0%, transparent 60%)",
          paddingTop: 68,
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "72px 24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px 80px",
              alignItems: "center",
            }}
            className="resp-grid"
          >
            <div>
              <h1
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: "clamp(32px, 4.5vw, 54px)",
                  color: "#ffffff",
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                  marginBottom: 20,
                }}
              >
                Consórcio Imobiliário: a carta de crédito certa para o seu
                projeto,{" "}
                <em style={{ color: "#C9974B", fontStyle: "italic" }}>
                  sem juros
                </em>
              </h1>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 18,
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.7,
                  marginBottom: 40,
                }}
              >
                Assessoria completa e gratuita com Renata Maia — da simulação
                até a contemplação da sua carta de crédito. Atendimento humano,
                sem burocracia.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href={WHATSAPP_CONSORCIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={btnPrimary}
                >
                  {" "}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {/* Balão externo - só contorno, sem preenchimento */}
                    <path
                      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Telefone interno - preenchido */}
                    <path
                      d="M17.87 16.09c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.3-.29.46-.15.17-.31.37-.44.5-.14.14-.29.29-.13.58.16.29.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.25 1.38.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.36z"
                      fill="currentColor"
                    />
                  </svg>
                  Simular meu consórcio →
                </a>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 20,
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#C9974B",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  marginBottom: 28,
                }}
              >
                Para que serve o consórcio
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                {[
                  { icon: "🏠", text: "Comprar imóvel novo ou usado" },
                  { icon: "🌱", text: "Comprar terreno" },
                  { icon: "🧱", text: "Construir no próprio terreno" },
                  { icon: "🔨", text: "Reformar ou ampliar" },
                  {
                    icon: "📈",
                    text: "Planejar patrimônio com o tempo a seu favor",
                  },
                  { icon: "🏗️", text: "Aquisição de terreno em construção" },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{ display: "flex", alignItems: "center", gap: 14 }}
                  >
                    <span style={{ fontSize: 22, flexShrink: 0 }}>
                      {item.icon}
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 16,
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .resp-grid { grid-template-columns: 1fr 1fr !important; }
          @media (max-width: 900px) {
            .resp-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section style={{ backgroundColor: "#f8f7f4", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <SectionLabel>Passo a passo</SectionLabel>
            <h2 style={sectionH2}>Como funciona o consórcio</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                step: "01",
                title: "Simulação",
                desc: "Você conta seu objetivo (valor da carta, prazo desejado) e a RM monta uma simulação personalizada, gratuita e sem compromisso.",
              },
              {
                step: "02",
                title: "Escolha do grupo e da carta",
                desc: "Definimos juntos o valor da carta, o prazo de pagamento e as condições mais adequadas ao seu perfil e objetivo.",
              },
              {
                step: "03",
                title: "Contribuição mensal",
                desc: "Parcelas fixas, sem juros. Você contribui mensalmente com o grupo, que é gerido pela administradora do consórcio.",
              },
              {
                step: "04",
                title: "Contemplação",
                desc: "Você pode ser contemplado por sorteio mensal ou por lance. A RM te ajuda a montar a melhor estratégia.",
              },
              {
                step: "05",
                title: "Uso da carta",
                desc: "Após contemplado, você usa a carta para compra, construção ou reforma do imóvel de sua escolha — com total liberdade.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  display: "flex",
                  gap: 32,
                  alignItems: "flex-start",
                  padding: "32px 0",
                  borderBottom: i < 4 ? "1px solid rgba(15,27,51,0.1)" : "none",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: "#0F1B33",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#ffffff",
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#111827",
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 16,
                      color: "#4b5563",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUE A RENATA ── */}
      <section
        style={{
          backgroundColor: "#0F1B33",
          padding: "96px 24px",
          backgroundImage:
            "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(201,151,75,0.08) 0%, transparent 55%)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <SectionLabel light>Diferencial</SectionLabel>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 4vw, 40px)",
                color: "#ffffff",
                lineHeight: 1.15,
              }}
            >
              Por que consorciar com a Renata?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 28,
            }}
          >
            {[
              {
                icon: "🤝",
                title: "Atendimento humano do início ao fim",
                desc: "Sem robôs, sem formulários. Você fala com a Renata e sua equipe.",
              },
              {
                icon: "💰",
                title: "Simulação gratuita",
                desc: "Sem compromisso e sem custo. Conheça as opções antes de decidir.",
              },
              {
                icon: "🎯",
                title: "Estratégia de lance",
                desc: "A RM monta a estratégia de lance certa para acelerar sua contemplação.",
              },
              {
                icon: "📋",
                title: "Suporte pós-contemplação",
                desc: "O acompanhamento continua mesmo depois que você recebe a carta.",
              },
              {
                icon: "🏦",
                title: "Correspondente CAIXA",
                desc: "Atuação reconhecida e credenciada no mercado de crédito imobiliário.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: "28px 28px",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#ffffff",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 15,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "#f8f7f4", padding: "96px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>Dúvidas sobre consórcio</SectionLabel>
            <h2 style={sectionH2}>Perguntas frequentes</h2>
          </div>

          <FaqList
            items={[
              {
                q: "O consórcio tem juros?",
                a: "Não. Existe apenas a taxa de administração, fixa e diluída nas parcelas. Essa é uma das principais vantagens em relação ao financiamento.",
              },
              {
                q: "Como posso ser contemplado?",
                a: "Por sorteio mensal ou por lance (livre, fixo ou embutido). A RM te ajuda a montar a melhor estratégia conforme seu perfil e prazo.",
              },
              {
                q: "Posso usar o FGTS no consórcio?",
                a: "Sim, para dar lance, amortizar parcelas ou quitar o saldo devedor, dentro das regras do FGTS.",
              },
              {
                q: "E se eu não for sorteado logo?",
                a: "O consórcio é uma ferramenta de planejamento. Quem tem urgência pode usar lance para antecipar a contemplação. A RM te orienta sobre a melhor estratégia.",
              },
              {
                q: "A parcela muda com o tempo?",
                a: "Sim. As parcelas são reajustadas periodicamente (geralmente pelo INCC), acompanhando a valorização do crédito imobiliário.",
              },
              {
                q: "Posso escolher qualquer imóvel?",
                a: "Sim — a carta de crédito é livre dentro do valor contemplado. Você usa onde e como quiser: imóvel pronto, terreno, construção ou reforma.",
              },
              {
                q: "Posso usar o consórcio para construir, comprar terreno ou adquirir terreno em construção?",
                a: "Sim. A carta pode ser usada para compra de terreno, construção, reforma, ou aquisição de terreno em processo de obra — dentro das regras do grupo.",
              },
              {
                q: "Quanto tempo demora até a contemplação?",
                a: "Varia por grupo e estratégia de lance. A RM te ajuda a montar o plano certo para o seu prazo e objetivo.",
              },
            ]}
          />
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        style={{
          backgroundColor: "#fff8ee",
          borderTop: "1px solid rgba(201,151,75,0.2)",
          padding: "96px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 4vw, 40px)",
              color: "#0F1B33",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Pronto para planejar seu imóvel sem juros?
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 17,
              color: "#6b7280",
              marginBottom: 36,
            }}
          >
            Fale com a Renata agora mesmo e receba uma simulação gratuita e
            personalizada.
          </p>
          <a
            href={WHATSAPP_CONSORCIO}
            target="_blank"
            rel="noopener noreferrer"
            style={btnPrimary}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              {/* Balão externo - só contorno, sem preenchimento */}
              <path
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Telefone interno - preenchido */}
              <path
                d="M17.87 16.09c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.3-.29.46-.15.17-.31.37-.44.5-.14.14-.29.29-.13.58.16.29.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.25 1.38.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.36z"
                fill="currentColor"
              />
            </svg>
            Simular no WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}

function SectionLabel({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: light ? "rgba(245,184,50,0.8)" : "#C9974B",
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
        <div key={i} style={{ borderBottom: "1px solid rgba(15,27,51,0.1)" }}>
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
                backgroundColor: openIdx === i ? "#0F1B33" : "#f1f0ec",
                color: openIdx === i ? "#ffffff" : "#0F1B33",
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
                fontFamily: "Inter, sans-serif",
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
const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  backgroundColor: "#25D366", // verde oficial do WhatsApp
  color: "#FFFFFF",
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: 16,
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  transition: "background-color 0.2s ease, transform 0.1s ease",
  whiteSpace: "nowrap",
  maxWidth: "100%",
};
