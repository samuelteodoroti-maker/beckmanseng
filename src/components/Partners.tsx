import { memo, useState } from "react";
import gerdauLogo from "@/assets/logo-gerdau-2048.png.asset.json";
import leCantonLogo from "@/assets/logo-le-canton-v2.png.asset.json";
import grupoRBLogo from "@/assets/grupo-rb-logo-new.png.asset.json";
import naturaLogo from "@/assets/logo-natura.png.asset.json";
import fm2cLogo from "@/assets/logo-fm2c-new.png.asset.json";
import hortifrutiLogo from "@/assets/logo-hortifruti-v2.png.asset.json";

const PARTNERS = [
  { name: "GERDAU", logo: gerdauLogo.url },
  { name: "GRUPO RB", logo: grupoRBLogo.url },
  { name: "LE CANTON", logo: leCantonLogo.url },
  { name: "NATURA", logo: naturaLogo.url },
  { name: "FM2C", logo: fm2cLogo.url },
  { name: "HORTIFRUTI", logo: hortifrutiLogo.url },
];

export const Partners = memo(() => {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <section className="py-20 md:py-28 surface-white relative border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14 reveal">
          <h2 className="text-h2 font-bold text-primary dark:text-white">
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
              <div className="group relative flex items-center justify-center w-full aspect-video p-4 transition-all duration-300 bg-white dark:bg-white rounded-xl border border-border hover:border-accent shadow-soft overflow-hidden">

                {failed[partner.name] ? (
                  <span className="px-2 text-center font-heading text-sm font-bold text-foreground opacity-60">
                    {partner.name}
                  </span>
                ) : (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    decoding="async"
                    className={`max-h-[85%] max-w-[90%] object-contain transition-all duration-500
                      ${partner.name === "GERDAU" ? "scale-[1.35]" : ""}
                      ${partner.name === "GRUPO RB" ? "scale-[1.8]" : ""}
                      ${partner.name === "FM2C" ? "scale-[1.1]" : ""}
                      ${partner.name === "LE CANTON" ? "scale-[1.15]" : ""}
                    `}
                    onError={() => setFailed((f) => ({ ...f, [partner.name]: true }))}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
