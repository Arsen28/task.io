import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <header>
      <ul className="menue-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/alboms">Albums</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
