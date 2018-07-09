import React from 'react';

const ForecastItem = ({ day, icon, hi, low, description }) => {

  const renderTemp = (temp) => {
    return Math.floor(temp);
  }

  return (
    <div className="forecast__item">
      <div className="forecast__item-day">{day}</div>
      <div className="forecast__item-icon"><i className="wi wi-owm-202"></i></div>
      <div className="forecast__item-high">{renderTemp(hi)}</div>
      <div className="forecast__item-low">{renderTemp(low)}</div>
      <div className="forecast__item-description">{description}</div>
    </div>
  );
};

export default ForecastItem;