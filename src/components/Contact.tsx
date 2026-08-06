import { Mail, Phone, Instagram, Linkedin, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 mesh-bg" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10 text-center reveal">
          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="section-index">06 —</span>
              <div className="section-chip">Entre em contato</div>
            </div>
            <h2 className="text-h2 font-bold mb-4 tracking-tight">
                Vamos tirar seu projeto <span className="text-accent">do papel.</span>
              </h2>
            <p className="text-lead text-muted-foreground">
              Fale conosco pelo canal que preferir e receba um orçamento personalizado em até 24h.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
              </span>
              Disponível agora · Resposta em até 24h
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center reveal">
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
                className="flex flex-col items-center justify-between gap-6 glass border-white/40 dark:border-white/10 rounded-[2rem] p-8 sm:p-10 lg:p-12 hover-lift group transition-all duration-500 shadow-sm min-h-[300px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 shadow-sm">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="flex flex-col items-center gap-3 w-full mt-auto">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">{item.label}</div>
                  <div className="font-bold text-base sm:text-lg lg:text-xl leading-tight text-balance">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center">
            <Button
              asChild
              variant="accent"
              size="lg"
              className="rounded-full h-14 px-6 sm:px-10 text-base group shadow-glow w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5521982234712?text=Ol%C3%A1%20Beckmans!%20Quero%20conversar%20sobre%20um%20projeto%20de%20engenharia%20e%20receber%20um%20or%C3%A7amento%20personalizado."
                target="_blank"
                rel="noreferrer"
                className="justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full h-14 px-6 sm:px-10 text-base glass border-primary/20 w-full sm:w-auto"
            >
              <a href="mailto:andrew@beckmanseng.com" className="justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Enviar e-mail
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
