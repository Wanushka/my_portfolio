import { personalData } from "../../data/personal";
import Button from "../ui/Button";
import SocialLinks from "../common/SocialLinks";
import AnimatedSection from "../common/AnimatedSection";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800 px-4">
      <AnimatedSection className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image Container - Left Side */}
        <div className="lg:w-1/2 relative">
          <div className="w-[400px] h-[400px] relative rounded-full overflow-hidden border-4 border-purple-500">
            <Image
              src="/images/profile.jpg" // Make sure to add your profile image in the public/images folder
              alt="Profile"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        {/* Content Container - Right Side */}
        <div className="lg:w-3/4 text-left">
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
              Hey! 👋 I'm
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-purple-500 mb-4">
            {personalData.name}
          </h1>

          <div className="mb-6">
            <p className="text-2xl">
              I'm a <span className="text-purple-400">Full-Stack Developer</span>
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <Button 
              variant="primary" 
              as="a" 
              href="/resume.pdf" 
              download="YourName_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-alt mr-2"></i>
              Download Resume
            </Button>
            <Button variant="outline" as="a" href="#contact">
              <i className="fas fa-envelope mr-2"></i>
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6">
            <SocialLinks />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-2xl text-gray-400"></i>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;