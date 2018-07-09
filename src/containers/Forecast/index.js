import React from 'react';
import ForecastItem from './ForecastItem';
import './forecast.scss';

const Forecast = (props) => {

  const renderItems = () => {
    const {list=[]} = props;

    const newList = list.slice(0, 5);

    const listItems = newList.map((item) => {
      const { weather: { description, icon, id, main} = []} = item;
      const { main: { temp_max, temp_min} = {}} = item;
      return <ForecastItem description={description} hi={temp_max} low={temp_min} day="Tue" key={id}/>
    });

    return (
      <div className="forecast-row">
        {listItems}
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
