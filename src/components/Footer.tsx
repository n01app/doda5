export default function Footer() {
  return (
    <footer className="bg-espresso text-warm-400 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-cream mb-4">
              DODA<span className="text-warm-400">5</span>
            </h3>
            <p className="text-warm-500 leading-relaxed max-w-md mb-6">
              A cozy specialty coffee shop in the heart of Bucharest. Every cup
              is a journey through origin, craft, and passion. Ideas in Motion.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/doda5_ideas_in_motion/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-warm-900 flex items-center justify-center hover:bg-warm-800 transition-colors group"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 text-warm-400 group-hover:text-warm-300 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-semibold text-sm tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-warm-500 hover:text-warm-300 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-warm-500 hover:text-warm-300 transition-colors text-sm"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#space"
                  className="text-warm-500 hover:text-warm-300 transition-colors text-sm"
                >
                  Our Space
                </a>
              </li>
              <li>
                <a
                  href="#find-us"
                  className="text-warm-500 hover:text-warm-300 transition-colors text-sm"
                >
                  Find Us
                </a>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-cream font-semibold text-sm tracking-wider uppercase mb-4">
              Visit
            </h4>
            <ul className="space-y-3 text-sm text-warm-500">
              <li>Str. Traian Doda nr. 5</li>
              <li>Sector 2, Bucharest</li>
              <li className="pt-2">Mon&ndash;Fri: 08:00&ndash;20:00</li>
              <li>Sat: 09:00&ndash;21:00</li>
              <li>Sun: 09:00&ndash;18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-600 text-xs">
            &copy; {new Date().getFullYear()} DODA5 &mdash; Ideas in Motion.
            All rights reserved.
          </p>
          <p className="text-warm-700 text-xs">
            Crafted with care in Bucharest
          </p>
        </div>
      </div>
    </footer>
  );
}
