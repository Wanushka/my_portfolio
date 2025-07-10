import SocialLinks from "../common/SocialLinks";
import { personalData } from "../../data/personal";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-background-light/80 to-background-light dark:from-background-dark/90 dark:to-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="w-full border-t border-gray-200 dark:border-gray-800 my-6"></div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
              &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
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