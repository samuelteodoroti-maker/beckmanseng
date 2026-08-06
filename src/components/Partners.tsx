import { useReveal } from "@/hooks/use-reveal";
import gerdauLogo from "@/assets/logo-gerdau-2048.png.asset.json";
import leCantonLogo from "@/assets/logo-le-canton-v2.png.asset.json";
import grupoRBLogo from "@/assets/logo-grupo-rb-real.svg.asset.json";
import naturaLogo from "@/assets/logo-natura.png.asset.json";
import fm2cLogo from "@/assets/logo-fm2c-v2.webp.asset.json";
import hortifrutiLogo from "@/assets/logo-hortifruti-v2.png.asset.json";

const PARTNERS = [
  { name: "GERDAU", logo: gerdauLogo.url },
  { name: "GRUPO RB", logo: grupoRBLogo.url },
  { name: "LE CANTON", logo: leCantonLogo.url },
  { name: "NATURA", logo: naturaLogo.url },
  { name: "FM2C", logo: fm2cLogo.url },
  { name: "HORTIFRUTI", logo: hortifrutiLogo.url },
];

export const Partners = () => {
  useReveal();

  return (
    <section className="py-24 bg-muted/30 dark:bg-muted/10 relative border-y border-border/10">
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mb-14 reveal">
          <div className="flex items-center gap-4 mb-3">
            <span className="section-index text-base font-bold">02 —</span>
            <div className="section-chip uppercase tracking-wider text-lg px-6 py-2.5">
              Nossos Parceiros
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">
            Empresas que confiam em <span className="text-accent">nosso trabalho.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
          {PARTNERS.map((partner, idx) => (
            <div
              key={partner.name}
              className="flex items-center justify-center transition-all duration-500 reveal"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="group relative flex items-center justify-center w-full aspect-video p-4 transition-all duration-300 bg-[#0f2b5c]/10 hover:bg-[#0f2b5c]/15 dark:bg-white/5 dark:hover:bg-white/10 rounded-2xl border border-[#0f2b5c]/10 shadow-sm overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`max-h-[85%] max-w-[90%] object-contain transition-all duration-500
                    ${partner.name === "GERDAU" ? "scale-[1.35]" : ""}
                    ${partner.name === "GRUPO RB" ? "scale-[1.8]" : ""}
                    ${partner.name === "FM2C" ? "scale-[1.1]" : ""}
                    ${partner.name === "LE CANTON" ? "scale-[1.15]" : ""}
                  `}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span class="text-sm font-bold font-heading opacity-50 text-foreground text-center px-2">${partner.name}</span>`;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

