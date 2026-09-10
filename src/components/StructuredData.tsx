import { Helmet } from "react-helmet";
import { SITE } from "@/lib/site";

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon.png`,
  taxID: SITE.cnpj,
  email: SITE.email,
  areaServed: SITE.areaServed,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phoneInternational,
    contactType: "customer service",
    areaServed: "Rio de Janeiro",
    availableLanguage: "pt-BR",
  },
  sameAs: [SITE.instagram, SITE.linkedin],
};

export const StructuredData = ({ data }: { data?: Record<string, unknown> }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data ?? ORGANIZATION)}</script>
  </Helmet>
);
