import React from 'react';
import './header.css'

const Header = (props) => {
  return (
    <div className="header">
      <h1>R ToDo App</h1>
      <nav>
        <button
          className={props.currentPage === 'add' ? 'active' : ''}
          onClick={() => props.setCurrentPage('add')}
        >
          Add Item
        </button>
        <button
          className={props.currentPage === 'view' ? 'active' : ''}
          onClick={() => props.setCurrentPage('view')}
        >
          View Items
        </button>
      </nav>
    </div>
  )
}

export default Header