import React from 'react';
import {CameraScreen} from 'react-native-camera-kit';

import {Alert, View} from 'react-native';

export function Camera() {
  return (
    <View
      style={{
        backgroundColor: 'black',
      }}>
      <CameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
        // flashImages={{
        //   // optional, images for flash state
        //   on: require('path/to/image'),
        //   off: require('path/to/image'),
        //   auto: require('path/to/image'),
        // }}
        //cameraFlipImage={require('path/to/image')} // optional, image for flipping camera button
        // captureButtonImage={require('path/to/image')} // optional, image capture button
        //  torchOnImage={require('path/to/image')} // optional, image for toggling on flash light
        //  torchOffImage={require('path/to/image')} // optional, image for toggling off flash light
        hideControls={false} // (default false) optional, hides camera controls
        showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session
        scanBarcode={true}
        onReadCode={event => Alert.alert('QR code found')} // optional
        showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
        laserColor="blue" // (default red) optional, color of laser in scanner frame
        frameColor="white" //
      />
    </View>
  );
}
