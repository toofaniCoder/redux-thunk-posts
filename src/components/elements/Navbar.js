import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link class="navbar-brand" to="/">
          Redux Posts
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="!#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="!#">
                Posts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="!#">
                Contact
              </a>
            </li>
          </ul>
          <Link to="/addPost" className="btn btn-dark">
            Add Posts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
