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
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container px-4 mb-10">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-index">02 —</span>
          <div className="h-[1px] w-12 bg-primary/30"></div>
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            Nossos Parceiros
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Empresas que confiam em nosso trabalho
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="mx-12 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="h-12 md:h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-[180px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-xl font-bold font-heading opacity-50">${partner.name}</span>`;
                  }}
                />
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {PARTNERS.map((partner) => (
            <div
              key={`${partner.name}-clone`}
              className="mx-12 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="h-12 md:h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-[180px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-xl font-bold font-heading opacity-50">${partner.name}</span>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Repeating the marquee content to ensure it fills the width and loops correctly */}
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
          {PARTNERS.map((partner) => (
            <div
              key={`${partner.name}-copy`}
              className="mx-12 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="h-12 md:h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-[180px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-xl font-bold font-heading opacity-50">${partner.name}</span>`;
                  }}
                />
              </div>
            </div>
          ))}
          {PARTNERS.map((partner) => (
            <div
              key={`${partner.name}-copy-clone`}
              className="mx-12 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="h-12 md:h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-[180px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-xl font-bold font-heading opacity-50">${partner.name}</span>`;
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
