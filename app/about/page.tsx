"use client";

import Image from "next/image";
import { Heart, Coffee } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    icon: Coffee,
    title: "Our Story",
    content:
      "Beany was born from a simple belief: coffee is more than just a beverage—it's a catalyst for connection, creativity, and community. We've created a space where friends can gather, ideas can flow, and the perfect blend of coffee and conversation comes together.",
    image: "/images/p1.webp",
    imageAlt: "Beany Avenue — our space",
  },
  {
    icon: Heart,
    title: "Our Mission",
    content:
      "We're committed to serving exceptional coffee while fostering a welcoming environment where everyone feels at home. Every cup we serve is crafted with care, and every interaction is an opportunity to build community.",
    image: "/images/p2.webp",
    imageAlt: "Beany Avenue — community",
  },
];

const values = [
  "Quality: Only the finest beans and ingredients in every cup",
  "Community: A place where friends and strangers become regulars",
  "Sustainability: Ethical sourcing and care for our environment",
  "Excellence: Our best in every drink and every visit",
];

const galleryImages = [
  { src: "/images/p3.webp", alt: "Beany Avenue" },
  { src: "/images/p4.webp", alt: "Beany Avenue" },
  { src: "/images/s6.png", alt: "Beany Avenue" },
];

export default function AboutPage() {
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
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero with image */}
      <div className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/kacey.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/50" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="reading-title text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white drop-shadow-lg mb-4 animate-in scale-in fade-in duration-700">
            About Beany
          </h1>
          <p className="font-reading text-white/95 text-lg max-w-xl leading-[1.8] drop-shadow-md animate-in slide-up fade-in duration-700 delay-150">
            Beyond Beans, Beyond Coffee. A place where friends make the perfect blend.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isReversed = index % 2 === 1;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted shadow-lg transition-all duration-700 ease-out ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  } ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
                  style={{ transitionDelay: `${index * 180}ms` }}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`${isReversed ? "lg:order-1" : "lg:order-2"} transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-8 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${index * 180 + 120}ms`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center border border-foreground/10 transition-transform duration-500 hover:scale-110">
                      <Icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                    </div>
                    <h2 className="reading-title text-2xl sm:text-3xl font-semibold font-heading">
                      {section.title}
                    </h2>
                  </div>
                  <div className="reading font-reading text-muted-foreground text-base">
                    <p>{section.content}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Our Values — editorial, no card */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
              {/* Featured s6 image */}
              <div
                className={`lg:col-span-2 relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4] overflow-hidden bg-muted transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-[0.98] -translate-x-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <Image
                  src="/images/s6.png"
                  alt="Beany Avenue — our values in action"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              {/* Values — plain typography, no icons/card */}
              <div className="lg:col-span-3 flex flex-col justify-center">
                <h2
                  className={`text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8 tracking-tight transition-all duration-600 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                  style={{ transitionDelay: "350ms" }}
                >
                  Our Values
                </h2>
                <ul className="space-y-6 font-reading text-foreground/90 leading-[1.75]">
                  {values.map((value, index) => (
                    <li
                      key={index}
                      className={`transition-all duration-500 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Image strip */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`relative aspect-[4/3] overflow-hidden bg-muted transition-all duration-500 ease-out hover:scale-[1.02] ${
                    isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 30vw, 280px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Full-width moment image */}
          <div
            className={`relative aspect-[21/9] sm:aspect-[3/1] rounded-2xl overflow-hidden bg-muted shadow-xl transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.98] translate-y-6"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <Image
              src="/images/p10.webp"
              alt="Beany Avenue — come visit"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
            <div
              className={`absolute inset-0 bg-foreground/20 flex items-center justify-center transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <p className="text-white text-lg sm:text-xl font-medium drop-shadow-lg text-center px-4">
                Come see us at 240 Gregorio Delpilar, Poblacion Dos, Cabuyao
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
