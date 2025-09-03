import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Smartphone, Globe } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business needs, from enterprise systems to specialized tools.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: "Android & iOS Apps",
    description: "Beautiful, high-performance native and cross-platform mobile applications for both Android and iOS.",
  },
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: "Web Applications",
    description: "Modern, responsive, and scalable web applications built with the latest front-end and back-end technologies.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We provide a complete suite of development services to bring your vision to life.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-accent/10 p-4 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
