import { Card } from "@/components/ui/card";
import { Globe, Hash, Package } from "lucide-react";

const Index = () => {
  const projects = [
    {
      icon: Globe,
      name: "Sherikah.com",
      description: "A digital agency for websites & creative services in the Middle East.",
      url: "https://sherikah.com"
    },
    {
      icon: Hash,
      name: "Barcode.free",
      description: "Tool to generate barcodes in bulk—fast, free, and accurate.",
      url: "https://barcode.free"
    },
    {
      icon: Package,
      name: "DPA.ad",
      description: "Dynamic product ad generator with smart visuals for catalog ads.",
      url: "https://dpa.ad"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-8 md:px-12 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium text-primary tracking-tight mb-4">
            Salbiz
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-medium tracking-tight">
            Empowering Micro Ventures with Scalable Tech.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Salbiz is a parent company fostering agile, creative, and scalable web ventures across the digital ecosystem. We craft tools and services that empower entrepreneurs and businesses in the Middle East and beyond—simple, powerful, and built for growth.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-0 rounded-2xl transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg cursor-pointer group"
                onClick={() => window.open(project.url, '_blank')}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <project.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-200 ease-in-out" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-card-foreground mb-2 tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground">
            Contact us at{" "}
            <a 
              href="mailto:hello@salbiz.com" 
              className="text-primary hover:underline transition-all duration-200 ease-in-out"
            >
              hello@salbiz.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
