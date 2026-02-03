"use client";

import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    content: "Beany has become my second home. The coffee is exceptional, and the atmosphere is warm and welcoming. It's truly a place where friends make the perfect blend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Coffee Enthusiast",
    content: "Best coffee shop in town! The baristas are knowledgeable and friendly, and every cup is crafted to perfection. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Local Resident",
    content: "I love coming here to work and meet friends. The space is beautiful, the coffee is amazing, and the community vibe is unmatched.",
    rating: 5,
  },
];

export default function Testimonials() {
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
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight font-heading">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Join our community of coffee lovers and friends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-2xl border border-foreground/10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-12 w-12 text-foreground/5 group-hover:text-foreground/10 transition-colors duration-300" />
              
              <div className="flex mb-6 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-foreground/20 text-foreground/20 group-hover:fill-foreground/30 group-hover:text-foreground/30 transition-all duration-300"
                    style={{
                      transform: `rotate(${i * 5}deg)`,
                      transitionDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed text-base relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="font-semibold text-lg mb-1">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
