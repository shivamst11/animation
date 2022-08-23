import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  Button,
  Easing,
  ScrollView,
} from 'react-native';
const Interpolation = () => {
  const animation = new Animated.Value(0);
  const rotateAnimation = new Animated.Value(0);
  const textAnimation = new Animated.Value(0);
  const heightAnimation = new Animated.Value(0);

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: ['pink', 'white', 'red', 'blue'],
  });

  const animatedStyle = { backgroundColor: boxInterpolation };

  const startLikeAnimation = () => {
    Animated.timing(animation, {
      toValue: 3,
      duration: 5000,
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

  const textInterPolation = textAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 30],
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  const textStyle = { fontSize: textInterPolation };
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

  const startTxtSizeChange = () => {
    Animated.timing(textAnimation, {
      toValue: 1,
      duration: 1000,
    }).start(() =>
      Animated.timing(textAnimation, {
        toValue: 0,
        duration: 200,
      }).start()
    );
  };

  const startHeightChange = () => {
    Animated.timing(heightAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start(() =>
      Animated.timing(heightAnimation, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
        easing: Easing.bounce,
      }).start()
    );
  };
  const heightInterpolation = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 300],
  });
  const heightStyle = { height: heightInterpolation };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title={'start animation'}
          onPress={() => startLikeAnimation()}
        />
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
        <Button
          title={'rotate interpolation'}
          onPress={() => startRotation()}
        />

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

        <Animated.Text style={textStyle}>textInterPolation</Animated.Text>
        <Button
          title={'text interpolation'}
          onPress={() => startTxtSizeChange()}
        />
        <Animated.View
          style={[{ width: 100, backgroundColor: 'pink' }, heightStyle]}
        >
          <Text>sdkfjlksdjflksj</Text>
        </Animated.View>
        <Button
          title={'height interpolation'}
          onPress={() => startHeightChange()}
        />
      </ScrollView>
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
