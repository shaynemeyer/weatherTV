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

export function fetchForecast({ zipcode } = {}) {
  return async (dispatch) => {
    dispatch(requestForecast());

    if (!zipcode) {
      dispatch(errorForecast());
      throw new Error('Missing zipcode');
    }

    const url = `${globalsFetch().OPEN_WEATHER_BASE_URL}forecast?zip=${zipcode}`;

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
