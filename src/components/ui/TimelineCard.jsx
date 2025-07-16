import { FaGraduationCap, FaCalendarAlt, FaMedal } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

const TimelineCard = ({ 
  degree, 
  institution, 
  location, 
  duration, 
  score,
  isLeft = true 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className={`flex w-full items-center justify-between ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-8 relative`}>
      {/* Timeline dot */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${
        theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'
      } z-10`}></div>
      
      {/* Card */}
      <div className={`w-5/12 group ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <div className={`
          rounded-lg p-5 
          transition-all duration-300 ease-in-out
          shadow-md border
          ${theme === 'dark' 
            ? 'bg-gray-800 border-gray-700 hover:shadow-primary-dark/20' 
            : 'bg-white border-gray-200 hover:shadow-primary-light/20'
          }
          hover:shadow-2xl hover:translate-y-[-5px]
          relative
        `}>
          {/* Icon */}
          <div className={`absolute top-5 left-5 flex items-center justify-center w-12 h-12 rounded-full ${
            theme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'
          } text-white`}>
            <FaGraduationCap size={24} />
          </div>

          <div className="ml-16">
            <h3 className={`text-xl font-bold mb-1 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>{degree}</h3>
            <p className={`${
              theme === 'dark' ? 'text-primary-dark' : 'text-primary-light'
            } mb-2`}>{institution}</p>
            <p className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>{location}</p>
            
            <div className={`flex items-center mt-3 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <FaCalendarAlt className="mr-2" />
              <span>{duration}</span>
            </div>
            
            {score && (
              <div className={`flex items-center mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <FaMedal className="mr-2" />
                <span>{score}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;