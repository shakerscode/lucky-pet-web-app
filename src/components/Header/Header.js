import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping , faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

//This is header component of this website. Just made a simple navigation bar for this website. Used grid system to customized navigation bar. And also used media query to responsive the layout.
const Header = () => {
    return (
        <div className='header-section'>
            <div>
                <h1>PetStore</h1>
            </div>
            <div>
                <nav className='navigation'>
                    <a href="/cat">Cat</a>
                    <a href="/dog">Dog</a>
                    <a href="/cart">Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> </a>
                    <a href="login/signin">LogIn/SignIn <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> </a>
                </nav>

            </div>
        </div>
    );
};

export default Header;