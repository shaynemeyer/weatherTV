import { handleActions, createActions } from 'redux-actions';
import { fetchAPI, createErrorReducer, requestReducer, receiveReducer } from "./utils/api";
import { globalsFetch } from "./utils/globals";

const { requestForecast, receiveForecast, errorForecast } =
createActions(
  'REQUEST_FORECAST',
  'RECEIVE_FORECAST',
  'ERROR_FORECAST',
);

export default handleActions({
  REQUEST_FORECAST: requestReducer,
  RECEIVE_FORECAST: receiveReducer,
  ERROR_FORECAST: createErrorReducer(),
}, {});

export function fetchForecast({ city, days = 5 } = {}) {
  return async (dispatch) => {
    dispatch(requestForecast());

    if (!city) {
      dispatch(errorForecast());
      throw new Error('Missing city');
    }

    const url = `${globalsFetch().WEATHER_BIT_BASE_URL}daily?city=${city}&country=US&state=Washington&days=${days}`;

    try {
      const data = await fetchAPI(url);
      dispatch(receiveForecast(data));
      return data;
    } catch (error) {
      dispatch(errorForecast());
      throw error;
    }
  };
}
