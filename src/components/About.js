import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium dark:text-white">
            Hi, I'm Tazim.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a humble self-taught developer, I strive to keep my code
            transparent and easy to understand.When I develop I always strive to
            make the code more efficient and easy to manage.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center h-2/6 w-6/12 my-image"
            alt="hero"
            src="/assets/tazim.jpg  "
          />
        </div>
      </div>
      <div className="shapes">
        <img
          width={"70px"}
          height={"62px"}
          src="/assets/circle.png"
          alt="circle"
        />
      </div>
      <div className="shapes1">
        <img
          width={"110px"}
          height={"110px"}
          src="/assets/circle.png"
          alt="circle"
        />
      </div>
      <div className="shapes2">
        <img
          width={"20px"}
          height={"32px"}
          src="/assets/circle.png"
          alt="circle"
        />
      </div>
      <div className="shapes3">
        <img
          width={"90px"}
          height={"32px"}
          src="/assets/circle.png"
          alt="circle"
        />
      </div>
      <div className="shapes4">
        <img
          width={"40px"}
          height={"30px"}
          src="/assets/circle.png"
          alt="circle"
        />
      </div>
    </section>
  );
}
