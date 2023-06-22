import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Alert, View} from 'react-native';

//launchImageLibrary(options?, callback)

// You can also use as a promise without 'callback':
//const result = await launchImageLibrary(options ?);

export function Camera() {
  return (
    <View
      style={{
        backgroundColor: 'black',
      }}>
      <Button title="Picker" onPress={() => launchImageLibrary()}></Button>
    </View>
  );
}
