'use server';

/**
 * @fileOverview Enhances internship descriptions with an AI-generated summary.
 *
 * - enhanceInternshipDescription - A function that enhances an internship description.
 * - EnhanceInternshipDescriptionInput - The input type for the enhanceInternshipDescription function.
 * - EnhanceInternshipDescriptionOutput - The return type for the enhanceInternshipDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceInternshipDescriptionInputSchema = z.object({
  description: z.string().describe('The original internship description.'),
});
export type EnhanceInternshipDescriptionInput = z.infer<
  typeof EnhanceInternshipDescriptionInputSchema
>;

const EnhanceInternshipDescriptionOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise AI-generated summary of the internship description.'),
});
export type EnhanceInternshipDescriptionOutput = z.infer<
  typeof EnhanceInternshipDescriptionOutputSchema
>;

export async function enhanceInternshipDescription(
  input: EnhanceInternshipDescriptionInput
): Promise<EnhanceInternshipDescriptionOutput> {
  return enhanceInternshipDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceInternshipDescriptionPrompt',
  input: {schema: EnhanceInternshipDescriptionInputSchema},
  output: {schema: EnhanceInternshipDescriptionOutputSchema},
  prompt: `Summarize the following internship description in one short sentence:\n\n{{description}}`,
});

const enhanceInternshipDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceInternshipDescriptionFlow',
    inputSchema: EnhanceInternshipDescriptionInputSchema,
    outputSchema: EnhanceInternshipDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
