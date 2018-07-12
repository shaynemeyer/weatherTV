import React from 'react';

import './socialmedia.scss';

const SocialMedia = ({title = "Follow us on:"}) => {

  return (
    <div className="social-media">
      <div className="social-media__title">{title}</div>
      <div className="social-media__bar">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-vimeo"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>

  )
};

export default SocialMedia;