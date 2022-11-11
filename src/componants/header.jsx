import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {
    const location = useLocation()

    return (
        <div className='header'>
            <h1>TODO..</h1>
            <nav >
                <Link to='add' className={location.pathname === '/add' ? 'active' : null} >
                    ADD
                </Link>

                <Link to='view' className={location.pathname === '/view' ? 'active' : null} >
                    View
                    </Link>


            </nav>
        </div>
    )
}

export default Header