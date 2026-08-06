import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    const footer = document.querySelector("footer");
    const targets = [contact, footer].filter(Boolean) as Element[];
    if (targets.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        setHidden(anyVisible);
      },
      { threshold: 0.1 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const show = visible && !hidden;

  return (
    <a
      href="https://wa.me/5521982234712?text=Ol%C3%A1%20Beckmans!%20Estou%20navegando%20no%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 group inline-flex items-center gap-2 h-14 pl-4 pr-5 rounded-full bg-accent text-accent-foreground shadow-glow border border-accent/40 transition-all duration-500 hover:scale-105 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-accent-foreground/15">
        <span className="absolute inset-0 rounded-full bg-accent-foreground/20 animate-ping group-hover:animate-none" />
        <MessageCircle className="h-5 w-5 relative transition-transform group-hover:scale-110" />
      </span>
      <span className="hidden sm:inline text-sm font-bold tracking-tight">Fale conosco</span>
    </a>
  );
}