import React from "react";
import { Link } from "react-router-dom";
import "./header.component.css";

const Header = () => {
  return (
    <div className="header">
      <h1 style={{ fontWeigh: 600 }}>R-ToDOApp</h1>
      <div>
        <Link className="action-header" to="/add">
          add item
        </Link>
        <Link className="action-header" to="/view">
          view item
        </Link>
      </div>
    </div>
  );
};

export default Header;
