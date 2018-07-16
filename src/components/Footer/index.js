import React from 'react';
import SocialMedia from '../SocialMedia';
import ShotOfTheDay from '../ShotOfTheDay';

import './footer.scss';

const Footer = () => {

  return (
    <footer id="footer">
      <SocialMedia title="Follow us:"/>
      <ShotOfTheDay/>
    </footer>
  )
};

export default Footer;
