// Conteúdo para: src/components/ImageSlideshow.tsx (Versão Definitiva com Framer Motion)

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion"; // <-- Importamos o framer-motion

// A interface para as props continua a mesma
interface Image {
  src: string;
  alt: string;
}

interface ImageSlideshowProps {
  images: Image[];
  autoplayDelay?: number;
}

const ImageSlideshow = React.memo(({ 
  images, 
  autoplayDelay = 8000 
}: ImageSlideshowProps) => {

  if (!images || images.length === 0) {
    return null;
  }

  // A lógica do Embla para controlar o índice continua a mesma
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false }),
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    if (emblaApi) {
      setActiveIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateActiveIndex();
    emblaApi.on("select", updateActiveIndex);
    return () => {
      emblaApi.off("select", updateActiveIndex);
    };
  }, [emblaApi, updateActiveIndex]);

  // Escolhe a classe de animação Ken Burns para a imagem ativa
  const animationClass = `animate-kenburns-${(activeIndex % 3) + 1}`;

  return (
    <div className="overflow-hidden h-full relative" ref={emblaRef}>
      {/* O AnimatePresence gerencia a entrada e saída dos slides */}
      <AnimatePresence>
        <motion.div
          // A 'key' é crucial. Quando ela muda, o AnimatePresence ativa a animação.
          key={activeIndex}
          className="absolute top-0 left-0 w-full h-full"
          // Animação de entrada (fade in)
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // Animação de saída (fade out)
          exit={{ opacity: 0 }}
          // Duração da transição de fade
          transition={{ duration: 2 }}
        >
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className={`w-full h-full object-cover ${animationClass}`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ImageSlideshow;