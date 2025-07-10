import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { personalData } from "../../data/personal";

const About = () => {
  return (
    <section id="about" className="section pt-20 pb-16">
      <AnimatedSection>
        <SectionHeading title="About Me" />
        <p className="text-lg text-text-light dark:text-text-dark max-w-3xl mx-auto">
          I am a passionate {personalData.title} based in {personalData.location}. With a strong foundation in web development, I specialize in creating responsive and user-friendly applications. I love tackling complex problems and continuously learning new technologies.
        </p>
      </AnimatedSection>
    </section>
  );
};

export default About;