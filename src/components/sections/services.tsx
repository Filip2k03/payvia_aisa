"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Smartphone, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function Services() {
  const { translations } = useLanguage();
  const services = [
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: translations.services.t1,
      description: translations.services.d1,
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: translations.services.t2,
      description: translations.services.d2,
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: translations.services.t3,
      description: translations.services.d3,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            {translations.services.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            {translations.services.subtitle}
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
