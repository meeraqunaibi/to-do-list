import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <nav>
        <button onClick={() => props.setPage("add")}>Add Item</button>
        <button onClick={() => props.setPage("view")}>View Items</button>
      </nav>
    </div>
  );
};

export default Header;
