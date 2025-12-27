// Environment variables validation
export const env = {
  // Public environment variables (client-side accessible)
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8540890133",
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
  NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL,
  NEXT_PUBLIC_SITE_TITLE: process.env.NEXT_PUBLIC_SITE_TITLE,

  // Private environment variables (server-side only)
  EMAIL_RECIPIENT: process.env.EMAIL_RECIPIENT,
  SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
} as const;

// Validation is now silent - variables are loaded from .env at build time
// If contact form doesn't work, check .env file has the required EmailJS variables
