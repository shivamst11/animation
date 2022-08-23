import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  Button,
} from 'react-native';
const Loop = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      })
    ).start();
  };

  const interpolated = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolated,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: 200, width: 200, backgroundColor: 'red' },
          animatedStyle,
        ]}
      />
      <Button title="start Loop" onPress={startAnimation} />
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
export default Loop;
