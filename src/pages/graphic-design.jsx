import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../components/ui/SectionHeading';

const GraphicDesignProjects = () => {
  const projects = [
    // Add your graphic design projects here
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "/images/graphic-design/project1.jpg",
      tags: ["Photoshop", "Illustrator"]
    },
    // Add more projects...
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <Link href="/#other-projects" className="inline-flex items-center text-blue-600 mb-8">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>

      <SectionHeading title="Graphic Design Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicDesignProjects;