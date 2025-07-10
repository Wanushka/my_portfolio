import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';

const iconMap = {
  react: FaReact,
  nodejs: FaNodeJs,
  js: SiJavascript,
  ts: SiTypescript,
  // Add more mappings
};

const SkillCard = ({ name, icon }) => {
  const Icon = iconMap[icon] || FaCode; // Default icon

  return (
    <motion.div
      className="skill-card flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg transition-all"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)"
      }}
    >
      <div className="icon-container">
        <Icon className="text-4xl" />
      </div>
      <span className="text-sm mt-2">{name}</span>
    </motion.div>
  );
};

export default SkillCard;