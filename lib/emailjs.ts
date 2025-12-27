// Helper to send emails via EmailJS REST API from server routes.
// Configure env: NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_USER_ID
// AND EMAILJS_PRIVATE_KEY for server-side calls.

type Params = {
  serviceId: string;
  templateId: string;
  publicKey: string;
  privateKey: string;
  templateParams: Record<string, unknown>;
};

export async function sendEmailViaEmailJS({
  serviceId,
  templateId,
  publicKey,
  privateKey,
  templateParams,
}: Params) {
  // EmailJS expects accessToken for private API calls
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "origin": "http://localhost" // Required for CORS
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey, // Changed from private_key to accessToken
      template_params: templateParams,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("EmailJS API Error Response:", text);
    throw new Error(`EmailJS error: ${res.status} - ${text}`);
  }

  console.log("Email sent successfully via EmailJS!");
  return true;
}

/*
EmailJS template example fields you might use:

template_params = {
  from_name: 'Sender name',
  from_email: 'Sender email',
  to_name: 'Recipient name',
  message: 'Message content',
  reply_to: 'Reply email'
}

In EmailJS UI:
- Create a service (SERVICE_ID)
- Create a template (TEMPLATE_ID) with variables like: {{from_name}}, {{from_email}}, {{message}}
- Copy your Public Key and generate an Access Token (Private Key)
*/
