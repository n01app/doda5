"use client";

import { useEffect, useRef, useState } from "react";

const menuCategories = [
  {
    title: "Espresso Bar",
    items: [
      {
        name: "Espresso",
        description: "Dublu, extras la perfecție din boabe de specialitate",
        price: "16",
      },
      {
        name: "Cappuccino",
        description: "Clasic italian, cremă catifelată și echilibru perfect",
        price: "20",
      },
      {
        name: "Flat White",
        description: "Microfoam catifelat peste un double shot intens",
        price: "22",
      },
      {
        name: "Special / Tropical",
        description: "Creații sezoniere cu arome unice și fresh",
        price: "30/38",
      },
      {
        name: "Extra Shot",
        description: "Un boost suplimentar de energie pentru ziua ta",
        price: "5",
      },
    ],
  },
  {
    title: "Ceai & Altele",
    items: [
      {
        name: "Matcha Latte",
        description: "Pudră de ceai verde japonez și lapte catifelat, cu latte art",
        price: "28",
      },
      {
        name: "Chai Latte",
        description: "Prana Chai original blend, aromat și reconfortant",
        price: "28",
      },
      {
        name: "Ceai / Latte",
        description: "Selecție de ceaiuri premium, calde sau cu lapte",
        price: "28/32",
      },
      {
        name: "Ciocolată cu Rom",
        description: "Ciocolată caldă cu o notă de rom, perfectă pentru răsfăț",
        price: "27/34",
      },
      {
        name: "Fresh Juice",
        description: "Sucuri naturale, proaspăt storcse în fiecare zi",
        price: "27",
      },
    ],
  },
  {
    title: "Sweet & Savory",
    items: [
      {
        name: "Croissant",
        description: "Crocant, cu unt, copt proaspăt în fiecare dimineață",
        price: "14",
      },
      {
        name: "Cheesecake",
        description: "Cremos, stil New York, cu topping de fructe",
        price: "22",
      },
      {
        name: "Banana Bread",
        description: "Făcut în casă, cald, cu nuci crocante",
        price: "16",
      },
      {
        name: "Sandwich Club",
        description: "Pui, bacon, ou, salată verde proaspătă",
        price: "32",
      },
      {
        name: "Avocado Toast",
        description: "Pe pâine sourdough, cu fulgi de chili",
        price: "28",
      },
    ],
  },
];

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

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
      id="menu"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-warm-950 overflow-hidden"
    >
      {/* Background accent with real image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/matcha.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-warm-800/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-warm-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Ce Servim
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-cream mb-6">
            Meniul Nostru
          </h2>
          <div className="divider mx-auto mb-6" />
          <p className="text-warm-400 text-lg max-w-xl mx-auto">
            Băuturi și gustări pregătite cu drag, din ingrediente alese cu grijă.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex justify-center gap-2 mb-12 flex-wrap transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {menuCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === idx
                  ? "bg-warm-500 text-espresso"
                  : "bg-warm-900/50 text-warm-400 hover:bg-warm-900 hover:text-warm-300"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuCategories[activeCategory].items.map((item) => (
              <div
                key={item.name}
                className="menu-item bg-warm-900/40 backdrop-blur-sm border border-warm-800/30 rounded-xl p-6 group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-cream group-hover:text-warm-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-warm-400 font-bold text-lg whitespace-nowrap ml-4">
                    {item.price} lei
                  </span>
                </div>
                <p className="text-warm-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p
          className={`text-center text-warm-600 text-sm mt-10 transition-all duration-1000 delay-600 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          * Prețuri &icirc;n RON. Meniul poate varia &icirc;n funcție de
          disponibilitatea sezonieră.
          <br />
          Toată cafeaua noastră este de specialitate, scorată 80+ pe scala SCA.
        </p>
      </div>
    </section>
  );
}
