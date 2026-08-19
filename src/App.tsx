import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Consorcio from "./pages/Consorcio";
import FinanciamentoImobiliario from "./pages/FinanciamentoImobiliario";
import FinanciamentoConstrucao from "./pages/FinanciamentoConstrucao";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consorcio-imobiliario" element={<Consorcio />} />
          <Route
            path="/financiamento-imobiliario"
            element={<FinanciamentoImobiliario />}
          />
          <Route
            path="/financiamento-construcao"
            element={<FinanciamentoConstrucao />}
          />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
