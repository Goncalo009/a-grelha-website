export function Footer() {
  return (
    <footer className="border-t py-8 bg-muted/50">
      <div className="container grid gap-4 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-lg">A Grelha</h3>
          <p className="text-muted-foreground text-sm mt-1">
            Churrasqueira tradicional no Porto Alto desde 1985.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Links Rápidos</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary">Início</a></li>
            <li><a href="/menu" className="hover:text-primary">Menu</a></li>
            <li><a href="/sobre" className="hover:text-primary">Sobre Nós</a></li>
            <li><a href="/contactos" className="hover:text-primary">Contactos</a></li>
            <li><a href="/encomendas" className="hover:text-primary">Encomendas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Redes Sociais</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="https://instagram.com/agrelha.portoalto" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a></li>
            <li><a href="https://facebook.com/agrelha.portoalto" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a></li>
          </ul>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} A Grelha. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
