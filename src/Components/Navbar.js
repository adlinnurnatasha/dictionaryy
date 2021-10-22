import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Logo.svg";
import "./Navbar.css";
import Switch from "./Switch";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav-list">
        <Link to="/">
          <div className="home-btn">Home</div>
        </Link>
        <Link to="/about">
          <div className="about-btn">About</div>
        </Link>
        <Switch />
      </div>
    </div>
  );
};

export default Navbar;
