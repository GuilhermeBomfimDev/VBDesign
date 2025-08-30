// Conteúdo para: src/components/PortfolioHeader.tsx

import React from "react";
import { Link } from "react-router-dom";

interface PortfolioHeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const PortfolioHeader = ({ scrollToSection }: PortfolioHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 hover:text-primary transition-colors"
        >
          VB Design
        </Link>

        <nav className="flex items-center space-x-6">
          <a
            onClick={() => scrollToSection("salas")}
            className="cursor-pointer text-gray-600 hover:text-primary transition-colors font-medium"
          >
            Salas
          </a>
          <a
            onClick={() => scrollToSection("quartos")}
            className="cursor-pointer text-gray-600 hover:text-primary transition-colors font-medium"
          >
            Quartos
          </a>
          <a
            onClick={() => scrollToSection("cozinhas")}
            className="cursor-pointer text-gray-600 hover:text-primary transition-colors font-medium"
          >
            Cozinhas
          </a>
        </nav>
      </div>
    </header>
  );
};

export default PortfolioHeader;
