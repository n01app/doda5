"use client";

import { useEffect, useRef, useState } from "react";

export default function FindUs() {
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
      id="find-us"
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
            Come Visit
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-espresso mb-6">
            Find Us
          </h2>
          <div className="divider mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info Cards */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-warm-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-espresso text-lg mb-1">
                    Address
                  </h3>
                  <p className="text-warm-700">
                    Strada Traian Doda nr. 5
                    <br />
                    Sector 2, Bucharest, Romania
                  </p>
                  <p className="text-warm-500 text-sm mt-2">
                    Near the Mihai Eminescu &ndash; Vasile Lascăr intersection
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-warm-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-espresso text-lg mb-3">
                    Opening Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between gap-8">
                      <span className="text-warm-600">Monday &ndash; Friday</span>
                      <span className="text-espresso font-medium">
                        08:00 &ndash; 20:00
                      </span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-warm-600">Saturday</span>
                      <span className="text-espresso font-medium">
                        09:00 &ndash; 21:00
                      </span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-warm-600">Sunday</span>
                      <span className="text-espresso font-medium">
                        09:00 &ndash; 18:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-warm-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-espresso text-lg mb-1">
                    Get in Touch
                  </h3>
                  <p className="text-warm-700 text-sm">
                    Follow us on Instagram for the latest updates, events, and
                    new menu additions.
                  </p>
                  <a
                    href="https://www.instagram.com/doda5_ideas_in_motion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-warm-500 hover:text-warm-600 transition-colors text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @doda5_ideas_in_motion
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8!2d26.1!3d44.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI3JzAwLjAiTiAyNsKwMDYnMDAuMCJF!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DODA5 Location on Google Maps"
                className="grayscale-[30%] contrast-[1.1]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
