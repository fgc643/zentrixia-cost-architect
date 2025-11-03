import { Server, TrendingDown, Shield, Zap, Lock, Cpu } from "lucide-react";

export const Portfolio = () => {
  const metrics = [
    { value: "7", label: "Containers Ativos", icon: Server },
    { value: "99.9%", label: "Uptime", icon: Zap },
    { value: "$4,140", label: "Economizados/Ano", icon: TrendingDown },
    { value: "30+", label: "Dias Estável", icon: Shield },
    { value: "8", label: "SSL Ativos", icon: Lock },
    { value: "15%", label: "Uso RAM", icon: Cpu },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 glow-text">
          Case de Sucesso
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto shadow-gold-sm" />
      </div>
      
      <div className="relative bg-card/30 backdrop-blur-sm border-2 border-primary/20 rounded-3xl p-8 md:p-12 transition-all duration-300 hover:border-primary hover:shadow-gold-lg overflow-hidden">
        {/* Tech grid overlay */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary/20" />
        
        <div className="relative">
        <h3 className="text-3xl md:text-4xl font-bold text-gold mb-6 flex items-center gap-3 glow-text">
          <Server className="w-10 h-10" />
          Infraestrutura SaaS Multi-Tenant
        </h3>
        
        <p className="text-silver text-lg md:text-xl mb-10 leading-relaxed">
          Arquitetura completa de produção com isolamento de serviços, 
          alta disponibilidade e custos 91% menores que cloud tradicional.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-primary/5 rounded-xl p-6 text-center transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1"
              >
                <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-black text-gold mb-2">
                  {metric.value}
                </div>
                <div className="text-xs md:text-sm text-silver uppercase tracking-wide">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-transparent" />
          <p className="text-gold font-bold text-base md:text-lg pl-4">
            <Cpu className="inline w-5 h-5 mr-2" />
            Stack: Docker • Next.js • Node.js • PostgreSQL • Redis • N8N • Nginx • Let's Encrypt
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};
