'use server';
/**
 * @fileOverview A simple chat flow for the website's chat widget.
 */

import {ai} from '@/ai/genkit';
import {ChatInputSchema, ChatOutputSchema, type ChatInput, type ChatOutput} from '@/lib/types';


export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are a helpful and friendly customer support assistant for Payvia, a software company.
Your role is to answer user questions about the company, its services, and technology.
Be concise and helpful.

Here is the conversation history:
{{#each history}}
- {{role}}: {{content}}
{{/each}}

Based on the history, what is your response?
`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
