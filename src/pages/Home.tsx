import { Link } from "react-router-dom";

const WHATSAPP =
  "https://wa.me/5518999999999?text=Olá%2C%20Renata!%20Quero%20saber%20mais%20sobre%20as%20soluções%20da%20RM%20Consultoria.";

export default function Home() {
  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          backgroundColor: "#0F1B33",
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,151,75,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 10% 80%, rgba(255,255,255,0.04) 0%, transparent 50%)
          `,
          display: "flex",
          alignItems: "center",
          paddingTop: 68,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "64px 24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px 48px",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left: copy */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "rgba(201,151,75,0.15)",
                  border: "1px solid rgba(201,151,75,0.35)",
                  borderRadius: 100,
                  padding: "5px 14px 5px 10px",
                  marginBottom: 28,
                }}
              >
                <span style={{ fontSize: 16 }}>🏆</span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: 13,
                    color: "#C9974B",
                    letterSpacing: "0.3px",
                  }}
                >
                  Correspondente Bancária CAIXA · Araçatuba/SP
                </span>
              </div>

              <h1
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: "clamp(36px, 5vw, 60px)",
                  color: "#ffffff",
                  lineHeight: 1.1,
                  letterSpacing: "-1.5px",
                  marginBottom: 24,
                }}
              >
                Soluções em crédito para realizar seus{" "}
                <em style={{ color: "#C9974B", fontStyle: "italic" }}>
                  projetos imobiliários
                </em>
              </h1>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 18,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.7,
                  marginBottom: 40,
                  maxWidth: 480,
                }}
              >
                Consórcio, financiamento imobiliário e crédito para construção
                com orientação especializada da RM Consultoria Imobiliária.
                Atendimento em todo o Brasil.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={btnPrimary}
                >
                  Falar com a RM →
                </a>
              </div>
            </div>

            {/* Right: hero image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  aspectRatio: "4/5",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=700&h=880&fit=crop&auto=format"
                  alt="Consultora de crédito imobiliário em reunião de atendimento"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(15,27,51,0.5) 100%)",
                  }}
                />
              </div>
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 28,
                  left: -24,
                  backgroundColor: "#ffffff",
                  borderRadius: 14,
                  padding: "14px 20px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    backgroundColor: "#0F1B33",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                  }}
                >
                  🏠
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#0F1B33",
                      lineHeight: 1,
                    }}
                  >
                    +500
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      color: "#6b7280",
                      marginTop: 3,
                    }}
                  >
                    clientes orientados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ── SOLUÇÕES ── */}
      <section
        id="solucoes"
        style={{ backgroundColor: "#f8f7f4", padding: "96px 24px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Como a RM pode ajudar você?</SectionLabel>
          <SectionTitle>
            Cada projeto tem
            <br />a solução certa
          </SectionTitle>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
              marginTop: 56,
            }}
          >
            <SolutionCard
              emoji="🏠"
              title="Consórcio Imobiliário"
              description="Planeje a aquisição do seu imóvel com uma carta de crédito adequada ao seu objetivo. Comprar imóvel, terreno, construir, reformar ou planejar patrimônio — sem juros."
              link="/consorcio-imobiliario"
              linkLabel="Conheça o consórcio"
            />
            <SolutionCard
              emoji="🏡"
              title="Financiamento Imobiliário"
              description="Encontre uma solução de financiamento adequada ao seu projeto, com orientação de uma correspondente bancária CAIXA experiente e comprometida."
              link="/financiamento-imobiliario"
              linkLabel="Conheça o financiamento"
            />
            <SolutionCard
              emoji="🧱"
              title="Financiamento para Construção"
              description="Já tem um terreno e quer construir? A RM orienta você sobre as possibilidades de financiamento para sua obra, da aquisição de terreno à construção completa."
              link="/financiamento-construcao"
              linkLabel="Conheça o financiamento para construção"
            />
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={btnNavy}
            >
              Falar com a RM →
            </a>
          </div>
        </div>
      </section>

      {/* ── CONSÓRCIO DESTAQUE ── */}
      <section
        style={{
          backgroundColor: "#0F1B33",
          padding: "96px 24px",
          backgroundImage:
            "radial-gradient(ellipse 70% 90% at 100% 50%, rgba(201,151,75,0.08) 0%, transparent 60%)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px 80px",
            alignItems: "center",
          }}
          className="split-grid"
        >
          <div>
            <SectionLabel light>Solução em destaque</SectionLabel>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#ffffff",
                lineHeight: 1.15,
                letterSpacing: "-0.8px",
                marginBottom: 20,
              }}
            >
              Consórcio imobiliário: planeje seu próximo projeto
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 17,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Sem juros — só taxa de administração, diluída nas parcelas. Você
              define o valor da carta, o prazo e a estratégia de contemplação,
              com acompanhamento da RM em cada etapa.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 40,
              }}
            >
              {[
                "Comprar imóvel novo ou usado",
                "Comprar terreno e construir",
                "Reformar ou ampliar",
                "Planejar patrimônio com o tempo a seu favor",
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
                      backgroundColor: "#C9974B",
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
                      fontFamily: "Inter, sans-serif",
                      fontSize: 16,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link to="/consorcio-imobiliario" style={btnAmber}>
              Simular consórcio →
            </Link>
          </div>

          {/* Stats card */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 20,
              padding: 40,
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: "#C9974B",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: 32,
              }}
            >
              Por que consórcio?
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                {
                  label: "Juros no consórcio",
                  value: "Zero",
                  sub: "Só taxa de administração",
                },
                {
                  label: "Uso do FGTS",
                  value: "Sim",
                  sub: "Lance, amortização ou quitação",
                },
                {
                  label: "Valor da carta",
                  value: "Flexível",
                  sub: "Você escolhe o quanto precisa",
                },
                {
                  label: "Contemplação",
                  value: "Por sorteio ou lance",
                  sub: "Estratégia personalizada com a RM",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    paddingBottom: 20,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        marginBottom: 4,
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {stat.sub}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "#C9974B",
                      textAlign: "right",
                      maxWidth: 140,
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .split-grid { grid-template-columns: 1fr 1fr !important; }
          @media (max-width: 900px) {
            .split-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── FINANCIAMENTO ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "48px 80px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
            <SectionLabel>Precisa do imóvel agora?</SectionLabel>
            <h2 style={sectionH2}>Conheça as opções de financiamento</h2>
            <p style={bodyText}>
              Como correspondente bancária CAIXA, a RM ajuda você a entender as
              linhas disponíveis — incluindo condições especiais como o
              Pró-Cotista — e encontrar a que melhor se encaixa no seu momento.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginTop: 32,
              }}
            >
              <Link to="/financiamento-imobiliario" style={btnNavy}>
                Conhecer financiamento →
              </Link>
            </div>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: "16/9",
                backgroundColor: "#e8f0fa",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=700&h=400&fit=crop&auto=format"
                alt="Casal assinando documentos de financiamento imobiliário"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSTRUÇÃO ── */}
      <section style={{ backgroundColor: "#f8f7f4", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "48px 80px",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
            <SectionLabel>Já tem o terreno?</SectionLabel>
            <h2 style={sectionH2}>
              A RM também ajuda você a planejar sua construção
            </h2>
            <p style={bodyText}>
              Crédito para quem quer construir no próprio terreno, com
              orientação especializada da RM. Da aquisição do terreno até a obra
              completa — incluindo a compra do terreno para quem ainda não tem.
            </p>
            <div style={{ marginTop: 32 }}>
              <Link to="/financiamento-construcao" style={btnNavy}>
                Conhecer financiamento para construção →
              </Link>
            </div>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: "16/9",
                backgroundColor: "#e8f0fa",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=400&fit=crop&auto=format"
                alt="Construção residencial — financiamento para construção"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNÓSTICO ── */}
      <section
        style={{
          backgroundColor: "#fff8ee",
          border: "none",
          padding: "80px 24px",
          borderTop: "1px solid rgba(201,151,75,0.2)",
          borderBottom: "1px solid rgba(201,151,75,0.2)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 20 }}>🤔</div>
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 38px)",
              color: "#0F1B33",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              marginBottom: 20,
            }}
          >
            Não sabe se consórcio ou financiamento é a melhor opção para você?
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              color: "#4b5563",
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Cada projeto imobiliário tem uma necessidade diferente. Conte pra RM
            o que você pretende realizar e receba orientação sobre as
            possibilidades — sem compromisso.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={btnNavy}
          >
            Quero conversar com a RM →
          </a>
        </div>
      </section>

      {/* ── COMO A RM TRABALHA ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <SectionLabel>Processo</SectionLabel>
            <SectionTitle>Como a RM trabalha</SectionTitle>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 32,
              position: "relative",
            }}
          >
            {[
              {
                step: "01",
                title: "Entendemos seu projeto",
                desc: "Conhecemos seus objetivos, prazo e situação financeira.",
              },
              {
                step: "02",
                title: "Analisamos suas possibilidades",
                desc: "Mapeamos as opções disponíveis para o seu perfil.",
              },
              {
                step: "03",
                title: "Apresentamos as melhores alternativas",
                desc: "Simulações claras, sem jargão, para você comparar.",
              },
              {
                step: "04",
                title: "Você decide, com orientação",
                desc: "A escolha é sua, com a RM ao seu lado em cada etapa.",
              },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "#e8f0fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    border: "2px solid rgba(15,27,51,0.15)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#0F1B33",
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#111827",
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
                    color: "#6b7280",
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

      {/* ── SOBRE RENATA ── */}
      <section
        id="sobre"
        style={{
          backgroundColor: "#f8f7f4",
          padding: "96px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "48px 80px",
            alignItems: "center",
          }}
          className="split-grid"
        >
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              backgroundColor: "#d1e0f5",
              aspectRatio: "3/4",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=660&fit=crop&auto=format"
              alt="Renata Maia, consultora de crédito imobiliário em Araçatuba"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div>
            <SectionLabel>Sobre a RM</SectionLabel>
            <h2 style={sectionH2}>
              Experiência e conhecimento para orientar seu projeto imobiliário
            </h2>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              À frente da RM Consultoria Imobiliária está{" "}
              <strong>Renata Maia</strong>, profissional com ampla experiência
              em crédito imobiliário, atuando como correspondente bancária CAIXA
              em Araçatuba/SP.
            </p>
            <p style={{ ...bodyText, marginBottom: 36 }}>
              Ao longo de sua trajetória, Renata construiu sua atuação ajudando
              clientes a encontrar caminhos para aquisição, construção e
              planejamento de seus projetos imobiliários — hoje atendendo
              clientes em todo o Brasil.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                marginBottom: 40,
              }}
            >
              {[
                { num: "+500", label: "Clientes orientados" },
                { num: "100%", label: "Atendimento humano" },
                { num: "Brasil", label: "Alcance de atendimento" },
                { num: "CAIXA", label: "Correspondente bancária" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(15,27,51,0.1)",
                    borderRadius: 12,
                    padding: "16px 20px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 700,
                      fontSize: 24,
                      color: "#0F1B33",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      color: "#6b7280",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={btnNavy}
            >
              Falar com a Renata →
            </a>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section
        id="depoimentos"
        style={{ backgroundColor: "#0F1B33", padding: "96px 24px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <SectionLabel light>Depoimentos</SectionLabel>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 4vw, 40px)",
                color: "#ffffff",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
              }}
            >
              O que dizem nossos clientes
            </h2>
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
                name: "Ana C.",
                city: "Araçatuba, SP",
                text: "A Renata foi incrível do começo ao fim. Me explicou tudo sobre o consórcio com paciência, me ajudou na estratégia de lance e finalmente realizei o sonho da casa própria.",
              },
              {
                name: "Marcos T.",
                city: "São Paulo, SP",
                text: "Não sabia nada sobre financiamento e ela me orientou em cada detalhe. Consegui aprovação rápida e com condições que eu não esperava. Super recomendo!",
              },
              {
                name: "Família Rodrigues",
                city: "Birigui, SP",
                text: "Queríamos construir no terreno do meu pai. A RM nos mostrou um caminho que nem sabíamos que existia. Obra começando em breve!",
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <div style={{ display: "flex", gap: 4, marginBottom: 18 }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: "#C9974B", fontSize: 16 }}>
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16,
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.7,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 15,
                      color: "#ffffff",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {t.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        id="duvidas"
        style={{ backgroundColor: "#ffffff", padding: "96px 24px" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>Dúvidas</SectionLabel>
            <SectionTitle>Perguntas frequentes</SectionTitle>
          </div>
          <FaqList
            items={[
              {
                q: "O que é a RM Consultoria Imobiliária?",
                a: "Uma consultoria especializada em crédito imobiliário, que orienta clientes em consórcio, financiamento e crédito para construção — sem vínculo com a venda de imóveis específicos.",
              },
              {
                q: "A RM vende imóveis?",
                a: "Não. A RM orienta sobre a melhor forma de crédito para você comprar, construir ou reformar o imóvel que desejar — a escolha do imóvel é sua.",
              },
              {
                q: "Consórcio ou financiamento: qual é melhor?",
                a: "Depende do seu momento. Consórcio é ideal para quem pode planejar e não tem pressa (sem juros). Financiamento é melhor para quem precisa do imóvel logo. A RM ajuda você a decidir.",
              },
              {
                q: "A RM atende em qual região?",
                a: "Sediada em Araçatuba (SP), a RM atende clientes de todo o Brasil.",
              },
              {
                q: "O atendimento tem algum custo?",
                a: "A consultoria inicial é gratuita e sem compromisso. Entre em contato e converse com a Renata.",
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
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 40, marginBottom: 20 }}>🏡</div>
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 4vw, 42px)",
              color: "#0F1B33",
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              marginBottom: 16,
            }}
          >
            Qual é o seu próximo projeto?
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 17,
              color: "#4b5563",
              marginBottom: 12,
            }}
          >
            Comprar · Construir · Reformar · Investir · Planejar
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              color: "#6b7280",
              marginBottom: 36,
            }}
          >
            Fale com a RM e dê o primeiro passo — sem burocracia, sem enrolação.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={btnNavy}
          >
            Falar com a RM →
          </a>
        </div>
      </section>
    </>
  );
}

/* ── Shared sub-components ── */

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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "Fraunces, serif",
        fontWeight: 700,
        fontSize: "clamp(26px, 4vw, 42px)",
        color: "#111827",
        lineHeight: 1.15,
        letterSpacing: "-0.5px",
      }}
    >
      {children}
    </h2>
  );
}

function SolutionCard({
  emoji,
  title,
  description,
  link,
  linkLabel,
  highlight,
}: {
  emoji: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: highlight ? "#0F1B33" : "#ffffff",
        border: highlight ? "none" : "1px solid rgba(15,27,51,0.1)",
        borderRadius: 16,
        padding: 36,
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 16px 40px rgba(15,27,51,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 20 }}>{emoji}</div>
      <h3
        style={{
          fontFamily: "Fraunces, serif",
          fontWeight: 700,
          fontSize: 22,
          color: highlight ? "#ffffff" : "#111827",
          marginBottom: 14,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 15,
          color: highlight ? "rgba(255,255,255,0.75)" : "#6b7280",
          lineHeight: 1.7,
          flex: 1,
          marginBottom: 28,
        }}
      >
        {description}
      </p>
      <Link
        to={link}
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          color: highlight ? "#C9974B" : "#0F1B33",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {linkLabel} →
      </Link>
    </div>
  );
}

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: "1px solid rgba(15,27,51,0.1)",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "24px 0",
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background-color 0.2s",
                color: openIdx === i ? "#ffffff" : "#0F1B33",
                fontSize: 18,
                fontWeight: 300,
                lineHeight: 1,
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
                paddingBottom: 24,
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

import React from "react";

const btnPrimary: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#F4EEE3",
  color: "#0F1B33",
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  fontSize: 16,
  textDecoration: "none",
  padding: "14px 32px",
  borderRadius: 8,
  letterSpacing: "0.2px",
};

const btnSecondary: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "rgba(255,255,255,0.1)",
  color: "#ffffff",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.25)",
  transition: "background-color 0.2s",
};

const btnNavy: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#0F1B33",
  color: "#ffffff",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 15,
  textDecoration: "none",
  padding: "13px 26px",
  borderRadius: 8,
  transition: "background-color 0.2s, transform 0.15s",
};

const btnAmber: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#C9974B",
  color: "#0F1B33",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: 15,
  textDecoration: "none",
  padding: "13px 26px",
  borderRadius: 8,
  transition: "background-color 0.2s",
};

const sectionH2: React.CSSProperties = {
  fontFamily: "Fraunces, serif",
  fontWeight: 700,
  fontSize: "clamp(26px, 3.5vw, 38px)",
  color: "#111827",
  lineHeight: 1.15,
  letterSpacing: "-0.5px",
  marginBottom: 16,
};

const bodyText: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 17,
  color: "#4b5563",
  lineHeight: 1.7,
};
