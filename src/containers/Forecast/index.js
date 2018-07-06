import React from 'react';
import ForecastItem from './ForecastItem';
import './forecast.scss';

const Forecast = () => {

  const renderItems = () => {
    return (
      <div className="forecast-row">
        <ForecastItem description="Showers" hi="73" low="58" day="Tue"/>
        <ForecastItem description="Showers" hi="73" low="58" day="Tue"/>
        <ForecastItem description="Showers" hi="73" low="58" day="Tue"/>
        <ForecastItem description="Showers" hi="73" low="58" day="Tue"/>
        <ForecastItem description="Showers" hi="73" low="58" day="Tue"/>
      </div>
    );
  };

  return (
    <div id="forecast-wrapper">
      <div className="forecast__title">5 Day Forecast</div>
      {renderItems()}
    </div>
  );
};

export default Forecast;
