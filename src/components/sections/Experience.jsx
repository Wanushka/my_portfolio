import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { BsBuildingsFill } from "react-icons/bs";
import { experienceData } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="section pt-20 pb-16 bg-navy-900">
      <AnimatedSection>
        <SectionHeading title="Experience" className="text-white mb-12" />
        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-500"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot with pulse effect */}
                <div className="absolute -left-10 mt-1.5">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <div className="absolute top-0 left-0 h-4 w-4 rounded-full border-2 border-blue-500 animate-ping"></div>
                </div>

                {/* Experience card */}
                <div className="rounded-lg border border-navy-700 bg-navy-800 p-6 shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex items-start gap-4">
                    {/* Company logo placeholder */}
                    <div className="flex-shrink-0 p-3 bg-navy-700 rounded-lg">
                      <BsBuildingsFill className="h-6 w-6 text-blue-400" />
                    </div>

                    <div className="flex-grow">
                      {/* Header */}
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-lg text-blue-400">{exp.company}</p>
                      <p className="text-gray-400 mb-4">
                        {exp.location} • {exp.duration}
                      </p>

                      {/* Description bullets */}
                      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>

                      {/* Technology tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-navy-700 text-blue-400 border border-blue-500/30"
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