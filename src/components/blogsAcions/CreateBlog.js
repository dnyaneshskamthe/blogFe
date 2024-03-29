import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate()
  const auth = useAuth();

  const token = localStorage.getItem("token");
  if (!token) {
    // write logout logic
    return;
  }


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // // Process the form data (title, content, and image) here
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
  
     // Create FormData to send data including image
     try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body : formData,
      });
    
      if (response.ok) {
        navigate('/landingPage/myBlogs')
      } else {
        console.error('Failed to create blog post');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
    
  };

  return (
    <>
    { auth.isAuthenticated() ? ( 
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Create a New Blog</h2>
          <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="title" className="form-label text-start">Title:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label text-start">Content:</label>
              <textarea
                className="form-control"
                id="content"
                value={content}
                onChange={handleContentChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label text-start">Image:</label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Create Blog</button>
          </form>
        </div>
      </div>
    </div> ) :  (
        <p>Please log in to view your profile.</p>
      )
    }</>
  );
};

export default CreateBlog;
