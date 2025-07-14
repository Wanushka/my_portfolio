import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../../hooks/useTheme";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-background-dark' : 'bg-background-light'
    }`}>
      <Navbar />
      <main className="flex-grow pt-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;