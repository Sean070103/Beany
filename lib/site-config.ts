/**
 * Order Now: choose how customers reach you.
 *
 * Set NEXT_PUBLIC_ORDER_NOW_CHANNEL to one of:
 * - "messenger" (default): m.me link or Facebook page
 * - "whatsapp": opens WhatsApp chat (set NEXT_PUBLIC_WHATSAPP_NUMBER, e.g. 639186924042)
 * - "call": opens phone dialer (set NEXT_PUBLIC_ORDER_NOW_PHONE or uses CONTACT_PHONE)
 * - "contact": links to /contact page
 *
 * Messenger options:
 * - NEXT_PUBLIC_MESSENGER_PAGE_ID, NEXT_PUBLIC_ORDER_NOW_USE_FACEBOOK_PAGE, NEXT_PUBLIC_ORDER_NOW_URL
 */
export type OrderNowChannel = "messenger" | "whatsapp" | "call" | "contact";

const MESSENGER_PAGE_ID = process.env.NEXT_PUBLIC_MESSENGER_PAGE_ID;
export const FACEBOOK_PAGE_URL =
  process.env.NEXT_PUBLIC_ORDER_NOW_URL || "https://www.facebook.com/beanyavenue.co";
const USE_FACEBOOK_PAGE = process.env.NEXT_PUBLIC_ORDER_NOW_USE_FACEBOOK_PAGE === "true";

const CHANNEL = (process.env.NEXT_PUBLIC_ORDER_NOW_CHANNEL || "messenger") as OrderNowChannel;
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""; // e.g. 639186924042 (no +)
const ORDER_PHONE = process.env.NEXT_PUBLIC_ORDER_NOW_PHONE || "09186924042";

export const ORDER_NOW_CHANNEL = CHANNEL;
export const ORDER_NOW_PHONE = ORDER_PHONE.replace(/\D/g, ""); // digits only for tel:

function buildMessengerUrl(message: string): string {
  if (USE_FACEBOOK_PAGE || !MESSENGER_PAGE_ID) return FACEBOOK_PAGE_URL;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://m.me/${MESSENGER_PAGE_ID}${text}`;
}

export function getOrderNowHref(message: string): string {
  switch (CHANNEL) {
    case "whatsapp":
      if (!WHATSAPP_NUMBER) return FACEBOOK_PAGE_URL;
      const waNum = WHATSAPP_NUMBER.replace(/\D/g, "");
      return `https://wa.me/${waNum}?text=${encodeURIComponent(message)}`;
    case "call":
      return `tel:${ORDER_NOW_PHONE}`;
    case "contact":
      return "/contact?intent=order";
    default:
      return buildMessengerUrl(message);
  }
}

export const ORDER_NOW_URL = getOrderNowHref("Hi, I want to order");
