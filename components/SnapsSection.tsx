import Image from "next/image";

const snaps = [
  { src: "/images/snap_1.jpg", alt: "Beany Avenue snap 1" },
  { src: "/images/snap_2.jpg", alt: "Beany Avenue snap 2" },
  { src: "/images/snap_3.jpg", alt: "Beany Avenue snap 3" },
  { src: "/images/snap_4.jpg", alt: "Beany Avenue snap 4" },
];

export default function SnapsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Snaps
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              Shop Snaps
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl">
              Weekly photo dump from inside and around Beany Avenue — a quick
              peek at the vibes, cups, and community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {snaps.map((snap, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Image
                src={snap.src}
                alt={snap.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

