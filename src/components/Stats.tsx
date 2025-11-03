import { TrendingDown, Zap, Clock, ShieldCheck } from "lucide-react";

export const Stats = () => {
  const stats = [
    { number: "91%", label: "Redução de Custos", icon: TrendingDown },
    { number: "99.9%", label: "Uptime Garantido", icon: Zap },
    { number: "7 dias", label: "Para MVP Completo", icon: Clock },
    { number: "10/10", label: "Segurança Auditada", icon: ShieldCheck },
  ];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 -mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 text-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-gold-lg animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Tech corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
              
              <Icon className="w-8 h-8 text-primary/40 mx-auto mb-4 group-hover:text-primary transition-colors" />
              
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gold glow-text mb-3 transition-transform duration-300 group-hover:scale-110">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-silver uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
