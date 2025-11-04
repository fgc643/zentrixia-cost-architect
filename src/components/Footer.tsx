export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-12 text-center px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <p className="text-4xl font-black text-gold mb-2 hero-title">ZENTRIXIA</p>
          <p className="text-silver">
            CNPJ: <span className="text-gold font-semibold">50.577.597/0001-00</span>
          </p>
        </div>
        
        <p className="text-2xl text-gold italic font-light tracking-wider">
          Elite. Unrivaled. Yours.
        </p>
        
        <p className="text-sm text-muted-foreground pt-6">
          © 2025 ZENTRIXIA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
