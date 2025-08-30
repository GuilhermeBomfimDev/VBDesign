import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title?: string;
  category?: "Salas" | "Quartos" | "Cozinhas";
  imageUrl: string;
  description?: string;
  isClickable?: boolean;
  onClick?: () => void;
}

const ProjectCard = ({
  id,
  title,
  category,
  imageUrl,
  description,
  isClickable = true,
  onClick,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    if (isClickable) {
      setIsOpen(true);
      if (onClick) onClick();
    }
  };

  return (
    <>
      <motion.div
        className="h-full bg-white"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card
          className={`overflow-hidden h-full transition-shadow duration-300 ${isClickable ? 'cursor-pointer hover:shadow-lg' : ''}`}
          onClick={handleClick}
        >
          <div className="relative">
            <AspectRatio ratio={4 / 3}>
              <img
                src={imageUrl}
                alt={title || "Imagem de Projeto"}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </AspectRatio>
            {category && (
              <div className="absolute top-2 right-2">
                <Badge
                  variant="secondary"
                  className="bg-white/80 backdrop-blur-sm"
                >
                  {category}
                </Badge>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            {title && <h3 className="text-lg font-medium">{title}</h3>}
          </CardContent>
        </Card>
      </motion.div>

      {isClickable && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{title || "Detalhes do Projeto"}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={imageUrl}
                  alt={title || "Imagem de Projeto"}
                  className="w-full h-full object-cover rounded-md"
                />
              </AspectRatio>
              <div>
                {category && <Badge className="mb-2">{category}</Badge>}
                {description && <p className="text-muted-foreground">{description}</p>}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ProjectCard;