import { Helmet } from "react-helmet";
import { SITE } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

export function Seo({ title, description, path = "" }: SeoProps) {
  const canonical = `${SITE.url}${path}`;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="geo.region" content="BR-RJ" />
      <meta name="geo.placename" content="Rio de Janeiro" />
    </Helmet>
  );
}