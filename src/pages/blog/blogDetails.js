import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown'

const BlogDetails = (props) => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://amused-nightgown-cod.cyclic.app/news/${slug}`)
      // fetch(`http://localhost:3001/news/${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto">
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
        <Link to="/" className="pl-8">Tazim Madre / Blogs / {blog.title}</Link>
        <div className="px-4 cursor-pointer md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link to="/" className="p-4">Portfolio</Link>
        </div>
      </nav>
      <div className='container '>
        <div className="my-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Link to={'/blog'} >Go Back</Link>
        </div>
        <h1 className="text-2xl font-bold my-4">{blog.title}</h1>
        <img src={blog.imageUrl} alt={blog.title} className="my-4" />
        <Markdown>{blog.description}</Markdown>
      </div>
    </div>
  );
};

export default BlogDetails;