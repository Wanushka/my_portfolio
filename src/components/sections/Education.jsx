import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { educationData } from "../../data/education";
import { useTheme } from "../../hooks/useTheme";

const Education = () => {
  const { theme } = useTheme();

  return (
    <section
      id="education"
      className={`section py-16 lg:py-24`}
    >
      <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeading
            title="Education"
            className={`text-center mb-12 lg:mb-16 ${
              theme === "dark" ? "text-primary-dark" : "text-primary-light"
            }`}
          />

          {/* Desktop Timeline Layout */}
          <div className="hidden lg:block relative">
            {/* Timeline vertical line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-primary-dark/60 via-primary-dark/40 to-primary-dark/20"
                  : "bg-gradient-to-b from-primary-light/60 via-primary-light/40 to-primary-light/20"
              }`}
            ></div>

            {/* Timeline dot at top */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 rounded-full ${
                theme === "dark" ? "bg-primary-dark" : "bg-primary-light"
              } shadow-lg`}
            ></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                      theme === "dark"
                        ? "bg-gray-800 border-primary-dark shadow-lg shadow-primary-dark/20"
                        : "bg-white border-primary-light shadow-lg shadow-primary-light/20"
                    } z-10`}
                  ></div>

                  {/* Desktop Card - alternating left/right */}
                  <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div
                        className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                          theme === "dark"
                            ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-primary-dark/20"
                            : "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-primary-light/20"
                        }`}
                      >
                        <div className="space-y-3">
                          <div
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              theme === "dark"
                                ? "bg-primary-dark/20 text-primary-dark"
                                : "bg-primary-light/20 text-primary-light"
                            }`}
                          >
                            {edu.duration}
                          </div>
                          
                          <h3
                            className={`text-lg font-bold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {edu.degree}
                          </h3>
                          
                          <p
                            className={`text-sm font-medium ${
                              theme === "dark" ? "text-primary-dark" : "text-primary-light"
                            }`}
                          >
                            {edu.institution}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 text-sm">
                            <span
                              className={`flex items-center ${
                                theme === "dark" ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              📍 {edu.location}
                            </span>
                            
                            {edu.score && (
                              <span
                                className={`flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                                  theme === "dark"
                                    ? "bg-green-900/30 text-green-300"
                                    : "bg-green-100 text-green-700"
                                }`}
                              >
                                🏆 {edu.score}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline dot at bottom */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-4 h-4 rounded-full ${
                theme === "dark" ? "bg-primary-dark/60" : "bg-primary-light/60"
              }`}
            ></div>
          </div>

          {/* Mobile Timeline Layout */}
          <div className="block lg:hidden">
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index}>
                  {/* Mobile Card */}
                  <div
                    className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                      theme === "dark"
                        ? "bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-primary-dark/30"
                        : "bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-primary-light/30"
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Duration Badge */}
                      <div className="flex justify-between items-start">
                        <div
                          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                            theme === "dark"
                              ? "bg-primary-dark/20 text-primary-dark border border-primary-dark/30"
                              : "bg-primary-light/20 text-primary-light border border-primary-light/30"
                          }`}
                        >
                          {edu.duration}
                        </div>
                        
                        {/* Timeline indicator for mobile */}
                        <div
                          className={`w-8 h-1 rounded-full ${
                            theme === "dark" ? "bg-primary-dark/40" : "bg-primary-light/40"
                          }`}
                        ></div>
                      </div>
                      
                      {/* Degree */}
                      <h3
                        className={`text-xl font-bold leading-tight ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {edu.degree}
                      </h3>
                      
                      {/* Institution */}
                      <p
                        className={`text-base font-semibold ${
                          theme === "dark" ? "text-primary-dark" : "text-primary-light"
                        }`}
                      >
                        {edu.institution}
                      </p>
                      
                      {/* Details */}
                      <div className="space-y-2">
                        <div
                          className={`flex items-center text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <span className="mr-2">📍</span>
                          <span>{edu.location}</span>
                        </div>
                        
                        {edu.score && (
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium ${
                              theme === "dark"
                                ? "bg-green-900/40 text-green-300 border border-green-700/30"
                                : "bg-green-50 text-green-700 border border-green-200"
                            }`}
                          >
                            <span className="mr-1">🏆</span>
                            <span>{edu.score}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Education;