import React from 'react';

import {Button, Text} from 'react-native';

export function Home({navigation}) {
  return (
    <>
      <Text>Oi</Text>
      <Button
        title="Camera"
        onPress={() => navigation.navigate('Camera')}></Button>
      <Button
        title="Picker"
        onPress={() => navigation.navigate('Camera')}></Button>
    </>
  );
}
