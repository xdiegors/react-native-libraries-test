import React, {useEffect, useState} from 'react';
import {CameraScreen} from 'react-native-camera-kit';

import {Alert, View} from 'react-native';

export function Camera({navigation}) {
  const [scanning, setScanning] = useState(false);

  const readQRCode = event => {
    Alert.alert(event.nativeEvent.codeStringValue);
    setScanning(false);
    navigation.navigate('Home');
  };

  useEffect(() => {
    setScanning(true);
  }, []);

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
        scanBarcode={scanning}
        onReadCode={event => readQRCode(event)}
        showFrame={true}
        laserColor="red"
        frameColor="white"
      />
    </View>
  );
}
