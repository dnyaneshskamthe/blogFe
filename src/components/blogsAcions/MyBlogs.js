import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Fetch blogs from your API
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts/myposts`);
        if (response.ok) {
          const data = await response.json();
          setBlogs(data.blogs);
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch operation
      }
    };
  
    fetchBlogs();
  }, []);

  // to delete a blog 
  const handleDelete = async (blogId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts/${blogId}`, {
        method: 'DELETE'
      });
      if (response.status === 200) {
        // Update the state to remove the deleted blog
        setBlogs(blogs.filter((blog) => blog._id !== blogId));
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };
  

  return (
    <div className="container mt-4">
      <h4 className='text-center text-secondary fw-bold'>My Blogs</h4>
      {loading ? ( // Check if loading is true
        <p className='text-center text-muted'>Loading...</p>
      ) : blogs.length === 0 ? (
        <p className='text-center text-muted'>No data found</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="card m-4">
            <img src={blog.image} className="card-img-top m-2" alt={blog.title} style={{ width: '50px', height: '50px' }}  />
            <div className="card-body">
              <span className="fs-3 fw-bold">{blog.title}</span>
              <h6 className="fs-5">{blog.content}</h6>
            </div>
            <div className='mx-2'>
              <span className='text-muted fs-8'>{blog.createdAt}</span>
            </div>
            <div className="m-2">
            <Link to={`/landingPage/edit/${blog._id}`} className="btn btn-primary mx-2">
                Edit
              </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(blog._id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBlogs;
