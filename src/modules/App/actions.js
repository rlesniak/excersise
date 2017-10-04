/* @flow */

import type { ExtractReturn } from './types';

export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_ACTIVE = 'SET_ACTIVE';
export const ADD_TO_FAV = 'ADD_TO_FAV';

export const setIsFetching = (state: boolean) => ({
  type: SET_IS_FETCHING,
  state,
});

export const setCurrencies = (currenciesList: []) => ({
  type: SET_CURRENCIES,
  currenciesList,
});

export const setAciveCurrency = (currency: string) => ({
  type: SET_ACTIVE,
  currency,
});

export const addToFav = (name: string) => ({
  type: ADD_TO_FAV,
  name,
});

export const fetchData = () => (dispatch: Dispatch) => {
  dispatch(setIsFetching(true));

  fetch('http://www.apilayer.net/api/live?access_key=404139121bcb0ff23bfe41b55720f02a')
    .then(resp => resp.json())
    .then(({ quotes }) => {
      dispatch(setCurrencies(quotes));
      dispatch(setIsFetching(false));
    });
};

export type ActionsType =
  | ExtractReturn<typeof setIsFetching>
  | ExtractReturn<typeof setCurrencies>
  | ExtractReturn<typeof setAciveCurrency>
  | ExtractReturn<typeof addToFav>;
