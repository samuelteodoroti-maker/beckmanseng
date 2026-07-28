import { Mail, Phone, Instagram, Linkedin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 mesh-bg" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10 text-center reveal">
          <div>
            <div className="section-chip mb-6">Entre em contato</div>
            <h2 className="text-h2 font-bold mb-4">
                Vamos tirar seu projeto <span className="text-accent">do papel.</span>
              </h2>
            <p className="text-lead text-muted-foreground">
              Fale conosco pelo canal que preferir e receba um orçamento personalizado em até 24h.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left reveal">
              <a
                href="https://wa.me/5521982234712"
                target="_blank"
                rel="noreferrer"
              className="flex flex-col items-start gap-3 glass rounded-2xl p-5 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold">(21) 98223-4712</div>
                </div>
              </a>

              <a
                href="mailto:andrew@beckmanseng.com"
              className="flex flex-col items-start gap-3 glass rounded-2xl p-5 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</div>
                <div className="font-semibold break-all">andrew@beckmanseng.com</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/beckmans.engenharia/"
                target="_blank"
                rel="noreferrer"
              className="flex flex-col items-start gap-3 glass rounded-2xl p-5 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
                  <div className="font-semibold">@beckmans.engenharia</div>
                </div>
              </a>

              <a
                href="https://br.linkedin.com/company/beckmans-engenharia"
                target="_blank"
                rel="noreferrer"
              className="flex flex-col items-start gap-3 glass rounded-2xl p-5 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</div>
                  <div className="font-semibold">Beckmans Engenharia</div>
                </div>
              </a>
          </div>

          <Button
            asChild
            variant="accent"
            size="lg"
            className="rounded-full h-14 px-10 text-base group shadow-glow"
          >
            <a
              href="https://wa.me/5521982234712?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
