import React from 'react';
import {CameraScreen} from 'react-native-camera-kit';

import {Alert, View} from 'react-native';

export function Camera({navigation}) {
  const readQRCode = event => {
    Alert.alert(event.nativeEvent.codeStringValue);
    navigation.navigate('Home');
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
      }}>
      <CameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
        hideControls={false}
        showCapturedImageCount={false}
        scanBarcode={true}
        onReadCode={event => readQRCode(event)}
        showFrame={true}
        laserColor="red"
        frameColor="white"
      />
    </View>
  );
}
