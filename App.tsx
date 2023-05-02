import React, {useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {RootStack} from './src/Stack/RootStack';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();

  return <RootStack />;
};

export default App;
