import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
      <Link to="/" className="pl-8">Tazim Madre</Link>
      <div className={`pr-8 md:block`}>
        <Link to="/blog" className="p-4">Blog</Link>
        <Link to="/domain-name-search" className="p-4">DNS</Link>
      </div>
    </nav>
  );
}