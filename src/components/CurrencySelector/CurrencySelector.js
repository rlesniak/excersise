// @flow

import * as React from 'react';
import type { Map, List } from 'immutable';
import { Button } from '@blueprintjs/core';

import CurrencyItem from 'Components/CurrencyItem';

import './CurrencySelector.scss';

type PropsType = {
  currencies: Map<string, string>,
  handleAddToFav: (name: string) => void,
  handleFetch: (list: List<string>) => void,
  favourites: List<string>,
};

const CurrencySelector = ({
  currencies,
  handleAddToFav,
  handleFetch,
  favourites,
}: PropsType) => (
  <div className="currency-selector">
    <h1>Select currencies ({favourites.size})</h1>
    <div className="currency-selector__list">
      {currencies
        .entrySeq()
        .map((value, i) => (
          <CurrencyItem
            clickable
            selected={favourites.includes(value[0])}
            key={i}
            value={value[1]}
            name={value[0]}
            onClick={handleAddToFav}
          />
        ))}
    </div>
    <div className="currency-selector__button">
      <Button iconName="refresh" onClick={() => handleFetch(favourites)}>
        Fetch
      </Button>
    </div>
  </div>
);

export default CurrencySelector;
