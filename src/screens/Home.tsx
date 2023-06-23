import React from 'react';

import {Button, Text} from 'react-native';

export function Home({navigation}) {
  return (
    <>
      <Text>XDex</Text>
      <Button
        title="Tesla Camera Kit"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="Image Picker"
        onPress={() => navigation.navigate('ImagePicker')}
      />
      <Button
        title="Date Picker"
        onPress={() => navigation.navigate('DatePicker')}
      />
      <Button
        title="Dropdown"
        onPress={() => navigation.navigate('Dropdown')}
      />
    </>
  );
}
