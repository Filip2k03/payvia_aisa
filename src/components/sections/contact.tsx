"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/language-context";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { translations } = useLanguage();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {translations.contact.button}
    </Button>
  );
}

export default function Contact() {
  const { translations } = useLanguage();
  const initialState: ContactFormState = { success: false, message: "" };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            {translations.contact.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
                <a href="tel:+959123456789">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                </a>
            </Button>
            <Button asChild size="lg" variant="outline">
                <a href="mailto:contact@payvia.asia">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Now
                </a>
            </Button>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{translations.contact.name}</Label>
              <Input id="name" name="name" type="text" placeholder={translations.contact.namePlaceholder} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{translations.contact.email}</Label>
              <Input id="email" name="email" type="email" placeholder={translations.contact.emailPlaceholder} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">{translations.contact.subject}</Label>
              <Input id="subject" name="subject" type="text" placeholder={translations.contact.subjectPlaceholder} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{translations.contact.message}</Label>
              <Textarea id="message" name="message" placeholder={translations.contact.messagePlaceholder} rows={5} required />
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}
