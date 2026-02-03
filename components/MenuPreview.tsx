import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    name: "Espresso",
    description: "Rich and bold, our signature espresso blend",
    price: "$4.50",
    image: "/images/espresso.jpg",
  },
  {
    name: "Cappuccino",
    description: "Perfect balance of espresso, steamed milk, and foam",
    price: "$5.50",
    image: "/images/cappuccino.jpg",
  },
  {
    name: "Latte",
    description: "Smooth espresso with velvety steamed milk",
    price: "$5.75",
    image: "/images/latte.jpg",
  },
  {
    name: "Cold Brew",
    description: "Smooth, refreshing cold-brewed coffee",
    price: "$5.00",
    image: "/images/cold-brew.jpg",
  },
];

export default function MenuPreview() {
  const rotations = [0, -1, 1, -0.5];
  
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Discover our carefully crafted selection of coffee and beverages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {menuItems.map((item, index) => {
            const rotation = rotations[index] || 0;
            return (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                <div className="aspect-square relative bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-foreground/5 via-foreground/3 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <span className="text-5xl opacity-20 group-hover:opacity-30 transition-opacity">☕</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="font-semibold text-xl leading-tight">{item.name}</h3>
                    <span className="text-foreground font-bold text-lg whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/menu">
            <Button 
              size="lg" 
              variant="outline" 
              className="group px-8 py-6 rounded-full border-foreground/30 hover:border-foreground/60 hover:bg-accent/30 transition-all duration-300"
            >
              View Full Menu
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
