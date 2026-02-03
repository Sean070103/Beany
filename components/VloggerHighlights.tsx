"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
  {
    href: "https://www.facebook.com/reel/874185545026880",
    image: "/images/Daddy_Boss.png",
    alt: "Vlogger highlight at Beany Avenue",
    label: "Vlog Feature",
  },
  {
    href: "https://www.facebook.com/share/r/1AeTMaW2gy/",
    image: "/images/foodtravel.png",
    alt: "FoodTravelPH POV at Beany Avenue",
    label: "FoodTravelPH POV",
  },
  {
    href: "https://www.facebook.com/share/v/1CtrbSG1RG/",
    image: "/images/db.png",
    alt: "Diskarteng Basic feature vlog at Beany Avenue",
    label: "Diskarteng Basic",
  },
];

export default function VloggerHighlights() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Highlights
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              Vlogger Moments at Beany
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl">
              A snapshot from our community — featuring vloggers and creators sharing their Beany Avenue favorites.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((item) => {
            const isDiskartengBasic = item.label === "Diskarteng Basic";

            return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              >
              <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-muted shadow-sm hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className={cn(
                    "transition-transform duration-500",
                    isDiskartengBasic
                      ? "object-contain bg-black/5 scale-100"
                      : "object-cover group-hover:scale-105"
                  )}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </p>
            </a>
          );
          })}
        </div>
      </div>
    </section>
  );
}

