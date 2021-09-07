import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { constants } from './src/constants';
import { storage } from './src/utils';

import MainScreen from './src/screens/Main/Main';
import HomeScreen from './src/screens/Home/Home';

const Stack = createNativeStackNavigator();

const App = () => {

  const [initialScreen, setInitialScreen] = useState('Main')

  useEffect(() => {
    storage.getDataObj(constants.keyAsyncStore.userInfo).then(res => {
      let userInfo = res
      if (userInfo) {
        console.log(userInfo);
        setInitialScreen('Home')
      }
    })

  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialScreen}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
