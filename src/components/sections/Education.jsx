import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import TimelineCard from "../ui/TimelineCard";
import { educationData } from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="section pt-20 pb-16">
      <AnimatedSection>
        <SectionHeading title="Education" className="text-indigo-500 mb-12" />
        
        <div className="container relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
          
          {educationData.map((edu, index) => (
            <TimelineCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              duration={edu.duration}
              score={edu.score}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Education;