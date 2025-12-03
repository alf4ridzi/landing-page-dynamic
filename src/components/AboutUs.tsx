"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function AboutUs() {
  const team = [
    { name: "Ari", role: "Founder", img: "/assets/person1.jpg" },
    { name: "Dina", role: "Engineer", img: "/assets/person2.jpg" },
    { name: "Rama", role: "UI/UX Designer", img: "/assets/person3.jpg" },
    { name: "Sari", role: "Frontend Dev", img: "/assets/person4.jpg" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Blur Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-brand-60 rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h3>
          <p className="text-lg text-gray-600">
            We're a small team of designers and engineers obsessed with speed,
            quality, and modern digital experiences.
          </p>
        </div>

        {/* LEFT TEXT */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            We help brands turn ideas into high-performance digital products.
            Our team specializes in UI/UX, frontend engineering, and modern
            frameworks such as Next.js, React, and Tailwind CSS — all tailored
            to deliver exceptional speed and user experience.
          </p>
        </div>

        {/* TEAM SLIDER */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {team.map((person, i) => (
              <SwiperSlide key={i}>
                <div className="p-6 bg-white border-2 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
                  <Image
                    width={80}
                    height={80}
                    src={person.img}
                    className="mx-auto w-24 h-24 rounded-full object-cover"
                    alt={person.name}
                  />
                  <h4 className="mt-4 font-bold text-lg text-gray-900">
                    {person.name}
                  </h4>
                  <p className="text-sm text-gray-500">{person.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-brand-60 to-brand-30 rounded-2xl shadow-xl text-white">
            <h4 className="text-2xl font-bold mb-2">Want to work with us?</h4>
            <p className="text-blue-100 mb-6">
              Let’s build something great together.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-brand-60 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
