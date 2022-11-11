import { Link, useLocation } from 'react-router-dom';
import './header.css'
const Header = (props) => {
    const location = useLocation();
    return (
        <div className="header">
            <h1>to do app</h1>
            <nav>
                <Link to='/add' className={location.pathname === '/add' ? 'active' : ''}> Add</Link>
                {/* location.pathname.includes('view') */}
                <Link to='/view' className={location.pathname === '/view' ? 'active' : ''}>
                    View
                </Link>

            </nav>
        </div>
    );

}
export default Header