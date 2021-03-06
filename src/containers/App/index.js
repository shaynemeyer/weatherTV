import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchForecast } from "../../redux/modules/forecast";

import Forecast from '../../components/Forecast';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import "./app.scss";

@connect((state) => {
  const {
    forecast
  } = state;
  return {
    forecast
  }
})
export default class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    forecast: PropTypes.shape({
      data: PropTypes.shape({
        city_name: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    forecast: {}
  };

  componentDidMount() {
    const {
      dispatch,
    } = this.props;

    dispatch(fetchForecast({ city: 'Everett', days: 5 }))
  }

  render() {
    const { data: {city_name, data = []} = {} } = this.props.forecast;

    return (
      <div className="wrapper">
        <div className="content">
          <div className="header__wrapper">
            <Header city={city_name} />
          </div>

          <Forecast data={data} />
        </div>
        <Footer />
      </div>
    );
  }
};
