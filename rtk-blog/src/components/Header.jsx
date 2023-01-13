import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>RTK Blog</h1>
      <div className="nav">
        <NavLink to={"/"} className="nav-item">
          Home
        </NavLink>
        <NavLink to={"post"} className="nav-item">
          Add Post
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
