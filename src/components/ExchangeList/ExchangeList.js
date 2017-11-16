// @flow

import * as React from 'react';
import type { Map } from 'immutable';

import CurrencyItem from 'Components/CurrencyItem';
import { getMainCurrency, currencySignMap } from 'Utils/helpers';

type PropsType = {
  currentCurrency: string,
  exchangeList: Map<string, number>,
};

const addSign = (value, currency) =>
  `${value.toFixed(2)}${currencySignMap[currency]}`;

const ExchangeList = ({
  exchangeList,
  currentCurrency,
}: PropsType) => (
  <div className="currency-list">
    <h3>1 {currentCurrency} is equal:</h3>
    {exchangeList
      .entrySeq()
      .map((value, i) => (
        <CurrencyItem
          key={i}
          value={addSign(value[1], currentCurrency)}
          name={getMainCurrency(value[0])}
        />
      ))}
  </div>
);

export default ExchangeList;
