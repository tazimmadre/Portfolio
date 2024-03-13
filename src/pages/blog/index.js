import React from 'react';
import { Link } from 'react-router-dom';
const BlogPage = () => {
  // Dummy blog data
  const blogs = [
    {
      id: 1,
      title: 'Blog Post 1',
      content: 'This is the content of Blog Post 1.',
      author: 'John Doe',
      date: '2022-01-01',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      content: 'This is the content of Blog Post 2.',
      author: 'Jane Smith',
      date: '2022-01-02',
    },
  ];

  return (
    <>
      <div className='' style={{backgroundColor: 'lightgray', padding:'20px'}}>
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>
      </div>
      </div>
      <h1 className="text-center">Blog</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-6" key={blog.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p className="card-text">{blog.content}</p>
                <p className="card-text">Author: {blog.author}</p>
                <p className="card-text">Date: {blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPage;