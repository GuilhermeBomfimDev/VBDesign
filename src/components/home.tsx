import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, Home as HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import ContactForm from "./ContactForm";
import Portfolio from "./Portfolio";

// NOTE: Removi o import do ImageSlideshow, já que o novo Hero não o utiliza mais.
// Se precisar dele em outro lugar, pode adicionar o import de volta.

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      const sections = [
        "hero",
        "quem-somos",
        "servicos",
        "sobre-mim",
        "portfolio",
        "contato",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Intervalo de 0.5s entre a animação de cada filho
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // Começa 20px para baixo e invisível
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, // Duração da animação de cada item
    },
  },
};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-background">
        {/* Header Estático com Degradê */}
<header className="bg-gradient-to-r from-[#060c1b] to-[#121d38]">
  <div
    className={`
    w-full pr-8 h-20
    flex justify-between items-center
  `}
  >
    {/* --- CÓDIGO CORRIGIDO E ESTÁVEL ---- */}
    <a 
      onClick={scrollToTop} 
      // Usamos margens pequenas para o ajuste fino
      className="cursor-pointer ml-6 -mt-0"
    >
      <img 
        src="/VBDesign/images/vbdesignlogo.png" 
        alt="Logo VB Design" 
        className="h-11 w-auto" 
      />
    </a>
            {/* Navegação Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                onClick={() => scrollToSection("quem-somos")}
                className={`
                cursor-pointer text-white transition-colors duration-300 
                relative 
                after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] 
                after:bg-primary after:transition-all after:duration-300
                hover:after:w-full  
                ${
                  activeSection === "quem-somos"
                    ? "text-primary after:w-full"
                    : "after:w-0"
                }
              `}
              >
                Quem Somos
              </a>
              <a
                onClick={() => scrollToSection("servicos")}
                className={`
                cursor-pointer text-white transition-colors duration-300 
                relative 
                after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] 
                after:bg-primary after:transition-all after:duration-300
                hover:after:w-full  
                ${
                  activeSection === "servicos"
                    ? "text-primary after:w-full"
                    : "after:w-0"
                }
              `}
              >
                Serviços
              </a>
              <a
                onClick={() => scrollToSection("sobre-mim")}
                className={`
                cursor-pointer text-white transition-colors duration-300 
                relative 
                after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] 
                after:bg-primary after:transition-all after:duration-300
                hover:after:w-full  
                ${
                  activeSection === "sobre-mim"
                    ? "text-primary after:w-full"
                    : "after:w-0"
                }
              `}
              >
                Sobre Mim
              </a>
              <a
                onClick={() => scrollToSection("portfolio")}
                className={`
                cursor-pointer text-white transition-colors duration-300 
                relative 
                after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] 
                after:bg-primary after:transition-all after:duration-300
                hover:after:w-full  
                ${
                  activeSection === "portfolio"
                    ? "text-primary after:w-full"
                    : "after:w-0"
                }
              `}
              >
                Portfólio
              </a>
              <Button
                onClick={() => scrollToSection("contato")}
                className="ml-2 bg-white text-[#1a1a1a] hover:bg-gray-200 transition-colors"
              >
                Contato
              </Button>
            </nav>

            {/* Botão do Menu Mobile */}
            <button
              className="md:hidden text-white justify-self-end"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navegação Mobile */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-gradient-to-r from-[#1a1a1a] to-blue-950 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <a
                  onClick={() => scrollToSection("quem-somos")}
                  className="cursor-pointer hover:opacity-80 transition-colors py-2 text-white"
                >
                  Quem Somos
                </a>
                <a
                  onClick={() => scrollToSection("servicos")}
                  className="cursor-pointer hover:opacity-80 transition-colors py-2 text-white"
                >
                  Serviços
                </a>
                <a
                  onClick={() => scrollToSection("sobre-mim")}
                  className="cursor-pointer hover:opacity-80 transition-colors py-2 text-white"
                >
                  Sobre Mim
                </a>
                <a
                  onClick={() => scrollToSection("portfolio")}
                  className="cursor-pointer hover:opacity-80 transition-colors py-2 text-white"
                >
                  Portfólio
                </a>
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="w-full bg-white text-[#1a1a1a] hover:bg-gray-200 transition-colors"
                >
                  Contato
                </Button>
              </div>
            </motion.div>
          )}
        </header>

{/* ================= INÍCIO DA SEÇÃO HERO COM ANIMAÇÃO ================= */}
<section
  id="hero"
  className="relative min-h-[90vh] flex justify-center items-center text-center bg-gray-900 overflow-hidden"
