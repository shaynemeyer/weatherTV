import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div id="header">
      <span>Weather TV</span>
      <span className="header__city">Everett</span>
      <span className="header__currentTime">10:18</span>
    </div>
  )
};

export default Header;
