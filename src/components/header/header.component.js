import React from "react";
import "./header.component.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1 style={{ fontWeigh: 600 }}>R-ToDOApp</h1>
      <div>
        <button className="action-header"
          onClick={() => {
            props.setCurrentPage("view");
          }}
        >
          view item
        </button>
        <button className="action-header"
          onClick={() => {
            props.setCurrentPage("add");
          }}
        >
          add item
        </button>
      </div>
    </div>
  );
};

export default Header;
