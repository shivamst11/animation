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
const Scale = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const likeAnimation = new Animated.Value(1);
  // this also work
  //const animation= new startAnimation

  const animatedStyle = {
    transform: [{ scaleX: animation }],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: -1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        //delay: 4000,
        useNativeDriver: true,
      }).start()
    );
  };

  const startLikeAnimation = () => {
    Animated.timing(likeAnimation, {
      toValue: 2,
      duration: 200,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(likeAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start()
    );
  };

  const likeAnimated = {
    transform: [{ scale: likeAnimation }],
  };

  return (
    <View style={styles.container}>
      <Button title={'start animation'} onPress={startAnimation} />
      <Animated.View
        style={[
          {
            height: 200,
            width: 200,
            backgroundColor: 'red',
          },
          animatedStyle,
        ]}
      >
        <Text>shivam</Text>
      </Animated.View>
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
export default Scale;
