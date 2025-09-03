import { z } from "zod";

export type Project = {
  title: string;
  description: string;
  image: string;
  image_hint: string;
  link?: string;
  apk?: string;
  category: string;
  budget?: string;
};

export type Reel = {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  description: string;
};

export const BudgetInputSchema = z.object({
  projectType: z.string(),
  features: z.array(z.string()),
  complexity: z.string(),
});
export type BudgetInput = z.infer<typeof BudgetInputSchema>;

export const BudgetOutputSchema = z.object({
  estimatedCost: z.number().describe('The estimated cost in Myanmar Kyats (MMK).'),
  explanation: z.string().describe('A brief explanation of the cost estimate.'),
});
export type BudgetOutput = z.infer<typeof BudgetOutputSchema>;

export const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;
