import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
  //lets redesign the navbar using tailwindcss classes to make it look better
  <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
    <Link to="/" className="pl-8">Tazim Madre</Link>
    <div className="px-4 cursor-pointer md:hidden">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </div>
    <div className="pr-8 md:block hidden">
      <Link to="/blog" className="p-4">Blog</Link>
      {/* <Link to="/projects" className="p-4">Projects</Link>
      <Link to="/contact" className="p-4">Contact</Link> */}
    </div>
  </nav>
  );
}
