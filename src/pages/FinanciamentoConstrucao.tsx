import React, { useState } from "react";

const WHATSAPP =
  "https://wa.me/5518999999999?text=Olá%2C%20Renata!%20Quero%20saber%20mais%20sobre%20financiamento%20para%20construção.";

export default function FinanciamentoConstrucao() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: "#0F1B33",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px 80px",
              alignItems: "center",
            }}
            className="resp-grid-c"
          >
            <div>
              <h1
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: "clamp(30px, 3.7vw, 52px)",
                  color: "#ffffff",
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                  marginBottom: 20,
                }}
              >
                Terreno próprio ou aquisição de terreno:{" "}
                <em style={{ color: "#f5b832", fontStyle: "italic" }}>
                  conte com financiamento para tirar sua construção do papel.
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
                Crédito para quem quer construir no próprio terreno — ou ainda
                precisa adquirir o terreno — com orientação especializada da RM.
                Da planta à entrega das chaves.
              </p>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={btnAmber}
              >
                Falar sobre minha construção →
              </a>
            </div>

            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "#0a3870",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=520&fit=crop&auto=format"
                alt="Construção residencial — financiamento para quem tem terreno ou quer adquirir"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.85,
                }}
              />
            </div>
          </div>
        </div>

        <style>{`
          .resp-grid-c { grid-template-columns: 1fr 1fr !important; }
          @media (max-width: 900px) {
            .resp-grid-c { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── PARA QUEM É ── */}
      <section style={{ backgroundColor: "#f8f7f4", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>Quem se beneficia</SectionLabel>
            <h2 style={sectionH2}>Esta solução é para você que...</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 28,
            }}
          >
            {[
              {
                icon: "🏗️",
                title: "Já tem o terreno quitado",
                desc: "Tem o terreno próprio e quer financiar apenas a construção da casa dos sonhos.",
              },
              {
                icon: "🌱",
                title: "Quer comprar o terreno e construir",
                desc: "Ainda não tem o terreno mas quer adquiri-lo e já planejar a construção em etapas.",
              },
              {
                icon: "🏘️",
                title: "Tem terreno em processo de construção",
                desc: "Já iniciou a construção mas precisa de crédito para concluir a obra — inclusive aquisições em condomínios na planta.",
              },
              {
                icon: "📐",
                title: "Quer construir no imóvel da família",
                desc: "Tem um terreno familiar e quer construir sua própria residência com financiamento.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(13,69,131,0.1)",
                  borderRadius: 16,
                  padding: 32,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 32px rgba(13,69,131,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 18 }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 700,
                    fontSize: 19,
                    color: "#111827",
                    marginBottom: 10,
                    lineHeight: 1.3,
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
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <SectionLabel>Como funciona</SectionLabel>
            <h2 style={sectionH2}>O crédito para construção na prática</h2>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 17,
                color: "#6b7280",
                maxWidth: 560,
                margin: "16px auto 0",
                lineHeight: 1.7,
              }}
            >
              O financiamento para construção tem características próprias — a
              RM orienta você em cada etapa com clareza.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                step: "01",
                title: "Diagnóstico e documentação",
                desc: "A RM analisa sua situação: você já tem terreno, precisa comprar, ou já tem construção em andamento? Mapeamos os documentos necessários.",
              },
              {
                step: "02",
                title: "Avaliação e projeto",
                desc: "Para contratar o crédito, é necessário ter projeto arquitetônico e orçamento da obra aprovado. A RM orienta sobre como preparar essa documentação.",
              },
              {
                step: "03",
                title: "Contratação e liberação por etapas",
                desc: "O crédito é liberado em parcelas conforme o andamento da obra. A cada etapa concluída e vistoriada, uma nova parcela é liberada.",
              },
              {
                step: "04",
                title: "Acompanhamento até o fim",
                desc: "A RM fica com você do início ao fim — da aprovação do crédito até a conclusão da obra e regularização do imóvel.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  display: "flex",
                  gap: 32,
                  alignItems: "flex-start",
                  padding: "32px 0",
                  borderBottom:
                    i < 3 ? "1px solid rgba(13,69,131,0.1)" : "none",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    backgroundColor: "#C9974B",
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
                      fontSize: 17,
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
                      fontFamily: "Outfit, sans-serif",
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

      {/* ── AVISO ── */}
      <section
        style={{
          backgroundColor: "#fff8ee",
          borderTop: "1px solid rgba(232,150,10,0.2)",
          borderBottom: "1px solid rgba(232,150,10,0.2)",
          padding: "56px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            gap: 24,
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: 32, flexShrink: 0 }}>📌</span>
          <div>
            <h3
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 700,
                fontSize: 19,
                color: "#0F1B33",
                marginBottom: 10,
              }}
            >
              As condições variam por linha e situação
            </h3>
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 16,
                color: "#4b5563",
                lineHeight: 1.7,
              }}
            >
              As regras de financiamento para construção — como necessidade de
              terreno quitado, percentual financiado e etapas de liberação —
              variam conforme a linha contratada e seu perfil de crédito. A RM
              analisa seu caso e apresenta as opções reais disponíveis para
              você, sem generalizar.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: "#f8f7f4", padding: "96px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>Dúvidas sobre construção</SectionLabel>
            <h2 style={sectionH2}>Perguntas frequentes</h2>
          </div>

          <FaqList
            items={[
              {
                q: "Preciso ter o terreno quitado?",
                a: "Não! Caso já tenha começado a pagar o terreno, é possível contratar o financiamento na modalidade terreno + construção, utilizando parte do crédito para quitar o terreno, e o restante para a construção.",
              },
              {
                q: "O crédito é liberado de uma vez?",
                a: "Não. O crédito para construção é liberado em parcelas conforme o andamento e vistoria das etapas da obra.",
              },
              {
                q: "Posso financiar a compra do terreno e a construção juntos?",
                a: "Sim, é possível incluir tanto a aquisição do terreno quanto a construção em um único financiamento. Consulte a RM para saber as condições atuais.",
              },
              {
                q: "Posso usar o FGTS nessa modalidade?",
                a: "Depende do seu enquadramento e das regras vigentes do FGTS. A RM orienta sobre as possibilidades para o seu perfil.",
              },
              {
                q: "Minha construção já está em andamento. Consigo crédito?",
                a: "Em alguns casos sim, mas há restrições — a RM verifica a viabilidade e as condições disponíveis para obras em andamento.",
              },
              {
                q: "O consórcio também serve para construção?",
                a: "Sim! A carta de crédito do consórcio imobiliário pode ser usada para construção, inclusive aquisição de terreno em construção. Pode ser uma boa alternativa ao financiamento tradicional.",
              },
            ]}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "#0F1B33",
          padding: "96px 24px",
          textAlign: "center",
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(232,150,10,0.12) 0%, transparent 55%)",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ fontSize: 40, marginBottom: 20 }}>🏗️</div>
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
            Vamos planejar sua obra juntos?
          </h2>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.72)",
              marginBottom: 36,
            }}
          >
            Conte pra RM o seu projeto de construção e receba orientação
            personalizada, sem compromisso.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={btnAmberLarge}
          >
            Conversar sobre financiamento de construção →
          </a>
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
        color: "#C9974B",
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
  backgroundColor: "#C9974B",
  color: "#0F1B33",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: 8,
};

const btnAmberLarge: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#C9974B",
  color: "#0F1B33",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 17,
  textDecoration: "none",
  padding: "16px 36px",
  borderRadius: 8,
};
