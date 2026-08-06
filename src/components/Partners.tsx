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
    <section className="py-24 bg-muted/20 relative border-y border-border/30">
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mb-14 reveal">
          <div className="flex items-center gap-4 mb-3">
            <span className="section-index">02 —</span>
            <div className="section-chip uppercase tracking-wider">
              Nossos Parceiros
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">
            Empresas que confiam em <span className="text-accent">nosso trabalho.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
          {PARTNERS.map((partner, idx) => (
            <div
              key={partner.name}
              className={`flex items-center justify-center transition-all duration-500 reveal ${
                partner.name === "GRUPO RB" ? "scale-[2.5] md:scale-[3.2]" : ""
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className={`h-28 md:h-40 w-full flex items-center justify-center p-4 rounded-xl transition-colors duration-300 ${
                (partner.name === "GRUPO RB" || partner.name === "FM2C") 
                  ? "bg-foreground/5 dark:bg-transparent" 
                  : ""
              }`}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`max-h-full max-w-full object-contain transform hover:scale-110 transition-transform duration-300 ${
                    (partner.name === "GRUPO RB" || partner.name === "FM2C") 
                      ? "dark:invert-0" 
                      : ""
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span class="text-xl font-bold font-heading opacity-50 text-foreground">${partner.name}</span>`;
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

