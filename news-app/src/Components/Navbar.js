/*import React, { Component } from 'react'

import { Link, useNavigate } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const Navigate = useNavigate();
    const handleLogout = () => {
    localStorage.removeItem("token"); // Remove saved login
    Navigate("/login"); // Redirect to login page
  };
    return (
      <>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="general">News-app</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="sports">Sports</Link>
                
                </li>
                  
                
              </ul>

              <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
              </div>
             
            </div>
          
        </nav>
      </>
    )
  }
}
*/
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    /*<nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">News-app</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
          </ul>

          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>*/
    <nav className="navbar navbar-expand-lg shadow-sm sticky-top" style={{ background: "linear-gradient(90deg, #0d6efd, #6610f2)" }}>
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold text-white" to="/home" style={{ fontSize: "22px" }}>
      📰 NewsHub
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto gap-2">
        {[
          { name: "Home", link: "/home" },
          { name: "Business", link: "/business" },
          { name: "Entertainment", link: "/entertainment" },
          { name: "Technology", link: "/technology" },
          { name: "Science", link: "/science" },
          { name: "Health", link: "/health" },
          { name: "Sports", link: "/sports" },
        ].map((item) => (
          <li className="nav-item" key={item.link}>
            <Link className="nav-link text-white menu-item" to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <button className="btn btn-warning text-dark fw-bold shadow logout-btn" onClick={handleLogout}>
        Logout 🚪
      </button>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
