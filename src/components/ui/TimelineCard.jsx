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
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 z-10"></div>
      
      {/* Card */}
      <div 
        className={`w-5/12 group ${isLeft ? 'pr-8' : 'pl-8'}`}
      >
        <div 
          className={`
            ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-900 border-gray-700'} 
            rounded-lg p-5 transition-all duration-300 
            shadow-md border hover:shadow-xl hover:translate-y-[-5px]
            relative
          `}
        >
          {/* Icon */}
          <div className="absolute top-5 left-5 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
            <FaGraduationCap size={24} />
          </div>

          <div className="ml-16">
            <h3 className="text-xl font-bold text-white mb-1">{degree}</h3>
            <p className="text-blue-400 mb-2">{institution}</p>
            <p className="text-gray-400">{location}</p>
            
            <div className="flex items-center mt-3 text-gray-400">
              <FaCalendarAlt className="mr-2" />
              <span>{duration}</span>
            </div>
            
            {score && (
              <div className="flex items-center mt-2 text-gray-400">
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