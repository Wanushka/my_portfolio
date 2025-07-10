import { useTheme } from "../../hooks/useTheme";

const Card = ({ children, className }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`${
      theme === 'dark' 
        ? 'bg-opacity-50 bg-gray-800 shadow-lg border border-gray-700' 
        : 'bg-white shadow-md border border-gray-100'
      } rounded-lg p-6 transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;