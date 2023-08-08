// LandingPage.js
import React from 'react';
import { Route,Routes, Outlet } from 'react-router-dom';
import Header from '../Basic/Header'
import Profile from './Profile'
import MyBlogs from './MyBlogs'
import CreateBlog from './CreateBlog'
import Settings from './Settings'
import EditBlog from './EditBlog';

const LandingPage = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="myBlogs" element={<MyBlogs />} />
            <Route path="createBlog" element={<CreateBlog />} />
            {/* <Route path="edit/:id" element={<EditBlog/>} /> */}
            <Route path="settings" element={<Settings />} />
            {/* Add the edit route within the nested Routes */}
            <Route path="edit/:id" element={<EditBlog />} />
        </Routes>
    </div>
  );
};

export default LandingPage;
