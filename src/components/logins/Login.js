import { useState } from "react";
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const navigate = useNavigate()
  
  const displaySignup = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };
  const displaySignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };
  const handleSignIn = () => {
    navigate('./landingPage')
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="card-title text-center text-muted fw-bold">Blogger</h1>
          <div className="card my-4 ">
            <div className="card-body">
              {showSignIn && (
                <div id="signin">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="signin-username"
                      placeholder="username"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="signin-password"
                      placeholder="********"
                    />
                  </div>
                  <div className="text-center">
                  <button className="btn btn-primary w-100" onClick={handleSignIn}>Sign In</button>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="">
                      Don't have an account?{" "}
                      <button
                        className="btn btn-secondary"
                        onClick={displaySignup}
                      >
                        Sign up
                      </button>{" "}
                    </span>
                  </div>
                </div>
              )}
              {showSignUp && (
                <div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="signup-username"
                      placeholder="username"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="signup-email"
                      placeholder="email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="signup-password"
                      placeholder="********"
                    />
                  </div>
                  <button className="btn btn-primary w-100">Sign Up</button>
                  <div className="mt-4 text-center">
                    <span className="text-center">
                      Already registered?{" "}
                      <button
                        className="btn btn-secondary"
                        onClick={displaySignIn}
                      >
                        Sign In
                      </button>{" "}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
