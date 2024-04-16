'use client'
import React, { useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./3Dcard";
import Link from "next/link";

const SearchBar = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen flex-col bg-transparent">
      <div className="fixed w-full z-10">
        <div className="max-w-screen-xl mx-auto px-4 py-2">
          <input
            type="text"
            placeholder="Search Projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 px-4 rounded-md border dark:text-dark-text-100 text-text-100 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-2 px-4 overflow-y-auto">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Link key={index} href={`/projects/${project.fileAddress}`}>
              <CardContainer className="inter-var">
                <CardBody className="bg-primary-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-dark-primary-900 dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-indigo-500 dark:text-dark-text-500"
                  >
                    {project.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    {/* Use project.image.Address instead of hardcoded image path */}
                    <Image
                      src={`/images/${project.imageAddress}`}
                      height={500}
                      width={500}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem translateZ="60">
                    <div className="mb-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-background-300 dark:bg-dark-background-300 text-text-800 dark:text-dark-text-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
