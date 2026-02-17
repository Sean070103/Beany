"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle } from "lucide-react";
import OrderNowButton from "@/components/OrderNowButton";
import { useEffect, useRef, useState } from "react";

export default function MenuPage() {
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
          Our Menu
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Discover our carefully crafted selection of coffee, beverages, and dining options.
        </p>
        <OrderNowButton className="inline-flex mt-6 gap-2 rounded-full text-xs tracking-[0.2em] uppercase px-8 py-6">
          <MessageCircle className="h-4 w-4" />
          Order Now via Messenger
        </OrderNowButton>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="drinks" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="inline-flex h-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-foreground/10 p-1.5 shadow-lg">
              <TabsTrigger 
                value="drinks" 
                className="text-xs uppercase tracking-wider px-6 py-2.5 rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background transition-all duration-200 hover:bg-foreground/5"
              >
                Drinks
              </TabsTrigger>
              <TabsTrigger 
                value="food" 
                className="text-xs uppercase tracking-wider px-6 py-2.5 rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background transition-all duration-200 hover:bg-foreground/5"
              >
                Food
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="drinks" className="mt-0 animate-in fade-in duration-500">
            <div className="space-y-8">
              <div className="bg-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-foreground/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/Drinks Menu.png"
                    alt="Beany Avenue Drinks Menu"
                    width={1200}
                    height={1600}
                    className="w-full h-auto rounded-xl hover:scale-[1.01] transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              <div className="bg-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-foreground/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/Drinks.png"
                    alt="Beany Avenue Drinks Menu (Page 2)"
                    width={1200}
                    height={1600}
                    className="w-full h-auto rounded-xl hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="food" className="mt-0 animate-in fade-in duration-500">
            <div className="space-y-8">
              <div className="bg-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-foreground/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/Food.png"
                    alt="Beany Avenue Food Menu"
                    width={1200}
                    height={1600}
                    className="w-full h-auto rounded-xl hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="bg-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-foreground/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/Food (2).png"
                    alt="Beany Avenue Food Menu (Page 2)"
                    width={1200}
                    height={1600}
                    className="w-full h-auto rounded-xl hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
