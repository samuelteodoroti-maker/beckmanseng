import { useReveal } from "@/hooks/use-reveal";

const PARTNERS = [
  { name: "GERDAU", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gerdau_logo.svg/2560px-Gerdau_logo.svg.png" },
  { name: "GRUPO RB", logo: "https://gruporb.com.br/wp-content/uploads/2021/05/logo-rb.png" },
  { name: "LE CANTON", logo: "https://lecanton.com.br/wp-content/uploads/2021/11/logo-le-canton.png" },
  { name: "NATURA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Natura_Logo.svg/1280px-Natura_Logo.svg.png" },
  { name: "FM2C", logo: "https://fm2c.com.br/wp-content/uploads/2021/03/logo-fm2c.png" },
  { name: "HORTIFRUTI", logo: "https://hortifruti.com.br/static/media/logo.8d277d33.svg" },
];

export const Partners = () => {
  useReveal();

  return (
    <section className="py-20 bg-muted/30 overflow-hidden relative">
      <div className="container px-4 mb-10 relative z-10">
        <div className="flex items-center gap-4 mb-2 reveal">
          <span className="section-index">02 —</span>
          <div className="section-chip uppercase tracking-wider">
            Nossos Parceiros
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-heading reveal" style={{ transitionDelay: "100ms" }}>
          Empresas que confiam em <span className="text-accent">nosso trabalho.</span>
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden py-10">
        <div className="animate-marquee whitespace-nowrap flex items-center min-w-full">
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="mx-12 md:mx-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100"
            >
              <div className="h-12 md:h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-[160px] md:max-w-[200px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span class="text-2xl font-bold font-heading opacity-50 text-foreground">${partner.name}</span>`;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Repeating for seamless loop */}
        <div className="absolute top-10 left-0 animate-marquee2 whitespace-nowrap flex items-center min-w-full">
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div
              key={`${partner.name}-copy-${idx}`}
              className="mx-12 md:mx-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100"
            >
              <div className="h-12 md:h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-[160px] md:max-w-[200px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span class="text-2xl font-bold font-heading opacity-50 text-foreground">${partner.name}</span>`;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient masks for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

