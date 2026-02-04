"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const photos = [
  { src: "/images/p1.webp", alt: "Beany Avenue" },
  { src: "/images/p2.webp", alt: "Beany Avenue" },
  { src: "/images/p3.webp", alt: "Beany Avenue" },
  { src: "/images/p4.webp", alt: "Beany Avenue" },
  { src: "/images/p10.webp", alt: "Beany Avenue" },
  { src: "/images/p11.webp", alt: "Beany Avenue" },
  { src: "/images/p12.webp", alt: "Beany Avenue" },
  { src: "/images/p13.webp", alt: "Beany Avenue" },
  { src: "/images/p14.webp", alt: "Beany Avenue" },
  { src: "/images/p15.webp", alt: "Beany Avenue" },
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const goNext = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight">
            Beany Avenue
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3">
            A peek at the vibes, cups, and community.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative aspect-[4/3] sm:aspect-[5/3] rounded-2xl overflow-hidden bg-muted shadow-xl">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  index === current
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:translate-x-0 sm:-left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/80 text-background hover:bg-foreground transition-colors shadow-lg"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-0 sm:-right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/80 text-background hover:bg-foreground transition-colors shadow-lg"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-6 bg-foreground"
                    : "w-2 bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
