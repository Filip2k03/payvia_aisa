'use server';
/**
 * @fileOverview A budget calculation flow for estimating software project costs.
 */

import {ai} from '@/ai/genkit';
import {BudgetInputSchema, BudgetOutputSchema, type BudgetInput, type BudgetOutput} from '@/lib/types';


export async function calculateBudget(input: BudgetInput): Promise<BudgetOutput> {
  return calculateBudgetFlow(input);
}

const prompt = ai.definePrompt({
  name: 'budgetPrompt',
  input: {schema: BudgetInputSchema},
  output: {schema: BudgetOutputSchema},
  prompt: `You are an expert project manager at a software development company. Your task is to provide a rough cost estimate for a project in Myanmar Kyats (MMK).

  Base your estimate on the following details:
  - Project Type: {{projectType}}
  - Features: {{#each features}}{{.}}, {{/each}}
  - Complexity: {{complexity}}

  Pricing Guidelines (in MMK):
  - Base cost for a simple website: 1,500,000 MMK
  - Base cost for a mobile app: 3,000,000 MMK
  - Base cost for enterprise software: 10,000,000 MMK

  Feature Costs (add to base):
  - User Authentication: 500,000 MMK
  - Real-time Chat: 1,200,000 MMK
  - E-commerce/Payments: 2,500,000 MMK
  - CMS Integration: 800,000 MMK
  - AI/Genkit Integration: 4,000,000 MMK
  - POS System: 2,000,000 MMK

  Complexity Multiplier:
  - Simple: 1.0x
  - Medium: 1.5x
  - High: 2.5x

  Calculate the total estimated cost and provide a brief, one-sentence explanation for the calculation. For example: "The estimate is based on a simple website with user authentication and medium complexity."
  `,
});

const calculateBudgetFlow = ai.defineFlow(
  {
    name: 'calculateBudgetFlow',
    inputSchema: BudgetInputSchema,
    outputSchema: BudgetOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