>
  {/* Imagem de fundo fixa */}
  <img
    src="/VBDesign/images/designex.jpeg"
    alt="Sala moderna"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Overlay escuro */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* Contêiner da Animação */}
  <motion.div
    className="relative z-10 max-w-2xl px-6"
    variants={containerVariants} // Aplica a variante do contêiner
    initial="hidden"             // Estado inicial
    animate="visible"            // Estado final (ativa a animação)
  >
    {/* 1. Título */}
    <motion.h1
      variants={itemVariants} // Aplica a variante dos itens
      className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif-display"
      style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
    >
      VB Design
    </motion.h1>

    {/* 2. Parágrafo */}
    <motion.p
      variants={itemVariants} // Aplica a mesma variante, mas será atrasada pelo stagger
      className="text-xl md:text-2xl text-white/90 mb-8"
      style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
    >
      Transforme seu lar em uma verdadeira obra de arte!
    </motion.p>
    
    {/* 3. Botão */}
    <motion.div variants={itemVariants}>
      <Button
        onClick={() => scrollToSection("contato")}
        className="px-8 py-4 bg-gradient-to-r from-[#1a1a1a] to-blue-950 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        PEÇA JÁ UM ORÇAMENTO
        <ArrowRight className="ml-2" />
      </Button>
    </motion.div>
  </motion.div>
</section>
{/* ================== FIM DA SEÇÃO HERO COM ANIMAÇÃO ================== */}

{/* ================= SEÇÃO QUEM SOMOS (ALINHADA À ESQUERDA) ================= */}
<section id="quem-somos" className="pt-28 pb-14 bg-background"> {/* Espaçamento inferior reduzido */}
  <div className="container mx-auto px-4">
    {/* A MUDANÇA ESTÁ AQUI: removemos o "mx-auto" para alinhar à esquerda */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl" // Aumentei um pouco o max-width para acomodar o novo layout
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">
        Quem Somos
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda: Imagens */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/VBDesign/images/SobreNos1.jpg"
            alt="Interior design example 1"
            className="rounded-lg shadow-md w-full h-auto"
          />
          <img
            src="/VBDesign/images/SobreNos2.jpg"
            alt="Interior design example 2"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>

        {/* Coluna da Direita: Texto e Estatísticas */}
        <div className="flex flex-col space-y-10">
          <div>
            <p className="text-lg mb-6">
              A VB Design é especializada em transformar espaços com
              soluções personalizadas e design exclusivo, criando ambientes
              que refletem a personalidade e estilo de cada cliente.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-primary rounded-full p-1"></div>
                <span>
                  Projetos residenciais, comerciais e corporativos
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-primary rounded-full p-1"></div>
                <span>Soluções personalizadas para cada espaço</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-primary rounded-full p-1"></div>
                <span>
                  Materiais de alta qualidade e acabamentos impecáveis
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-primary rounded-full p-1"></div>
                <span>Design moderno e exclusivo, pensado para você</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-primary rounded-full p-1"></div>
                <span>Projetos feitos de acordo com seu desejo</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-muted rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">2</h3>
              <p className="text-xl">Anos</p>
            </div>
            <div className="p-6 bg-muted rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-xl">Projetos</p>
            </div>
            <div className="p-6 bg-muted rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">40+</h3>
              <p className="text-xl">Imóveis</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* ================= SEÇÃO DE SERVIÇOS (ALINHADA À DIREITA) ================= */}
<section id="servicos" className="pt-14 pb-28 bg-background"> {/* Espaçamento superior reduzido */}
  <div className="container mx-auto px-4">
    {/* A MUDANÇA ESTÁ AQUI: trocamos "mx-auto" por "ml-auto" para alinhar à direita */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl ml-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-right">
        Serviços
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Card 1: Interior Design */}
        <div className="group relative h-96 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&q=80"
            alt="Interior de uma sala de estar elegante"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-colors duration-300 group-hover:from-black/90"></div>
          <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
            <h3 className="text-2xl font-bold mb-3 font-serif-display">Design de Interiores</h3>
            <p className="text-white/90">
              Criamos ambientes harmoniosos e funcionais que refletem sua personalidade e estilo de vida.
            </p>
          </div>
        </div>

        {/* Card 2: Architecture */}
        <div className="group relative h-96 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80"
            alt="Fachada de uma casa com arquitetura moderna"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-colors duration-300 group-hover:from-black/90"></div>
          <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
            <h3 className="text-2xl font-bold mb-3 font-serif-display">Arquitetura</h3>
            <p className="text-white/90">
              Desenvolvemos projetos arquitetônicos completos, desde a concepção até a execução final.
            </p>
          </div>
        </div>

        {/* Card 3: Design de Mobílias */}
        <div className="group relative h-96 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&q=80"
            alt="Poltrona de design exclusivo em um ambiente minimalista"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-colors duration-300 group-hover:from-black/90"></div>
          <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
            <h3 className="text-2xl font-bold mb-3 font-serif-display">
              Design de Mobílias
            </h3>
            <p className="text-white/90">
              Projetamos móveis sob medida que otimizam o espaço e atendem às suas necessidades específicas.
            </p>
          </div>
        </div>
        
      </div>
    </motion.div>
  </div>
