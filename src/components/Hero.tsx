"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - real DODA5 interior */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('/images/event-2.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/75 via-espresso/55 to-espresso/85" />
        <div className="absolute inset-0 grain" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-warm-300 text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Cafenea de Specialitate &middot; Co-working Space
          </p>
        </div>

        <h1
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white hero-text-shadow mb-6 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          DODA
          <span className="text-warm-400">5</span>
        </h1>

        <div
          className={`transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-warm-200 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-2">
            Ideas in Motion
          </p>
          <div className="divider mx-auto mt-6 mb-10" />
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-warm-300/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Sunrise goes with coffee. Un colț cozy &icirc;n inima Bucureștiului
            unde fiecare ceașcă spune o poveste despre origine, meșteșug și
            pasiune.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-warm-400 text-espresso font-medium text-sm tracking-wider uppercase rounded-full hover:bg-warm-300 transition-all duration-300 hover:shadow-lg hover:shadow-warm-400/20"
            >
              Vezi Meniul
            </a>
            <a
              href="#find-us"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-warm-400/40 text-warm-200 font-medium text-sm tracking-wider uppercase rounded-full hover:bg-warm-400/10 transition-all duration-300"
            >
              Vizitează-ne
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className="text-warm-400/60 text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-warm-400/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
