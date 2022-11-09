import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <h1> React ToDo App</h1>
      <nav>
        <Link
          to="/add">
          Add Item

        </Link>

        <Link
          to="/view">
          View Item
        </Link>
      </nav>
    </div>
  )
}

export default Header


