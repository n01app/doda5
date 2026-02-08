"use client";

import { useEffect, useRef, useState } from "react";

const menuCategories = [
  {
    title: "Espresso Bar",
    items: [
      {
        name: "Espresso",
        description: "Single origin, pulled to perfection",
        price: "12",
      },
      {
        name: "Flat White",
        description: "Velvety microfoam over a double shot",
        price: "18",
      },
      {
        name: "Cortado",
        description: "Equal parts espresso and steamed milk",
        price: "15",
      },
      {
        name: "Cappuccino",
        description: "Classic Italian style, rich and balanced",
        price: "16",
      },
      {
        name: "Latte",
        description: "Smooth and creamy with latte art",
        price: "18",
      },
    ],
  },
  {
    title: "Filter & Cold",
    items: [
      {
        name: "Pour Over V60",
        description: "Hand-brewed single origin, clean and bright",
        price: "20",
      },
      {
        name: "Cold Brew",
        description: "16-hour slow steeped, smooth & bold",
        price: "22",
      },
      {
        name: "Iced Latte",
        description: "Double espresso over ice with cold milk",
        price: "20",
      },
      {
        name: "Matcha Latte",
        description: "Ceremonial grade matcha, oat milk",
        price: "22",
      },
      {
        name: "Lemonade Tonic",
        description: "Espresso, tonic water, fresh lemon",
        price: "24",
      },
    ],
  },
  {
    title: "Sweet & Savory",
    items: [
      {
        name: "Croissant",
        description: "Buttery, flaky, baked fresh daily",
        price: "14",
      },
      {
        name: "Avocado Toast",
        description: "Sourdough, smashed avo, chili flakes",
        price: "28",
      },
      {
        name: "Banana Bread",
        description: "House-made, warm with walnut crunch",
        price: "16",
      },
      {
        name: "Cheesecake",
        description: "Creamy New York style, berry compote",
        price: "22",
      },
      {
        name: "Club Sandwich",
        description: "Chicken, bacon, egg, fresh greens",
        price: "32",
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
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-warm-800/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-warm-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            What We Serve
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-cream mb-6">
            Our Menu
          </h2>
          <div className="divider mx-auto mb-6" />
          <p className="text-warm-400 text-lg max-w-xl mx-auto">
            Carefully crafted drinks and bites, made with love and the finest
            ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${
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
          * Prices in RON. Menu items may vary based on seasonal availability.
          <br />
          All our coffee is specialty grade, scored 80+ on the SCA scale.
        </p>
      </div>
    </section>
  );
}
