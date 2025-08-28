// Helper to send emails via EmailJS REST API from server routes.
// Configure env in README: NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_USER_ID (aka PUBLIC KEY)
// AND EMAILJS_PRIVATE_KEY for server-side calls.

type Params = {
  serviceId: string;
  templateId: string;
  publicKey: string;
  privateKey: string; // FIXED: Added privateKey to the type definition
  templateParams: Record<string, unknown>; // Changed to unknown for more flexibility
};

export async function sendEmailViaEmailJS({
  serviceId,
  templateId,
  publicKey,
  privateKey, // FIXED: Added privateKey to function parameters
  templateParams,
}: Params) {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      private_key: privateKey, // FIXED: Added private_key to the request body
      template_params: templateParams,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    // Provide a more detailed error for easier debugging
    console.error("EmailJS API Error Response:", text);
    throw new Error(`EmailJS error: ${res.status} - ${text}`);
  }

  console.log("Email sent successfully via EmailJS!");
  return true;
}

/*
EmailJS template example fields you might use:

template_params = {
  form_type: 'admission' | 'contact',
  name: 'Student/Parent name',
  phone: 'Phone if applicable',
  email: 'Email if applicable',
  grade: '10|11|12',
  message: 'Message from form',
  recipient: 'optional target address if template uses it'
}

In EmailJS UI:
- Create a service (SERVICE_ID)
- Create a template (TEMPLATE_ID) and include variables like: form_type, name, phone, email, grade, message, recipient
- Copy your Public Key (PUBLIC_KEY) and Private Key (PRIVATE_KEY)
*/
