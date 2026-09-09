import { memo } from "react";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

export const Contact = memo(function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden surface-navy-deep">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 text-center reveal">
          <div>
            <h2 className="text-h2 font-bold mb-6 text-white">
              Vamos tirar seu projeto <span className="text-accent">do papel.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              Fale diretamente com nossa equipe pelo canal que preferir e conte brevemente o que você precisa.
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch pt-12">
            {[
              {
                icon: Phone,
                label: "WhatsApp",
                 value: SITE.phoneDisplay,
                 href: whatsappUrl("Olá Beckmans! Encontrei o contato pelo site e gostaria de conversar.")
              },
              {
                icon: Mail,
                label: "E-mail",
                 value: SITE.email,
                 href: `mailto:${SITE.email}`
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@beckmans.engenharia",
                 href: SITE.instagram
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Beckmans Engenharia",
                 href: SITE.linkedin
              }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-4 sm:gap-6 bg-primary-foreground/5 border border-primary-foreground/15 hover:border-accent rounded-lg p-6 sm:p-8 hover-lift group transition-all duration-500 min-h-[190px] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(77,201,160,0.1)] group-hover:shadow-[0_0_30px_rgba(77,201,160,0.4)]">
                  <item.icon className="h-7 w-7" />
                </div>
                
                <div className="flex flex-col items-center gap-3 w-full relative z-10">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold opacity-80 group-hover:opacity-100">{item.label}</div>
                  <div className="font-bold text-sm sm:text-base text-primary-foreground group-hover:text-accent transition-colors duration-300 break-words w-full px-1">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
