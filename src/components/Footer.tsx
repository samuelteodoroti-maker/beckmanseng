import { Instagram, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import logo from "@/assets/beckmans-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 pt-24 pb-12 bg-muted/5 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-accent/5 blur-[120px] -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">
          <div className="sm:col-span-2 md:col-span-2 space-y-4">
            <img src={logo.url} alt="Beckmans Engenharia" className="h-12 sm:h-14 w-auto" />
            <p className="text-muted-foreground max-w-md">
              Nossa inovação é o caminho, nossa qualidade é a certeza. Transformamos ideias em projetos com excelência.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-accent transition">Consultoria em Engenharia</a></li>
              <li><a href="#services" className="hover:text-accent transition">Segurança do Trabalho</a></li>
              <li><a href="#services" className="hover:text-accent transition">Reforma e Construções</a></li>
              <li><a href="#services" className="hover:text-accent transition">Projetos 2D e 3D</a></li>
              <li><a href="#services" className="hover:text-accent transition">Vistorias e Laudos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent shrink-0" /> (21) 98223-4712</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> <span className="break-all">andrew@beckmanseng.com</span></li>
              <li>
                <a
                  href="https://www.instagram.com/beckmans.engenharia/"
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition"
                >
                  <Instagram className="h-4 w-4 text-accent" /> @beckmans.engenharia
                </a>
              </li>
              <li>
                <a
                  href="https://br.linkedin.com/company/beckmans-engenharia"
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition"
                >
                  <Linkedin className="h-4 w-4 text-accent" /> Beckmans Engenharia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground text-center md:text-left">
          <p>© {new Date().getFullYear()} Beckmans Engenharia · CNPJ 55.391.051/0001-83 · Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <p>CREA · Responsabilidade Técnica</p>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 text-accent hover:opacity-80 transition-all hover:-translate-y-1"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="font-semibold uppercase tracking-widest text-[10px] sm:text-xs">Voltar ao topo</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
