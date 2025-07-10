import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { certificationsData } from "../../data/certifications";
import Image from "next/image";

const Certifications = () => {
  return (
    <section id="certifications" className="section pt-20 pb-16">
    <AnimatedSection>
      <SectionHeading title="Certifications" />
      <div className="grid gap-6 md:grid-cols-2">
        {certificationsData.map((cert, index) => (
          <Card key={index}>
            <Image
              src={cert.image}
              alt={cert.title}
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-text-light dark:text-text-dark">{cert.issuer}</p>
            <p className="text-text-light dark:text-text-dark">{cert.date}</p>
          </Card>
        ))}
      </div>
    </AnimatedSection>
    </section>
  );
};

export default Certifications;