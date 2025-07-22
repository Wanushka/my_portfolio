import React, { useContext } from "react";
import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { BsBuildingsFill } from "react-icons/bs";
import { experienceData } from "../../data/experience";
import { ThemeContext } from "../../contexts/ThemeContext";

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="experience" className="section pt-20 pb-16 bg-navy-900">
      <AnimatedSection>
        <SectionHeading title="Experience" className="text-white mb-8 md:mb-12" />
        <div className="relative pl-4 md:pl-8">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-500 hidden md:block"></div>

          {/* Experience cards */}
          <div className="space-y-8 md:space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - only visible on desktop */}
                <div className="absolute -left-6 md:-left-10 mt-1.5 hidden md:block">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <div className="absolute top-0 left-0 h-4 w-4 rounded-full border-2 border-blue-500 animate-ping"></div>
                </div>

                {/* Experience card */}
                <div className="rounded-lg border border-navy-700 bg-navy-800 p-4 md:p-6 shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    {/* Company logo placeholder */}
                    <div className="flex-shrink-0 p-2 md:p-3 bg-navy-700 rounded-lg self-center sm:self-start">
                      <BsBuildingsFill className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                    </div>

                    <div className="flex-grow w-full">
                      {/* Header */}
                      <h3 className={`text-lg md:text-xl font-semibold text-center sm:text-left ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>{exp.title}</h3>
                      <p className="text-base md:text-lg text-blue-400 text-center sm:text-left">{exp.company}</p>
                      <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 text-center sm:text-left">
                        {exp.location} • {exp.duration}
                      </p>

                      {/* Description bullets */}
                      <ul className={`list-disc list-inside text-sm md:text-base space-y-1 md:space-y-2 mb-3 md:mb-4 ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="leading-relaxed">{achievement}</li>
                        ))}
                      </ul>

                      {/* Technology tags */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center sm:justify-start">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 md:px-3 py-1 text-xs md:text-sm rounded-full bg-navy-700 text-blue-400 border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Experience;