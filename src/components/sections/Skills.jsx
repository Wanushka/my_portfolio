import React from 'react';
import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const skillsData = {
  languages: [
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ],
  technologies: [
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "NGINX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ]
};

const SkillCard = ({ name, icon }) => {
  // Extract a color from the icon URL to use for the shadow
  const getIconColor = () => {
    const colorMap = {
      'react': 'rgba(97, 218, 251, 0.5)',       // React blue
      'nodejs': 'rgba(104, 160, 99, 0.5)',      // Node.js green
      'javascript': 'rgba(240, 219, 79, 0.5)',  // JavaScript yellow
      'typescript': 'rgba(49, 120, 198, 0.5)',  // TypeScript blue
      'python': 'rgba(53, 114, 165, 0.5)',      // Python blue
      'java': 'rgba(227, 76, 38, 0.5)',         // Java orange
      'cplusplus': 'rgba(0, 117, 192, 0.5)',    // C++ blue
      'go': 'rgba(0, 173, 216, 0.5)',           // Go blue
      'dart': 'rgba(0, 180, 216, 0.5)',         // Dart blue
      'firebase': 'rgba(255, 202, 40, 0.5)',    // Firebase yellow
      'postgresql': 'rgba(51, 103, 145, 0.5)',  // PostgreSQL blue
      'mysql': 'rgba(83, 130, 161, 0.5)',       // MySQL blue
      'mongodb': 'rgba(77, 179, 61, 0.5)',      // MongoDB green
      'docker': 'rgba(36, 150, 237, 0.5)',      // Docker blue
      'flutter': 'rgba(69, 208, 238, 0.5)',     // Flutter blue
      'googlecloud': 'rgba(59, 137, 238, 0.5)', // GCP blue
      'azure': 'rgba(0, 137, 214, 0.5)',        // Azure blue
      'bootstrap': 'rgba(86, 61, 124, 0.5)',    // Bootstrap purple
      'tailwindcss': 'rgba(56, 189, 248, 0.5)', // Tailwind blue
      'nextjs': 'rgba(0, 0, 0, 0.5)',           // Next.js black
      'terraform': 'rgba(94, 86, 225, 0.5)',    // Terraform purple
      'html5': 'rgba(227, 76, 38, 0.5)',        // HTML orange
      'css3': 'rgba(38, 77, 228, 0.5)',         // CSS blue
      'nginx': 'rgba(0, 150, 57, 0.5)'          // NGINX green
    };
    
    // Find the matching color from the URL
    const iconLower = icon.toLowerCase();
    const matchedColor = Object.keys(colorMap).find(key => iconLower.includes(key));
    
    return matchedColor ? colorMap[matchedColor] : 'rgba(100, 100, 100, 0.5)'; // Default gray
  };

  const shadowColor = getIconColor();

  return (
    <div className="group relative">
      <div 
        className="bg-gray-800 rounded-xl p-3 flex flex-col items-center justify-center min-h-[90px] transition-all duration-300 hover:scale-105 hover:bg-gray-700 cursor-pointer border border-gray-700 hover:border-gray-600"
        style={{
          '--shadow-color': shadowColor,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 15px 3px var(--shadow-color)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
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
          <div className="hidden w-10 h-10 bg-gray-600 rounded-lg items-center justify-center text-white text-xs font-bold">
            {name.slice(0, 2)}
          </div>
        </div>
        <span className="text-gray-300 text-xs font-medium text-center group-hover:text-white transition-colors duration-300">
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
            {/* <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Languages
            </h3> */}
            {/* <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8 rounded-full"></div> */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {skillsData.languages.map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
          
          {/* Technologies and Frameworks Section */}
          <div>
            {/* <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Technologies and Frameworks
            </h3> */}
            {/* <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8 rounded-full"></div> */}
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