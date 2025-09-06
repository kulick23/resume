import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        'service_7qzl5cq',
        'template_fp6p7nm',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'a5A-M4e76FCivSK_k',
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    status,
    handleChange,
    handleSubmit,
  };
};
