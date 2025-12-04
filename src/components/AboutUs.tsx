"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faRocket,
  faAward,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const team = [
  {
    name: "Muhammad Alfaridzi",
    role: "Founder & CEO",
    img: "/assets/images/chee.jpeg",
    expertise: "Strategy & Vision",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dina Putri",
    role: "Lead Engineer",
    img: "/assets/images/reze.jpeg",
    expertise: "Backend & DevOps",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Rama Santoso",
    role: "UI/UX Designer",
    img: "/assets/images/jfk.jpeg",
    expertise: "User Experience",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Sari Lestari",
    role: "Frontend Developer",
    img: "/assets/images/maomao.jpeg",
    expertise: "React & Next.js",
    color: "from-green-500 to-emerald-500",
  },
];

const values = [
  {
    icon: faRocket,
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge technologies",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: faAward,
    title: "Quality Driven",
    description: "Every pixel, every line of code matters to us",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: faHeart,
    title: "Client Success",
    description: "Your growth is our mission and passion",
    color: "from-orange-500 to-red-500",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-brand-60 rounded-full text-sm font-semibold mb-4">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Meet The Team
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            The Minds Behind{" "}
            <span className="bg-linear-to-r from-brand-60 to-brand-30 bg-clip-text">
              Your Success
            </span>
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            We{"'"}re a small team of designers and engineers obsessed with
            speed, quality, and modern digital experiences.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="p-8 md:p-12 bg-linear-to-br from-white to-gray-50 border-2 border-gray-100 rounded-3xl shadow-xl">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
              We help brands turn ideas into{" "}
              <span className="font-bold text-brand-60">
                high-performance digital products
              </span>
              . Our team specializes in UI/UX, frontend engineering, and modern
              frameworks such as{" "}
              <span className="font-semibold">
                Next.js, React, and Tailwind CSS
              </span>{" "}
              — all tailored to deliver exceptional speed and user experience.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {team.map((person, i) => (
              <SwiperSlide key={i}>
                <div className="group p-8 bg-white border-2 border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${person.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="relative inline-block mb-6">
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${person.color} rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity`}
                      ></div>
                      <Image
                        width={120}
                        height={120}
                        src={person.img}
                        className="relative mx-auto w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500"
                        alt={person.name}
                      />
                    </div>

                    <h4 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-brand-60 transition-colors">
                      {person.name}
                    </h4>
                    <p
                      className={`text-sm font-semibold bg-linear-to-r ${person.color} bg-clip-text text-transparent mb-3`}
                    >
                      {person.role}
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-xs font-medium text-gray-600 group-hover:bg-gray-100 transition-colors">
                      <span
                        className={`w-2 h-2 rounded-full bg-linear-to-r ${person.color}`}
                      ></span>
                      {person.expertise}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="max-w-6xl mx-auto">
          <h4 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-linear-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="text-2xl text-white"
                  />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h5>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
