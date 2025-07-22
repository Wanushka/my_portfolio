import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../components/ui/SectionHeading';
import { graphicDesignProjects, graphicDesignCategories } from '../data/graphicDesignProjects';

const GraphicDesignProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? graphicDesignProjects 
    : graphicDesignProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-20">
      <Link href="/#other-projects" className="inline-flex items-center text-blue-600 mb-8">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>

      <SectionHeading title="Graphic Design Projects" />
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
        {graphicDesignCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-50">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default GraphicDesignProjects;