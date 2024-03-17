import {Provider} from 'react-redux';
import React from 'react';
import MainRoute from './src/router';
import store from './src/config/redux/store';
import Toast from 'react-native-toast-message';
import {LogLevel, OneSignal} from 'react-native-onesignal';

const App = () => {
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('21555224-a28e-48c2-8704-32908794c768');

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });
  return (
    <Provider store={store}>
      <MainRoute />
      <Toast />
    </Provider>
  );
};

export default App;
