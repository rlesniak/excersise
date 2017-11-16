/* @flow */
/**
 * Application store factory.
 * @copyright (c) 2017-present rafallesniak24@gmail.com
 */

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'Modules/App/reducer';

/**
 * Creates application store based on passed arguments.
 * @returns {Object} Redux store.
 */
export default (): Object =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
