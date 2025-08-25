export const SITE = {
  title: process.env.SITE_TITLE || "Disha Class",

  description:
    process.env.SITE_DESCRIPTION ||
    "Coaching for 10th–12th Math & Science. Concept-first teaching, small batches, and weekly assessments.",

  url: "https://www.dishaclass.in",

  logo: "/logo.jpg",

  author: "Abodh Kumar",

  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8540890133",

  get phoneDisplay() {
    const p = this.phone;
    return p.startsWith("91") ? `+91 ${p.slice(2)}` : p;
  },
  whatsAppUrl(text: string) {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${this.phone}?text=${encoded}`;
  },

  email: "admin@dishaclass.com",

  addressLine1: "Prasad Bigha, Near Narad Museum, Nawada, Bihar 805110",

  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=com.sdzcmm.tanvxm&pcampaignid=web_share",

  googleMapsUrl: "https://maps.app.goo.gl/ihzfto6HSjdPMKWQ9",

  googleMapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7238.448609219152!2d85.53432490643775!3d24.890329467674267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2fef489bad2c7%3A0xfd53885aae7ce476!2sDisha%20class!5e0!3m2!1sen!2sin!4v1756076069419!5m2!1sen!2sin",

  youtubeUrl: "https://www.youtube.com/@dishaclasses52",
  instagramUrl: "https://www.instagram.com/dishaclassesnawada/",
  facebookUrl: "https://www.facebook.com/DishaClassesNawadah",
  twitterUrl: "https://x.com/Abodh_kumar8",

  lmsUrl: "https://dishaclasses.akamai.net.in/",
};


