import { Helmet } from "react-helmet";
import { SITE } from "@/lib/site";

export const StructuredData = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
            "name": "${SITE.name}",
            "url": "${SITE.url}",
            "logo": "${SITE.url}/favicon.png",
            "taxID": "${SITE.cnpj}",
            "email": "${SITE.email}",
            "areaServed": "${SITE.areaServed}",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-21-98223-4712",
              "contactType": "customer service",
              "areaServed": "Rio de Janeiro",
              "availableLanguage": "pt-BR"
            },
            "sameAs": [
              "https://www.instagram.com/beckmans.engenharia/",
              "https://br.linkedin.com/company/beckmans-engenharia"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};