</section>

        {/* Seção de Call-to-Action */}
        <section className="py-28 bg-muted"> {/* ESPAÇAMENTO AUMENTADO */}
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto(a) para Transformar Seu Espaço?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Vamos conversar sobre suas ideias e como podemos torná-las realidade. Solicite um orçamento sem compromisso.
              </p>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-primary text-white hover:bg-primary/90 transition-colors px-8 py-4 text-lg"
              >
                Fale com a Projetista
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

{/* ================= INÍCIO DA SEÇÃO SOBRE MIM (IMAGEM MAIOR) ================= */}
<section id="sobre-mim" className="py-28 bg-background">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Sobre Mim
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-4">
            Olá! Sou a Arquiteta e Projetista Viviane Bomfim
          </h3>
          <p className="mb-4">
            Trabalhei como projetista para a Italínea e tenho experiência
            com dezenas de projetos de todos os tipos. Meu objetivo é
            transformar ambientes em espaços funcionais, sofisticados e
            aconchegantes, que atendam às necessidades e desejos de nossos
            clientes.
          </p>
          <p className="mb-4">
            Atualmente estou cursando a faculdade de Arquitetura, a fim de
            me aprimorar e trazer ainda mais qualidade e inovação para os
            projetos que desenvolvo.
          </p>
          <p className="mb-4">
            Atuo em diversos tipos de projetos, como residenciais,
            comerciais, corporativos e de interiores. E após me formar,
            estenderei meus serviços para projetos de arquitetura e
            urbanismo, oferecendo uma visão completa e integrada para cada
            obra.
          </p>
          <p>
            Se você deseja transformar seu ambiente em um espaço
            único e personalizado, entre em contato comigo e
            vamos juntos criar o ambiente dos seus sonhos!
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center"> {/* Adicionado flex e justify-center para garantir o alinhamento */}
          {/* A MUDANÇA ESTÁ AQUI: aumentei os valores de w- e h- */}
          <img
            src="/VBDesign/images/VivianeFoto1.jpg"
            alt="Viviane Bomfim"
            className="rounded-full w-64 h-64 object-cover md:w-80 md:h-80 border-4 border-background shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  </div>
</section>
{/* ================== FIM DA SEÇÃO SOBRE MIM (IMAGEM MAIOR) ================== */}

        {/* Seção Portfólio */}
        <section id="portfolio" className="py-24 bg-background"> {/* ESPAÇAMENTO AUMENTADO */}
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Nossos Destaques
              </h2>
               <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Descubra nossa galeria de projetos e se inspire para transformar seu espaço em algo único e especial.
      </p>
              <Portfolio isPreview={true} />
              <div className="text-center mt-12">
                <Link
                  to="/portfolio"
                  className="bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Ver todos os projetos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section id="contato" className="py-24 bg-muted"> {/* ESPAÇAMENTO AUMENTADO */}
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Entre em Contato
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* Footer Melhorado */}
        <footer className="py-28 bg-[#1a1a1a] text-white"> {/* ESPAÇAMENTO AUMENTADO */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-semibold mb-2">VB Design</h3>
                <p className="text-gray-400">
                  Transformando lares em verdadeiras obras de arte.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Navegue</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      onClick={() => scrollToSection("quem-somos")}
                      className="cursor-pointer text-gray-400 hover:text-white transition-colors"
                    >
                      Quem Somos
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => scrollToSection("servicos")}
                      className="cursor-pointer text-gray-400 hover:text-white transition-colors"
                    >
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => scrollToSection("portfolio")}
                      className="cursor-pointer text-gray-400 hover:text-white transition-colors"
                    >
                      Portfólio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-0">Fale Comigo</h4>
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="mt-4 bg-white text-[#1a1a1a] hover:bg-gray-200 transition-colors"
                >
                  Peça seu Orçamento
                </Button>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
              <p>VB Design © 2025. All Rights Reserved.</p>
            </div>
          </div>
        </footer>

        {/* Botão de Voltar ao Topo */}
        <AnimatePresence>
          {isScrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              className="fixed bottom-6 left-6 z-50 bg-[#1a1a1a] text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition-colors"
              aria-label="Voltar ao topo"
            >
              <HomeIcon size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Home;