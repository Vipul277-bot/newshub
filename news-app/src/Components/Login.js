import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import "./Login.css";

function Login() {
  const [Credentials, setCredentials] = useState({ email:"", password:"" });
  const Navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/user/news/login", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(Credentials)
    });

    const json = await response.json();
    console.log(json);

    if(json.success){
      localStorage.setItem("token", json.authtoken);
      Navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({...Credentials, [e.target.name]: e.target.value});
  };

  return (
  /*  <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" name="email"
            value={Credentials.email} onChange={onChange} required />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" name="password"
            value={Credentials.password} onChange={onChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>*/
    <div className="login-container d-flex justify-content-center align-items-center">
  <div className="login-card shadow-lg p-4">
    
    <h3 className="text-center mb-3 fw-bold">🔐 Login</h3>
    <p className="text-center text-muted" style={{ fontSize: "14px" }}>
      Access your personalized news dashboard
    </p>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label fw-semibold">Email</label>
        <input 
          type="email" 
          className="form-control form-control-sm input-box" 
          name="email"
          value={Credentials.email} 
          onChange={onChange} 
          placeholder="Enter email"
          required 
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Password</label>
        <input 
          type="password" 
          className="form-control form-control-sm input-box" 
          name="password"
          value={Credentials.password} 
          onChange={onChange} 
          placeholder="Enter password"
          required 
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 rounded-pill mt-3 login-btn">
        Login
      </button>
    </form>

    <p className="text-center mt-3">
      <span className="text-muted">New here? </span>
      <a href="/signup" className="signup-link">Create Account</a>
    </p>

  </div>
</div>


  )
}

export default Login;
