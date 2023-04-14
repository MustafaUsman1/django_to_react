import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";

export const Navbar = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    onSignOut(false);
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <strong>
              <i>The Daily Show</i>
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/business"
                >
                  <p>Business</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/entertainment"
                >
                  <p>Entertainment</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/health"
                >
                  <p>Health</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/science"
                >
                  <p>Science</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/sports"
                >
                  <p>Sports</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/technology"
                >
                  <p>Technology</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/contact"
                >
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-between">


              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle rounded-pill"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "grey", color: "white" }}
                >
                  {isAuthenticated ? "Hey User" : "Login"}
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {isAuthenticated ? (
                    <li>
                      <button className="dropdown-item" onClick={handleSignOut}>
                        Sign Out
                      </button>
                    </li>
                  ) : (
                    <li>
                      <Link to="/login" className="dropdown-item">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>


              <div className="d-flex" style={{ marginLeft: "10px" }}>
                <Link
                  className="btn btn-primary"
                  to="/news"
                  style={{ backgroundColor: "grey" }}
                >
                  Submit News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
