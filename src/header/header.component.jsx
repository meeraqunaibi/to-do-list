import React from "react";
import "./header.css";
const Header = (props) => {
  return (
    <div className="header">
      <h1>To Do App with React</h1>
      <nav>
        <button
          className={props.currentPage === "add" ? "active" : ""}
          onClick={() => props.setCurrentPage("add")}
        >
          add Item
        </button>

        <button
          className={props.currentPage === "view" ? "active" : ""}
          onClick={() => props.setCurrentPage("view")}
        >
          view Item
        </button>
      </nav>
    </div>
  );
};
export default Header;
