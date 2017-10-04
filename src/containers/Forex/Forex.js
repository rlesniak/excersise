/* @flow */
/**
 * Travel plan container.
 * @copyright (c) 2017-present rafallesniak24@gmail.com
 */

import { connect } from 'react-redux';

import Forex from 'Components/Forex';
import { fetchData } from 'Modules/App/actions';

import type { Map } from 'immutable';
import type { StateType } from 'Modules/App/types';

export type ComponentPropsType = {
  currencies: Map<string, number>,
  isFetching: boolean,
};

const mapStateToProps = (state: StateType) => ({
  currencies: state.currenciesList,
  isFetching: state.isDataFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => () => ({
  getData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forex);
