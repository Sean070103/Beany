"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import OrderNowButton from "@/components/OrderNowButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-foreground/5">
        <div className="mx-auto w-full max-w-5xl px-3 sm:px-4">
          {/* Mobile top bar */}
          <div className="flex items-center justify-between py-2.5 sm:py-3 md:hidden">
            <button
              className="p-2 rounded-full border border-foreground/15 bg-background hover:bg-foreground/5 transition-colors duration-200"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/images/Beany.jpg"
                alt="Beany Logo"
                width={26}
                height={26}
                className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <span className="text-sm font-semibold tracking-tight font-heading">
                Beany Avenue
              </span>
            </Link>
          </div>

          {/* Desktop pill navbar */}
          <div className="hidden md:flex items-center justify-center py-3">
            <div className="inline-flex items-center gap-6 md:gap-8 px-6 md:px-8 py-3 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-background/90">
              <Link href="/" className="flex items-center space-x-2.5 group relative">
                <div className="absolute inset-0 rounded-full bg-foreground/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                <Image
                  src="/images/Beany.jpg"
                  alt="Beany Logo"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <span className="hidden sm:block text-xs font-semibold tracking-tight font-heading text-foreground/90">
                  Beany Avenue
                </span>
              </Link>

              <div className="flex items-center gap-6">
                {links.map((link) => {
                  const basePath = link.href.split("#")[0] || "/";
                  const active =
                    basePath === "/"
                      ? pathname === "/"
                      : pathname.startsWith(basePath);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative text-xs uppercase tracking-[0.15em] transition-all duration-200",
                        active
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground font-medium hover:text-foreground"
                      )}
                    >
                      {link.label}
                      {active && (
                        <>
                          <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-foreground rounded-full animate-in fade-in duration-300" />
                          <span
                            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground animate-in fade-in duration-300"
                            aria-hidden
                          />
                        </>
                      )}
                      {!active && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-foreground/0 hover:bg-foreground/30 transition-all duration-200 scale-x-0 hover:scale-x-100 origin-center" />
                      )}
                    </Link>
                  );
                })}
                <OrderNowButton
                  className="rounded-full text-xs tracking-[0.15em] uppercase gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 h-9"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Order Now
                </OrderNowButton>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile nav – left sidebar */}
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/30 backdrop-blur-[1px] md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background/95 backdrop-blur-md border-r border-foreground/10 shadow-2xl md:hidden transform transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full py-4 px-4 space-y-2">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2"
            >
              <Image
                src="/images/Beany.jpg"
                alt="Beany Logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span className="text-sm font-semibold tracking-tight font-heading">
                Beany Avenue
              </span>
            </Link>
            <button
              className="p-1.5 rounded-full hover:bg-foreground/5 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <OrderNowButton
            className="flex items-center gap-2 px-3 py-2.5 text-xs uppercase tracking-[0.18em] rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity mb-2"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle className="h-4 w-4" />
            Order Now
          </OrderNowButton>
          <div className="flex flex-col gap-1 mt-2">
            {links.map((link, index) => {
              const basePath = link.href.split("#")[0] || "/";
              const active =
                basePath === "/"
                  ? pathname === "/"
                  : pathname.startsWith(basePath);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-2.5 text-xs uppercase tracking-[0.18em] rounded-xl transition-all duration-200",
                    active
                      ? "text-foreground font-semibold bg-foreground/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  )}
                  style={{
                    transitionDelay: isOpen ? `${index * 30}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
