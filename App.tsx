import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { Navigation } from './src/navigation';

import { persistor, store } from './src/store/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StatusBar style="auto" />
            <Navigation />
          </PersistGate>
        </Provider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};