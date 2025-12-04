import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Headline() {
  return (
    <header className="relative w-full min-h-[80vh] flex items-center bg-linear-to-br from-brand-60 via-blue-700 to-brand-30 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            We Build{" "}
            <span className="bg-linear-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Beautiful
            </span>
            , Fast Websites
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Development & custom solutions for startups and enterprises.
            Next.js, Headless CMS, e-commerce, and performance-first builds.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              className="bg-white text-brand-60 hover:bg-gray-100 shadow-2xl px-8 py-6 text-lg font-semibold rounded-xl group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Get Started
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </Button>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all text-base font-medium"
            >
              <FontAwesomeIcon icon={faRocket} className="text-sm" />
              View Our Work
            </a>
          </div>
        </div>

        <div className="flex-1 hidden lg:flex justify-center">
          <div className="relative">
            <div className="w-[420px] h-80 rounded-3xl bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-4 w-32 bg-linear-to-r from-yellow-300 to-orange-400 rounded-full animate-pulse" />
                  <div className="h-8 w-64 bg-white/30 rounded-lg" />
                  <div className="h-6 w-48 bg-white/20 rounded-lg" />
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-400 to-purple-500 rounded-xl shadow-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-full bg-white/15 rounded" />
                    <div className="h-4 w-3/4 bg-white/10 rounded" />
                    <div className="h-4 w-1/2 bg-white/8 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-2xl shadow-xl animate-bounce"
              style={{ animationDuration: "3s" }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500 rounded-full shadow-xl animate-bounce delay-500"
              style={{ animationDuration: "2.5s" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </header>
  );
}
