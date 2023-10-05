import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import LogOut from "../logins/Logout"
const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedContentId, setExpandedContentId] = useState(null);
    const token = localStorage.getItem("token");
    const auth = useAuth();

    const toggleContentExpansion = (blogId) => {
        setExpandedContentId(blogId === expandedContentId ? null : blogId);
      };

    useEffect(()=>{
        const getAllBlogs = async () =>{
            try {
                const response = await fetch(
                  `${process.env.REACT_APP_API_URL}/api/posts/allBlogs`,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
                if (response.ok) {
                  const data = await response.json();
                  setAllBlogs(data.blogs);
                  console.log(data.blogs);
                } else {
                  console.error("Failed to fetch all blogs");
                }
              } catch (error) {
                console.error("Error fetching all blogs:", error);
              } finally {
                setLoading(false); // Set loading to false after fetch operation
              }
        
        }; getAllBlogs();
    },[])
  return (
    <>
      {auth.isAuthenticated() ? (
        <div className="container mt-4">
          <h4 className="text-center text-secondary fw-bold">All Blogs</h4>
          {loading ? ( // Check if loading is true
            <p className="text-center text-muted">Loading...</p>
          ) : allBlogs.length === 0 ? (
            <p className="text-center text-muted">No data found</p>
          ) : (
            allBlogs.map((blog) => (
              <div key={blog._id} className="card m-4 ">
                <div className='d-flex align-items-end'>
                <img
                  src={blog.image}
                  className="card-img-top m-2"
                  alt={blog.title}
                  style={{ width: "50px", height: "50px" }}
                />
                <span className='text-dark fw-bold fs-4'>{blog.author.username}</span>
                </div>
                <span className="text-muted fs-8 m-2">{blog.createdAt}</span>
                <div className="card-body">
                  <span className="fs-3 fw-bold">{blog.title}</span>
                  <p className="card-text">
                    {expandedContentId === blog._id
                      ? blog.content
                      : `${blog.content.slice(0, 150)}...`}
                  </p>
                  <button
                    onClick={() => toggleContentExpansion(blog._id)}
                    className="btn btn-link"
                  >
                    {expandedContentId === blog._id ? "Read Less" : "See More"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
      <LogOut />
    </>
  )
}

export default Blogs