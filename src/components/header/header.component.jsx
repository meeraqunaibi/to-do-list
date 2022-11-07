import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>R ToDo App</h1>
      <nav>
        <Link
          // className={props.currentPage === 'add' ? 'active' : ''}
          to="/add"
        >
          Add Item
        </Link>
        <Link
          // className={props.currentPage === 'view' ? 'active' : ''}
          to="/view"
        >
          View Items
        </Link>
      </nav>
    </div>
  )
}

export default Header