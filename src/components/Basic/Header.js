import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoutModal from "../logins/Logout";
import { useAuth } from "../context/AuthContext";

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
    auth.logout();
    setShowLogoutModal(false);
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fst-italic fw-bold fs-1" to="/">
            The Blogger
          </Link>
          {auth.isAuthenticated() && (
            <span className="navbar-text mx-4">
              Welcome, {auth.user.username}{" "}
              {/* Replace 'name' with the correct property */}
            </span>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li
                className="nav-item px-1 mx-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="All Blogs"
              >
                <Link className="nav-link" to="allBlogs">
                  <img src="allBlogs.svg" alt="" />
                </Link>
              </li>
              <li
                className="nav-item px-1 mx-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Profile"
              >
                <Link className="nav-link" to="profile">
                  <img src="profile.svg" alt="" />
                </Link>
              </li>
              <li
                className="nav-item  px-1 mx-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="My Blogs"
              >
                <Link className="nav-link" to="myBlogs">
                  <img src="journal.svg" alt="" />
                </Link>
              </li>
              <li
                className="nav-item px-1 mx-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Create"
              >
                <Link className="nav-link" to="createBlog">
                  <img src="create.svg" alt="" />
                </Link>
              </li>
              <li
                className="nav-item px-1 mx-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="logout"
              >
                <Link
                  className="nav-link"
                  to="#"
                  onClick={handleLogoutModalShow}
                >
                  <img src="logout.svg" alt="" />
                </Link>
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
