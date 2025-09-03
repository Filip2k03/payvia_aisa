"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { calculateBudget } from "@/ai/flows/calculate-budget";
import type { BudgetInput, BudgetOutput } from "@/lib/types";
import { Loader2 } from "lucide-react";

const features = [
  { id: "auth", label: "User Authentication" },
  { id: "chat", label: "Real-time Chat" },
  { id: "ecommerce", label: "E-commerce/Payments" },
  { id: "cms", label: "CMS Integration" },
  { id: "ai", label: "AI/Genkit Integration" },
];

export default function BudgetCalculator() {
  const [projectType, setProjectType] = useState("website");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [complexity, setComplexity] = useState("simple");
  const [result, setResult] = useState<BudgetOutput | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleFeatureChange = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const input: BudgetInput = {
        projectType,
        features: selectedFeatures,
        complexity,
      };
      const response = await calculateBudget(input);
      setResult(response);
    });
  };

  return (
    <section id="budget" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Project Budget Calculator
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Get a rough estimate for your project in Myanmar Kyats (MMK).
          </p>
        </div>
        <Card className="mt-12 max-w-3xl mx-auto shadow-lg">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Configure Your Project</CardTitle>
              <CardDescription>Select the options that best fit your project requirements.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Project Type</Label>
                <RadioGroup value={projectType} onValueChange={setProjectType} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="website" id="website" />
                    <Label htmlFor="website">Website</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mobile_app" id="mobile_app" />
                    <Label htmlFor="mobile_app">Mobile App</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="enterprise" />
                    <Label htmlFor="enterprise">Enterprise Software</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold">Features</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {features.map((feature) => (
                    <div key={feature.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature.id}
                        checked={selectedFeatures.includes(feature.label)}
                        onCheckedChange={() => handleFeatureChange(feature.label)}
                      />
                      <Label htmlFor={feature.id} className="font-normal">
                        {feature.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold">Complexity</Label>
                <RadioGroup value={complexity} onValueChange={setComplexity} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="simple" id="simple" />
                    <Label htmlFor="simple">Simple</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">High</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Calculate Estimate
              </Button>

              {result && (
                <Card className="w-full bg-accent/10 border-accent">
                  <CardHeader>
                    <CardTitle className="text-primary">Estimated Cost</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">
                      {result.estimatedCost.toLocaleString()} MMK
                    </p>
                    <p className="text-muted-foreground mt-2">{result.explanation}</p>
                  </CardContent>
                </Card>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
