import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

const testimonials = [
  {
    name: "Kellen R.",
    city: "Araçatuba, SP",
    text: "Sei que não foi um processo simples, mas graças à dedicação e ao suporte de vocês, conseguimos chegar até aqui. Sou muito grata por todo o auxílio, atenção e paciência durante esse caminho.",
  },
  {
    name: "Emmeli F.",
    city: "Araçatuba, SP",
    text: "Muito obrigada por caminhar com a gente rumo à nossa casa nova! A dedicação e o trabalho de vocês foram fundamentais para o sucesso dessa conquista.",
  },
  {
    name: "Jaciara O.",
    city: "Araçatuba, SP",
    text: "Tem um dedinho de vocês nos sonhos de muita gente, até então eu sempre quis muito ter a minha casinha, mas nada se compara a sensação de ler a mensagem 'processo finalizado'. Gratidão se resume.",
  },
  {
    name: "Gleise S.",
    city: "Araçatuba, SP",
    text: "Re, queria agradecer pelo seu atendimento de qualidade e rico em detalhes que nos prestou desde o primeiro contato! Você é diferenciada, muito obrigada! ",
  },
  {
    name: "Jaqueline R.",
    city: "Araçatuba, SP",
    text: "Gostaria de expressar minha profunda gratidão a todos que contribuíram e estivaram ao meu lado na realização da compra do meu imóvel. Obrigada pelo trabalho e dedicação de cada um de vocês!",
  },
  {
    name: "Maria F.",
    city: "São Paulo, SP",
    text: "Não tenho palavras para agradecer todo empenho, cuidado e dedicação de vocês. Muito obrigada!",
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="testimonial-carousel__arrow-icon"
      style={{ width: 22, height: 22 }}
    >
      <path
        d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Carousel({ header }: { header?: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [positionCount, setPositionCount] = useState(testimonials.length);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);

  const updateCarouselState = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("article");

    if (!track || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = firstCard.offsetWidth + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const maxIndex = Math.ceil(maxScroll / step);

    setActiveIndex(Math.min(Math.round(track.scrollLeft / step), maxIndex));
    setPositionCount(maxIndex + 1);
    setCanGoBack(track.scrollLeft > 4);
    setCanGoForward(track.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateCarouselState();
    track.addEventListener("scroll", updateCarouselState, { passive: true });
    window.addEventListener("resize", updateCarouselState);

    return () => {
      track.removeEventListener("scroll", updateCarouselState);
      window.removeEventListener("resize", updateCarouselState);
    };
  }, [updateCarouselState]);

  const goToCard = (index: number) => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("article");
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollTo({
      left: index * (firstCard.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  const move = (direction: -1 | 1) => {
    goToCard(Math.max(0, Math.min(activeIndex + direction, positionCount - 1)));
  };

  const startDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    dragStart.current = {
      x: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
    };
    event.currentTarget.dataset.dragging = "true";
    event.currentTarget.style.cursor = "grabbing";
    event.currentTarget.style.scrollSnapType = "none";
    event.currentTarget.style.scrollBehavior = "auto";
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const drag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.dataset.dragging !== "true") return;

    event.preventDefault();
    event.currentTarget.scrollLeft =
      dragStart.current.scrollLeft - (event.clientX - dragStart.current.x);
  };

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.dataset.dragging !== "true") return;

    event.currentTarget.dataset.dragging = "false";
    event.currentTarget.style.cursor = "grab";
    event.currentTarget.style.scrollBehavior = "smooth";
    event.currentTarget.style.scrollSnapType = "x mandatory";
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const arrowStyle = (disabled: boolean) => ({
    width: 52,
    height: 52,
    borderRadius: "50%",
    border: "1px solid rgba(201,151,75,0.7)",
    backgroundColor: "transparent",
    color: "#C9974B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.3 : 1,
    transition: "all 0.25s ease",
  });

  const arrowHover = (e: React.MouseEvent<HTMLButtonElement>, on: boolean) => {
    if (e.currentTarget.disabled) return;
    e.currentTarget.style.backgroundColor = on ? "#C9974B" : "transparent";
    e.currentTarget.style.color = on ? "#0F1B33" : "#C9974B";
  };

  return (
    <section
      id="depoimentos"
      className="testimonial-carousel"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div
        className="testimonial-carousel__container"
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <div
          className="testimonial-carousel__header"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div>{header}</div>

          <div
            className="testimonial-carousel__controls"
            style={{ display: "flex", gap: 12 }}
          >
            <button
              type="button"
              className="testimonial-carousel__arrow"
              aria-label="Ver depoimento anterior"
              disabled={!canGoBack}
              style={arrowStyle(!canGoBack)}
              onMouseEnter={(e) => arrowHover(e, true)}
              onMouseLeave={(e) => arrowHover(e, false)}
              onClick={() => move(-1)}
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              className="testimonial-carousel__arrow"
              aria-label="Ver próximo depoimento"
              disabled={!canGoForward}
              style={arrowStyle(!canGoForward)}
              onMouseEnter={(e) => arrowHover(e, true)}
              onMouseLeave={(e) => arrowHover(e, false)}
              onClick={() => move(1)}
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="testimonial-carousel__track"
          aria-label="Depoimentos de clientes"
          style={{
            display: "flex",
            gap: 24,
            overflowX: "auto",
            overflowY: "hidden",
            padding: "10px 4px 28px",
            cursor: "grab",
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            userSelect: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onPointerDown={startDragging}
          onPointerMove={drag}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
        >
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={`${testimonial.name}-${index}`}
              style={{
                flex: "0 0 min(360px, 85%)",
                minHeight: 250,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "36px 32px",
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
                scrollSnapAlign: "start",
              }}
            >
              <div
                className="testimonial-card__quote"
                aria-hidden="true"
                style={{
                  marginBottom: 18,
                  color: "#C9974B",
                  fontFamily: "Georgia, serif",
                  fontSize: 48,
                  lineHeight: 0.8,
                }}
              >
                “
              </div>
              <p
                className="testimonial-card__text"
                style={{
                  margin: 0,
                  color: "#26344D",
                  fontSize: 16,
                  lineHeight: 1.7,
                }}
              >
                {testimonial.text}
              </p>
              <div
                className="testimonial-card__author"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginTop: 28,
                  paddingTop: 20,
                  borderTop: "1px solid #E7E2D8",
                }}
              >
                <span
                  className="testimonial-card__avatar"
                  aria-hidden="true"
                  style={{
                    width: 42,
                    height: 42,
                    flexShrink: 0,
                    borderRadius: "50%",
                    backgroundColor: "#0F1B33",
                    color: "#C9974B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <strong
                    style={{ display: "block", color: "#0F1B33", fontSize: 15 }}
                  >
                    {testimonial.name}
                  </strong>
                  <span
                    style={{
                      display: "block",
                      marginTop: 4,
                      color: "#7A8190",
                      fontSize: 13,
                    }}
                  >
                    {testimonial.city}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="testimonial-carousel__footer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <div
            className="testimonial-carousel__dots"
            aria-label="Selecionar depoimento"
            style={{ display: "flex", gap: 8 }}
          >
            {testimonials.slice(0, positionCount).map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.name}
                className="testimonial-carousel__dot"
                data-active={index === activeIndex}
                aria-label={`Ir para o depoimento de ${testimonial.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => goToCard(index)}
                style={{
                  width: index === activeIndex ? 28 : 10,
                  height: 10,
                  padding: 0,
                  border: 0,
                  borderRadius: index === activeIndex ? 6 : "50%",
                  backgroundColor:
                    index === activeIndex ? "#C9974B" : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
