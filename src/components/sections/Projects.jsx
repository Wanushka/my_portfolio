import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { projectsData } from "../../data/projects";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="section pt-20 pb-16">
    <AnimatedSection>
      <SectionHeading title="Projects" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <Card key={index}>
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-text-light dark:text-text-dark">{project.description}</p>
            <p className="text-sm mt-2">{project.technologies.join(", ")}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light dark:text-primary-dark hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </Card>
        ))}
      </div>
    </AnimatedSection>
    </section>
  );
};

export default Projects;