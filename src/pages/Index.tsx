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
      <header className="px-6 py-16 md:px-12 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-primary tracking-tight mb-8">
            Salbiz
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl text-muted-foreground font-medium tracking-tight max-w-4xl mx-auto leading-relaxed">
            Empowering Micro Ventures with Scalable Tech.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-2xl lg:text-3xl text-foreground leading-relaxed font-normal tracking-tight">
            Salbiz is a parent company fostering agile, creative, and scalable web ventures across the digital ecosystem. We craft tools and services that empower entrepreneurs and businesses in the Middle East and beyond—simple, powerful, and built for growth.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-8 lg:p-10 bg-card border-0 rounded-2xl transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer group"
                onClick={() => window.open(project.url, '_blank')}
              >
                <div className="space-y-6">
                  <div className="flex justify-start">
                    <project.icon className="w-12 h-12 lg:w-14 lg:h-14 text-primary group-hover:scale-110 transition-transform duration-200 ease-in-out" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-card-foreground mb-4 tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
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
      <footer className="px-6 md:px-12 py-16 md:py-20 border-t border-border mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground">
            Contact us at{" "}
            <a 
              href="mailto:hello@salbiz.com" 
              className="text-primary hover:underline transition-all duration-200 ease-in-out font-medium"
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
