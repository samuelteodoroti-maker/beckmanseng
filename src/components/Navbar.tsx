import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/beckmans-logo.png.asset.json";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const links = [
    { id: "home", label: "Início" },
    { id: "services", label: "Serviços" },
    { id: "projects", label: "Portfólio" },
    { id: "about", label: "Sobre" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 group">
            <img src={logo.url} alt="Beckmans Engenharia" className="h-10 w-auto transition-transform group-hover:scale-105" />
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="px-4 py-2 text-sm font-medium rounded-full hover:bg-accent/10 hover:text-accent transition-all"
              >
                {l.label}
              </button>
            ))}
            <div className="mx-2 h-6 w-px bg-border" />
            <ThemeToggle />
            <Button variant="accent" onClick={() => scrollToSection("contact")} className="ml-2 rounded-full">
              Solicitar Orçamento
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 glass rounded-2xl p-4 space-y-1 animate-fade-in">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10 hover:text-accent transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button variant="accent" className="w-full mt-2 rounded-full" onClick={() => scrollToSection("contact")}>
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
