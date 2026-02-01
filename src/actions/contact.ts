'use server';

import { contactSchema } from '@/schemas/contact';

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: 'Por favor, corrija os erros no formulario.',
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // TODO: Integrate with email service (Resend, SendGrid, etc.)
  // For now, we just log the submission
  console.log('Contact form submission:', result.data);

  return {
    success: true,
    message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
  };
}
