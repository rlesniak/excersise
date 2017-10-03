/**
 * Application entry point.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import createStore from 'Store/createStore';

import App from 'Components/App';

const store = createStore();

/**
 * Render application in root element.
 * @returns {ReactElement} Application tree.
 */
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

/**
 * Application start
 */
render();
if (module.hot) module.hot.accept('Components/App', () => render());
