import 'react-native-reanimated';

import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { Navigation } from './src/navigation';

import { persistor, store } from './src/store/store';
import useImages from './src/hooks/useImages';

export default function App() {

  const [imagesLoaded] = useImages([
    require('./assets/signinScreen.jpg'),
    require('./assets/signupScreen.jpg'),
    require('./assets/welcomeScreen.jpg'),
    require('./assets/all-recipes.jpg'),
    require('./assets/dashboard.jpg'),
    require('./assets/hero-img.jpg'),
  ])

  if(!imagesLoaded) {
    // Loading Spinner
    return <View><Text>Loading</Text></View>
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <StatusBar style="auto" />
              <Navigation />
            </PersistGate>
          </Provider>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};