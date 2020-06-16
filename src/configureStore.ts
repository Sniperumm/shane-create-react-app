import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const dev = process.env.NODE_ENV !== 'production';
let middleware = applyMiddleware(routerMiddleware(history));

if (dev) {
  middleware = composeWithDevTools(middleware);
}

export default () => createStore(rootReducer(history), {}, middleware);
