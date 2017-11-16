// @flow

import * as React from 'react';

import Forex from 'Containers/Forex';

import './App.scss';

const App = (): React.Node => (
  <div className="app">
    <div className="app__root">
      <Forex />
    </div>
  </div>
);

export default App;
