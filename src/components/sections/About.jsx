import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { personalData } from "../../data/personal";

const About = () => {
  return (
    <section id="about" className="section pt-20 pb-16 ">
      <AnimatedSection>
        <SectionHeading 
          title="About Me" 
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-4xl font-bold text-center mb-8 drop-shadow-lg" 
        />
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl border border-slate-700/50 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-500 hover:border-purple-500/30">
            <p className="text-lg mb-6 leading-relaxed text-slate-300">
              Hey there! 👋 I'm <span className="text-white font-semibold">{personalData.name}</span>, a <span className="text-blue-400 font-semibold">{personalData.title}</span> based in <span className="text-purple-400 font-semibold">{personalData.location}</span>. I love 
              transforming ideas into scalable web applications and solving complex coding challenges. My journey in tech revolves 
              around continuous learning, experimenting with new technologies, and building solutions that make an impact.
            </p>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 mx-auto mb-12 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500 group">
              <span role="img" aria-label="rocket" className="group-hover:animate-bounce">🚀</span>
              <span className="font-semibold">I like to build products and solve problems</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:border-blue-500/30 group">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                  👤
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                  Who I Am
                </span>
              </h3>
              <ul className="text-left space-y-4 text-slate-300">
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-blue-400 mt-1">▶</span>
                  <span>A computer engineering student with a strong interest in software development and technology.</span>
                </li>
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-blue-400 mt-1">▶</span>
                  <span>Enjoy solving complex problems and working on innovative solutions.</span>
                </li>
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-blue-400 mt-1">▶</span>
                  <span>Always seeking opportunities to expand my knowledge and skills in computer engineering.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-slate-700/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 hover:border-purple-500/30 group">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                  💻
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
                  My Work
                </span>
              </h3>
              <ul className="text-left space-y-4 text-slate-300">
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-purple-400 mt-1">▶</span>
                  <span>Develop software solutions and applications using modern programming languages.</span>
                </li>
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-purple-400 mt-1">▶</span>
                  <span>Focus on improving system performance, debugging, and optimizing code.</span>
                </li>
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-purple-400 mt-1">▶</span>
                  <span>Engage in projects that involve both hardware and software integration.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;