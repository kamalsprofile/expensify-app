import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (

        <footer className='footer'>
            <div className='container'>
                <div className="footer-content">
                    <FontAwesomeIcon icon={faCopyright} />
                    <i class="far fa-copyright"></i>
                </div>

            </div>
        </footer>

    );
}

export default Footer;