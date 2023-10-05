import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPw = () => {
  const handleConfirmEmail = async (e) => {
    e.preventDefault();
    try{
      const email = document.getElementById('emailInput').value;
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/confirmEmail`,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({ email }), // Send email in the request body
      })
      if(response.ok){
        // Handle success
        console.log('Password reset email sent successfully');
      } else {
        // Handle error
        console.error('Failed to send password reset email');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center text-muted mb-4 fw-bold">Forgot Password</h2>
              <form>
                <div className="mb-3" id="email">
                  <input type="email" className="form-control" id="emailInput" placeholder='enter your email' required />
                </div>
                <div className='text-center'>
                  <button type="submit" className="btn btn-primary" onClick={handleConfirmEmail}>Confirm</button>
                </div>
              </form>
              <div className="w-100 text-center mt-3">
              <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPw;
