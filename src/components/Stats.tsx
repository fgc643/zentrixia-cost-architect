export const Stats = () => {
  const stats = [
    { number: "91%", label: "Redução de Custos" },
    { number: "99.9%", label: "Uptime Garantido" },
    { number: "7 dias", label: "Para MVP Completo" },
    { number: "10/10", label: "Segurança Auditada" },
  ];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 -mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 text-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-gold-lg animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gold glow-text mb-3 transition-transform duration-300 group-hover:scale-110">
              {stat.number}
            </div>
            <div className="text-sm md:text-base text-silver uppercase tracking-wider font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
