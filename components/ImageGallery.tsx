"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/beany_1.jpg", alt: "Beany Avenue Experience" },
  { src: "/images/beany_2.jpg", alt: "Beany Avenue Atmosphere" },
  { src: "/images/beany_3.jpg", alt: "Beany Avenue Community" },
];

export default function ImageGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
