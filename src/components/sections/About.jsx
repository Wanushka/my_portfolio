import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { personalData } from "../../data/personal";
import { useTheme } from "../../hooks/useTheme";

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="section pt-16 pb-12 px-4 sm:pt-20 sm:pb-16">
      <AnimatedSection>
        <SectionHeading
          title="About Me"
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 drop-shadow-lg"
        />

        <div className="max-w-6xl mx-auto">
          {/* Main Introduction Card */}
          <div
            className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl sm:shadow-2xl transition-all duration-500 ${
              theme === "dark"
                ? "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:shadow-purple-500/10 hover:border-purple-500/30"
                : "bg-white/90 backdrop-blur-sm border border-slate-200 hover:shadow-purple-500/10 hover:border-purple-500/30"
            }`}
          >
            <p
              className={`text-base sm:text-lg mb-6 leading-relaxed text-center ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Hi there! 👋 I'm{" "}
              <span
                className={`font-semibold ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                {personalData.name}
              </span>
              , a passionate{" "}
              <span className="text-blue-500 font-semibold">
                {personalData.title}
              </span>{" "}
              who enjoys turning creative ideas into real digital experiences. I
              love building clean, user-friendly web apps and mobile apps,
              exploring new tech, and solving fun coding puzzles. Let's create
              something awesome together! 🚀
            </p>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 rounded-xl flex items-center gap-3 sm:gap-4 mx-auto mb-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500 group text-sm sm:text-base w-fit">
              <span
                role="img"
                aria-label="rocket"
                className="group-hover:animate-bounce text-lg sm:text-xl"
              >
                🚀
              </span>
              <span className="font-semibold">
                I like to build products and solve problems
              </span>
            </button>
          </div>

          {/* Cards Grid - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Who I Am Card */}
            <div
              className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl transition-all duration-500 hover:scale-105 group ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30"
                  : "bg-white border border-slate-200 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3 flex-wrap">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 text-lg sm:text-xl">
                  👤
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                  Who I Am
                </span>
              </h3>
              <ul
                className={`text-left space-y-3 sm:space-y-5 text-sm sm:text-base leading-relaxed ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <li className={`flex items-start gap-3 sm:gap-4 group/item transition duration-300 ${
                  theme === "dark" ? "hover:text-white" : "hover:text-slate-900"
                }`}>
                  <span className="text-blue-500 text-base sm:text-xl flex-shrink-0 mt-0.5 sm:mt-0">
                    ▶
                  </span>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                    Dedicated Software Engineer with experience in crafting
                    mobile and web applications that solve real-world problems.
                  </span>
                </li>
                <li className={`flex items-start gap-3 sm:gap-4 group/item transition duration-300 ${
                  theme === "dark" ? "hover:text-white" : "hover:text-slate-900"
                }`}>
                  <span className="text-blue-500 text-base sm:text-xl flex-shrink-0 mt-0.5 sm:mt-0">
                    ▶
                  </span>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                    Strong believer in clean code, continuous learning, and
                    building user-focused digital experiences.
                  </span>
                </li>
                <li className={`flex items-start gap-3 sm:gap-4 group/item transition duration-300 ${
                  theme === "dark" ? "hover:text-white" : "hover:text-slate-900"
                }`}>
                  <span className="text-blue-500 text-base sm:text-xl flex-shrink-0 mt-0.5 sm:mt-0">
                    ▶
                  </span>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                    Passionate about turning ideas into fully functional
                    products through design, code, and innovation.
                  </span>
                </li>
              </ul>
            </div>

            {/* My Work Card */}
            <div
              className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl transition-all duration-500 hover:scale-105 group ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30"
                  : "bg-white border border-slate-200 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3 flex-wrap">
                <span className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110 text-lg sm:text-xl">
                  💻
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
                  My Work
                </span>
              </h3>
              <ul
                className={`text-left space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <li className={`flex items-start gap-3 group/item transition-colors duration-300 ${
                  theme === "dark" ? "hover:text-white" : "hover:text-slate-900"
                }`}>
                  <span className="text-purple-400 mt-1 flex-shrink-0 text-sm sm:text-base">
                    🚀
                  </span>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                    Build modern mobile and web apps using new technologies.
                  </span>
                </li>
                <li className={`flex items-start gap-3 group/item transition-colors duration-300 ${
                  theme === "dark" ? "hover:text-white" : "hover:text-slate-900"
                }`}>
                  <span className="text-purple-400 mt-1 flex-shrink-0 text-sm sm:text-base">
                    🛠️
                  </span>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                    Focus on clean, optimized, and scalable code — always
                    improving performance and user experience.
                  </span>
                </li>
                <li className={`flex items-start gap-3 group/item transition-colors duration-300 ${
                  theme === "dark" ? "hover:text-white" : "hover:text-slate-900"
                }`}>
                  <span className="text-purple-400 mt-1 flex-shrink-0 text-sm sm:text-base">
                    🔍
                  </span>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                    Passionate about solving real-world problems through
                    creative thinking and practical solutions.
                  </span>
                </li>
                <li className={`flex items-start gap-3 group/item transition-colors duration-300 ${
                  theme === "dark" ? "hover:text-white" : "hover:text-slate-900"
                }`}>
                  <span className="text-purple-400 mt-1 flex-shrink-0 text-sm sm:text-base">
                    💡
                  </span>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-200">
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
