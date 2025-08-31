import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  category: "Salas" | "Quartos" | "Cozinhas";
  imageUrl: string;
  description?: string;
}

interface PortfolioProps {
  isPreview?: boolean;
}

const allProjects: Project[] = [
  { id: "1", title: "Sala Moderna", category: "Salas", imageUrl: "images/Portfolio/sala2.jpg", description: "Ambiente sofisticado que combina elementos clássicos e contemporâneos, criando uma sala de estar acolhedora e elegante. Destaque para o piano, o lustre e o mobiliário em tons neutros, que reforçam o estilo atemporal do projeto." },
  { id: "2", title: "Sala2", category: "Salas", imageUrl: "images/Portfolio/sala1.jpg", description: "Hall de entrada sofisticado com painel de madeira ripada, criando uma atmosfera acolhedora e moderna. O design inclui um aparador suspenso e espelho, otimizando a sensação de espaço e elegância." },
  { id: "3", title: "Quarto Principal", category: "Quartos", imageUrl: "images/Portfolio/quarto4.jpg", description: "Quarto projetado com paleta neutra e iluminação embutida para criar um ambiente acolhedor e sofisticado. O mobiliário planejado otimiza o espaço, trazendo funcionalidade e conforto em cada detalhe." },
  { id: "4", title: "Quarto2", category: "Quartos", imageUrl: "images/Portfolio/quarto3.jpg", description: "Cores suaves e móveis funcionais." },
  { id: "5", title: "Cozinha Integrada", category: "Cozinhas", imageUrl: "images/Portfolio/cozinha1.jpg", description: "Cozinha com armários em tons neutros e amadeirados, bancada em granito e ilha central que divide o ambiente, combinando funcionalidade com um design clean e sofisticado." },
  { id: "6", title: "Cozinha2", category: "Cozinhas", imageUrl: "images/Portfolio/cozinha2.jpg", description: "Bancada em quartzo e eletrodomésticos modernos." },
  { id: "7", title: "Sala3", category: "Salas", imageUrl: "images/Portfolio/sala3.jpg", description: "Conforto e tecnologia para o seu lazer." },
  { id: "8", title: "Quarto3", category: "Quartos", imageUrl: "images/Portfolio/quarto1.jpg", description: "Um espaço acolhedor para receber bem." },
  { id: "9", title: "Cozinha3", category: "Cozinhas", imageUrl: "images/Portfolio/cozinha3.jpg", description: "Praticidade e estilo em um só lugar." },
];

const categories = ["Salas", "Quartos", "Cozinhas"];

const categoryDescriptions = {
  "Salas": "Aqui você encontra projetos de salas de estar e jantar que combinam conforto e design para criar o ambiente ideal para a sua família.",
  "Quartos": "Descubra como transformar quartos em refúgios de tranquilidade com soluções de marcenaria personalizadas e designs que otimizam o espaço e o conforto.",
  "Cozinhas": "Nossos projetos de cozinha são feitos para serem o coração da casa, unindo funcionalidade e estética com armários planejados, bancadas elegantes e organização."
};

const previewProjects = [
  allProjects.find((p) => p.category === "Salas")!,
  allProjects.find((p) => p.category === "Quartos")!,
  allProjects.find((p) => p.category === "Cozinhas")!,
].filter(Boolean);

const Portfolio = ({ isPreview = false }: PortfolioProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Salas");

  if (isPreview) {
    return (
      <motion.div className="flex flex-wrap justify-center gap-8">
        {previewProjects.map((project) => (
          <motion.div
            key={project.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm"
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              description={project.description}
              isClickable={true}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  const filteredProjects = allProjects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="text-center px-4 mb-12">
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {categoryDescriptions[selectedCategory]}
        </p>
      </div>

      <motion.div className="flex flex-wrap justify-center gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm"
          >
            <ProjectCard
              id={project.id}
              imageUrl={project.imageUrl}
              category={project.category}
              isClickable={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;