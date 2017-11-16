/* @flow */
/**
 * Application reducer.
 * @copyright (c) 2017-present rafallesniak24@gmail.com
 */

import { List, Map } from 'immutable';

import * as ACTIONS from './actions';

import type { StateType } from './types';

export const INITIAL_STATE: StateType = {
  activeCurrency: 'USD',
  favoriteCurrencies: List(),
  currenciesList: Map(),
  exchangesList: Map(),
  dataFetching: Map(),
};

const reducer = (state: StateType = INITIAL_STATE, action: ACTIONS.ActionsType) => {
  switch (action.type) {
    case ACTIONS.SET_FETCHING: {
      return {
        ...state,
        dataFetching: state.dataFetching.set(action.name, true),
      };
    }
    case ACTIONS.UNSET_FETCHING: {
      return {
        ...state,
        dataFetching: state.dataFetching.set(action.name, false),
      };
    }
    case ACTIONS.SET_CURRENCIES: {
      return {
        ...state,
        currenciesList: Map(action.currencies).sortBy(c => c),
      };
    }
    case ACTIONS.SET_EXCHANGES: {
      return {
        ...state,
        exchangesList: Map(action.exchanges).sortBy(c => c[1]),
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
