import React from 'react';
import ForecastItem from './ForecastItem';

import './forecast.scss';

const Forecast = (props) => {

  const renderItems = () => {
    const {data=[]} = props;

    const listItems = data.map((item) => {
      const { max_temp, min_temp, valid_date, weather: {code = 0, description = ""} = []} = item;
      return <ForecastItem description={description} hi={max_temp} low={min_temp} code={code} date={valid_date} key={valid_date}/>
    });

    return (
      <div className="forecast-row">
        {listItems}
      </div>
    );
  };

  const renderTitle = () => {
    const { days = 5 } = props;
    return `${days} Day Forecast`;
  };

  return (
    <div id="forecast-wrapper">
      <div className="forecast__title">{renderTitle()}</div>
      {renderItems()}
    </div>
  );
};

export default Forecast;
