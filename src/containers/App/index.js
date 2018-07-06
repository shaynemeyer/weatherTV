import React from 'react';
import Forecast from '../Forecast';
import Header from '../../components/Header';
import "../../styles/main.scss";
import "./app.scss";

const App = () => {
  return (
    <div className="content">
      <Header />
      <Forecast/>
    </div>
  );
};

export default App;
