import { StatusBar } from 'react-native';
import React, { Fragment } from 'react';

import TabsNavigator from './src/navigation/tabs-navigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <TabsNavigator/>
    </Provider>
  );
}