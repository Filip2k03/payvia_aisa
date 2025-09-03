import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
              About Payvia Solutions
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Payvia Solutions is a dynamic software development company dedicated to delivering high-quality, scalable, and innovative technology solutions. We partner with businesses to transform their ideas into reality, from complex enterprise systems to user-friendly mobile applications.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Our expertise spans across a wide range of modern technologies, including PHP, Python, Django, React, and Vite. With a strong focus on DevOps practices and advanced database architecture, we ensure our solutions are not only powerful but also robust and secure.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/800/600"
                  alt="Team working on a project"
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
