/* @flow */

import api from 'Utils/api';

import type { List } from 'immutable';
import type { ExtractReturn } from './types';

export const SET_FETCHING = 'SET_FETCHING';
export const UNSET_FETCHING = 'UNSET_FETCHING';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXCHANGES = 'SET_EXCHANGES';
export const SET_ACTIVE = 'SET_ACTIVE';
export const ADD_TO_FAV = 'ADD_TO_FAV';

export const setFetching = (name: string) => ({
  type: SET_FETCHING,
  name,
});

export const unsetFetching = (name: string) => ({
  type: UNSET_FETCHING,
  name,
});

export const setCurrencies = (currencies: []) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const setExchanges = (exchanges: []) => ({
  type: SET_EXCHANGES,
  exchanges,
});

export const setAciveCurrency = (currency: string) => ({
  type: SET_ACTIVE,
  currency,
});

export const addToFav = (name: string) => ({
  type: ADD_TO_FAV,
  name,
});

export const fetchCurrencies = () => (dispatch: Dispatch) => {
  const FETCH_NAME = 'currencies';
  dispatch(setFetching(FETCH_NAME));

  api.get('list').then(({ currencies }) => {
    dispatch(setCurrencies(currencies));
    dispatch(unsetFetching(FETCH_NAME));
  });
};

export const fetchExchanges = (currencies: List<string>) => (dispatch: Dispatch) => {
  const FETCH_NAME = 'exchanges';
  dispatch(setFetching(FETCH_NAME));

  api.get('live', `currencies=${currencies.join(',')}`).then(({ quotes, source, success }) => {
    if (success) {
      dispatch(setExchanges(quotes));
      dispatch(setAciveCurrency(source));
    }

    dispatch(unsetFetching(FETCH_NAME));
  });
};

export type ActionsType =
  | ExtractReturn<typeof setFetching>
  | ExtractReturn<typeof unsetFetching>
  | ExtractReturn<typeof setCurrencies>
  | ExtractReturn<typeof setAciveCurrency>
  | ExtractReturn<typeof setExchanges>
  | ExtractReturn<typeof addToFav>;
