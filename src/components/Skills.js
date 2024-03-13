import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import "../App.css";
export default function Skills() {
  return (
    // lets redesign the skills section using tailwindcss classes to make it look better
    <section id="skills" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <ChipIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">Skills</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here are some of the skills I have.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {skills.map((skill) => (
            <div key={skill} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <BadgeCheckIcon className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                <h2 className="text-gray-900 text-lg title-font font-medium mb-4">{skill}</h2>
                <p className="leading-relaxed text-base"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
