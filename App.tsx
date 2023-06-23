import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Camera} from './src/screens/Camera';
import {Home} from './src/screens/Home';
import {ImagePicker} from './src/screens/ImagePicker';
import {DatePicker} from './src/screens/DatePicker';
import {Dropdown} from './src/screens/Dropdown';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="ImagePicker" component={ImagePicker} />
        <Stack.Screen name="DatePicker" component={DatePicker} />
        <Stack.Screen name="Dropdown" component={Dropdown} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
