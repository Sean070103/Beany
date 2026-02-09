"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import OrderNowButton from "@/components/OrderNowButton";
import { useEffect, useRef, useState } from "react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-foreground/10 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-foreground/2 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-foreground/2 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/images/Beany.jpg"
                alt="Beany Logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <span className="text-xl font-bold tracking-tight font-heading">Beany Avenue</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Beyond Beans, Beyond Coffee. A place where friends make the perfect blend.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-base tracking-tight">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <OrderNowButton
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-block font-medium bg-transparent hover:bg-transparent px-0 py-0"
                >
                  Order Now
                </OrderNowButton>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-block">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6 text-base tracking-tight">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>
                <a
                  href="https://maps.app.goo.gl/NmENtaBBo4vDweLVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200 underline underline-offset-2"
                >
                  240 Gregorio Delpilar Poblacion Dos, Cabuyao, Philippines, 4025
                </a>
                <span className="block text-xs mt-1 opacity-80">Open in Google Maps</span>
              </li>
              <li>
                <a href="tel:09186924042" className="hover:text-foreground transition-colors duration-200">
                  Phone: 0918 692 4042
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-6 text-base tracking-tight">Follow Us</h3>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <a
                href="https://www.facebook.com/beanyavenue.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1877F2] text-white hover:opacity-90 transition-opacity duration-200 hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" strokeWidth={2} stroke="currentColor" fill="none" />
              </a>
              <a
                href="https://www.instagram.com/_beanyavenue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#E4405F] text-white hover:opacity-90 transition-opacity duration-200 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={2} stroke="currentColor" fill="none" />
              </a>
              <a
                href="https://www.tiktok.com/@_beanyavenue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#000000] text-white hover:opacity-90 transition-opacity duration-200 hover:scale-105"
                aria-label="TikTok"
                title="TikTok"
              >
                <TikTokIcon className="h-5 w-5 shrink-0" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">@beanyavenue</p>
          </div>
        </div>

        {/* Google Map embed - under the four columns (Beany Avenue pin) */}
        <div className="mt-12">
          <h3 className="font-semibold mb-4 text-base tracking-tight">Find us</h3>
          <a
            href="https://maps.app.goo.gl/NmENtaBBo4vDweLVA"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden border border-foreground/10 shadow-sm hover:opacity-95 transition-opacity"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d966.6492073415643!2d121.125079!3d14.276719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d9006c69440f%3A0xa480df36cc06cb26!2sBeany%20Avenue!5e0!3m2!1sen!2sus!4v1770604309200!5m2!1sen!2sus"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beany Avenue location on Google Maps"
              className="w-full"
            />
          </a>
          <p className="mt-2 text-xs text-muted-foreground">Click the map to open in Google Maps</p>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Beany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
