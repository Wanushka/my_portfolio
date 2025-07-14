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
              Hi there! 👋 I'm{" "}
              <span className="text-white font-semibold">
                {personalData.name}
              </span>
              , a passionate{" "}
              <span className="text-blue-400 font-semibold">
                {personalData.title}
              </span>{" "}
              who enjoys turning creative ideas into real digital experiences. I
              love building clean, user-friendly web apps and mobile apps,
              exploring new tech, and solving fun coding puzzles. Let’s create
              something awesome together! 🚀
            </p>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl flex items-center gap-4 mx-auto mb-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500 group">
              <span
                role="img"
                aria-label="rocket"
                className="group-hover:animate-bounce"
              >
                🚀
              </span>
              <span className="font-semibold">
                I like to build products and solve problems
              </span>
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
              <ul className="text-left space-y-5 text-slate-300 text-base leading-relaxed">
                <li className="flex items-start gap-4 hover:text-white transition duration-300">
                  <span className="text-blue-500 text-xl">▶</span>
                  <span>
                    Dedicated Software Engineer with experience in crafting
                    mobile and web applications that solve real-world problems.
                  </span>
                </li>
                <li className="flex items-start gap-4 hover:text-white transition duration-300">
                  <span className="text-blue-500 text-xl">▶</span>
                  <span>
                    Strong believer in clean code, continuous learning, and
                    building user-focused digital experiences.
                  </span>
                </li>
                <li className="flex items-start gap-4 hover:text-white transition duration-300">
                  <span className="text-blue-500 text-xl">▶</span>
                  <span>
                    Passionate about turning ideas into fully functional
                    products through design, code, and innovation.
                  </span>
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
              <ul className="text-left space-y-4 text-slate-300 text-base leading-relaxed">
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-purple-400 mt-1">🚀</span>
                  <span>
                    Build modern mobile and web apps using new technologies.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-purple-400 mt-1">🛠️</span>
                  <span>
                    Focus on clean, optimized, and scalable code — always
                    improving performance and user experience.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-purple-400 mt-1">🔍</span>
                  <span>
                    Passionate about solving real-world problems through
                    creative thinking and practical solutions.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                  <span className="text-purple-400 mt-1">💡</span>
                  <span>
                    Love exploring new technologies like IoT, Machine Learning,
                    and cloud services like Firebase.
                  </span>
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
