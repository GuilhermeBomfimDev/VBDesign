// Arquivo: src/components/PortfolioPage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio'; // <-- Usa o componente principal do portfólio

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Nossos Projetos</h1>
          
          {/* Aqui ele renderiza a galeria completa com filtros, nomes e pop-ups */}
          <Portfolio /> 

          <div className="text-center mt-16">
            <Link 
              to="/" 
              className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 transition-colors"
            >
              Voltar para a Página Inicial
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;