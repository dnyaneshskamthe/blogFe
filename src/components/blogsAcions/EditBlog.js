import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams(); // Get the blog ID from the route parameter
  const [blog, setBlog] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch the blog data based on the ID
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data.post);
          setTitle(data.post.title);
          setContent(data.post.content);
        } else {
          console.error('Failed to fetch blog');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    // Send updated data to backend
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.status === 200) {
        navigate('/landingPage/myBlogs')
        // Redirect to MyBlogs page or perform other actions as needed
      } else {
        console.error('Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h4 className='text-center text-secondary fw-bold'>Edit Blog</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content:</label>
          <textarea
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
