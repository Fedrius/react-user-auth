import React from 'react';
import {Link} from 'react-router-dom';

const Nav = props => {
    return (
        <nav className='green'>
            <Link style={{marginLeft: '8px'}} to='/' className='brand-logo'>Movie Quotes</Link>
            <ul className='right'>
                <li>
                    <Link to='/about-us'>About us</Link>
                </li>
                <li>
                    <Link to='/movie-quote'>Movie Quote</Link>
                </li>
                <li>
                    <Link to='/sign-in'>Sign In</Link>
                </li>
                <li>
                    <Link to='/sign-up'>Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;