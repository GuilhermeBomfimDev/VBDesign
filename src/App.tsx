// Arquivo: src/App.tsx (VERSÃO ATUALIZADA)

import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/home";
import PortfolioPage from "./components/PortfolioPage";
import ScrollToTop from "./components/ScrollToTop"; // Importamos o novo componente

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ScrollToTop /> {/* Garante que a rolagem vá para o topo */}
      <AnimatePresence mode="wait"> {/* Controla a animação de entrada e saída */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;