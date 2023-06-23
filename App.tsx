import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Camera} from './src/screens/Camera';
import {Home} from './src/screens/Home';
import {Picker} from './src/screens/Picker';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Picker" component={Picker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
