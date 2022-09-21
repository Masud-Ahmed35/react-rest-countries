import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a className='nav' href="/home">Home</a>
                <a className='nav' href="/country">Country</a>
                <a className='nav' href="/blog">Blog</a>
                <a className='nav' href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;