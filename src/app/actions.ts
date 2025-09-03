"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your entries.",
    };
  }

  // In a real application, you would process the data here,
  // e.g., send an email, save to a database, etc.
  console.log("Form submitted successfully:", validatedFields.data);

  return {
    success: true,
    message: "Thank you for your message! We will get back to you shortly.",
  };
}
