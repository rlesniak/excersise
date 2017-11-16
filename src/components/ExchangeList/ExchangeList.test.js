import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';

import ExchangeList from './ExchangeList';

describe('<ExchangeList />', () => {
  const list = Map({ USD: 1.22, PLN: 0.43, BTC: 0.00001 });
  it('should render without crash', () => {
    const component = shallow(<ExchangeList currentCurrency="USD" exchangeList={list} />);

    expect(component).toMatchSnapshot();
  });

  it('should render different currency', () => {
    const component = shallow(<ExchangeList currentCurrency="PLN" exchangeList={list} />);

    expect(component).toMatchSnapshot();
  });
});

