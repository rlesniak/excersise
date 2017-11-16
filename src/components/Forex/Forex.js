// @flow

import * as React from 'react';
import { Spinner } from '@blueprintjs/core';

import type { Map } from 'immutable';

import CurrencySelector from 'Containers/CurrencySelector';
import ExchangeList from 'Components/ExchangeList';

import './Forex.scss';

type PropsType = {
  currentCurrency: string,
  exchanges: Map<string, number>,
  fetchingList: Map<string, boolean>,
  fetchCurrencies: () => void,
};

const ForexSpinner = () => (
  <div className="forex__spinner">
    <Spinner />
  </div>
);

class Forex extends React.Component<PropsType> {
  componentDidMount() {
    this.props.fetchCurrencies();
  }

  render() {
    const { exchanges, fetchingList, currentCurrency } = this.props;

    if (fetchingList.get('currencies')) {
      return <ForexSpinner />;
    }

    return (
      <div className="forex">
        <CurrencySelector />
        <div className="forex__list">
          {fetchingList.get('exchanges') ? (
            <ForexSpinner />
          ) : (
            <ExchangeList
              currentCurrency={currentCurrency}
              exchangeList={exchanges}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Forex;
