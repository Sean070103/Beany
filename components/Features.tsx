"use client";

import { Coffee, Heart, Users, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Coffee,
    title: "Premium Coffee",
    description: "Sourced from the finest coffee beans around the world, roasted to perfection.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every cup is crafted with care and passion by our expert baristas.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "A welcoming space where friends gather, connect, and create memories.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in coffee quality and customer service.",
  },
];

export default function Features() {
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
      className="py-20 sm:py-24 lg:py-32 bg-muted/20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-foreground/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-foreground/2 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`mb-16 max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight font-heading">
            Why Choose Beany?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Experience the perfect blend of quality, community, and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-card p-8 rounded-2xl border border-foreground/10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center justify-start w-14 h-14 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center border border-foreground/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="h-7 w-7 text-foreground group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-foreground transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
