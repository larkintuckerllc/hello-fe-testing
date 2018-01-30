import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

export default () => {
  const middlewares = [
  ];
  return createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares),
      process.env.NODE_ENV !== 'production' && window.devToolsExtension ?
        window.devToolsExtension() : f => f,
    ),
  );
};
