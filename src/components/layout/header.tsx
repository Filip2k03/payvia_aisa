"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Code, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { useLanguage } from "@/context/language-context";


function LanguageSwitcher() {
  const { language, toggleLanguage, translations } = useLanguage();

  return (
      <Button variant="ghost" size="icon" onClick={toggleLanguage} className="w-auto px-3">
          <Languages className="h-5 w-5 mr-2" />
          <span className="font-semibold">{language.toUpperCase()}</span>
      </Button>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { translations } = useLanguage();

  const navLinks = [
    { name: translations.header.about, href: "#about" },
    { name: translations.header.services, href: "#services" },
    { name: translations.header.projects, href: "#projects" },
    { name: translations.header.posts, href: "#posts" },
    { name: translations.header.budget, href: "#budget" },
    { name: translations.header.team, href: "#team" },
    { name: translations.header.feedback, href: "#feedback" },
    { name: translations.header.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
        const headerOffset = 80; // height of the sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-card/80 backdrop-blur-lg border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Code className="h-7 w-7 text-accent" />
          <span>Payvia</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button variant="link" asChild key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2"
              >
                {link.name}
              </a>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
             <LanguageSwitcher />
          </div>
          <ModeToggle />
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
                    <Code className="h-6 w-6 text-accent" />
                    <span>Payvia</span>
                  </Link>
                   <div className="border-t pt-4">
                     <LanguageSwitcher />
                   </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
