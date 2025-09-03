"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export default function About() {
  const { translations } = useLanguage();
  return (
    <section id="about" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              {translations.about.title}
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              {translations.about.p1}
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              {translations.about.p2}
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/800/600"
                  alt={translations.about.imageAlt}
                  data-ai-hint="team collaboration"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
