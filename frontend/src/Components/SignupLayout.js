import React from 'react'
import { Link } from 'react-router-dom'
import  { useState } from 'react';



const SignupLayout = () => {

    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://backendneelkanth-bdbxajfee8a6b7gw.eastus-01.azurewebsites.net/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('User created successfully!');
        setError(null);
      } else {
        setError(data.errors);
        setSuccess(null);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-user-plus"></span>
                </div>
                <h3 className="text-center mb-4">Sign Up</h3>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                    <input type="text" className="form-control rounded-left" placeholder="Name" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group d-flex">
                    <input type="email" className="form-control rounded-left" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-paper-plane"></span>
                        </div>
                    </div>
                    <div className="form-group d-flex">
                    <input type="password" className="form-control rounded-left" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-eye-slash"></span>
                        </div>
                    </div>
                    <div className="form-group d-md-flex">
                        <div className="w-50 text-left">
                            <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                            <input type="checkbox" checked={true} onChange={(e) => console.log(e.target.checked)}/>
                            <span className="checkmark"></span>
                            </label>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary rounded submit p-3 px-5">Sign Up</button>
                    </div>
                </form>
                <Link className="text-center" to='/Login'>Already have an account? {` `} {` `} Log In</Link>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {success && <div style={{ color: 'green' }}>{success}</div>}
            </div>
        </div>
    </div>
</div>
  )
}

export default SignupLayout
