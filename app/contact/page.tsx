"use client";

import {
  Instagram,
  Facebook,
  Coffee,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/beanyavenue.co",
    icon: Facebook,
    bg: "bg-[#1877F2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_beanyavenue",
    icon: Instagram,
    bg: "bg-[#E4405F]",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@_beanyavenue",
    icon: TikTokIcon,
    bg: "bg-black",
  },
];

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to send your message right now.",
        );
      }

      setFormStatus("success");
      setStatusMessage("Thanks for reaching out! We’ll reply soon.");
      setFormValues({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      setFormStatus("error");
      setStatusMessage(message);
    }
  };

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
        <div className="max-w-2xl mx-auto text-center">
          <div>
            <p
              className={`text-xs sm:text-sm uppercase tracking-[0.2em] text-white mb-3 font-sans drop-shadow-sm transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              Grab a virtual cup
            </p>
            <h1
              className={`text-4xl sm:text-5xl font-bold font-heading mb-6 text-white drop-shadow-md flex items-center justify-center gap-3 transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "80ms" }}
            >
              <Coffee
                className="h-10 w-10 sm:h-12 sm:w-12 text-white"
                strokeWidth={1.25}
                aria-hidden
              />
              Coffee & Conversation
            </h1>
            <p
              className={`text-amber-50/95 text-base sm:text-lg leading-relaxed mb-6 font-sans drop-shadow-sm transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "160ms" }}
            >
              Whether you&apos;re curious about our beans, planning your next
              visit, or just want to say hi—reach us on socials or swing by.
              We&apos;d love to see you.
            </p>

            {/* Socials + handle */}
            <div
              className={`flex flex-col items-center gap-3 mb-8 transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md ${link.bg} text-white hover:opacity-90 hover:scale-105 transition-all duration-200`}
                    aria-label={link.name}
                  >
                    {link.name === "TikTok" ? (
                      <link.icon className="h-5 w-5" />
                    ) : (
                      <link.icon
                        className="h-5 w-5"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                      />
                    )}
                  </a>
                ))}
              </div>
              <p className="text-amber-200/90 text-sm font-sans">
                @beanyavenue
              </p>
            </div>

            {/* Opening hours */}
            <div
              className={`mb-10 transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "320ms" }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/90 mb-3 font-sans">
                Our New Operating Hours
              </p>
              <div className="text-amber-50/95 text-sm sm:text-base font-sans space-y-1.5">
                <p className="inline-flex items-center gap-2">
                  <Clock
                    className="h-4 w-4 text-amber-300/80 flex-shrink-0"
                    aria-hidden
                  />
                  Tuesday – Thursday | 4:00 PM – 10:00 PM
                </p>
                <p className="inline-flex items-center gap-2">
                  <Clock
                    className="h-4 w-4 text-amber-300/80 flex-shrink-0"
                    aria-hidden
                  />
                  Friday – Sunday | 4:00 PM – 12:00 AM
                </p>
                <p className="text-amber-300/90 font-medium mt-2">
                  Closed every Monday
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p
              className={`text-amber-100/90 text-lg font-heading italic mb-12 transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Your next favorite cup is waiting.
            </p>

            {/* Contact form */}
            <div
              className={`mb-12 transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "440ms" }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/90 mb-4 font-sans">
                Send us a note
              </p>
              <form
                onSubmit={handleSubmit}
                className="grid gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 text-left"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-amber-50/90">
                    Name
                    <input
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:border-amber-200 focus:outline-none"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-amber-50/90">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:border-amber-200 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm text-amber-50/90">
                  Subject
                  <input
                    name="subject"
                    value={formValues.subject}
                    onChange={handleChange}
                    className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:border-amber-200 focus:outline-none"
                    placeholder="What’s on your mind?"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-amber-50/90">
                  Message
                  <textarea
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:border-amber-200 focus:outline-none"
                    placeholder="Tell us how we can help."
                  />
                </label>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="inline-flex items-center justify-center rounded-full bg-amber-300/90 px-6 py-3 text-sm font-semibold text-amber-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {formStatus === "loading" ? "Sending..." : "Send message"}
                  </button>
                  {statusMessage && (
                    <p
                      className={`text-sm ${
                        formStatus === "error"
                          ? "text-red-200"
                          : "text-amber-100"
                      }`}
                    >
                      {statusMessage}
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Visit us — address & phone with actions */}
            <div
              className={`mt-12 pt-10 border-t border-white/20 transition-all duration-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "480ms" }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/90 mb-6 font-sans">
                Visit us
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=240+Gregorio+Delpilar+Poblacion+Dos,+Cabuyao,+Philippines,+4025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-6 py-3 text-white font-medium hover:bg-white/20 hover:border-white/70 transition-all duration-200 text-sm"
                >
                  <MapPin className="h-4 w-4" strokeWidth={2} />
                  Get directions
                </a>
                <a
                  href="tel:09186924042"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-6 py-3 text-white font-medium hover:bg-white/20 hover:border-white/70 transition-all duration-200 text-sm"
                >
                  <Phone className="h-4 w-4" strokeWidth={2} />
                  Call us
                </a>
              </div>
              <p className="text-sm text-amber-200/80 font-sans drop-shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-3">
                <span className="inline-flex items-center gap-2 justify-center">
                  <MapPin
                    className="h-4 w-4 text-amber-300/80 flex-shrink-0"
                    aria-hidden
                  />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=240+Gregorio+Delpilar+Poblacion+Dos,+Cabuyao,+Philippines,+4025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-100 underline underline-offset-2"
                  >
                    240 Gregorio Delpilar Poblacion Dos, Cabuyao, Philippines,
                    4025
                  </a>
                </span>
                <span className="hidden sm:inline text-white/40">·</span>
                <span className="inline-flex items-center gap-2 justify-center">
                  <Phone
                    className="h-4 w-4 text-amber-300/80 flex-shrink-0"
                    aria-hidden
                  />
                  <a
                    href="tel:09186924042"
                    className="hover:text-amber-100 underline underline-offset-2"
                  >
                    0918 692 4042
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
