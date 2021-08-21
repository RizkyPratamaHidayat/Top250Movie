import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {StatusBar, View, Text} from 'react-native';
import Orientation from 'react-native-orientation-locker';
// react navigation requirement
import 'react-native-gesture-handler';
// react native splashscreen
import store from './redux/store';
import AppNavigation from './screens/Navigations';

Orientation.lockToPortrait();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'white-content'}
        backgroundColor="transparent"
        translucent
      />
      <AppNavigation />
    </Provider>
  );
};

export default App;
