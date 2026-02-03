"use client";

import { Instagram, Coffee } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/_beanyavenue",
    icon: Instagram,
  },
];

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[calc(100vh-theme(spacing.20))] overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Matcha.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Warm coffee-toned overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-amber-950/50 via-stone-900/45 to-amber-950/55"
          aria-hidden
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white mb-3 font-sans drop-shadow-sm">
              Grab a virtual cup
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6 text-white drop-shadow-md flex items-center gap-3">
              <Coffee className="h-10 w-10 sm:h-12 sm:w-12 text-white" strokeWidth={1.25} aria-hidden />
              Coffee & Conversation
            </h1>
            <p className="text-amber-50/95 text-base sm:text-lg leading-relaxed max-w-md mb-8 font-sans drop-shadow-sm">
              Whether you&apos;re curious about our beans, planning your next visit, or
              just want to say hi—we&apos;d love to hear from you. Drop us a line and
              we&apos;ll get back to you soon.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60 hover:scale-105 transition-all duration-200 backdrop-blur-sm"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="mt-10 text-sm text-amber-200/80 font-sans drop-shadow-sm">
              240 Gregorio Delpilar, Poblacion Dos, Cabuyao, Philippines · 0918
              692 4042
            </p>
          </div>

          {/* Right: Warm glass form card */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="rounded-2xl border border-amber-200/20 bg-amber-50/10 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(28,25,23,0.25),inset_0_1px_0_rgba(255,251,235,0.2)]">
              <p className="text-xs uppercase tracking-[0.2em] text-white mb-5 font-sans">
                Drop us a note
              </p>
              <form className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/50 focus:bg-white/15 transition-all duration-200 font-sans text-sm backdrop-blur-sm hover:border-white/40 hover:bg-white/15"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/50 focus:bg-white/15 transition-all duration-200 font-sans text-sm backdrop-blur-sm hover:border-white/40 hover:bg-white/15"
                />
                <input
                  type="url"
                  name="website"
                  placeholder="Website (optional)"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/50 focus:bg-white/15 transition-all duration-200 font-sans text-sm backdrop-blur-sm hover:border-white/40 hover:bg-white/15"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What's on your mind? Tell us over a virtual cup..."
                  className="w-full px-4 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/50 focus:bg-white/15 transition-all duration-200 resize-y min-h-[120px] font-sans text-sm backdrop-blur-sm hover:border-white/40 hover:bg-white/15"
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white/25 text-white text-sm font-medium tracking-wide hover:bg-white/35 hover:scale-[1.01] active:scale-[0.99] border border-white/40 transition-all duration-200 font-sans shadow-lg backdrop-blur-sm"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
