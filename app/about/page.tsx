"use client";

import { Heart, Coffee, Users, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    icon: Coffee,
    title: "Our Story",
    content: "Beany was born from a simple belief: coffee is more than just a beverage—it's a catalyst for connection, creativity, and community. We've created a space where friends can gather, ideas can flow, and the perfect blend of coffee and conversation comes together.",
  },
  {
    icon: Heart,
    title: "Our Mission",
    content: "We're committed to serving exceptional coffee while fostering a welcoming environment where everyone feels at home. Every cup we serve is crafted with care, and every interaction is an opportunity to build community.",
  },
];

const values = [
  "Quality: We source only the finest coffee beans and ingredients",
  "Community: We believe in creating spaces where people can connect",
  "Sustainability: We're committed to ethical sourcing and environmental responsibility",
  "Excellence: We strive for perfection in every cup we serve",
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading">
          About Beany
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Beyond Beans, Beyond Coffee. A place where friends make the perfect blend.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div
              key={index}
              className={`bg-card p-8 sm:p-10 rounded-2xl border border-foreground/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center border border-foreground/10 mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-semibold font-heading">{section.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base pl-18">
                {section.content}
              </p>
            </div>
          );
        })}

        <div
          className={`bg-card p-8 sm:p-10 rounded-2xl border border-foreground/10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
          style={{
            transitionDelay: '400ms',
          }}
        >
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center border border-foreground/10 mr-4">
              <Users className="h-7 w-7 text-foreground" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-semibold font-heading">Our Values</h2>
          </div>
          <ul className="space-y-4 text-muted-foreground pl-18">
            {values.map((value, index) => (
              <li 
                key={index}
                className="flex items-start group/item"
              >
                <Sparkles className="h-5 w-5 text-foreground/30 mr-3 mt-0.5 group-hover/item:text-foreground/60 transition-colors flex-shrink-0" />
                <span className="leading-relaxed">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
