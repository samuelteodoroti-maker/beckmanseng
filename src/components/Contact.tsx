import { useState } from "react";
import { Mail, Phone, Instagram, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0A%0AServiço: ${form.service || "—"}%0AE-mail: ${form.email}%0ATelefone: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/5521982234712?text=${text}`, "_blank");
    toast({ title: "Redirecionando…", description: "Continue a conversa no WhatsApp." });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 mesh-bg" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">Entre em contato</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-4">
                Vamos tirar seu projeto <span className="text-accent">do papel.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Fale conosco e receba um orçamento personalizado em até 24h.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/5521982234712"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 hover-lift group"
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
                className="flex items-center gap-4 glass rounded-2xl p-5 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</div>
                  <div className="font-semibold">andrew@beckmanseng.com</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/beckmans.engenharia/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
                  <div className="font-semibold">@beckmans.engenharia</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-10 space-y-5 shadow-elegant">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome completo *</label>
                  <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 bg-background/60" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone *</label>
                  <Input required placeholder="(00) 00000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-12 bg-background/60" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-mail *</label>
                <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 bg-background/60" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Serviço de interesse</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full h-12 rounded-md border border-input bg-background/60 px-3 text-sm"
                >
                  <option value="">Selecione…</option>
                  <option>Vistoria</option>
                  <option>Inspeção</option>
                  <option>Construção / Reforma</option>
                  <option>Consultoria em Engenharia</option>
                  <option>Consultoria em Seg. do Trabalho</option>
                  <option>Projetos 2D e 3D</option>
                  <option>Laudos Técnicos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sobre seu projeto *</label>
                <Textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-background/60" />
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full rounded-full h-14 text-base group shadow-glow">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar via WhatsApp
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda em ser contatado pela equipe Beckmans.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
