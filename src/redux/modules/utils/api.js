import axios from 'axios';

import { globalsFetch } from "./globals";

const {
  REQUEST_TIMEOUT_MS,
  WEATHER_BIT_API_KEY,
} = globalsFetch();

const apiAxios = axios.create({
  timeout: REQUEST_TIMEOUT_MS,
  headers: {
    'content-type': 'application/json',
  },
});

export function createErrorReducer(defaultError = '') {
  return (state, { payload = defaultError } = {}) => (
    Object.assign({}, state, {
      hasError: true,
      errorType: payload,
      loading: false,
    })
  );
}

export function requestReducer(state) {
  return Object.assign({}, state, { loading: true });
}

export function receiveReducer(state, { payload } = {}) {
  const payloadWrapper = {};

  if (payload) {
    payloadWrapper.data = payload;
  }

  const { ...stateRest } = state;
  return Object.assign({}, stateRest, payloadWrapper, { loading: false });
}

export async function fetchAPI(url, options = {}) {

  const response = await  apiAxios(
    `${url}&units=I&key=${WEATHER_BIT_API_KEY}`,
    options,
  );

  return response.data;
}
