import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <p>This is Navbar!!!</p>
            <Link className='px-5 py-3 font-bold' to='/'>Home</Link>
            <Link className='px-5 py-3 font-bold' to={'/about'}>About</Link>
        </div>
    );
};

export default Navbar;