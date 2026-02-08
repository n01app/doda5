"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  {
    src: "/images/event-2.jpg",
    alt: "Interior DODA5 - eveniment cu atmosferă vibrantă, plante și design modern",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/matcha.jpg",
    alt: "Matcha latte în ceașcă DODA5 brandată cu latte art",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/hero.jpg",
    alt: "Bariștii DODA5 la counter, cu meniu vizibil",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/event-3.jpg",
    alt: "Design interior DODA5 - perete cu lamele de lemn și plante",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/conversation.jpg",
    alt: "Echipa DODA5 în spatele barului cu logo-ul pe perete",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/event.jpg",
    alt: "Bright Minds Show - eveniment la DODA5 cu neon signs",
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
            Un sanctuar modern, cu design contemporan, pereți din beton aparent,
            lamele de lemn, plante verzi peste tot și lumină naturală. Cafenea de
            specialitate și co-working space &icirc;ntr-un singur loc.
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

        {/* Instagram CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
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
