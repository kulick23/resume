/**
 * EmailJS browser keys are public by design — they only allow sending through
 * the configured template. Values can still be overridden per environment.
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_7qzl5cq',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_fp6p7nm',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'a5A-M4e76FCivSK_k',
};
