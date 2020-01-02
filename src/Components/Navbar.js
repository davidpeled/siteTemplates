import React from 'react';
import './Navbar.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars)

function Navbar(props){
    return(
        <div className='navbar-container'>
            <ul>
                <div className='brand-logo-container'><h1>Logo items</h1></div>
                <li>items</li>
                <li>items</li>
            </ul>
        </div>
    );
}

export default Navbar;