"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Briefcase, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Project } from "@/lib/types";

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="h-full flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-background/50">
    <CardHeader className="p-0">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          data-ai-hint={project.image_hint}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col p-6">
      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
      <CardDescription className="mt-2 flex-grow text-foreground/80">
        {project.description}
      </CardDescription>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        {project.budget && (
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Briefcase className="h-4 w-4" />
            <span>{project.budget}</span>
          </div>
        )}
        <div className="flex gap-2">
            {project.link && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            {project.apk && (
                 <Button variant="default" size="sm" asChild>
                    <a href={project.apk} download>
                        Download APK <Download className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Projects({ projects }: ProjectsProps) {
  const categories = [...new Set(projects.map((p) => p.category))].filter(Boolean);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            A glimpse into the innovative solutions we've delivered for our clients.
          </p>
        </div>
        <div className="mt-12">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mx-auto max-w-lg h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="py-2">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <Carousel
                  opts={{
                    align: "start",
                    loop: projects.filter((p) => p.category === category).length > 2,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {projects
                      .filter((p) => p.category === category)
                      .map((project, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                          <div className="h-full">
                            <ProjectCard project={project} />
                          </div>
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </Carousel>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
