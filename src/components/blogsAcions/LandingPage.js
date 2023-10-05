// LandingPage.js
import React from 'react';
import { Route,Routes, Outlet } from 'react-router-dom';
import Header from '../Basic/Header'
import Profile from './Profile'
import MyBlogs from './MyBlogs'
import CreateBlog from './CreateBlog'
import EditBlog from './EditBlog';
import LogOut from '../logins/Logout';
import Blogs from '../Basic/Blogs';

const LandingPage = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route index element={<Blogs/>}/>
            <Route path="profile" element={<Profile />} />
            <Route path="myBlogs" element={<MyBlogs />} />
            <Route path = "allBlogs" element={<Blogs/>}/>
            <Route path="createBlog" element={<CreateBlog />} />
            <Route path="logout" element={<LogOut />} />
            {/* Add the edit route within the nested Routes */}
            <Route path="edit/:id" element={<EditBlog />} />
        </Routes>
    </div>
  );
};

export default LandingPage;
