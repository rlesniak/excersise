import { Map } from 'immutable';

import AppReducer, { INITIAL_STATE } from './reducer';

import * as ACTIONS from './actions';

describe('App reducer', () => {
  it('should return proper initial state', () => {
    const state = AppReducer(undefined, {});

    expect(state).toMatchSnapshot();
  });

  it('should create proper SET_FETCHING action', () => {
    const state = AppReducer(undefined, {
      type: ACTIONS.SET_FETCHING,
      name: 'currencies',
    });

    expect(state).toMatchSnapshot();
  });

  it('should create proper UNSET_FETCHING action', () => {
    const state = AppReducer(
      {
        ...INITIAL_STATE,
        dataFetching: Map({ currencies: true }),
      },
      {
        type: ACTIONS.UNSET_FETCHING,
        name: 'currencies',
      },
    );

    expect(state).toMatchSnapshot();
  });

  it('should create proper SET_CURRENCIES action', () => {
    const state = AppReducer(undefined, {
      type: ACTIONS.SET_CURRENCIES,
      currencies: {
        BYC: 'test1', BTC: 'test2', AED: 'test', PLN: 'test4', USD: 'test3',
      },
    });

    expect(state).toMatchSnapshot();
  });

  it('should create proper SET_EXCHANGES action', () => {
    const state = AppReducer(undefined, {
      type: ACTIONS.SET_EXCHANGES,
      exchanges: {
        BYC: 1.23, BTC: 0.32, PLN: 0.00,
      },
    });

    expect(state).toMatchSnapshot();
  });
});
