import { memo } from "react";
import { Mail, Phone, Instagram, Linkedin, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = memo(function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a1a35] to-slate-950">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 text-center reveal">
          <div>
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
              <div className="section-chip border-accent/30 text-accent uppercase bg-accent/10 backdrop-blur-sm rounded-full border shadow-lg shadow-accent/5 truncate max-w-[70vw] sm:max-w-none">Entre em contato</div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Vamos tirar seu projeto <span className="text-accent drop-shadow-[0_0_15px_rgba(77,201,160,0.4)]">do papel.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Fale conosco pelo canal que preferir e receba um orçamento personalizado em até 24h.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-accent/80 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Disponível agora · Resposta em até 24h
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch pt-12">
            {[
              {
                icon: Phone,
                label: "WhatsApp",
                value: "(21) 98223-4712",
                href: "https://wa.me/5521982234712?text=Ol%C3%A1%20Beckmans!%20Encontrei%20o%20contato%20de%20voc%C3%AAs%20pelo%20site%20e%20gostaria%20de%20conversar."
              },
              {
                icon: Mail,
                label: "E-mail",
                value: "andrew@beckmanseng.com",
                href: "mailto:andrew@beckmanseng.com"
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@beckmans.engenharia",
                href: "https://www.instagram.com/beckmans.engenharia/"
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Beckmans Engenharia",
                href: "https://br.linkedin.com/company/beckmans-engenharia"
              }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center gap-4 sm:gap-6 bg-slate-900/40 backdrop-blur-md border border-accent/20 hover:border-accent rounded-3xl p-6 sm:p-8 hover-lift group transition-all duration-500 shadow-2xl min-h-[160px] sm:aspect-square relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(77,201,160,0.1)] group-hover:shadow-[0_0_30px_rgba(77,201,160,0.4)]">
                  <item.icon className="h-7 w-7" />
                </div>
                
                <div className="flex flex-col items-center gap-3 w-full relative z-10">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold opacity-80 group-hover:opacity-100">{item.label}</div>
                  <div className="font-bold text-sm sm:text-base md:text-lg text-white group-hover:text-accent transition-colors duration-300 break-all w-full px-1">
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
