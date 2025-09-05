import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Добавьте логику отправки формы (например, через API)
  };

  return { formData, handleChange, handleSubmit };
};
