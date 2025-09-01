import { Card } from "@/components/ui/card";
import { Globe, Hash, Package, Barcode } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  const projects = [
    {
      icon: Globe,
      name: "Sherikah.com",
      description: "A digital agency for websites & creative services in the Middle East.",
      url: "https://sherikah.com",
      category: "Digital Agency"
    },
    {
      icon: Barcode,
      name: "Barcode.free",
      description: "Tool to generate barcodes in bulk—fast, free, and accurate.",
      url: "https://barcode.free",
      category: "SaaS Tool"
    },
    {
      icon: Package,
      name: "DPA.ad",
      description: "Dynamic product ad generator with smart visuals for catalog ads.",
      url: "https://dpa.ad",
      category: "Marketing Tool"
    }
  ];

  // SEO structured data
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Salbiz",
      "url": "https://salbiz.com",
      "logo": "https://salbiz.com/favicon.svg",
      "description": "Salbiz is a parent company fostering agile, creative, and scalable web ventures across the digital ecosystem.",
      "foundingDate": "2024",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@salbiz.com",
        "contactType": "customer service"
      },
      "sameAs": [],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Salbiz Ventures",
        "itemListElement": projects.map((project, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "name": project.name,
          "description": project.description,
          "url": project.url,
          "category": project.category
        }))
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-16 md:px-12 md:py-24 lg:py-32" role="banner">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 salbiz-gradient">
            Salbiz
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground font-medium tracking-tight max-w-4xl mx-auto leading-relaxed">
            Empowering Micro Ventures with Scalable Tech.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main role="main">
        {/* About Section */}
        <section className="px-6 md:px-12 py-16 md:py-24" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="about-heading" className="sr-only">About Salbiz</h2>
            <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed font-normal tracking-tight">
              Salbiz is a parent company fostering agile, creative, and scalable web ventures across the digital ecosystem. We craft tools and services that empower entrepreneurs and businesses in the Middle East and beyond—simple, powerful, and built for growth.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 md:px-12 py-16 md:py-24" aria-labelledby="projects-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="projects-heading" className="sr-only">Our Ventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12" role="list">
              {projects.map((project, index) => (
                <article 
                  key={index}
                  role="listitem"
                  className="group"
                >
                  <Card 
                    className="p-8 lg:p-10 bg-card border-0 rounded-2xl transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer group"
                    onClick={() => window.open(project.url, '_blank')}
                    role="button"
                    tabIndex={0}
                    aria-label={`Visit ${project.name} - ${project.description}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.open(project.url, '_blank');
                      }
                    }}
                  >
                    <div className="space-y-6">
                      <div className="flex justify-start">
                        <project.icon 
                          className="w-12 h-12 lg:w-14 lg:h-14 text-primary group-hover:scale-110 transition-transform duration-200 ease-in-out" 
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-card-foreground mb-4 tracking-tight salbiz-hover-gradient">
                          {project.name}
                        </h3>
                        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed font-normal">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Contact Footer */}
      <footer className="px-6 md:px-12 py-16 md:py-20 border-t border-border mt-16" role="contentinfo">
        <div className="max-w-4xl mx-auto text-center">
          <address className="not-italic">
            <p className="text-lg md:text-xl text-muted-foreground">
              Contact us at{" "}
              <a 
                href="mailto:hello@salbiz.com" 
                className="text-primary hover:underline transition-all duration-200 ease-in-out font-medium"
                aria-label="Send email to Salbiz"
              >
                hello@salbiz.com
              </a>
            </p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default Index;
