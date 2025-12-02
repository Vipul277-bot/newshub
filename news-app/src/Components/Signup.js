
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import "./Signup.css";


function Signup() {
const [Credentials, setCredentials] = useState({name:"", email:"", password:"" });
  const Navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
       const {name,email,password}=Credentials;
     
    const response = await fetch("http://localhost:5000/user/news/signup", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,password})
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
   /* <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}><form onSubmit={handleSubmit}>
    <h2>Signup</h2>
    <div className="mb-3">
    <label htmlFor="name" className="form-control">User Name</label>
    <input type="text" className="form-control" id="name"name="name"onChange={onChange} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-control">Email address</label>
    <input type="email" className="form-control" id="email"name="email"onChange={onChange}  />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-control">Password</label>
    <input type="password" className="form-control" id="password" name="password"onChange={onChange} minLength={5} required />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>*/
<div className="login-container d-flex justify-content-center align-items-center">
  <div className="login-card shadow-lg p-4">
    
    <h3 className="text-center mb-3 fw-bold">📝 Create Account</h3>
    <p className="text-center text-muted" style={{ fontSize: "14px" }}>
      Join now and get the latest news updates
    </p>

    <form onSubmit={handleSubmit}>
      
      <div className="mb-3">
        <label className="form-label fw-semibold">Username</label>
        <input 
          type="text" 
          className="form-control form-control-sm input-box" 
          id="name"
          name="name"
          placeholder="Enter username"
          onChange={onChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Email</label>
        <input 
          type="email" 
          className="form-control form-control-sm input-box" 
          id="email"
          name="email"
          placeholder="Enter email"
          onChange={onChange}
          required
        />
        <small className="text-muted">We'll never share your email.</small>
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Password</label>
        <input 
          type="password" 
          className="form-control form-control-sm input-box" 
          id="password"
          name="password"
          placeholder="Create password"
          minLength={5}
          onChange={onChange}
          required 
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 rounded-pill mt-3 login-btn">
        Sign Up
      </button>
    </form>

    <p className="text-center mt-3">
      <span className="text-muted">Already have an account? </span>
      <a href="/login" className="signup-link">Login</a>
    </p>

  </div>
</div>
  )
}

export default Signup