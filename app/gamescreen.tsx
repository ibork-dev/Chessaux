import React, { useRef } from 'react';
import { View, StyleSheet, Animated, PanResponder, Dimensions } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import {
  useCameraDevice,
  useCameraPermission
} from 'react-native-vision-camera'
import { PermissionsPage } from './permissionspage'

const GameScreen = () => {
  const screenHeight = Dimensions.get('window').height;
  const splitValue = useRef(new Animated.Value(screenHeight / 2)).current;

  // PanResponder to handle drag gesture
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        // Clamp the draggable range
        if (
          gestureState.moveY > 100 && // top limit
          gestureState.moveY < screenHeight - 100 // bottom limit
        ) {
          splitValue.setValue(gestureState.moveY);
        }
      },
    })
  ).current;

  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission()

  //if (!hasPermission) return <PermissionsPage />
  //if (device == null) return <NoCameraDeviceError />

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <Animated.View style={[styles.topSection, { height: splitValue }]} />

      {/* Draggable Slider */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.slider, { top: Animated.subtract(splitValue, 10) }]}
      />

      {/* Bottom Section */}
      <Animated.View
        style={[styles.bottomSection, { height: Animated.subtract(screenHeight, splitValue) }]}
      >
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
          />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    backgroundColor: '#FFFFFF',
  },
  bottomSection: {
    backgroundColor: '#000000',
  },
  slider: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 10,
    backgroundColor: '#34495e',
    zIndex: 1,
  },
});

export default GameScreen;
