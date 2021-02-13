import { StatusBar } from 'react-native';
import React, { Fragment } from 'react';

import TabsNavigator from './src/navigation/tabs-navigator';

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <TabsNavigator/>
    </Fragment>
  );
}