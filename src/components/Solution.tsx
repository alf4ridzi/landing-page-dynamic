import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faShoppingCart,
  faRocket,
  faBolt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    id: 1,
    icon: faCode,
    title: "Website Development",
    desc: "Modern Next.js sites with performance-first approach.",
    color: "from-blue-500 to-cyan-500",
    features: ["Next.js 14+", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    icon: faDatabase,
    title: "Headless CMS",
    desc: "Strapi, Sanity or Contentful integrations.",
    color: "from-purple-500 to-pink-500",
    features: ["Flexible Content", "API First", "Easy Management"],
  },
  {
    id: 3,
    icon: faShoppingCart,
    title: "E-commerce",
    desc: "Fast, secure shops with Stripe + headless checkout.",
    color: "from-orange-500 to-red-500",
    features: ["Stripe Integration", "Fast Checkout", "Secure Payments"],
  },
];

export default function Solution() {
  return (
    <section
      id="solutions"
      className="py-20 bg-linear-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-10 rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-brand-60 text-white rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Digital Solutions
          </h3>
          <p className="text-xl text-gray-600">
            From MVPs to enterprise portals – we cover the full product
            lifecycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((s) => (
            <article
              key={s.id}
              className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <FontAwesomeIcon
                    icon={s.icon}
                    className="text-2xl text-white"
                  />
                </div>

                <h4 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-brand-60 transition-colors">
                  {s.title}
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>

                <ul className="space-y-2">
                  {s.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-30 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="text-brand-60 font-semibold group-hover:gap-3 flex items-center gap-2 transition-all"
                  >
                    Learn more
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
