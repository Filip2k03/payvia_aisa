"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Reel } from "@/lib/types";
import React from "react";
import { useLanguage } from "@/context/language-context";

interface ReelsProps {
  reels: Reel[];
}

const ReelCard = ({ reel }: { reel: Reel }) => (
  <Card className="h-full w-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
    <CardContent className="p-0 relative">
      <Image
        src={reel.imageUrl}
        alt={reel.title}
        width={300}
        height={500}
        className="object-cover w-full h-full aspect-[9/16]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white font-bold text-lg">{reel.title}</h3>
        <p className="text-white/90 text-sm mt-1">{reel.description}</p>
      </div>
    </CardContent>
  </Card>
);

export default function Reels({ reels }: ReelsProps) {
  const { translations } = useLanguage();
  return (
    <section id="reels" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            {translations.reels.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            {translations.reels.subtitle}
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent>
            {reels.map((reel) => (
              <CarouselItem key={reel.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-1 h-full">
                  <ReelCard reel={reel} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
