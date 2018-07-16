import React from 'react';

const ForecastItem = ({ hi, low, date, code, description }) => {


  const renderTemp = (temp) => {
    return Math.floor(temp);
  };

  const renderDayOfWeek = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const d = new Date(date);

    return days[d.getDay()];
  };

  const iconClass = (code) => {
    let weatherCode = 800;

    switch(code) {
      case 233:
        weatherCode = 232;
        break;
      case 602:
        weatherCode = 622;
        break;
      case 623:
        weatherCode = 903;
      case 700:
        weatherCode = 701;
        break;
      case 751:
        weatherCode = 741;
        break;
      default:
        weatherCode = code;
        break;
    }

    return `wi wi-owm-${weatherCode}`
  };

  return (
    <div className="forecast__item">
      <div className="forecast__item-day">{renderDayOfWeek()}</div>
      <div className="forecast__item-icon"><i className={iconClass(code)}></i></div>
      <div className="forecast__item-high">{renderTemp(hi)}</div>
      <div className="forecast__item-low">{renderTemp(low)}</div>
      <div className="forecast__item-description">{description}</div>
    </div>
  );
};

export default ForecastItem;
