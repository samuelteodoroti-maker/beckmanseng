import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/beckmans-logo.png.asset.json";

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
  }, []);

  useEffect(() => {
    const ids = ["home", "services", "projects", "about", "contact"];
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
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const links: { id: string; label: string; to?: string }[] = [
    { id: "home", label: "Início" },
    { id: "services", label: "Serviços", to: "/servicos" },
    { id: "inspecoes", label: "Vistorias", to: "/inspecoes" },
    { id: "projects", label: "Portfólio", to: "/portfolio" },
    { id: "about", label: "Sobre", to: "/sobre" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "glass py-2 shadow-elegant border-b border-white/20 dark:border-white/10" : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
            <img src={logo.url} alt="Beckmans Engenharia" className="h-8 sm:h-10 w-auto transition-transform group-hover:scale-105" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              l.isExternal ? (
                <Link
                  key={l.id}
                  to="/inspecoes"
                  className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    active === l.id
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:bg-accent/5 hover:text-accent"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-1 w-1 rounded-full bg-accent" />
                  )}
                </Link>
              ) : (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                  className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    active === l.id
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:bg-accent/5 hover:text-accent"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-1 w-1 rounded-full bg-accent" />
                  )}
                </button>
              )
            ))}
            <div className="mx-2 h-6 w-px bg-border" />
            <ThemeToggle />
            <Button variant="accent" asChild className="ml-2 rounded-full">
              <a
                href="https://wa.me/5521982234712?text=Ol%C3%A1%20Beckmans!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
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
          <div className="lg:hidden mt-4 glass rounded-3xl p-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
            {links.map((l) => (
              l.isExternal ? (
                <Link
                  key={l.id}
                  to="/inspecoes"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-4 py-4 rounded-2xl hover:bg-accent/10 hover:text-accent transition-colors font-bold text-base"
                >
                  {l.label}
                </Link>
              ) : (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                  className="block w-full text-left px-4 py-4 rounded-2xl hover:bg-accent/10 hover:text-accent transition-colors font-bold text-base"
                >
                  {l.label}
                </button>
              )
            ))}
            <Button variant="accent" className="w-full mt-4 h-14 rounded-full" asChild>
              <a
                href="https://wa.me/5521982234712?text=Ol%C3%A1%20Beckmans!%20Vim%20pelo%20site%20(menu%20mobile)%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
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
  );
}
