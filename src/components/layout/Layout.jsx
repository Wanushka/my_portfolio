import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../../hooks/useTheme";

const Layout = ({ children }) => {
  const { theme } = useTheme();

  // Add this JavaScript to track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
      document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
      document.body.classList.add("mouse-glow");
    };

    const handleMouseLeave = () => {
      document.body.classList.remove("mouse-glow");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-background-dark" : "bg-background-light"
      }`}
    >
      <Navbar />
      <main className="flex-grow pt-4 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;