import { memo } from "react";
import { Instagram, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import logo from "@/assets/beckmans-logo.png.asset.json";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";

export const Footer = memo(function Footer() {
  return (
    <footer className="relative surface-footer pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">
          <div className="sm:col-span-2 md:col-span-2 space-y-6">
            <img src={logo.url} alt="Beckmans Engenharia" width="230" height="70" loading="lazy" className="h-14 sm:h-[72px] w-auto" />
            <p className="text-white/80 max-w-md">
              Nossa inovação é o caminho, nossa qualidade é a certeza. Transformamos ideias em projetos com excelência.
            </p>
          </div>


          <div>
            <h3 className="font-semibold mb-4 text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/80">
               <li><Link to="/servicos/consultoria-em-engenharia" className="hover:text-accent transition">Consultoria em Engenharia</Link></li>
               <li><Link to="/servicos/seguranca-do-trabalho" className="hover:text-accent transition">Segurança do Trabalho</Link></li>
               <li><Link to="/servicos/reformas-e-construcoes" className="hover:text-accent transition">Reformas e Construções</Link></li>
               <li><Link to="/servicos/projetos-2d-3d-bim" className="hover:text-accent transition">Projetos 2D, 3D e BIM</Link></li>
               <li><Link to="/inspecoes" className="hover:text-accent transition">Vistorias e Inspeções</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Contato</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href={`tel:${SITE.phoneInternational}`} className="flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4 text-accent shrink-0" /> {SITE.phoneDisplay}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="flex items-start gap-2 hover:text-accent"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> <span className="break-all">{SITE.email}</span></a></li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition"
                >
                  <Instagram className="h-4 w-4 text-accent" /> @beckmans.engenharia
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition"
                >
                  <Linkedin className="h-4 w-4 text-accent" /> Beckmans Engenharia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/70 text-center md:text-left">
           <p>© {new Date().getFullYear()} Beckmans Engenharia · CNPJ {SITE.cnpj} · Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 text-accent transition-all hover:-translate-y-1 hover:opacity-80"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="font-semibold uppercase tracking-widest text-[10px] sm:text-xs">Voltar ao topo</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});
