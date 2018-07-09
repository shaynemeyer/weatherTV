import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Forecast from '../Forecast';
import Header from '../../components/Header';

import { fetchForecast } from "../../redux/modules/forecast";

import "../../styles/main.scss";
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
        cod: PropTypes.string,
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
    const { data: {city, list} = {} } = this.props.forecast;

    return (
      <div className="content">
        <Header city={city} />
        <Forecast list={list} />
      </div>
    );
  }
};
