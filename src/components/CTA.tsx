import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-60 via-blue-700 to-brand-30"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">

          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
              <FontAwesomeIcon icon={faRocket} className="mr-2" />
              Let's Build Together
            </span>
          </div>


          <h3 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Next Project?
            </span>
          </h3>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's build something great together. Get a free consultation and quote today.
          </p>


          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              className="bg-white text-brand-60 hover:bg-gray-100 shadow-2xl px-8 py-6 text-lg font-bold rounded-xl group"
              asChild
            >
              <a href="mailto:hello@example.com" className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} />
                Get a Free Quote
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Button>
            
            <Button 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-bold rounded-xl"
              asChild
            >
              <a href="tel:+123456789" className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} />
                Call Us Now
              </a>
            </Button>
          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Fast Turnaround</h4>
              <p className="text-blue-100 text-sm">Projects delivered in 2-6 weeks</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                <span className="text-3xl">💎</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Premium Quality</h4>
              <p className="text-blue-100 text-sm">Enterprise-grade solutions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                <span className="text-3xl">🛡️</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Full Support</h4>
              <p className="text-blue-100 text-sm">Ongoing maintenance included</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#0f4c81"/>
        </svg>
      </div>
    </section>
  );
}