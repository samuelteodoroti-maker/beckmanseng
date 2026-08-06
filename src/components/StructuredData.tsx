import { Helmet } from "react-helmet";

export const StructuredData = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Beckmans Engenharia",
            "url": "https://beckmans-engenharia.lovable.app",
            "logo": "https://beckmans-engenharia.lovable.app/favicon.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-21-98223-4712",
              "contactType": "customer service",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
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
