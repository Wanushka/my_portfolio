import { personalData } from "../../data/personal";
import Button from "../ui/Button";
import SocialLinks from "../common/SocialLinks";
import AnimatedSection from "../common/AnimatedSection";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="section min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <AnimatedSection className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Image Container - Left Side */}
        <div className="lg:w-1/2 relative group">
          <div className="w-[400px] h-[400px] relative rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl transition-all duration-500 ease-in-out group-hover:border-purple-400 group-hover:shadow-purple-500/50 group-hover:shadow-3xl group-hover:scale-105">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out"></div>
            <Image
              src="/images/profile.jpg" // Make sure to add your profile image in the public/images folder
              alt="Profile"
              layout="fill"
              objectFit="cover"
              priority
              className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          
          {/* Floating elements around profile */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-70 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
          <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse opacity-50 group-hover:opacity-80 transition-opacity duration-300 delay-200"></div>
        </div>

        {/* Content Container - Right Side */}
        <div className="lg:w-3/4 text-left space-y-6">
          {/* Greeting Badge */}
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-default">
              Hey! 👋 I'm
            </span>
          </div>
          
          {/* Name with gradient text */}
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 hover:from-purple-300 hover:to-blue-400 transition-all duration-300 cursor-default">
            {personalData.name}
          </h1>

          {/* Role description */}
          <div className="mb-6">
            <p className="text-2xl text-gray-300 hover:text-white transition-colors duration-300 cursor-default">
              I'm a <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300">Full-Stack Developer</span>
            </p>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              variant="primary" 
              as="a" 
              href="/resume.pdf" 
              download="YourName_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-file-alt mr-2 group-hover:animate-pulse"></i>
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              as="a" 
              href="#contact"
              className="group relative overflow-hidden border-2 border-purple-500 text-purple-400 hover:text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-envelope mr-2 group-hover:animate-bounce"></i>
                Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex gap-6">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <SocialLinks />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;