// @flow

import { connect } from 'react-redux';
import type { List } from 'immutable';

import CurrencySelector from 'Components/CurrencySelector';
import { addToFav, fetchExchanges } from 'Modules/App/actions';

import type { StateType } from 'Modules/App/types';

const mapStateToProps = (state: StateType) => ({
  currencies: state.currenciesList,
  favourites: state.favoriteCurrencies,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => () => ({
  handleAddToFav: (name: string) => dispatch(addToFav(name)),
  handleFetch: (list: List<string>) => dispatch(fetchExchanges(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);
