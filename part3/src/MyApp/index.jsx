import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Calculator from './components/Calculator';

const store = configureStore();
function MyApp() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}
export default MyApp;
