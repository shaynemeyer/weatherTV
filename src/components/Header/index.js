import React from 'react';
import Clock from '../Clock';

import './header.scss';

const Header = ({ city }) => {

  return (
    <div id="header">
      <span className="header__logo">WeatherTV</span>
      <span className="header__city">{city} <i className="far fa-edit"></i></span>
      <span className="header__currentTime"><Clock/></span>
    </div>
  )
};

export default Header;
