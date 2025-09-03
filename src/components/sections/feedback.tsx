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
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John D.",
    role: "CEO of TechCorp",
    avatar: "https://picsum.photos/100/100?random=12",
    rating: 5,
    testimonial:
      "Payvia Solutions delivered an outstanding product that exceeded our expectations. Their team is professional, skilled, and incredibly responsive. Highly recommended!",
  },
  {
    name: "Jane S.",
    role: "Project Manager, Innovate LLC",
    avatar: "https://picsum.photos/100/100?random=13",
    rating: 5,
    testimonial:
      "Working with Payvia has been a game-changer for our mobile app. The UI/UX is fantastic, and the performance is flawless. A truly five-star experience.",
  },
  {
    name: "Mike T.",
    role: "Founder, StartupX",
    avatar: "https://picsum.photos/100/100?random=14",
    rating: 4,
    testimonial:
      "The custom software they developed streamlined our operations significantly. There were a few delays, but the final product was well worth the wait.",
  },
    {
    name: "Sarah L.",
    role: "CTO, Global Logistics",
    avatar: "https://picsum.photos/100/100?random=15",
    rating: 5,
    testimonial:
        "The logistics platform is robust and scalable. Payvia's expertise in enterprise software is evident. They are a reliable and expert partner.",
    },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
        }`}
      />
    ))}
  </div>
);

export default function Feedback() {
  return (
    <section id="feedback" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Real feedback from businesses we've helped succeed.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-between p-6 shadow-lg bg-background">
                    <div>
                        <Rating rating={item.rating} />
                        <p className="mt-4 text-foreground/90 text-lg italic">
                        "{item.testimonial}"
                        </p>
                    </div>
                    <CardContent className="p-0 pt-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-primary">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
