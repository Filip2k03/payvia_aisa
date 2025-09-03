"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function Hero() {
  const { translations } = useLanguage();

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="relative bg-background py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[10px_10px] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-400/[0.05]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl font-headline">
          {translations.hero.title}
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-foreground/80">
          {translations.hero.subtitle}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" onClick={handleScrollToContact}>
            {translations.hero.cta1}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">{translations.hero.cta2}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
