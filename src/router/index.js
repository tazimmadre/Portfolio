import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../components/Notfound';
import Home from '../pages/home';
import BlogPage from '../pages/blog';
import BlogDetails from '../pages/blog/blogDetails';
import DomainNameSearch from '../pages/DomainNameSearch';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/domain-name-search" element={<DomainNameSearch />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;