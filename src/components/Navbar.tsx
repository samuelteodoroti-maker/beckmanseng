import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { whatsappUrl } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    const ids = ["home", "services", "projects", "about"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) {
      if (location.pathname === "/inspecoes") setActive("inspecoes");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [location.pathname]);

  const links: { id: string; label: string; to: string }[] = [
    { id: "home", label: "Início", to: "/" },
    { id: "services", label: "Serviços", to: "/servicos" },
    { id: "inspecoes", label: "Vistorias", to: "/inspecoes" },
    { id: "projects", label: "Portfólio", to: "/portfolio" },
    { id: "videos", label: "Vídeos", to: "/videos" },
    { id: "about", label: "Sobre", to: "/sobre" },
    { id: "contact", label: "Contato", to: "/contato" },
  ];

  return (
    <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-3 focus:font-bold focus:text-accent-foreground">
      Pular para o conteúdo
    </a>
    <nav aria-label="Navegação principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
         scrolled ? "bg-background/85 backdrop-blur-xl py-2 shadow-soft border-border" : "bg-background py-3 sm:py-4 border-border/70"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
            <img src="/favicon.png" alt="" width="64" height="64" className="h-10 w-10 sm:h-12 sm:w-12 transition-transform group-hover:scale-[1.02]" />
            <span className="leading-none" aria-label="Beckmans Engenharia">
              <span className="block font-heading text-lg font-black tracking-tight text-foreground sm:text-xl">BECKMANS</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.24em] text-accent sm:text-[10px]">Engenharia</span>
            </span>
          </Link>


          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              l.to ? (
                <Link
                  key={l.id}
                  to={l.to}
                  aria-current={location.pathname === l.to ? "page" : undefined}
                  className={`relative px-3 py-2 text-sm font-bold transition-all duration-300 ${
                    location.pathname === l.to
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:bg-accent/5 hover:text-accent"
                  }`}
                >
                  {l.label}
                  {location.pathname === l.to && (
                    <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-1 w-1 rounded-full bg-accent" />
                  )}
                </Link>
              ) : (
                 <Button variant="ghost"
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                   aria-current={active === l.id ? "location" : undefined}
                   className={`relative px-3 py-2 text-sm font-bold transition-all duration-300 ${
                    active === l.id
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:bg-accent/5 hover:text-accent"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-1 w-1 rounded-full bg-accent" />
                  )}
                 </Button>
              )
            ))}
            <div className="mx-2 h-6 w-px bg-border" />
            <ThemeToggle />
            <Button variant="accent" asChild className="ml-2 rounded-full">
              <a
                href={whatsappUrl("Olá Beckmans! Vim pelo site e gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-3 glass rounded-lg border border-border p-3 space-y-1 animate-in fade-in slide-in-from-top-4 duration-300">
            {links.map((l) => (
              l.to ? (
                <Link
                  key={l.id}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-4 py-4 rounded-2xl hover:bg-accent/10 hover:text-accent transition-colors font-bold text-base"
                >
                  {l.label}
                </Link>
              ) : (
                 <Button variant="ghost"
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                   className="flex w-full justify-start px-4 py-5 hover:bg-accent/10 hover:text-accent transition-colors font-bold text-base"
                >
                  {l.label}
                 </Button>
              )
            ))}
            <Button variant="accent" className="w-full mt-4 h-14 rounded-full" asChild>
              <a
                href={whatsappUrl("Olá Beckmans! Vim pelo site e gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        )}
      </div>
      {/* Scroll progress indicator */}
      <div
        className="absolute left-0 bottom-0 h-0.5 bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </nav>
    </>
  );
}
