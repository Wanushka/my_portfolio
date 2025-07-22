import SocialLinks from "../common/SocialLinks";
import { personalData } from "../../data/personal";
import { useTheme } from "../../hooks/useTheme";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`border-t border-gray-200 dark:border-gray-800 ${
      theme === "dark"
        ? "bg-background-dark/95 backdrop-blur-md"
        : "bg-background-light/95 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full border-t border-gray-200 dark:border-gray-800 my-6"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm ${theme === 'light' ? 'text-blue-700' : 'text-gray-300'}`}>
            &copy; {new Date().getFullYear()} {personalData.name}. All rights
            reserved.
          </p>
          <div className="my-6">
            <SocialLinks className="gap-5" size="lg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
