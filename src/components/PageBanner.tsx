import { memo } from "react";

type PageBannerProps = {
  image: string;
  alt: string;
  objectPosition?: string;
  eyebrow?: string;
  caption?: string;
  variant?: "wide" | "side";
  className?: string;
};

/**
 * Banner visual reutilizável com foto real de campo.
 * "wide"  → faixa panorâmica com degradê escuro sobre a imagem.
 * "side"  → cartão vertical para acompanhar um bloco de texto.
 */
export const PageBanner = memo(function PageBanner({
  image,
  alt,
  objectPosition = "center",
  eyebrow,
  caption,
  variant = "wide",
  className = "",
}: PageBannerProps) {
  const isWide = variant === "wide";

  return (
    <figure
      className={`group relative overflow-hidden rounded-3xl border border-accent/20 shadow-elegant ${
        isWide ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/5]"
      } ${className}`}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ objectPosition }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.04] motion-reduce:transform-none"
      />

      {/* Degradê para contraste do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" aria-hidden="true" />

      {/* Linhas técnicas discretas */}
      <div
        className="pointer-events-none absolute inset-4 rounded-2xl border border-white/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 top-1/3 h-px w-40 bg-accent/60 blur-[1px]"
        aria-hidden="true"
      />

      {(eyebrow || caption) && (
        <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-primary-foreground">
          {eyebrow && (
            <span className="inline-flex rounded-full border border-accent/30 bg-primary/60 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-md">
              {eyebrow}
            </span>
          )}
          {caption && (
            <p className="mt-3 max-w-2xl text-base sm:text-lg font-semibold leading-snug text-primary-foreground drop-shadow">
              {caption}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
});
