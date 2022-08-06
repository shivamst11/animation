import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  Button,
  TouchableOpacity,
} from 'react-native';
const Spring = () => {
  const likeAnimation = new Animated.Value(1);
  // this also work
  //const animation= new startAnimation

  const startLikeAnimation = () => {
    Animated.spring(likeAnimation, {
      toValue: 4,
      friction: 1,
      tension: 2,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(likeAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start()
    );
  };

  const likeAnimated = {
    transform: [{ scale: likeAnimation }],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={() => startLikeAnimation()}>
        <Animated.View
          style={[
            {
              height: 30,
              width: 30,
              backgroundColor: 'pink',
            },
            likeAnimated,
          ]}
        />
      </TouchableOpacity>
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
export default Spring;
