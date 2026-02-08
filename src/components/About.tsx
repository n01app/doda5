"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-cream overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images */}
          <div
            className={`relative transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="img-hover rounded-2xl overflow-hidden shadow-2xl shadow-warm-900/10">
                <img
                  src="/images/blog-01.jpg"
                  alt="Interior DODA5 și grădina cu maslin văzută prin geamurile mari"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl shadow-warm-900/5 max-w-[220px]">
                <p className="text-4xl font-bold text-warm-500 mb-1">2.7K+</p>
                <p className="text-sm text-warm-700 leading-snug">
                  Coffee lovers pe Instagram
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-warm-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Povestea Noastră
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-espresso mb-6 leading-tight">
              Unde Cafeaua
              <br />
              &Icirc;nt&acirc;lnește <span className="text-warm-500">Ideile</span>
            </h2>
            <div className="divider mb-8" />

            <div className="space-y-5 text-warm-700 leading-relaxed">
              <p>
                Pe strada General Traian Doda, la numărul 5, &icirc;n inima
                Bucureștiului, DODA5 este mai mult dec&acirc;t o cafenea &mdash;
                este un spațiu unde ideile prind viață. Numele nostru poartă
                adresa și filosofia noastră:{" "}
                <em className="text-warm-600 font-medium">Ideas in Motion</em>.
              </p>
              <p>
                Servim cafea de specialitate prăjită cu grijă, de la origini
                atent selectate. De la espresso la matcha latte, fiecare
                băutură este pregătită cu atenție de bariștii noștri care știu
                exact ce fac &mdash; chiar dacă uneori lasă espressorul să
                primească aplauzele.
              </p>
              <p>
                Spațiul nostru modern, cu design contemporan, plante verzi și
                lumină naturală, este locul perfect pentru un morning ritual, o
                sesiune de lucru productivă sau o &icirc;nt&acirc;lnire
                inspirată. DODA5 este și co-working space &mdash; unde focusul
                &icirc;nt&acirc;lnește cafeaua bună.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-warm-200">
              <div>
                <p className="text-3xl font-bold text-espresso">100%</p>
                <p className="text-sm text-warm-600 mt-1">
                  Cafea de Specialitate
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-espresso">137+</p>
                <p className="text-sm text-warm-600 mt-1">Momente pe Insta</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-espresso">Daily</p>
                <p className="text-sm text-warm-600 mt-1">Fresh Pastries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
