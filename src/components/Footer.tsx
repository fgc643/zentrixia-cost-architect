import zentrixiaLogo from "@/assets/zentrixia-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-16 text-center px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            src={zentrixiaLogo} 
            alt="ZENTRIXIA Logo" 
            className="w-64 h-auto object-contain animate-glow-pulse"
          />
        </div>
        
        <div>
          <p className="text-xl text-foreground">
            CNPJ: <span className="text-gold font-semibold">50.577.597/0001-00</span>
          </p>
        </div>
        
        <p className="text-2xl text-gold italic font-light tracking-wider">
          Elite. Unrivaled. Yours.
        </p>
        
        <p className="text-lg text-foreground font-medium pt-4">
          © 2025 ZENTRIXIA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
