import React from 'react'

const Header = ({ setcurent, curent }) => {
    return (
        <div className='header'>
            <h1>To-Do-App</h1>
            <nav >
                <button className={curent === 'add' ? 'active' : null}
                    onClick={() => setcurent('add')} >
                    Add
                </button>
                <button className={curent === 'view' ? 'active' : null}
                    onClick={() => setcurent('view')} >
                    View
                </button>
            </nav>
        </div>
    )
}

export default Header