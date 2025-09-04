import React from 'react';
import { Facebook, Instagram, Send, Twitter } from 'lucide-react';

const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter/X' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Send className="h-5 w-5" />, href: '#', name: 'Telegram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
                &copy; {currentYear} Payvia. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
