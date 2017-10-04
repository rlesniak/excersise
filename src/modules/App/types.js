// @flow

import type { List, Map } from 'immutable';

// Helper to extract inferred return type of a function
type _ExtractReturn<B, F: (...args: any[]) => B> = B; // eslint-disable-line
export type ExtractReturn<F> = _ExtractReturn<*, F>;

export type StateType = {
  +activeCurrency: ?string,
  +favoriteCurrencies: List<string>,
  +currenciesList: Map<string, number>,
  +isDataFetching: boolean,
};
