import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li className='page-title'>home</li>
          <li className='top-tweets'></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;