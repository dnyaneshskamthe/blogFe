import React, { useState } from 'react';
import { Outlet, Link , useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutModal from '../logins/Logout';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogoutModalShow = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutModalClose = () => {
    setShowLogoutModal(false);
  };
  const handleLogout = () => {
    auth.logout()
    setShowLogoutModal(false);
    navigate('/login')
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">My Blog App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="myBlogs">My Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="createBlog">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={handleLogoutModalShow}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <LogoutModal
        show={showLogoutModal}
        handleClose={handleLogoutModalClose}
        handleLogout={handleLogout}
      />
    </nav>
    <Outlet />
    </>
  );
};

export default Header;
