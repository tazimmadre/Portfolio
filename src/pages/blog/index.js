import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogPage = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch('https://amused-nightgown-cod.cyclic.app/news?page=1&limit=10')
      // fetch('http://localhost:3001/news?page=1&limit=10')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    // lets redesign the blog page using tailwindcss classes to make it look better
    <div className=" mx-auto">
      {/* //lets add navbar to blog page */}
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
        <Link to="/" className="pl-8">Tazim Madre / Blogs</Link>
        <div className="px-4 cursor-pointer md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link to="/" className="p-4">Portfolio</Link>
        </div>
      </nav>
      <div className=" container">
        {/* <h1 className="text-5xl mt-2 font-bold">Blog</h1> */}
        <div className="mt-10">
          {blogs.map((blog) => (
            <div key={blog._id} className="border-b-2 border-gray-200 p-4">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-gray-500 text-sm">
                {moment(blog.createdAt).calendar()}
              </p>
              {/* <p className="mt-2">{blog.content}</p> */}
              <Link to={`/blog/${blog.slug}`} className="text-blue-500 block mt-2">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;