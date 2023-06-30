import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import { Navigation } from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <Navigation />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};