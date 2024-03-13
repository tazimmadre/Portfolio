import React from "react";
import { Helmet } from 'react-helmet';
import './About.css';
import { pageTitle, pageDescription, longDescription, structuredData } from '../data';

export default function About () {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tazim-madre.netlify.app/" />
        <meta property="og:image" content="https://tazim-madre.netlify.app/assets/portfolioimage.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@tazimmadre" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://tazim-madre.netlify.app/assets/portfolioimage.jpeg" />
      </Helmet>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://tazim-madre.netlify.app/assets/portfolioimage.jpeg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 hero-font">{pageTitle}</h1>
          <p className="mb-8 leading-relaxed">{longDescription}</p>
          <div className="flex justify-center">
            {/* i want to take user to section with id=contact when i click on contact me but using hashrouter is giving issue */}
            <a href="#contact" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Me</a>
            <a href="#projects" className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">See My Work</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
