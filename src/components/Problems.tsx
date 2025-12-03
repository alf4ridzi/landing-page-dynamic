import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck, faBolt, faChartLine, faGauge } from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    id: 1,
    icon: faGauge,
    title: "Legacy CMS migrations",
    description: "Stuck with outdated WordPress or Drupal? We migrate to modern headless solutions.",
    impact: "50% slower load times"
  },
  {
    id: 2,
    icon: faBolt,
    title: "Slow page loads & poor lighthouse scores",
    description: "Poor performance kills conversions and SEO rankings.",
    impact: "40% bounce rate increase"
  },
  {
    id: 3,
    icon: faChartLine,
    title: "Hard-to-scale frontends",
    description: "Monolithic architectures that break when traffic spikes.",
    impact: "Limited growth potential"
  },
];

const comparison = [
  { label: "Load Time", before: "5.2s", after: "1.1s" },
  { label: "Lighthouse Score", before: "45/100", after: "98/100" },
  { label: "Conversion Rate", before: "2.1%", after: "4.8%" },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            ⚠️ Common Challenges
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Problems We <span className="text-red-600">Solve</span>
          </h2>
          <p className="text-xl text-gray-600">
            Many teams ship slow, monolithic sites with poor SEO and low conversion. 
            We modernize your stack, improve UX, and optimize performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="group p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl hover:border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={problem.icon} className="text-white text-xl" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                        {problem.title}
                      </h3>
                      <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                        {problem.id}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">
                      {problem.description}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="text-center mt-16">
          <a 
            href="#solutions" 
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-brand-60 transition-all hover:scale-105 shadow-lg"
          >
            See our solutions
          </a>
        </div>
      </div>
    </section>
  );
}