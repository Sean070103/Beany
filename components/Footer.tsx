"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
              <li>240 Gregorio Delpilar</li>
              <li>Poblacion Dos, Cabuyao</li>
              <li>Philippines, 4025</li>
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
            <div className="flex items-center space-x-5 mb-3">
              <a
                href="https://www.facebook.com/beanyavenue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/_beanyavenue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" strokeWidth={1.5} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">@beanyavenue</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Beany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
