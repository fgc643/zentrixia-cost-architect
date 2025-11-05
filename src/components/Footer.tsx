import zentrixiaLogo from "@/assets/zentrixia-logo-new.png";

export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-16 px-4">
      <div className="w-full flex flex-col items-center justify-center space-y-6">
        {/* Logo Centralizada */}
        <div className="w-full flex justify-center items-center">
          <img 
            src={zentrixiaLogo} 
            alt="ZENTRIXIA Logo" 
            className="w-64 h-auto object-contain animate-glow-pulse mx-auto"
          />
        </div>
        
        <div className="text-center w-full">
          <p className="text-xl text-foreground">
            CNPJ: <span className="text-gold font-semibold">50.577.597/0001-00</span>
          </p>
        </div>
        
        <p className="text-2xl text-gold italic font-light tracking-wider text-center w-full">
          Elite. Unrivaled. Yours.
        </p>
        
        <p className="text-lg text-foreground font-medium pt-4 text-center w-full">
          © 2025 ZENTRIXIA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
