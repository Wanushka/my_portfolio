import { useTheme } from "../../hooks/useTheme";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full p-1 transition-all duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-r from-slate-700 to-slate-600 shadow-lg shadow-slate-500/25"
          : "bg-gradient-to-r from-gray-700 to-gray-800 shadow-lg shadow-gray-600/25"
      } hover:scale-105 active:scale-95`}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Toggle background with stars/sun rays */}
      <div className="absolute inset-1 rounded-full overflow-hidden">
        {theme === "dark" ? (
          // Night sky with stars
          <div className="w-full h-full bg-gradient-to-r from-slate-900 to-slate-800 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-2 right-2 w-0.5 h-0.5 bg-white rounded-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-1 left-3 w-0.5 h-0.5 bg-white rounded-full"
            />
          </div>
        ) : (
          // Day sky with subtle rays
          <div className="w-full h-full bg-gradient-to-r from-gray-600 to-gray-700 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 bg-gradient-to-br from-gray-500/30 to-transparent"
            />
          </div>
        )}
      </div>

      {/* Toggle circle with icon */}
      <motion.div
        layout
        className={`relative w-5 h-5 rounded-full flex items-center justify-center shadow-lg ${
          theme === "dark"
            ? "bg-gradient-to-br from-slate-200 to-white"
            : "bg-gradient-to-br from-gray-200 to-gray-300"
        }`}
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icon */}
        <motion.div
          key={theme}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="w-3 h-3 flex items-center justify-center"
        >
          {theme === "dark" ? (
            // Moon icon
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full text-slate-700"
            >
              <path
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.752-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                fill="currentColor"
              />
            </svg>
          ) : (
            // Sun icon
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full text-gray-700"
            >
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path
                d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </motion.div>
      </motion.div>

      {/* Glowing effect */}
      <motion.div
        className={`absolute inset-0 rounded-full opacity-0 ${
          theme === "dark"
            ? "bg-gradient-to-r from-slate-700 to-slate-600"
            : "bg-gradient-to-r from-gray-700 to-gray-800"
        }`}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;