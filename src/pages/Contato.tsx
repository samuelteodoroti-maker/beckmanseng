import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageBanner } from "@/components/PageBanner";
import { Seo } from "@/components/Seo";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES, SITE, whatsappUrl } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(3, "Informe seu nome completo.").max(80),
  phone: z.string().trim().min(10, "Informe um telefone com DDD.").max(20),
  email: z.string().trim().email("Informe um e-mail válido.").max(120),
  service: z.string().min(1, "Escolha o serviço desejado."),
  message: z.string().trim().min(10, "Descreva brevemente a sua necessidade.").max(1000),
  consent: z.literal(true, { errorMap: () => ({ message: "É preciso autorizar o contato." }) }),
});

type FormValues = z.infer<typeof schema>;

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contato | Beckmans Engenharia",
  url: `${SITE.url}/contato`,
  about: { "@type": "Organization", name: SITE.name, email: SITE.email, telephone: SITE.phoneInternational },
};

const Contato = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const text = [
      "Olá Beckmans! Vim pelo site e gostaria de um orçamento.",
      `Nome: ${values.name}`,
      `Telefone: ${values.phone}`,
      `E-mail: ${values.email}`,
      `Serviço: ${values.service}`,
      `Mensagem: ${values.message}`,
    ].join("\n");
    setSent(true);
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Seo
        title="Contato | Beckmans Engenharia no Rio de Janeiro"
        description="Fale com a Beckmans Engenharia por telefone, WhatsApp ou e-mail e solicite um orçamento de engenharia civil no Rio de Janeiro."
        path="/contato"
      />
      <StructuredData data={CONTACT_SCHEMA} />
      <Navbar />

      <main id="main-content" className="flex-grow pt-28 sm:pt-32">
        <section className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="eyebrow text-accent">Fale com a Beckmans</p>
              <h1 className="text-h1 font-bold text-primary dark:text-white">
                Vamos conversar sobre o seu projeto.
              </h1>
              <p className="text-lead text-muted-foreground">
                Atendimento direto com a nossa equipe técnica no Rio de Janeiro e Grande Rio.
              </p>
              <Button variant="accent" size="lg" asChild className="h-14 rounded-full px-8">
                <a href={whatsappUrl("Olá Beckmans! Quero falar com um engenheiro.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Falar com um engenheiro
                </a>
              </Button>
            </div>
            <PageBanner
              image="/images/projetos/projeto-09.jpg"
              alt="Equipe da Beckmans Engenharia em serviço técnico de campo"
              eyebrow="Atendimento técnico"
              caption="Resposta rápida para vistorias, obras, laudos e consultoria."
            />
          </div>
        </section>

        <section className="surface-light py-16">
          <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <li>
                <a href={`tel:${SITE.phoneInternational}`} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 font-semibold hover-lift">
                  <Phone className="h-5 w-5 text-accent" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappUrl("Olá Beckmans! Vim pelo site.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 font-semibold hover-lift">
                  <MessageCircle className="h-5 w-5 text-accent" /> WhatsApp {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 font-semibold hover-lift">
                  <Mail className="h-5 w-5 shrink-0 text-accent" /> <span className="break-all">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 font-semibold hover-lift">
                  <Instagram className="h-5 w-5 text-accent" /> @beckmans.engenharia
                </a>
              </li>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 font-semibold hover-lift">
                  <Linkedin className="h-5 w-5 text-accent" /> Beckmans Engenharia
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-h3 font-bold text-primary dark:text-white">Solicitar orçamento</h2>
              <p className="text-sm text-muted-foreground">
                Ao enviar, abriremos o WhatsApp oficial da empresa com a sua mensagem já preenchida.
              </p>

              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
                {errors.name && <p role="alert" className="text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} />
                  {errors.phone && <p role="alert" className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
                  {errors.email && <p role="alert" className="text-sm text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Serviço desejado</Label>
                <select
                  id="service"
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  defaultValue=""
                  aria-invalid={!!errors.service}
                  {...register("service")}
                >
                  <option value="" disabled>Selecione…</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Outro assunto">Outro assunto</option>
                </select>
                {errors.service && <p role="alert" className="text-sm text-destructive">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" rows={4} aria-invalid={!!errors.message} {...register("message")} />
                {errors.message && <p role="alert" className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input id="consent" type="checkbox" className="mt-1 h-4 w-4" {...register("consent")} />
                <Label htmlFor="consent" className="text-sm font-normal leading-snug text-muted-foreground">
                  Autorizo o uso dos dados informados para retorno deste contato.
                </Label>
              </div>
              {errors.consent && <p role="alert" className="text-sm text-destructive">{errors.consent.message}</p>}

              <Button type="submit" variant="accent" className="h-12 w-full rounded-full" disabled={isSubmitting}>
                Enviar pelo WhatsApp
              </Button>

              {sent && (
                <p role="status" className="text-sm text-muted-foreground">
                  Abrimos o WhatsApp em uma nova aba. Se não abrir, verifique o bloqueio de pop-ups.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Contato;
