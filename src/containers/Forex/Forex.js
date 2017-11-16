/* @flow */
/**
 * @copyright (c) 2017-present rafallesniak24@gmail.com
 */

import { connect } from 'react-redux';

import Forex from 'Components/Forex';
import { fetchCurrencies } from 'Modules/App/actions';

import type { StateType } from 'Modules/App/types';

const mapStateToProps = (state: StateType) => ({
  currentCurrency: state.activeCurrency,
  currencies: state.currenciesList,
  favourites: state.favoriteCurrencies,
  exchanges: state.exchangesList,
  fetchingList: state.dataFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => () => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forex);
