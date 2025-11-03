import founderImage from "@/assets/flavio-silva.jpeg";

export const Founder = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="relative bg-card/30 backdrop-blur-sm border-2 border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
        {/* Tech corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/20" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/20" />
        
        <div className="relative grid md:grid-cols-[300px_1fr] gap-12 items-center">
          {/* Photo */}
          <div className="mx-auto md:mx-0">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <img
                src={founderImage}
                alt="Flávio Silva - Founder & Arquiteto Híbrido"
                className="w-full h-full rounded-full object-cover border-4 border-primary shadow-gold-lg animate-glow-pulse"
              />
            </div>
          </div>
          
          {/* Info */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gold mb-2">
                Flávio Silva
              </h2>
              <p className="text-xl md:text-2xl text-silver">
                Fundador & Arquiteto Híbrido (IA/DevOps/Full-Stack)
              </p>
            </div>
            
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-foreground">Enquanto desenvolvo a ZENTRIXIA</strong>, estou explorando 
                oportunidades de colaboração com empresas que valorizam{" "}
                <strong className="text-gold">inovação radical</strong> e{" "}
                <strong className="text-gold">resultados comprovados</strong>.
              </p>
              
              <p>
                Minha empresa mantém <strong className="text-foreground">infraestrutura em produção</strong> há 30+ dias 
                com <strong className="text-gold">zero downtime</strong>, 
                economizando <strong className="text-gold">$4,140/ano</strong> vs AWS em um único projeto.
              </p>
              
              <p>
                Busco projetos que agreguem <strong className="text-foreground">desafios técnicos significativos</strong>{" "}
                e permitam aplicar minha expertise em <strong className="text-foreground">escala enterprise</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
