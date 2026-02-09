"use client";

import { cn } from "@/lib/utils";
import {
  getOrderNowHref,
  ORDER_NOW_CHANNEL,
  FACEBOOK_PAGE_URL,
} from "@/lib/site-config";

const DEFAULT_MESSAGE = "Hi, I want to order";

export interface OrderNowButtonProps {
  /** Pre-filled message (Messenger m.me, WhatsApp). Default: "Hi, I want to order" */
  message?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function canShowButton(): boolean {
  if (ORDER_NOW_CHANNEL === "call" || ORDER_NOW_CHANNEL === "contact") return true;
  if (ORDER_NOW_CHANNEL === "whatsapp") return !!process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return !!(
    process.env.NEXT_PUBLIC_MESSENGER_PAGE_ID ||
    process.env.NEXT_PUBLIC_ORDER_NOW_USE_FACEBOOK_PAGE === "true"
  );
}

export default function OrderNowButton({
  message = DEFAULT_MESSAGE,
  className,
  children = "Order Now",
  onClick,
}: OrderNowButtonProps) {
  const href = getOrderNowHref(message);
  const openInNewTab = href.startsWith("http");

  if (!canShowButton()) return null;

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      aria-label={
        ORDER_NOW_CHANNEL === "call"
          ? "Call us to order"
          : ORDER_NOW_CHANNEL === "contact"
            ? "Go to contact page to order"
            : ORDER_NOW_CHANNEL === "whatsapp"
              ? "Order now via WhatsApp"
              : "Order now via Facebook Messenger"
      }
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors",
        className
      )}
    >
      {children}
    </a>
  );
}
