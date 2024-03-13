import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import NotFound from '../components/Notfound';
import Home from '../pages/home';
import BlogPage from '../pages/blog';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </>
  );
};

export default AppRouter;