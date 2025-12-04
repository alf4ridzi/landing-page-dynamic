import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    tag: "e-commerce",
    image: "/assets/images/portfolio/ecommerce.png",
    description: "Modern storefront with 50% faster checkout",
    metrics: "+120% conversion",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    tag: "landing",
    image: "/assets/images/portfolio/sass.png",
    description: "Real-time analytics platform for B2B",
    metrics: "10k+ daily users",
  },
  {
    id: 3,
    title: "Marketing Website",
    tag: "e-commerce",
    image: "/assets/images/portfolio/marketing.webp",
    description: "High-converting landing pages",
    metrics: "+85% lead gen",
  },
  {
    id: 4,
    title: "Corporate Portal",
    tag: "landing",
    image: "/assets/images/portfolio/corporate.png",
    description: "Enterprise intranet solution",
    metrics: "500+ employees",
  },
  {
    id: 5,
    title: "Mobile App",
    tag: "e-commerce",
    image: "/assets/images/portfolio/cross-platform.png",
    description: "Cross-platform booking system",
    metrics: "4.8★ rating",
  },
  {
    id: 6,
    title: "Blog Platform",
    tag: "landing",
    image: "/assets/images/portfolio/blog-platform.webp",
    description: "Headless CMS with rich content",
    metrics: "1M+ views/mo",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio That Speaks
          </h3>
          <p className="text-xl text-gray-600">
            Selected work – performance and conversion focused.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  width={150}
                  height={150}
                  src={p.image}
                  alt={p.title}
                  className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a
                    href="#"
                    className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View Project
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-sm"
                    />
                  </a>
                </div>

                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      p.tag === "e-commerce"
                        ? "bg-green-500/90 text-white"
                        : "bg-blue-500/90 text-white"
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-brand-60 transition-colors">
                  {p.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{p.description}</p>

                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-linear-to-r from-brand-60 to-brand-10 rounded-full"></div>
                  <span className="text-sm font-semibold text-brand-60">
                    {p.metrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-brand-60 text-white rounded-full font-semibold hover:bg-brand-60 transition-all hover:scale-105 shadow-lg"
          >
            Start Your Project {""}
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </section>
  );
}
