import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../utils/constants";
import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "../../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine which section is currently in view
      const sections = [...NAV_LINKS].map((link) => link.href.substring(1));
      
      // Start from the bottom sections to handle overlapping correctly
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust the threshold to better detect when a section is in view
          if (rect.top <= 100 && rect.bottom >= 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set active section on page load
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scrolling - IMPROVED VERSION
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu when clicking any link

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      // Add a small delay to ensure any layout shifts have completed
      setTimeout(() => {
        const navbarHeight = 80; // Adjust based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update the active section immediately for better UX
        setActiveSection(targetId);
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? `shadow-md ${
              theme === "dark"
                ? "bg-background-dark bg-opacity-90 backdrop-blur-sm"
                : "bg-background-light bg-opacity-90 backdrop-blur-sm"
            }`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              WANUSHKA LAKMAL
            </a>
          </div>

          {/* For desktop navigation links */}
          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-primary-light dark:text-primary-dark"
                      : theme === "dark"
                      ? "text-white hover:text-primary-dark"
                      : "text-black hover:text-primary-light"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggle />
            </nav>
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`ml-2 p-2 rounded-md ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-200"
              }`}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              theme === "dark" 
                ? "bg-background-dark bg-opacity-95" 
                : "bg-background-light bg-opacity-95"
            }`}
          >
            {/* For mobile navigation links */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.href.substring(1)
                      ? "bg-gray-200 dark:bg-gray-700 text-primary-light dark:text-primary-dark"
                      : theme === "dark"
                      ? "text-white hover:bg-gray-700"
                      : "text-black hover:bg-gray-100"
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;