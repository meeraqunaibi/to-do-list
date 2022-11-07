import { Link } from 'react-router-dom';
import './header.css'
const Header = (props) => {
  return (
    <div className="header">
      <h1>to do app</h1>
      <nav>
        <Link to='/add'> Add</Link>
        <Link to='/view'>
View
        </Link>
        {/* <button
          className={props.currentPage === 'add' ? 'active' : ''}
          onClick={() => props.setcurrentPage('add')}
        >
          Add Item
        </button>
        <button
          className={props.currentPage === 'view' ? 'active' : ''}
          onClick={() => props.setcurrentPage('view')}
        >
          View Items
        </button> */}
      </nav>
    </div>
  );

}
export default Header