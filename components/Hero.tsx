"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-[center_32%] sm:bg-[center_30%] brightness-105"
          style={{
            backgroundImage: "url('/images/kacey.jpg')",
          }}
        />
        {/* Subtle dark gradient for text contrast and accessibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/50 pointer-events-none"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white font-[var(--font-heading)] text-balance leading-[1.1] tracking-tight drop-shadow-lg [text-shadow:0_2px_12px_rgba(0,0,0,0.5),0_0_1px_rgba(0,0,0,0.8)]">
            Beyond Beans,
            <br />
            <span className="italic font-normal opacity-95">Beyond Coffee</span>
          </h1>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <p className="text-xl sm:text-2xl md:text-3xl text-white mb-14 max-w-2xl mx-auto leading-relaxed drop-shadow-lg [text-shadow:0_2px_10px_rgba(0,0,0,0.45),0_0_1px_rgba(0,0,0,0.6)]">
            A place where friends make the perfect blend.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Link href="/menu">
            <Button
              size="lg"
              className="group px-12 py-7 rounded-full text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-2 ring-primary/20"
            >
              Explore Menu
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-7 rounded-full text-xs tracking-[0.2em] uppercase border-2 border-white/70 hover:border-white bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
            >
              Visit Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
