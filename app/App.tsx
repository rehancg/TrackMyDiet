import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react'


import 'app/i18n';
import ThemeProvider from 'app/theme';
import buildState from 'app/state';
import NavigationContainer from 'app/navigation';

export const { store, persistor } = buildState();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <SafeAreaProvider>
            <NavigationContainer />
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};


export default App;
