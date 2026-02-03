"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
    <nav className="sticky top-0 z-50 w-full py-3 sm:py-4 flex justify-start md:justify-center px-3 sm:px-4">
      <div className="flex items-center justify-start w-full md:w-auto">
        {/* Compact navbar container */}
        <div className="inline-flex items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-background/80 backdrop-blur-md rounded-full border border-foreground/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-background/90 max-w-[min(90vw,640px)]">
          {/* Logo */}
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

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
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
                      <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground animate-in fade-in duration-300" aria-hidden />
                    </>
                  )}
                  {!active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-foreground/0 hover:bg-foreground/30 transition-all duration-200 scale-x-0 hover:scale-x-100 origin-center" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-1.5 rounded-full hover:bg-foreground/5 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "absolute top-full mt-3 left-1/2 -translate-x-1/2 md:hidden overflow-hidden bg-background/95 backdrop-blur-md rounded-2xl border border-foreground/10 shadow-2xl transition-all duration-300 ease-out",
          isOpen ? "max-h-48 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"
        )}
      >
          <div className="flex flex-col items-stretch gap-0.5 p-2 min-w-[200px]">
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
                  "px-5 py-3 text-xs uppercase tracking-wider rounded-xl transition-all duration-200",
                  active
                    ? "text-foreground font-medium bg-foreground/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
                style={{
                  animationDelay: isOpen ? `${index * 50}ms` : "0ms"
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
