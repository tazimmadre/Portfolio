import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import "../App.css";
export default function Skills() {
  return (
    <div id="skills" >
      <div className="container px-5 py-10 mx-auto ">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Technologies that I use.
          </p> */}
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2 ">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/4 w-full skills">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
