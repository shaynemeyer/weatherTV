import { handleAction, createAction } from 'redux-actions';
import { setReducer } from "./utils/base";

export const setCity = createAction('SET_CITY');

export default handleAction(setCity, setReducer, {});
