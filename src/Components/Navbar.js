import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars)

function Navbar(props){
    return(
        <div className='navbar-container'>
            <ul>
                <button id='navbarButton'><FontAwesomeIcon icon={faBars}/></button>
                <li>items</li>
                <li>items</li>
            </ul>
        </div>
    );
}

export default Navbar;