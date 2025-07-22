import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const skillsData = {
  languages: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ],
  technologies: [
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ]
};

const SkillCard = ({ name, icon }) => {
  const { theme } = useContext(ThemeContext);
  
  // Extract a color from the icon URL to use for the shadow
  const getIconColor = () => {
    const colorMap = {
      'react': theme === 'dark' ? 'rgba(97, 218, 251, 0.5)' : 'rgba(97, 218, 251, 0.3)',
      'nodejs': theme === 'dark' ? 'rgba(104, 160, 99, 0.5)' : 'rgba(104, 160, 99, 0.3)',
      'javascript': theme === 'dark' ? 'rgba(240, 219, 79, 0.5)' : 'rgba(240, 219, 79, 0.4)',
      'typescript': theme === 'dark' ? 'rgba(49, 120, 198, 0.5)' : 'rgba(49, 120, 198, 0.3)',
      'python': theme === 'dark' ? 'rgba(53, 114, 165, 0.5)' : 'rgba(53, 114, 165, 0.3)',
      'java': theme === 'dark' ? 'rgba(227, 76, 38, 0.5)' : 'rgba(227, 76, 38, 0.3)',
      'cplusplus': theme === 'dark' ? 'rgba(0, 117, 192, 0.5)' : 'rgba(0, 117, 192, 0.3)',
      'go': theme === 'dark' ? 'rgba(0, 173, 216, 0.5)' : 'rgba(0, 173, 216, 0.3)',
      'dart': theme === 'dark' ? 'rgba(0, 180, 216, 0.5)' : 'rgba(0, 180, 216, 0.3)',
      'firebase': theme === 'dark' ? 'rgba(255, 202, 40, 0.5)' : 'rgba(255, 202, 40, 0.4)',
      'postgresql': theme === 'dark' ? 'rgba(51, 103, 145, 0.5)' : 'rgba(51, 103, 145, 0.3)',
      'mysql': theme === 'dark' ? 'rgba(83, 130, 161, 0.5)' : 'rgba(83, 130, 161, 0.3)',
      'mongodb': theme === 'dark' ? 'rgba(77, 179, 61, 0.5)' : 'rgba(77, 179, 61, 0.3)',
      'docker': theme === 'dark' ? 'rgba(36, 150, 237, 0.5)' : 'rgba(36, 150, 237, 0.3)',
      'flutter': theme === 'dark' ? 'rgba(69, 208, 238, 0.5)' : 'rgba(69, 208, 238, 0.3)',
      'googlecloud': theme === 'dark' ? 'rgba(59, 137, 238, 0.5)' : 'rgba(59, 137, 238, 0.3)',
      'azure': theme === 'dark' ? 'rgba(0, 137, 214, 0.5)' : 'rgba(0, 137, 214, 0.3)',
      'bootstrap': theme === 'dark' ? 'rgba(86, 61, 124, 0.5)' : 'rgba(86, 61, 124, 0.3)',
      'tailwindcss': theme === 'dark' ? 'rgba(56, 189, 248, 0.5)' : 'rgba(56, 189, 248, 0.3)',
      'nextjs': theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)',
      'terraform': theme === 'dark' ? 'rgba(94, 86, 225, 0.5)' : 'rgba(94, 86, 225, 0.3)',
      'html5': theme === 'dark' ? 'rgba(227, 76, 38, 0.5)' : 'rgba(227, 76, 38, 0.3)',
      'css3': theme === 'dark' ? 'rgba(38, 77, 228, 0.5)' : 'rgba(38, 77, 228, 0.3)',
      'nginx': theme === 'dark' ? 'rgba(0, 150, 57, 0.5)' : 'rgba(0, 150, 57, 0.3)'
    };
    
    // Find the matching color from the URL
    const iconLower = icon.toLowerCase();
    const matchedColor = Object.keys(colorMap).find(key => iconLower.includes(key));
    
    return matchedColor ? colorMap[matchedColor] : theme === 'dark' ? 'rgba(100, 100, 100, 0.5)' : 'rgba(100, 100, 100, 0.3)';
  };

  const shadowColor = getIconColor();

  // Theme-aware class names
  const cardClasses = theme === 'dark' 
    ? "bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600" 
    : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md";

  const textClasses = theme === 'dark' 
    ? "text-gray-300 group-hover:text-white" 
    : "text-gray-700 group-hover:text-gray-900";

  const fallbackClasses = theme === 'dark' 
    ? "bg-gray-600 text-white" 
    : "bg-gray-300 text-gray-700";

  return (
    <div className="group relative">
      <div 
        className={`${cardClasses} rounded-xl p-3 flex flex-col items-center justify-center min-h-[90px] transition-all duration-300 hover:scale-105 cursor-pointer border`}
        style={{
          '--shadow-color': shadowColor,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 15px 3px var(--shadow-color)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = theme === 'light' ? '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' : 'none';
        }}
      >
        <div className="w-10 h-10 mb-2 flex items-center justify-center">
          <img 
            src={icon} 
            alt={name} 
            className="w-full h-full object-contain filter transition-all duration-300 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className={`hidden w-10 h-10 ${fallbackClasses} rounded-lg items-center justify-center text-xs font-bold`}>
            {name.slice(0, 2)}
          </div>
        </div>
        <span className={`${textClasses} text-xs font-medium text-center transition-colors duration-300`}>
          {name}
        </span>
      </div>
    </div>
  );
};

const ModernSkillsSection = () => {
  return (
    <section id="skills" className="section pt-20 pb-16">
      <AnimatedSection>
        <SectionHeading title="Skills" />
        <div className="max-w-7xl mx-auto">
          {/* Languages Section */}
          <div className="mb-16">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {skillsData.languages.map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
          
          {/* Technologies and Frameworks Section */}
          <div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {skillsData.technologies.map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ModernSkillsSection;