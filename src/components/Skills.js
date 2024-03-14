import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import "../App.css";
export default function Skills() {
  return (
    // lets redesign the skills section using tailwindcss classes to make it look better
    <section id="skills" className="text-gray-600 body-font">
      <div className="container px-2 py-2 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-20">
          <ChipIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">Skills</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here are some of the skills I have.</p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {skills.map((skill) => (
            <div key={skill} className="p-2 md:w-1/3 sm:w-1/2 xl:w-1/6 lg:w-1/6 w-full">
              <div className="flex rounded-lg h-full bg-gray-100 p-1 flex-col">
                <BadgeCheckIcon className="text-indigo-500 w-12 h-12 mb-3 p-1 flex justify-center" />
                <h2 className="text-gray-900 text-lg title-font font-medium ml-3">{skill}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
