import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-radial from-[hsla(45,100%,50%,0.1)] via-transparent to-transparent z-0" />
      
      {/* Scan Lines Effect */}
      <div className="absolute inset-0 scan-lines opacity-50 pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="space-y-4 animate-fade-in-down">
          <div className="relative inline-block">
            <span className="text-5xl md:text-6xl absolute -top-8 left-1/2 -translate-x-1/2 animate-float">
              👑
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-gradient-gold glow-text">
              ZENTRIXIA
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-silver italic tracking-wider">
            Elite. Unrivaled. Yours.
          </p>
        </div>
        
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
          Reduza <span className="text-gold glow-text">91% dos custos</span> SaaS<br />
          sem comprometer segurança ou performance
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-silver max-w-3xl mx-auto leading-relaxed">
          Arquitetura Híbrida que entrega MVPs funcionais em 7 dias,
          com 99.9% uptime e documentação enterprise-grade
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            variant="premium" 
            size="lg"
            asChild
          >
            <a 
              href="https://wa.me/5511932071021?text=Ol%C3%A1!%20Vim%20do%20site%20Zentrixia%20e%20quero%20conversar%20sobre%20oportunidades"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Vamos Conversar
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          
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
              Ver Perfil LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
