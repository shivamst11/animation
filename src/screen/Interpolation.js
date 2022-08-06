import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  Button,
} from 'react-native';
const Interpolation = () => {
  const animation = new Animated.Value(0);
  const rotateAnimation = new Animated.Value(0);

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(90,0,40)'],
  });

  const animatedStyle = { backgroundColor: boxInterpolation };

  const startLikeAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() =>
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start()
    );
  };

  const rotateInterpolation = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateStyle = { transform: [{ rotate: rotateInterpolation }] };

  const startRotation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1000,
      
      useNativeDriver: false,
    }).start(() =>
      Animated.timing(rotateAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start()
    );
  };
  return (
    <View style={styles.container}>
      <Button title={'start animation'} onPress={() => startLikeAnimation()} />
      <Animated.View
        style={[
          {
            height: 200,
            width: 200,
          },
          animatedStyle,
        ]}
      >
        <Text>shivam</Text>
      </Animated.View>
      <Button title={'rotate interpolation'} onPress={() => startRotation()} />

      <Animated.View
        style={[
          {
            height: 200,
            width: 200,
            backgroundColor: 'red',
          },
          rotateStyle,
        ]}
      >
        <Text>shivam</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Interpolation;
