import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    id: 1,
    name: "Siti Rahman",
    role: "CEO, Acme Tech",
    quote: "Working with this team transformed our online presence. The website loads incredibly fast and our conversion rate increased by 40%. Great result, fast delivery.",
    avatar: "/assets/person1.jpg",
    rating: 5,
    company: "Acme"
  },
  { 
    id: 2, 
    name: "Budi Santoso", 
    role: "CTO, Beta Solutions", 
    quote: "The technical expertise is outstanding. Our site performance improved 3x and the code quality is exceptional. Best development partner we've worked with.",
    avatar: "/assets/person2.jpg",
    rating: 5,
    company: "Beta"
  },
  {
    id: 3,
    name: "Maya Putri",
    role: "Founder, StartupX",
    quote: "From concept to launch in just 4 weeks! The attention to detail and modern design exceeded our expectations. Highly recommend for any serious project.",
    avatar: "/assets/person1.jpg",
    rating: 5,
    company: "StartupX"
  },
  {
    id: 4,
    name: "Rizki Pratama",
    role: "Marketing Director, Commerce Co",
    quote: "Our e-commerce platform now runs smoothly with zero downtime. Customer satisfaction has increased significantly since the redesign.",
    avatar: "/assets/person2.jpg",
    rating: 5,
    company: "Commerce Co"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            ⭐ Client Success Stories
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h3>
          <p className="text-xl text-gray-600">
            Don't just take our word for it – hear from those who've experienced the difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {items.map((t) => (
            <blockquote 
              key={t.id} 
              className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-brand-10 opacity-20 group-hover:opacity-40 transition-opacity">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <FontAwesomeIcon 
                    key={i} 
                    icon={faStar} 
                    className="text-yellow-400 text-sm" 
                  />
                ))}
              </div>


              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>

              <footer className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-60 to-brand-30 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {t.company}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-60">50+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-60">4.9/5</div>
              <div className="text-sm text-gray-600 mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-60">100%</div>
              <div className="text-sm text-gray-600 mt-1">Project Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}