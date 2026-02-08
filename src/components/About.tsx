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
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="DODA5 cozy interior with modern design"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl shadow-warm-900/5 max-w-[220px]">
                <p className="text-4xl font-bold text-warm-500 mb-1">2025</p>
                <p className="text-sm text-warm-700 leading-snug">
                  Serving specialty coffee in Bucharest
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
              Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-espresso mb-6 leading-tight">
              Where Coffee
              <br />
              Meets <span className="text-warm-500">Craft</span>
            </h2>
            <div className="divider mb-8" />

            <div className="space-y-5 text-warm-700 leading-relaxed">
              <p>
                Nestled on the charming Strada Traian Doda in the heart of
                Bucharest, DODA5 is more than a coffee shop &mdash; it&apos;s a
                space where ideas come alive. Our name carries our address and
                our philosophy: <em>Ideas in Motion</em>.
              </p>
              <p>
                We source single-origin beans from the world&apos;s finest
                growing regions, roasted to perfection to highlight each
                coffee&apos;s unique character. From bright Ethiopian naturals to
                rich Colombian washed lots, every cup is a journey through
                flavor.
              </p>
              <p>
                Our beautifully designed interior and intimate courtyard garden
                create the perfect backdrop for your morning ritual, a creative
                session, or a quiet afternoon escape.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-warm-200">
              <div>
                <p className="text-3xl font-bold text-espresso">100%</p>
                <p className="text-sm text-warm-600 mt-1">Specialty Grade</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-espresso">5+</p>
                <p className="text-sm text-warm-600 mt-1">Origin Countries</p>
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
