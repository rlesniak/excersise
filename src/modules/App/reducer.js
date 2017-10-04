/* @flow */
/**
 * Application reducer.
 * @copyright (c) 2017-present rafallesniak24@gmail.com
 */

import { List, Map } from 'immutable';

import * as ACTIONS from './actions';

import type { StateType } from './types';

const INITIAL_STATE: StateType = {
  activeCurrency: null,
  favoriteCurrencies: List(),
  currenciesList: Map(),
  isDataFetching: false,
};

const reducer = (state: StateType = INITIAL_STATE, action: ACTIONS.ActionsType) => {
  switch (action.type) {
    case ACTIONS.SET_IS_FETCHING: {
      return {
        ...state,
        isDataFetching: action.state,
      };
    }
    case ACTIONS.SET_CURRENCIES: {
      return {
        ...state,
        currenciesList: Map(action.currenciesList),
      };
    }
    case ACTIONS.SET_ACTIVE: {
      return {
        ...state,
        activeCurrency: action.currency,
      };
    }
    case ACTIONS.ADD_TO_FAV: {
      return {
        ...state,
        favoriteCurrencies: state.favoriteCurrencies.push(action.name),
      };
    }
    default:
      return state;
  }
};

export default reducer;
