import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
  {
    name: "Filip",
    role: "CEO & Full Stack Developer",
    avatar: "https://picsum.photos/100/100?random=7",
    avatar_hint: "male portrait",
    profileUrl: "https://techyyfilip.vercel.app",
  },
  {
    name: "Zaw Naing Win",
    role: "Marketing Manager & Frontend Developer",
    avatar: "https://picsum.photos/100/100?random=8",
    avatar_hint: "male portrait",
    profileUrl: "#",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            The driving force behind our innovation and success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  data-ai-hint={member.avatar_hint}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="text-center sm:text-left">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="mt-1 text-accent font-medium">{member.role}</CardDescription>
                  {member.profileUrl !== "#" && (
                    <Button variant="ghost" size="sm" asChild className="mt-2 -ml-3">
                      <a href={member.profileUrl} target="_blank" rel="noopener noreferrer">
                        View Profile <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
