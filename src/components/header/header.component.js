import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.component.css";

const Header = () => {
  const location = useLocation()
  return (
    <div className="header">
      <h1 style={{ fontWeigh: 600 }}>R-ToDOApp</h1>
      <div>
        <Link 
        className = {`action-header ${location.pathname == "/add" ? "active" : ""}`}
        to="/add">
          add item
        </Link>
        <Link 
        className = {`action-header ${location.pathname.includes("view") ? "active" : ""}`}
        to="/view">
          view item
        </Link>
      </div>
    </div>
  );
};

export default Header;
