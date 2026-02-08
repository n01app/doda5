"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  {
    src: "/images/blog-06.jpg",
    alt: "Interior DODA5 - design modern cu banchete verzi, scaune cupru și corpuri de iluminat suspendate",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/blog-01.jpg",
    alt: "Curtea interioară DODA5 văzută prin geamuri - grădina cu maslin și mural artistic",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/matcha.jpg",
    alt: "Matcha latte în ceașcă DODA5 brandată cu latte art",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/blog-07.jpg",
    alt: "Grădina DODA5 - terasă cu pietriș alb, plante, maslin și semne motivaționale",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/blog-08.jpg",
    alt: "Latte art în cești DODA5 cu croissant și rozmarin",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/blog-03.jpg",
    alt: "Vitrina de prăjituri DODA5 - torturi, cheesecake și deserturi artizanale",
    span: "col-span-1 row-span-1",
  },
];

export default function Space() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="space"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-warm-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Pășește &Icirc;năuntru
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-espresso mb-6">
            Spațiul Nostru
          </h2>
          <div className="divider mx-auto mb-6" />
          <p className="text-warm-700 text-lg max-w-2xl mx-auto">
            Un interior cu banchete din catifea verde, mese din lemn masiv,
            corpuri de iluminat suspendate și pereți din beton aparent. &Icirc;n
            spate, o grădină secretă cu pietriș alb, un maslin bătr&acirc;n,
            plante verzi și citate pe pereți.
          </p>
        </div>

        {/* Image Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px] transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`${img.span} img-hover rounded-xl overflow-hidden relative group`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Garden Feature */}
        <div
          className={`mt-16 grid lg:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="img-hover rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/blog-07.jpg"
              alt="Grădina DODA5 cu terasă pe pietriș alb, plante și citate pe perete"
              className="w-full h-[350px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-espresso">
              Grădina Secretă
            </h3>
            <p className="text-warm-700 leading-relaxed">
              &Icirc;n curtea din spate te așteaptă un colț de liniște cu
              pietriș alb, un maslin impunător și plante verzi. Pe pereți,
              mesajele noastre preferate: <em>&ldquo;Sunrise goes with
              coffee&rdquo;</em>, <em>&ldquo;Sunset matches the
              wine&rdquo;</em> și <em>&ldquo;Dark mode activated &ndash; switch
              from coffee to wine&rdquo;</em>.
            </p>
            <p className="text-warm-700 leading-relaxed">
              Locul perfect pentru o cafea &icirc;n aer liber, un brunch relaxat
              sau o seară de vară cu un pahar de vin. Design modern, atmosferă
              intimă, departe de agitația orașului.
            </p>
          </div>
        </div>

        {/* Instagram CTA */}
        <div
          className={`text-center mt-14 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://www.instagram.com/doda5_ideas_in_motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-espresso text-cream font-medium text-sm tracking-wider uppercase rounded-full hover:bg-warm-900 transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Urmărește-ne pe Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
