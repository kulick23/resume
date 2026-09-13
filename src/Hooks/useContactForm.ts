import { useCallback, useState } from 'react';
import { EMAILJS_CONFIG } from '../Constants/emailjs';

const EMPTY_FORM = { name: '', email: '', message: '' };

export const useContactForm = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setIsLoading(true);
      setStatus(null);

      try {
        // Loaded on demand: the SDK is only needed once someone actually sends.
        const { default: emailjs } = await import('@emailjs/browser');

        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          EMAILJS_CONFIG.publicKey,
        );

        setStatus('success');
        setFormData(EMPTY_FORM);
      } catch (error) {
        console.error('EmailJS error:', error);
        setStatus('error');
      } finally {
        setIsLoading(false);
      }
    },
    [formData],
  );

  return { formData, isLoading, status, handleChange, handleSubmit };
};
