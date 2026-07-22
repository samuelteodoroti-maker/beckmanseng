import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5521982234712?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 group inline-flex items-center gap-2 h-14 pl-4 pr-5 rounded-full bg-accent text-accent-foreground shadow-glow border border-accent/40 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-accent-foreground/15">
        <span className="absolute inset-0 rounded-full bg-accent-foreground/20 animate-ping" />
        <MessageCircle className="h-5 w-5 relative" />
      </span>
      <span className="hidden sm:inline text-sm font-semibold">Fale conosco</span>
    </a>
  );
}