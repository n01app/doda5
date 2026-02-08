"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Doda5 are un interior cu design plăcut și o curte mică, în spate, la fel de bine amenajată. Cafeaua este foarte bună!",
    author: "Radu N.",
    role: "Coffee Blogger",
    rating: 5,
  },
  {
    text: "E ușor să crezi că un espressor bun face toată treaba. La DODA5, cafeaua nu e rezultatul întâmplării, este rezultatul oamenilor care știu exact ce fac.",
    author: "DODA5",
    role: "Filosofia noastră",
    rating: 5,
  },
  {
    text: "O surpriză bună să găsești o cafenea de genul acesta într-o clădire modernă, dintr-o zonă de case vechi. Design modern și îngrijit.",
    author: "Vizitator",
    role: "Google Review",
    rating: 5,
  },
  {
    text: "Sunrise goes with coffee, sunset matches the wine. Locul perfect pentru o sesiune productivă sau o cafea cu prietenii.",
    author: "Elena S.",
    role: "Co-working Regular",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-warm-100 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-warm-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-warm-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-warm-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Cuvinte Frumoase
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-espresso mb-6">
            Ce Spun Oamenii
          </h2>
          <div className="divider mx-auto" />
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-warm-100"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-warm-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-warm-800 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-warm-200 flex items-center justify-center">
                  <span className="text-warm-600 font-semibold text-sm">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-espresso">
                    {t.author}
                  </p>
                  <p className="text-xs text-warm-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
