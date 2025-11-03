import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Calendar } from "lucide-react";

export const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <div className="relative bg-card/30 backdrop-blur-sm border-2 border-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
        {/* Corner tech accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30" />
        
        <h2 className="text-4xl md:text-5xl font-bold text-gold mb-8 glow-text relative">
          Vamos Conversar
        </h2>
        
        <div className="space-y-4 text-lg md:text-xl mb-10">
          <p className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-gold" />
            <a 
              href="mailto:contato@zentrixia.com.br"
              className="text-gold hover:text-foreground transition-colors"
            >
              contato@zentrixia.com.br
            </a>
          </p>
          
          <p className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-gold" />
            <a 
              href="https://wa.me/5511932071021"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-foreground transition-colors"
            >
              +55 11 93207-1021
            </a>
          </p>
          
          <p className="flex items-center justify-center gap-3 text-silver">
            <MapPin className="w-5 h-5 text-gold" />
            Diadema, São Paulo
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button 
            variant="elite" 
            size="lg"
            asChild
          >
            <a 
              href="https://www.linkedin.com/in/flaviosilva-arquiteto-hibrido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            variant="elite" 
            size="lg"
            asChild
          >
            <a 
              href="https://wa.me/5511932071021?text=Ol%C3%A1!%20Vim%20do%20site%20Zentrixia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>
        
        <Button 
          variant="premium" 
          size="lg"
          asChild
          className="w-full sm:w-auto"
        >
          <a 
            href="https://wa.me/5511932071021?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20uma%20oportunidade%20estratégica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar className="w-5 h-5" />
            Agendar Conversa
          </a>
        </Button>
      </div>
    </section>
  );
};
