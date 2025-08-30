import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Removemos toda a lógica de formulário (useState, useForm, Zod)

const ContactForm = () => {
  // Função para abrir o WhatsApp
  const handleWhatsAppClick = () => {
    // Usando o número de teste que você pediu
    const whatsappUrl = "https://wa.me/5521997021152";
    window.open(whatsappUrl, "_blank");
  };

  return (
    // O layout agora é centralizado para focar no card de contato
    <div className="w-full flex justify-center items-center">
      <Card className="w-full max-w-lg shadow-xl bg-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Fale Diretamente Comigo
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Informações de contato diretas */}
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <a
                href="https://wa.me/5521997021152"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 hover:underline"
              >
                +55 21 99702-1152
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:vivi.bs77@hotmail.com"
                className="text-gray-600 hover:text-gray-900 hover:underline"
              >
                vivi.bs77@hotmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Instagram className="h-6 w-6 text-primary" />
            <div>
              <p className="font-semibold">Instagram</p>
              <a
                href="https://www.instagram.com/vibs_rj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 hover:underline"
              >
                @vibs_rj
              </a>
            </div>
          </div>

          {/* Divisor */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* O foco principal é o botão grande para iniciar a conversa */}
          <p className="text-center text-muted-foreground">
            Vamos juntos transformar seu projeto em realidade?
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="w-full py-6 text-lg bg-[#25D366] hover:bg-[#1DA851] text-white"
          >
            <Phone className="mr-3 h-5 w-5" />
            Iniciar Conversa no WhatsApp
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
