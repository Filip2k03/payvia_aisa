'use server';

/**
 * @fileOverview AI-powered project idea generator for Payvia website.
 *
 * - generateProjectIdeas - Generates project ideas and descriptions.
 * - ProjectIdeaInput - Input type for the project idea generator.
 * - ProjectIdeaOutput - Output type for the project idea generator.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectIdeaInputSchema = z.object({
  companyDescription: z
    .string()
    .describe('Description of Payvia and their areas of expertise.'),
  numberOfProjects: z
    .number()
    .describe('The number of project ideas to generate.'),
});
export type ProjectIdeaInput = z.infer<typeof ProjectIdeaInputSchema>;

const ProjectIdeaOutputSchema = z.array(z.object({
  title: z.string().describe('The title of the project.'),
  description: z.string().describe('A brief description of the project.'),
}));
export type ProjectIdeaOutput = z.infer<typeof ProjectIdeaOutputSchema>;

export async function generateProjectIdeas(input: ProjectIdeaInput): Promise<ProjectIdeaOutput> {
  return generateProjectIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectIdeaPrompt',
  input: {
    schema: ProjectIdeaInputSchema,
  },
  output: {
    schema: ProjectIdeaOutputSchema,
  },
  prompt: `You are a creative director at Payvia, a software company specializing in custom software development, Android & iOS apps, and web applications using modern tools like PHP, Python, Django, React, Vite, DevOps, and advanced database solutions. Payvia excels at enterprise software and innovative tech projects.

  Generate {{numberOfProjects}} realistic project ideas and descriptions that would befit the Payvia mission, for showcasing in their project portfolio to attract clients. The projects should match Payvia's expertise and tech stack, as described above.

  Company Description: {{companyDescription}}

  Format the output as a JSON array of project objects, where each object has a "title" and a "description" field.
  `,
});

const generateProjectIdeasFlow = ai.defineFlow(
  {
    name: 'generateProjectIdeasFlow',
    inputSchema: ProjectIdeaInputSchema,
    outputSchema: ProjectIdeaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
