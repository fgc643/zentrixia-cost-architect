import { Building, Briefcase, Handshake } from "lucide-react";

export const Opportunities = () => {
  const opportunities = [
    {
      icon: Building,
      title: "Posições CLT",
      roles: [
        "Tech Lead",
        "Arquiteto de Soluções",
        "Engineering Manager",
        "Staff/Principal Engineer"
      ],
      details: "Full-time ou híbrido • Remoto preferencial"
    },
    {
      icon: Briefcase,
      title: "Consultoria PJ",
      roles: [
        "Arquitetura de Infraestrutura",
        "Migração Cloud → VPS",
        "Auditoria DevOps/Segurança",
        "Documentação Técnica"
      ],
      details: "Projetos específicos • Via ZENTRIXIA (CNPJ)"
    },
    {
      icon: Handshake,
      title: "Parcerias",
      roles: [
        "Co-founder / CTO",
        "Tech Advisor",
        "Strategic Partner",
        "Board Member"
      ],
      details: "Equity + Compensação • Projetos de alto impacto"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 md:p-12 lg:p-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Aberto Para Oportunidades
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed">
            Explorando colaborações estratégicas que agreguem desafios técnicos 
            e permitam entregar impacto em escala enterprise
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            return (
              <div
                key={index}
                className="group bg-darker/50 backdrop-blur-sm border-2 border-primary rounded-2xl p-8 text-center transition-all duration-300 hover:border-foreground hover:-translate-y-3 hover:shadow-gold-lg"
              >
                <Icon className="w-16 h-16 text-gold mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
                
                <h3 className="text-2xl md:text-3xl font-bold text-gold mb-6">
                  {opp.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  {opp.roles.map((role, idx) => (
                    <p key={idx} className="text-foreground font-semibold">
                      {role}
                    </p>
                  ))}
                </div>
                
                <p className="text-gold text-sm font-semibold border-t border-primary/30 pt-6">
                  {opp.details.split(' • ').map((detail, idx) => (
                    <span key={idx}>
                      {detail}
                      {idx === 0 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
