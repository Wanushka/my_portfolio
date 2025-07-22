import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NAV_LINKS } from "../../utils/constants";
import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "../../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();
  const router = useRouter();

  // Improved scroll handling with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          // Only detect sections if we're on the home page
          if (router.pathname === '/') {
            const sections = NAV_LINKS.map((link) => link.href.substring(1));
            
            // Check sections from top to bottom
            for (const section of sections) {
              const element = document.getElementById(section);
              if (element) {
                const rect = element.getBoundingClientRect();
                const offset = 80;
                if (rect.top <= offset && rect.bottom >= offset) {
                  setActiveSection(section);
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  // Reset active section when route changes
  useEffect(() => {
    if (router.pathname !== '/') {
      setActiveSection("");
    }
  }, [router.pathname]);

  // Improved navigation click handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu

    const targetId = href.substring(1);

    // If we're not on the home page, navigate to home first
    if (router.pathname !== '/') {
      router.push(`/${href}`).then(() => {
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const navbarHeight = 64;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 10;
            
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: "smooth"
            });
            
            setActiveSection(targetId);
          }
        }, 100);
      });
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const navbarHeight = 64;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight - 10;
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth"
          });
          
          setTimeout(() => {
            setActiveSection(targetId);
          }, 100);
        }, 150);
      }
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('header')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? theme === "dark"
          ? "bg-background-dark/95 backdrop-blur-md shadow-lg"
          : "bg-background-light/95 backdrop-blur-md shadow-lg"
        : theme === "dark"
        ? "bg-background-dark/80 backdrop-blur-sm"
        : "bg-background-light/80 backdrop-blur-sm"
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className={`text-lg sm:text-xl font-bold transition-colors hover:scale-105 transform duration-200 ${
                theme === "dark" ? "text-white hover:text-primary-dark" : "text-black hover:text-primary-light"
              }`}
            >
              WANUSHKA
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-all duration-200 hover:scale-105 relative ${
                    activeSection === link.href.substring(1) && router.pathname === '/'
                      ? "text-primary-light dark:text-primary-dark"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {link.name}
                  {/* Active indicator */}
                  {activeSection === link.href.substring(1) && router.pathname === '/' && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-light dark:bg-primary-dark"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              <ThemeToggle />
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className={`p-2 rounded-md transition-all duration-200 hover:scale-110 ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-200"
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-current block mt-1 transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-current block mt-1 transition-all duration-300"
                />
              </motion.div>
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
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden ${
              theme === "dark" 
                ? "bg-background-dark/95 border-t border-gray-800" 
                : "bg-background-light/95 border-t border-gray-200"
            } backdrop-blur-md`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-screen overflow-y-auto">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    activeSection === link.href.substring(1) && router.pathname === '/'
                      ? "bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark border-l-4 border-primary-light dark:border-primary-dark"
                      : theme === "dark"
                      ? "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-black"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleNavClick(e, link.href);
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;