import React from 'react';
import './Header.css';
import Button from './Button.js'

function Header() {
  return (
    <header className="header">
      <a className="icon-container" href='https://telegram.org' target="_blank" rel="noreferrer">
        <img src={require('./telegram.png')} alt="Telegram icon" className='icon' />
        <h1>Telegram</h1>
      </a>
      <Button className="button" text="download telegram" link="https://telegram.org" type="down" />
      
    </header>
  );
}

export default Header;