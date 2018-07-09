import React from 'react';
import Clock from '../Clock';

import './header.scss';

const Header = (props) => {
  const {city:{name}={}} = props;
  return (
    <div id="header">
      <span>Weather TV</span>
      <span className="header__city">{name}</span>
      <span className="header__currentTime"><Clock/></span>
    </div>
  )
};

export default Header;
