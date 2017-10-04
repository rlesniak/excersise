// @flow

import * as React from 'react';

import type { ComponentPropsType } from 'Containers/Forex/Forex';

const Forex = (props): React.Node => (
  <div className="forex">
    <button onClick={() => getData()}>Get</button>
    <nav className="forex__menu">
      {currencies.keySeq().toArray().map(k => <div>{k}</div>)}
      {isFetching ? 'Loading' : ''}
    </nav>
  </div>
);

export default Forex;
