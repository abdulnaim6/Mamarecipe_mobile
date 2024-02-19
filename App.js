import {Provider} from 'react-redux';
import React from 'react';
import MainRoute from './src/router';
import store from './src/config/redux/store';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <MainRoute />
      <Toast />
    </Provider>
  );
};

export default App;
