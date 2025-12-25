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

// Validation function for required environment variables
export function validateEnv() {
  const requiredVars = [
    // Essential for Contact Form
    'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
    'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
    'NEXT_PUBLIC_EMAILJS_USER_ID',
  ] as const;

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.warn(
      `⚠️ Missing environment variables: ${missingVars.join(', ')}.\n` +
      `   Contact form functionality may not work.`
    );
  }
}

// Call validation in development
if (process.env.NODE_ENV === 'development') {
  validateEnv();
}
